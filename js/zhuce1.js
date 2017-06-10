$(function(){
	$("#txt").mouseenter(function(){
		$(this).css({"border":"solid 1px #ec3e7d"});
		
	});
	$("#txt").mouseleave(function(){
		$(this).css({"border":"solid 1px gray"});
		
	});
	
	$("#pwd").mouseenter(function(){
		$(this).css({"border":"solid 1px #ec3e7d"});
		
	});
	$("#pwd").mouseleave(function(){
		$(this).css({"border":"solid 1px gray"});
		
	});
	
	$("#yzm").mouseenter(function(){
		$(this).css({"border":"solid 1px #ec3e7d"});
		
	});
	$("#yzm").mouseleave(function(){
		$(this).css({"border":"solid 1px gray"});
		
	});
	
	$("#repwd").mouseenter(function(){
		$(this).css({"border":"solid 1px #ec3e7d"});
		
	});
	$("#repwd").mouseleave(function(){
		$(this).css({"border":"solid 1px gray"});
		
	});
	
	$("#btnx").click(function(event){//注册
		var evt = event||wondow.event;
		if(a&b&c&d){
			//alert("正确");
		}else{
			alert("用户名或密码等有错，请重新输入");
			event.preventDefault();
		}
	});
	
	$("#txt").blur(function(event){
		if(a){
		var evt = event||wondow.event;
		$.get("php/checkUser.php",{id:$("#txt").val()},function(data){
		if(data=="1"){
				$("#msg").html("此用户名可以使用，赶紧注册吧");
				d = true;
			}else{
				$("#msg").html("此用户名已存在，请重新选择");
				d = false;
			}			
		});		
	}
	});
	  
});

var  a = false;
var  b = false;
var  c = false;
var  d = false;
var txt = document.getElementById("txt");
var msg = document.getElementById("msg");
var flag = 0;
var reg1=/^[a-zA-Z]{6,12}$/;
//console.log(reg1.test(txt.value));
var reg2=/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.(com|cn)$/;//邮箱
//console.log(reg2.test("245r4@fvdhvnfoi.com"));
var reg3=/^1\d{10}$/;//手机号
//console.log(reg3.test("18883888888"));
txt.onblur = function(){
	var oText = txt.value;
//	ajax("../json/user.json",function(res){//json模拟
//			var data = JSON.parse(res);
//			
//			for(var i=0;i<data.length;i++){
//				if((oText==data[i].name)||(oText==data[i].phone)||(oText==data[i].email)){
//					flag++;
//				}
//			}
//			if(flag==1){
//				msg.innerHTML = "用户名/邮箱/手机号正确";
//			}else{
//				if(oText){
//					msg.innerHTML = "用户名/邮箱/手机号错误，请输入用户名/邮箱/手机号";
//					txt.value="";
//				}else{
//					msg.innerHTML = "请输入用户名/邮箱/手机号";
//				}
//				
//			}
//	});
/*   $(function(){
		$("#txt").blur(function(){//后台验证用户名
			$.get("../php/checkUser.php",{"userName":$("#txt").val()},function(data){
				console.log(data);
				if(data.indexOf("1")>-1){
					$("#msg").html("亲，该用户名已经存在");							
				}else{
					$("#msg").html("亲，该用户名可用");	
				}
			});
		});
	});
*/
	if(reg1.test(oText)||reg2.test(oText)||reg3.test(oText)){//正则验证
		msg.innerHTML = "用户名/邮箱/手机号格式正确";
		 a = true;
	}else{
		a = false;
		if(oText){
			msg.innerHTML = "用户名/邮箱/手机号格式错误，请输入用户名/邮箱/手机号";
			txt.value="";
		}else{
			msg.innerHTML = "请输入用户名/邮箱/手机号";
		}
	}
    

}



var pwd=document.getElementById("pwd");
var repwd=document.getElementById("repwd");
var sp1=document.getElementById("sp1");
var sp2=document.getElementById("sp2");
var reg=/^\w{6,12}$/;
pwd.onblur=function(){
	if(reg.test(pwd.value)){
		sp1.innerHTML="请再输一次密码";
	}else{
		if(pwd.value){
			sp1.innerHTML="密码有误，请重新输入密码";
		    pwd.value="";
		}else{
			sp1.innerHTML="请输入密码";
		}
		
	}
// 	var oText2=pwd.value;
// 	if(oText2.length>=6||oText2.length<=12){//密码强度
//		flag=0;
//		var reg5=/\d/;
//		if(reg5.test(oText));
//		flag++;
//		
//		var reg6=/[a-zA-Z]/;
//		if(reg6.test(oText));
//		flag++;
//		
//		var reg7 = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/;
//		//var reg7 = /^[^A-Za-z0-9]$/;
//		if(reg7.test(oText)){
//			flag++;
//		}
//		console.log(flag);
//		switch(flag){
//			case 0:
//				sp1.innerHTML="";
//				break;
//			case 1:
//				sp1.innerHTML="差";
//				break;
//			case 2:
//				sp1.innerHTML="中";
//				break;
//			case 3:
//				sp1.innerHTML="强";
//				break;
//			default:
//				break;
//		}
// 	}
}
repwd.onblur=function(){
	if((pwd.value==repwd.value)&&(pwd.value)){
		sp2.innerHTML="输入密码正确";
		b = true;
	}else{
		b = false;
		if(repwd.value){
			sp2.innerHTML="两次密码不一致，请重新输入密码";
			repwd.value="";
		}else{
			if(pwd.value){
				sp2.innerHTML="请输入密码";
			}else{
				sp2.innerHTML="请先在上一栏输入密码";
			}
			
		}
		
	}
	
}


var Code=document.getElementById("code");
var Yzm=document.getElementById("yzm");
var Spx=document.getElementById("spx");

Yzm.onblur=function(){
	if(Yzm.value==Code.innerHTML.toLowerCase()){
		Spx.innerHTML="验证码正确";
		c = true;
	}else{
		c = false;
		if(Yzm.value){
			if(Yzm.value.length<4){
				Spx.innerHTML="验证码位数过少，请点击验证码再次输入";
			}else{
				Spx.innerHTML="验证码错误，请点击验证码再次输入";
				Yzm.value="";
			}
			
		}else{
			Spx.innerHTML="请输入验证码";
		}
		
	}
	
}
Code.onclick=function(){
	var code=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",//4位数字和字母组合验证码
		"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var oLen=code.length;
	var res="";
	
	for(i=0;i<4;i++){
		res+=code[parseInt(Math.random()*oLen)];
	}	
	Code.innerHTML=res;
}
			
	
   