const createMegaloTarget = require('@megalo/target');
const compiler = require('@megalo/template-compiler');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const { pagesEntry } = require('@megalo/entry');
const _ = require('./util');
const appMainFile = _.resolve('src/app.js');

const CSS_EXT = {
	wechat: 'wxss',
	alipay: 'acss',
	swan: 'css'
};

const px2rpxLoader = {
	loader: '@megalo/px2rpx-loader',
	options: {
		rpxUnit: 0.5
	}
};

function createBaseConfig(platform = 'wechat') {
	const cssExt = CSS_EXT[platform];

	return {
		mode: 'development',

		target: createMegaloTarget({
			compiler: Object.assign(compiler, {}),
			platform
			// htmlParse: {
			// 	templateName: 'octoParse',
			// 	src: _.resolve(`./node_modules/octoparse/lib/platform/${platform}`)
			// }
		}),

		entry: {
			app: appMainFile,
			...pagesEntry(appMainFile)
		},

		output: {
			path: _.resolve(`dist-${platform}/`),
			// filename: 'static/js/[name].js',
			// chunkFilename: 'static/js/[id].js'
			filename: '[name]js.js',
			chunkFilename: '[id]js.js'
		},

		devServer: {
			// hot: true,
		},

		optimization: {
			minimize: true, //默认压缩
			// minimizer: [
			// 	new UglifyJsPlugin() //三方插件压缩js代码
			// ],
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /node_modules/,
						name: 'vendor',
						chunks: 'all'
					}
				}
			},
			runtimeChunk: {
				name: 'runtime'
			}
		},

		// devtool: 'cheap-source-map',
		devtool: false,

		resolve: {
			extensions: [ '.vue', '.js', '.json' ],
			alias: {
				vue: 'megalo',
				'@': _.resolve('src')
			}
		},

		module: {
			rules: [
				// ... other rules
				{
					test: /\.vue$/,
					use: [
						{
							loader: 'vue-loader'
						}
					]
				},

				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader'
						}
					]
				},

				{
					test: /\.(css|less)$/,
					use: [ MiniCssExtractPlugin.loader, 'css-loader', px2rpxLoader, 'postcss-loader', 'less-loader' ]
				},

				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
						path: _.resolve(`dist-${platform}/`),
						name: './static/img/[name].[ext]'
					}
				}
			]
		},

		plugins: [
			new VueLoaderPlugin(),
			new MiniCssExtractPlugin({
				// filename: `./static/css/[name].${cssExt}`
				filename: `[name]css.${cssExt}`
			}),
			new CopyWebpackPlugin([
				{
					from: _.resolve(__dirname, '../static'),
					to: _.resolve(`dist-${platform}/static`),
					ignore: [ '.*' ]
				}
			])
		],
		stats: {
			env: true,
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			entrypoints: false
		}
	};
}

module.exports = createBaseConfig;
