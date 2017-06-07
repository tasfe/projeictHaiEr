$(function(){
	$("#userName").blur(function(){
		if($("#userName").val().length<4||$("#userName").val().length>10){
			alert("用户名应在4到10个字符间！");
		}else{
			$.post("cheakup.php",{userName:$("#userName").val()},function(data){
				if(data==1){
					$("#spanId").html("用户名可以使用");
					$("#spanId").css({color:"#606060",background:"url(img/input.png) no-repeat 7px -37px"});
				}else{
					$("#spanId").html("用户名被占用，请重新输入。");
					$("#spanId").css({color:"#606060",background:"url(img/input.png) no-repeat 7px 0px"});
				};
			});
		}
		
				
	});
	
	
	$("#querenmima").blur(function(){
		if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else if($("#userPass").val()==$("#querenmima").val()){
			$("#spanId2").css({height:"20px",paddingLeft:"30px",display:"inline-block",background:"url(img/input.png) no-repeat 7px -37px"});
		}else{
			$("#spanId2").css({height:"20px",paddingLeft:"30px",display:"inline-block",background:"url(img/input.png) no-repeat 7px 0px"});
		};
	});
	
	$(".zhuce").click(function(){
		if($("#userPass").val()!==$("#querenmima").val()){
			alert("两次密码输入不一致！");
		}else if($("#userName").val().length<4||$("#userName").val().length>10){
			alert("用户名应在4到10个字符间！");
		}else if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else{
			$.post("register.php",{userName:$("#userName").val(),userPass:$("#userPass").val()},function(data){
				if(data==1){
					alert("恭喜您，注册成功");
					location.href="login.html";
				}else{
					alert("0.0……");
				}
			})
		}
		
	});
})