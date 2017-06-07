$(function(){
	document.getElementById("common").onclick = function(){
		document.getElementById("common").style.cssText = "border-bottom: 2px solid #32beff;color:#32beff";
		document.getElementById("phone").style.cssText = "border-bottom:none;color:#606060";
		document.getElementById("commonOn").style.display = "block";
		document.getElementById("phoneOn").style.display = "none";
	}
	document.getElementById("phone").onclick = function(){
		document.getElementById("phone").style.cssText = "border-bottom: 2px solid #32beff;color:#32beff";
		document.getElementById("common").style.cssText = "border-bottom:none;color:#606060";
		document.getElementById("commonOn").style.display = "none";
		document.getElementById("phoneOn").style.display = "block";
	}
	
	/*$(".submit1").click(function(){
		if($("#userName").val().length<4||$("#userName").val().length>10){
			alert("用户名应在4到10个字符间！");
		}else if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}
	})*/
	
	$(".submit1").click(function(){
		if($("#userName").val().length<4||$("#userName").val().length>10){
			alert("用户名应在4到10个字符间！");
		}else if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else{
			$.post("denglu.php",{userName:$("#userName").val(),userPass:$("#userPass").val()},function(data){
				if(data==0){
					alert("登陆成功");
					saveCookie("userName",$("#userName").val(),7);
					location.href="index.html";
				}else{
					alert("账号或密码错误！");
				};
			});
		};
		
	});
	
})