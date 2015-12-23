module.exports = function(grunt) {

	grunt.initConfig({
		postcss: {
			options: {
					map: false,
					processors: [
						require('autoprefixer')({
							browsers: ['last 20 versions', 'IE 8', 'IE 9']
						})
					]
			},
			dist: {
				src: 'public/css/style.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('default', ['postcss']);

};