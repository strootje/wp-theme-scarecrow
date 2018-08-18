import * as Webpack from 'webpack';
import * as CleanPlugin from 'clean-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';
import * as CssPlugin from 'mini-css-extract-plugin';

import Paths from './src/app/Assets/Utils/Paths';
import Bundler from './scripts/Bundler';
const devmode = (process.env.mode || 'development') == 'development';

const config: Webpack.Configuration = {
	mode: devmode ? 'development' : 'production',
	target: 'web',
	devtool: 'source-map',

	entry: {
		'app.bundle': [ Paths.Src('polyfill'), Paths.Src('index') ]
	},

	resolve: {
		modules: [
			Paths.Src('Domain'),
			Paths.Src('Assets'),
			Paths.Src('Comps'),
			'node_modules'
		],

		extensions: [
			'.js', '.ts', '.tsx',
			'.json', '.css', '.scss',
		]
	},

	module: {
		rules: [
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
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: '[hash:base64:5]__[local]'
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	plugins: [
		new CleanPlugin([
			Paths.Dist(),
			Bundler.OutPath
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
		path: Paths.Dist(),
		filename: '[name].js'
	}
};

export default config;


// module.exports = {
// 	optimization: {
// 		splitChunks: {
// 			cacheGroups: {
// 				commons: {
// 					test: /[\\/]node_modules[\\/]/,
// 					name: 'app.vendor',
// 					chunks: 'all'
// 				}
// 			}
// 		},
// 		minimize: true,
// 		minimizer: [
// 			new WebpackUglifyJsPlugin({
// 				sourceMap: true,
// 				parallel: 4
// 			}),
// 		]
// 	},

// 	output: {
// 		path: paths.dist('assets', 'js'),
// 		publicPath: '/wp-content/themes/wp-theme-scarecrow/dist/assets/js/',
// 		filename: '[name].js',
// 		chunkFilename: '[id].js'
// 	},

// 	plugins: [
// 		new Webpack.SourceMapDevToolPlugin({
// 			filename: '[name].js.map'
// 		}),
// 		new WebpackHtmlPlugin({
// 			inject: false,
// 			template: paths.src('template.php'),
// 			filename: paths.dist('index.php'),
// 		})
// 	]
// }
