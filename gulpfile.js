let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer')
    gulpconcat = require('gulp-concat'),
    gulpuglify = require('gulp-uglify')
    gulpcssmin = require('gulp-cssmin');

//Tasks
gulp.task('sass', function(){
    return   gulp.src('app/scss/style.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(autoprefixer({overrideBrowserslist: ['last 8 versions']}))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('style', function(){
    return gulp.src([
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/magnific-popup/dist/magnific-popup.css',
    'node_modules/normalize.css/normalize.css'
])
    .pipe(gulpconcat('libs.min.css'))
    .pipe(gulpcssmin())
    .pipe(gulp.dest('app/css'))
});


gulp.task('script', function(){
    return gulp.src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
])
    .pipe(gulpconcat('libs.min.js'))
    .pipe(gulpuglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('watch', function(){
    gulp.watch('app/scss/style.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
});


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', gulp.parallel('watch', 'sass', 'browserSync', 'script', 'style'));

