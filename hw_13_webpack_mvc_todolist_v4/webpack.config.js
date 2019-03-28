let path = require ('path');
let conf ={
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve (__dirname,'./public/dist')
    }
};
module.exports = conf;