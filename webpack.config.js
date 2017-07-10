

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		"babel-polyfill",
		"react-hot-loader/patch",
		"./src/index.jsx"
	],
	output: {
		filename: "assets/js/bundle.min.js",
		publicPath: "/",
		path: path.join(__dirname, "/public/")
	},

	devtool: "source-map",

	devServer: {
		hot: true,
		//inline: true,
		stats: {
			progress: true,
			colors: true
		},
		port: 8080,
		historyApiFallback: {
			index:'index.html'
		},
		contentBase: path.join(__dirname, "public"),
		host: "localhost"
	},

	resolve: {
		extensions: [".js", ".jsx", ".json", ".scss"],
		modules: ["src", "node_modules"],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loaders: ["react-hot-loader/webpack", "babel-loader"],
				include: path.resolve("src")
			},
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?modules=true&sourceMap=true', 'sass-loader'],
                }))
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,

                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 15000,
                        name: '[name].[hash].[ext]',
                    },
                },
            },
			{
				test: /\.(png|jpe?g|svg|gif)$/,

				use: {
					loader: 'url-loader',
					options: {
						limit: 15000,
						name: '[name].[hash].[ext]',
					},
				},
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("assets/css/bundle.min.css")
	]
};