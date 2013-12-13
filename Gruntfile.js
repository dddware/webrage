module.exports = function(grunt)
{
    // Config

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            beforedist: ['src/scripts/*.js'],
            dist: ['public/scripts.js']
        },

        uglify: {
            dist: {
                files: {
                    'public/scripts.js': ['public/scripts.js']
                }
            }
        },

        jade: {
            compile: {
                files: {
                    'public/index.html': ['src/templates/index.jade']
                }
            }
        },

        htmlmin: {
            dist: {
                files: {
                    'public/index.html': ['src/templates/index.jade']
                }
            }
        },

        stylus: {
            options: {
                compress: false
            },

            compile: {
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
            dist: {
                files: {
                    'public/styles.css': ['public/styles.css']
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

                files: ['public/**/*'],
            }
        }
    });



    // Plugins

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');



    // Default tasks

    grunt.registerTask('scripts', ['jshint:beforedist']);
    grunt.registerTask('stylesheets', ['stylus:compile', 'autoprefixer']);
    grunt.registerTask('templates', ['jade:compile']);
    grunt.registerTask('default', ['scripts', 'stylesheets', 'templates', 'connect', 'watch']);

    // Production tasks

    grunt.registerTask('scripts:dist', ['scripts', 'uglify:dist', 'jshint:dist']);
    grunt.registerTask('stylesheets:dist', ['stylesheets', 'cssmin:dist']);
    grunt.registerTask('templates:dist', ['templates', 'htmlmin:dist']);
    grunt.registerTask('dist', ['scripts:dist', 'stylesheets:dist', 'templates:dist']);
};