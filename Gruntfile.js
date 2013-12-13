module.exports = function(grunt)
{
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            before: ['src/scripts/*.js'],
            after: ['dist/scripts.min.js']
        },

        uglify: {
            dist: {
                files: {
                    'dist/scripts.min.js': ['src/scripts/*.js']
                }
            }
        },

        jade: {
            dist: {
                files: {
                    'dist/index.html': ['src/templates/index.jade']
                }
            }
        },

        stylus: {
            options: {
                compress: false
            },

            dist: {
                files: {
                    'dist/styles.css': ['src/stylesheets/*.styl']
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    'dist/styles.css': ['dist/styles.css']
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'dist',
                    open: true,
                    livereload: true
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/scripts/*.js'],
                tasks: ['scripts'],
            },

            scripts: {
                files: ['src/stylesheets/*.styl'],
                tasks: ['stylesheets']
            },

            templates: {
                files: ['src/templates/*.jade'],
                tasks: ['templates']
            },

            livereload: {
                options: {
                    livereload: true
                },

                files: ['dist/**/*'],
            },
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task(s).
    grunt.registerTask('scripts', ['jshint:before', 'uglify:dist', 'jshint:after']);
    grunt.registerTask('stylesheets', ['stylus:dist', 'cssmin:dist']);
    grunt.registerTask('templates', ['jade:dist']);
    
    grunt.registerTask('dist', ['scripts', 'stylesheets', 'templates']);
    grunt.registerTask('default', ['connect', 'watch']);
};