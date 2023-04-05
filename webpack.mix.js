const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]).vue({version: 3});
mix.styles([
    'public/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css',
    'public/assets/plugins/custom/datatables/datatables.bundle.css',
    'public/assets/plugins/global/plugins.bundle.css',
    'public/assets/css/style.bundle.css',
    // 'public/assets/devextreme/materialbluelightcompact.css',
    // 'node_modules/element-plus/dist/index.css'
],'public/css/template.css').version();

mix.scripts([
    'public/assets/plugins/global/plugins.bundle.js',
    'public/assets/js/scripts.bundle.js',
    'public/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js',
    'public/assets/plugins/custom/datatables/datatables.bundle.js',
    // 'public/assets/js/widgets.bundle.js',
    // 'public/assets/js/custom/widgets.js',
    // 'public/assets/js/custom/apps/chat/chat.js',
    // 'public/assets/js/custom/utilities/modals/upgrade-plan.js',
    // 'public/assets/js/custom/utilities/modals/create-app.js',
    // 'public/assets/js/custom/utilities/modals/users-search.js',
], 'public/js/template.js').version();
