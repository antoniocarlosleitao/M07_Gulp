const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')

function tarefasCSS(cb) {

    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))        // mescla arquivos
        .pipe(cssmin())                  // minifica css
        .pipe(rename({suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css')) // cria arquivo em novo diretório

}

function tarefasJS() {

    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))      // mescla arquivos
        .pipe(uglify())                 //minifica js
        .pipe(rename({suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))   //cria arquivo em diretório
}


function tarefasImagem() {

    return gulp.src('./src/images/*')
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
        .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCSS()
exports.scripts = tarefasJS
exports.images = tarefasImagem