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
		},
		sprite: {
	      main: {
	        src: 'public/__icons/*',
	        dest: 'public/images/sprite.png',
	        destCss: 'public/less/blocks/sprite.less',
	        cssTemplate: 'sprite.template.hbs.css',
	        padding: 10
	      }
	    }
	});

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-spritesmith');

	grunt.registerTask('default', ['sprite', 'postcss']);

};