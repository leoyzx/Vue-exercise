const path = require('path');
const webpack=require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'output.bundle.js'
    },
    mode:'development',
    devServer:{
        open:true,
        port:3000,
        contentBase:path.join(__dirname,'dist'),
        publicPath:'/',
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test: /\.(png|jpg|gif)$/i, use:[{loader:'url-loader', options:{limit:1024}}]},
            //url-loader
            {test: /\.vue$/, use:'vue-loader'},
            //vue-loader
            {test: /\.css$/, use:['style-loader','css-loader']},
            //css-loader+style-loader
            {test: /\.scss$/, use:['style-loader','css-loader','sass-loader']},
            {test: /\.less$/, use:['style-loader','css-loader','less-loader']},

            {test: /\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}
            //字体载入
        ]

    },
    resolve: {
        // alias: { //修改vue导入时的配置文件路径
        //     'Vue$':'vue/dist/vue.js'
        // }
    }
};
