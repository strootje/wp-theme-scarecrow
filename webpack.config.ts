import * as CleanPlugin from 'clean-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';
import * as CssPlugin from 'mini-css-extract-plugin';
import * as UglifyPlugin from 'uglifyjs-webpack-plugin';
import * as Webpack from 'webpack';

import Bundler from './scripts/Bundler';
import Paths from './src/app/Assets/Utils/Paths';

const devmode = (process.env.mode || 'development') == 'development';

const config: Webpack.Configuration = {
	mode: devmode ? 'development' : 'production',
	target: 'web',
	devtool: 'source-map',

	entry: {
		'app.bundle': [Paths.Src('polyfill'), Paths.Src('index')]
	},

	resolve: {
		modules: [
			Paths.Root(),
			Paths.Src('Domain'),
			Paths.Src('Assets'),
			Paths.Src('Comps'),
			'node_modules'
		],

		extensions: [
			'.js', '.ts', '.tsx', '.gql',
			'.json', '.css', '.scss'
		]
	},

	module: {
		rules: [
			{
				test: /\.(gql)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'graphql-tag/loader'
					}
				]
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'source-map-loader'
					}
				]
			},
			{
				test: /\.[j|t]sx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'ts-loader'
					}
				]
			},
			{
				test: /\.s?css$/,
				use: [
					{
						/* weird hack for typescript */
						loader: (CssPlugin.loader as string)
					},
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							sourceMap: true,
							namedExport: true,
							camelCase: true,
							modules: true,
							localIdentName: '[local]'
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},


	optimization: devmode ? {
		minimize: false
	} : {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'app.vendor',
					chunks: 'all'
				}
			}
		},
		minimize: true,
		minimizer: [
			new UglifyPlugin({
				sourceMap: true,
				parallel: 4
			}),
		]
	},

	plugins: [
		new Webpack.WatchIgnorePlugin([
			/css\.d\.ts$/
		]),

		new CleanPlugin([
			Paths.Dist(),
			Bundler.OutPath,
			"*.scss.d.ts"
		]),

		devmode ? new HtmlPlugin({
			title: 'strootje blog',
			filename: 'index.html',
			template: Paths.Src('template.html')
		}) : new HtmlPlugin({
			title: 'strootje blog',
			filename: 'index.php',
			template: Paths.WpSrc('template.php')
		}),

		new CssPlugin({
			filename: '[name].css'
		})
	],

	output: {
		publicPath: '/',
		path: Paths.Dist(),
		filename: '[name].js',
		chunkFilename: '[id].js'
	}
};

export default config;
