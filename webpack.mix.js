// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/js/index.js', 'assets/build/index.js');
mix.sass('resources/scss/style.scss', 'assets/build/style.css')
    .options({processCssUrls: false});

mix.options({
    terser: {
        extractComments: false
    }
});

// Disable mix-manifest.json
Mix.manifest.refresh = _ => void 0;