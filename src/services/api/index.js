import apisauce from 'apisauce'

import config from './config'
import * as Sentry from '@sentry/react-native';
import get from 'lodash/get'

import createRequest from './createRequest'
import Exception from './Exception'
import Routines from './routines'

// api calls
import User from './User'
import Filemanager from './Filemanager'

const create = () => {
    const api = apisauce.create(config.apisauce)

    api.addResponseTransform(responseTransformation)
    // api.addRequestTransform(requestTransformation)

    api.timeout = (delay = 3000) => {
        setTimeout(() => null, delay)
    };

    return {
        user: User(api),
        filemanager: Filemanager(api),
        setToken: (token) => {
            api.setHeader('Authorization', 'Bearer ' + token)
        },
        setBaseURL: (url = "") => {
            if(url)
                api.setBaseURL(url)
        }
    }
};

const Api = create()

export {
    Api,
    createRequest,
    Exception,
    Routines
}

function requestTransformation (request) {
    return request
}

function responseTransformation (response) {
    console.log('ReS ', JSON.stringify(response, null, 2))

    if (!response.status) {
        throw new Exception.ClientException(response.problem)
    }

    if (response.status === 400 || response.status === 422) {
        if (response.data) {
            //  console.warn(JSON.stringify(response.data))
            throw new Exception.ValidationException(response.data)
        }
        throw new Exception.BadRequestException(response.data)
    }

    if (response.status === 403) {
        throw new Exception.AccessDeniedException(response.data)
    }

    if (response.status === 401) {
        throw new Exception.AccessDeniedException(response)
    }

    if (response.status === 404) {
        console.log("response", response)
        Sentry.withScope((scope) => {
            scope.setExtra("Error URL", get(response, "config.url"));
            scope.setExtra("Token", get(response, "config.headers.Authorization"));
            scope.setExtra("Error Message", get(response, "data.message"));
            scope.setExtra("Error Status", `${get(response, "status")} - ${get(response, "problem")}`);
            scope.setExtra("Error Full", response);
            Sentry.captureException(response);
        });
        throw new Exception.NotFoundException(response.data)
    }

    if (response.status > 499) {
        Sentry.withScope((scope) => {
            scope.setExtra("Error URL", get(response, "config.url"));
            scope.setExtra("Token", get(response, "config.headers.Authorization"));
            scope.setExtra("Error Message", get(response, "data.message"));
            scope.setExtra("Error Status", `${get(response, "status")} - ${get(response, "problem")}`);
            scope.setExtra("Error Full", response);
            Sentry.captureException(response);
        });
        throw new Exception.ServerException(response)
    }

    return response
}
