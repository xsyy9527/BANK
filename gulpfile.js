var gulp=require("gulp");

gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("F:/phpStudy/WWW/ustyle"))
})
