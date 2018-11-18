const createMegaloTarget = require('@megalo/target');
const compiler = require('@megalo/template-compiler');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const pages = require('./entry');
const _ = require('./util');

const CSS_EXT = {
	wechat: 'wxss',
	alipay: 'acss',
	swan: 'css'
};

function createBaseConfig(platform = 'wechat') {
	const cssExt = CSS_EXT[platform];

	return {
		mode: 'development',

		target: createMegaloTarget({
			compiler: Object.assign(compiler, {}),
			platform,
			htmlParse: {
				templateName: 'octoParse',
				src: _.resolve(`./node_modules/octoparse/lib/platform/${platform}`)
			}
		}),

		entry: {
			app: _.resolve('src/app.js'),
			...pages
		},

		output: {
			path: _.resolve(`dist-${platform}/`),
			filename: 'static/js/[name].js',
			chunkFilename: 'static/js/[id].js'
		},

		devServer: {
			// hot: true,
		},

		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]|megalo[\\/]/,
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
					exclude: /(node_modules|bower_components)/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: true
							}
						}
					]
				},

				{
					test: /\.css$/,
					use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
				},

				{
					test: /\.less$/,
					use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader' ]
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
				filename: `./static/css/[name].${cssExt}`
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
