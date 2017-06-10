$(function(){
	//cookie
		if(getCookie("userName")!=""){
			$(".top-r").children("span").eq(0).html("欢迎您"+getCookie("userName"));
			$(".top-r a").eq(0).css({display:"none"});
			$(".top-r a").eq(1).html("退出");
			$(".top-r a").eq(1).attr("href","login.html");
		}
	
	//动态生成商品列表
		$.get("getGoodsList.php",function(data){
			var obj = eval(data);
			for(var i=0; i<obj.length;i++){
				$(".ul-four").append('<li>'
					+'<a href="xiangqing.html"><img src='+obj[i].goodsImg+' /></a>'
					+'<dl>'
					+'<dt><a href="xiangqing.html">'+obj[i].goodsId+'</a></dt>'
					+'<dd><a href="xiangqing.html">'+obj[i].goodsName+'</a></dd>'
					+'<dd class="over">'+obj[i].goodsType+'</dd>'
					+'<i>'+obj[i].goodsPrice+'</i>'
					+'</dl>'
					+'<p><span>'+obj[i].goodsDesc+'</span></p>'
					+'</li>');
			};
		})	
		
	//cookie保存goodsId
	$(".ul-four").delegate("li","click",function(){
		saveCookie("goodsId",$(this).children("dl").children("dt").children("a").html(),1);
		//alert(getCookie("goodsId"));
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