var gulp = require("gulp");
var sass = require("gulp-sass");
/*var connect=require("gulp-connect");

gulp.task("server",function(){
	connect.server({
		
		
		
	});
});*/



gulp.task("sass",function(){
	gulp.src("ceshi.scss")//源文件
	.pipe(sass())//做sass预编译（做什么样的处理）
	.pipe(gulp.dest("css/"));//把结果放在何处。	
});