var webpack = require('webpack')

module.exports = {
    watch: true,
    entry: './js/app/index.js',
    output: {
        path: __dirname + '/js/dist',
        filename: 'webpack.merge.js'
    },
    resolve: {
        alias:{
            jquery: '../lib/jquery-3.1.1.min.js',
            iconfont: '../lib/iconfont.js'
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery'
        }),
    ]

}