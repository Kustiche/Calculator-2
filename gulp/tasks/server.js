export const server = () => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.build.html}`,
		},
		open: true,
		notify: false,
		port: 5000,
	});
};
