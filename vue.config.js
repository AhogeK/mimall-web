export const devServer = {
	host: 'localhost',
	port: 8080,
	proxy: {
		'/api': {
			target: 'http://mall-pre.springboot.cn',
			changeOrigin: true,
			pathRewrite: {
				'/api': ''
			}
		}
	},
	lintOnSave: true,
	overlay: {
		warnings: true,
		errors: true
	}
};
