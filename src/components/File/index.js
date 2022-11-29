import React, {Component} from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import PropTypes from "prop-types";
import {Routines} from 'services/api';
import createRequest from 'services/api/createRequest';
import Components from 'components';

export class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUploaded: props.isUploaded,
            data: {},
            id: ""
        }
    }

    static defaultProps = {
        isUploaded: true,
        onError: ()=>{},
        onSuccess: ()=>{},
        showNetworkToast: true
    };

  

    fileUpload(file){
        console.log('file is upload',file);

        const { onError, showNetworkToast, onSuccess, dispatch } = this.props;

        this.setState({isUploaded: false});

        Routines.filemanager.upload({
            request: createRequest(file, 'files[]')
        }, dispatch).then(
            (successPayload) =>{
                let { data = {}, status } = get(successPayload, `response`);

                const id = get(Object.keys(data), "[0]", "");
                onSuccess({id, ...data[id]});

                this.setState({
                    isUploaded: true,
                    data: data[id],
                    id
                });
            },
            (failurePayload) => {

                if(failurePayload.message === "NETWORK_ERROR" && showNetworkToast){
                    Components.Toast.show()
                }

                onError(failurePayload);

                this.setState({
                    isUploaded: true,
                    data: {},
                    id: ""
                });

            }
        )
    }

    render(){
        const { children } = this.props;
        const { isUploaded, data, id } = this.state;
        const upload = (file)=>{ this.fileUpload(file) };

        return children({ isUploaded, data: {...data, id}, upload })
    }
}
export default connect(null)(FileUpload);
