const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

compileCss = ()=>{
    return src('pages/**/*.scss') // scss source file
    .pipe(sass()) //scss compiler
    .pipe(dest('css')) // computed css
}

watchTask = () => {
    watch(['pages/**/*.scss', '*.html'], compileCss);
}

exports.default = series(compileCss, watchTask);


/*****
NB: the * symbol means all files with the .scss and .html extention
the double ** means all subfolders containing .scss files as well

*****/