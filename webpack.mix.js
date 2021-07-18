const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    mix.combine([
        'resources/assets/admin/vendor/jquery/jquery.min.js',
        'resources/assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js',
        'resources/assets/admin/vendor/jquery-easing/jquery.easing.min.js',
        'resources/assets/admin/js/sb-admin-2.min.js',
    ],'public/backend/js/sb-admin.js')
    mix.combine([
        'resources/assets/admin/vendor/fontawesome-free/css/all.min.css',
        'resources/assets/admin/css/sb-admin-2.min.css',
    ],  'public/backend/css/sb-admin.css')
    .sourceMaps();
mix.version()
    .browserSync('dingo.test');

