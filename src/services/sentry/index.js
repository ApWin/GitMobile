import * as Sentry from '@sentry/react-native';
import config from '../config'

export const init = () => {

	if(config.REACT_APP_SENTRY_DSN){
		Sentry.init({
			dsn: config.REACT_APP_SENTRY_DSN,
		});
	}
};

export default {
	init
};
