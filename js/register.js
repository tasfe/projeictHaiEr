$(function(){
		$("#userName").blur(function(){
			$.post("cheakup.php",{userName:$("#userName").val()},function(data){
				if(data==1){
					$("#spanId").html("用户名可以使用");
					$("#spanId").css({color:"#606060",background:"url(img/input.png) no-repeat 7px -37px"});
				}else{
					$("#spanId").html("用户名被占用，请重新输入。");
					$("#spanId").css({color:"#606060",background:"url(img/input.png) no-repeat 7px 0px"});
				};
			});		
		});
		
		$(".zhuce").click(function(){
			$.post("zhuce.php",{userName:$("#userName").val(),userPass:$("#userPass").val()},function(data){
				if(data==1){
					alert("恭喜您，注册成功");
				}else{
					alert("0.0出错了……");
				}
			})
		})
	})