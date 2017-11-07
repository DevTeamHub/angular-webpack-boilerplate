module.exports = {
    plugins: [
        require('postcss-import-url'),
        require('autoprefixer')({ browsers: ['last 20 versions'] })
    ]
}