import { createProxyMiddleware } from 'http-proxy-middleware';

export default (app) => {
	app.use(
		createProxyMiddleware('/board', {
			target: 'http://mynodetest.cafe24app.com', 
			changeOrigin: true,
		})
	);

	app.use(
		createProxyMiddleware('/board/*', {
			target: 'http://mynodetest.cafe24app.com', 
			changeOrigin: true,
		})
	);
};