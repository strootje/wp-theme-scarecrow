const Webpack = require('webpack');
const WebpackExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackHtmlPlugin = require('html-webpack-plugin');
const WebpackUglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { join } = require('path');

const paths = {
	dist: ( ...paths ) => join(__dirname, 'dist', ...paths),
	src: ( ...paths ) => join(__dirname, 'src', 'app', ...paths),
};

module.exports = {
	mode: 'development',

	entry: {
		'app.bundle': [ paths.src('polyfill'), paths.src('index') ]
	},
	
	resolve: {
		extensions: ['.js', '.jsx', '.less'],
		modules: [paths.src(), "node_modules"],
		alias: {
			"react": "preact-compat",
			"react-dom": "preact-compat",
			"create-react-class": "preact-compat/lib/create-react-class"
		}
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: WebpackExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								sourceMap: true,
								modules: true,
								importLoaders: 1,
								localIdentName: '[local]'
							}
						},
						{
							loader: 'less-loader',
							options: {
								minimize: true,
								sourceMap: true
							}
						}
					],
				}),
			}
		],
	},

	optimization: {
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
			new WebpackUglifyJsPlugin({
				sourceMap: true,
				parallel: 4
			}),
		]
	},

	output: {
		path: paths.dist('assets', 'js'),
		publicPath: '/wp-content/themes/wp-theme-scarecrow/dist/assets/js/',
		filename: '[name].js',
		chunkFilename: '[id].js'
	},

	plugins: [
		new WebpackExtractTextPlugin(
			join('..', 'css', 'app.bundle.css')
		),
		new Webpack.SourceMapDevToolPlugin({
			filename: '[name].js.map'
		}),
		new WebpackHtmlPlugin({
			inject: false,
			template: paths.src('template.php'),
			filename: paths.dist('index.php'),
		})
	]
}
