import * as WebpackServe from 'webpack-serve';
import config from './../../webpack.config';

// set target for node
config.target = 'node';

const args = {
	port: 9000
};

WebpackServe(args, { config }).then(( result: WebpackServe.Result ) => {
});
