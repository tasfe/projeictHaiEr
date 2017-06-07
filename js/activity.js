$(function(){
	//cookie
		if(getCookie("userName")!=""){
			$(".top-r").children("span").eq(0).html("欢迎您"+getCookie("userName"));
			$(".top-r a").eq(0).css({display:"none"});
			$(".top-r a").eq(1).html("退出");
			$(".top-r a").eq(1).attr("href","login.html");
		}
		$(".top-r a").eq(1).click(function(){
			removeCookie("userName");
		})
		
		
	//nav 选项卡	
		$(".ul1 li").eq(0).on("mouseenter",function(){
			$(".bingxiang").css({display:"block"});
			$(".bingxiang-l").animate({
				left:"0px",
			},200)
			$(".bingxiang-c").animate({
				left:"207px",
			},300)
			$(".bingxiang-r").animate({
				left:"439px",
			},400)
		});
		
		$(".bingxiang").on("mouseenter",function(){
			$(".bingxiang").css({display:"block"});
		});
		$(".bingxiang").on("mouseleave",function(){
			$(".bingxiang").css({display:"none"});
			$(".bingxiang-l").animate({
				left:"-192px",
			},300)
			$(".bingxiang-c").animate({
				left:"0px",
			},400)
			$(".bingxiang-r").animate({
				left:"0px",
			},500)
		});
		$(".ul1 li").eq(0).on("mouseleave",function(){
			$(".bingxiang").css({display:"none"});
		});
		$("#main").on("mouseenter",function(){
			$(".bingxiang-l").animate({
				left:"-192px",
			},300)
			$(".bingxiang-c").animate({
				left:"0px",
			},400)
			$(".bingxiang-r").animate({
				left:"0px",
			},500)
		})
})
