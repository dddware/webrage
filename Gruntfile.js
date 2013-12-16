module.exports = function(grunt)
{
    // Config

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['public'],

        copy: {
            default: {
                files: [
                    { expand: true, src: ['img/*'], dest: 'public/images/', flatten: true }
                ]
            }
        },

        jade: {
            default: {
                files: {
                    'public/index.html': ['src/templates/index.jade']
                }
            }
        },

        htmlmin: {
            default: {
                files: {
                    'public/index.html': ['public/index.html']
                }
            }
        },

        stylus: {
            options: {
                compress: false
            },

            default: {
                files: {
                    'public/styles.css': ['src/stylesheets/*.styl']
                }
            }
        },

        autoprefixer: {
            no_dest: {
                src: 'public/styles.css'
            }
        },

        cssmin: {
            default: {
                files: {
                    'public/styles.css': ['public/styles.css']
                }
            }
        },

        jshint: {
            default: ['src/scripts/*.js']
        },

        concat: {
            default: {
                src: ['bower_components/jquery/jquery.min.js', 'src/scripts/*.js'],
                dest: 'public/scripts.js'
            }
        },

        uglify: {
            default: {
                files: {
                    'public/scripts.js': ['public/scripts.js']
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'public',
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

            stylesheets: {
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

                files: ['public/**/*'],
            }
        }
    });



    // Tasks

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('templates', ['jade']);
    grunt.registerTask('stylesheets', ['stylus', 'autoprefixer']);
    grunt.registerTask('scripts', ['jshint', 'concat']);

    grunt.registerTask('common', ['clean', 'copy', 'templates', 'stylesheets', 'scripts']);
    grunt.registerTask('workflow', ['connect', 'watch']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);

    grunt.registerTask('default', ['common', 'workflow']);
    grunt.registerTask('dist', ['common', 'minify']);
};