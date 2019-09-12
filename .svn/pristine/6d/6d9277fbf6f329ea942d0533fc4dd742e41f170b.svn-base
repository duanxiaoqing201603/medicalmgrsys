/*
module.exports = {
    //axios域代理，解决axios跨域问题
    publicPath: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://192.168.0.108:8090',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}
*/

// vue.config.js
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/main.js'
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://39.105.11.4:1443/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },

    lintOnSave: process.env.NODE_ENV !== 'production',
}
