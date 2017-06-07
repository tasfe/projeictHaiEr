
//cookie的操作
//保存cookie（新建cookie）
//功能：保存cookie
//参数：
//key：键
//value：值
//dayCount有效期:(单位是天) 如：7天

//返回值：
//无
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
}

//读取cookie
//功能：读cookie
//参数：
//key：键
//返回值："":没有读取到；非""是读取到的值。

function getCookie(key){
	//1、获取cookie的内容；//color=red; userName=jzm; password=123; auserName=ppp
	var str = decodeURIComponent(document.cookie);
	//2、转换成数组
	var arr = str.split("; ");
	
	//3、循环数组找key
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	//4、返回
	return "";
}

//删除cookie
//功能：删除cookie
//参数：
//key：键
//返回值：无

function removeCookie(key){
	//借用就是保存。
	saveCookie(key,"007",-5);	
}