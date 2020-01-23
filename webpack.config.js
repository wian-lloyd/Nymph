const path = require('path');

module.exports = {
    entry: './src/scripts/index.ts',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    devtool: 'source-map'
}