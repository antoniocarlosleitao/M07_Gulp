const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')
const stripJS = require('gulp-strip-comments')
const stripCSS=require('gulp-strip-css-comments')

function tarefasCSS(cb) {
            
    return gulp.src ([
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/@fontawesome/fontawesome-free/css/fontawesome.css',
    './vendor/OwlCarousel2/docs/assets/css',
    './vendor/jquery-ui/jquery-ui.css/',
    './src/css/style.css'
    ])
        .pipe(stripCSS())                 //remove comentários
        .pipe(concat('style.css'))        // mescla arquivos
        .pipe(cssmin())                  // minifica css
        .pipe(rename({suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css')) // cria arquivo em novo diretório

}

function tarefasJS() {

    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/OwlCarousel2/docs/assets/owlcarousel/owlcarousel.js',
            './vendor/jQuery-Mask/src/jquery.mask.js',
            './vendor/jquery-ui/jquery-ui.js'
            './src/js/custom.js'
    ])
        .pipe(stripJS())                //remove comentários
        .pipe(concat('scripts.js'))      // mescla arquivos
        .pipe(uglify())                 //minifica js
        .pipe(rename({suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))   //cria arquivo em diretório
    }


function tarefasImagem() {

    return gulp.src('./src/imagens/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/imagens'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.imagens = tarefasImagem