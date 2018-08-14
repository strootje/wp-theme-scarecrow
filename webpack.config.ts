import * as Webpack from 'webpack';
import * as HtmlPlugin from 'html-webpack-plugin';
// import * as CssPlugin from 'mini-css-extract-plugin';
import Paths from "./src/utils/Paths";


const config: Webpack.Configuration = {
	mode: 'development',
	devtool: 'source-map',

	entry: {
		'app.bundle': [ Paths.Src('polyfill'), Paths.Src('index') ]
	},

	resolve: {
		modules: [
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
			// {
			// 	test: /\.s?css$/,
			// 	use: [
			// 		// {
			// 		// 	loader: CssPlugin.loader
			// 		// },
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				modules: true,
			// 				localIdentName: '[local]'
			// 			}
			// 		},
			// 		{
			// 			loader: 'sass-loader'
			// 		}
			// 	]
			// }
		]
	},

	plugins: [
		new HtmlPlugin({
			title: 'strootje blog',
			filename: 'index.html',
			template: Paths.Src('layout.html')
		})

		// new CssPlugin({
		// 	filename: '[name].css'
		// })
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
