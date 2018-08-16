import * as WebpackServe from 'webpack-serve';
import WebpackConfig from './../../webpack.config';

import * as convert from 'koa-connect';
import * as history from 'connect-history-api-fallback';

const config: WebpackServe.Options = {
	config: WebpackConfig,

	port: 9000,

	add: ( app ) => {
		app.use(convert(history()));
	}
};

WebpackServe({}, config).then(( result: WebpackServe.Result ) => {
});
