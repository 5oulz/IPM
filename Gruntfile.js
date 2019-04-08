'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var serveStatic = require('serve-static');
var mountFolder = function (connect, dir) {
    return serveStatic(require('path').resolve(dir));
};

module.exports = function(grunt) {

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    // Project configuration.
    grunt.initConfig({
        IPM: yeomanConfig,
        // Metadata.
        //pkg: grunt.file.readJSON('y.jquery.json'),
        // Task configuration.
        clean: {
            files: ['dist'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: true
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['src/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src', 'qunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'qunit']
            },
            compass: {
                files: ['<%= IPM.app %>/sass/{,*/}{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            livereload: {
                options: {
                    livereload: grunt.option('livereloadport') || LIVERELOAD_PORT
                },
                files: [
                    '<%= IPM.app %>/*.html',
                    '{.tmp,<%= IPM.app %>}/styles/{,*/}{,*/}*.css',
                    '{.tmp,<%= IPM.app %>}/scripts/{,*/}*{,*/}*.js',
                    '<%= IPM.app %>/images/{,*/}{,*/}*.{png,jpg,jpeg,gif,webp}',
                    //'<%= IPM.app %>/templates/{,*/}{,*/}*.{ejs,mustache,hbs}',
                    'test/spec/**/*.js'
                ]
            },
            handlebars: {
                files: ['<%= IPM.app %>/templates/*.hbs'],
                tasks: ['handlebars']
            }
        },
        connect: {
            options: {
                port: grunt.option('port') || SERVER_PORT,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            },
        },
        compass: {
			options: {
				sassDir: '<%= IPM.app %>/sass',
				cssDir: '<%= IPM.app %>/styles',
				imagesDir: '<%= IPM.app %>/images',
				javascriptsDir: '<%= IPM.app %>/scripts',
				relativeAssets: true
			},
			dist: {},
			server: {
				options: {
					debugInfo: true
				}
			}
		},
        handlebars: {
            compile: {
                options: {
                    namespace: 'myApp.templates',
                    processName: function(filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    }
                },
                files: {
                    '<%= IPM.app %>/scripts/templates.js': '<%= IPM.app %>/templates/*.hbs'
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    // Default task.
    //grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);
    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

};
