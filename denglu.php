<?php

header("Content-type","text/html;charset=utf-8");
//建立连接
$conn = mysql_connect("localhost:3306","root","qianfeng");
//选择数据库
mysql_select_db("Yelean",$conn);

	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
//执行SQL语句
$sqlStr ="select * from haier where userName='".$userName."' and userPass='".$userPass."'";
$result = mysql_query($sqlStr,$conn);
$rows = mysql_num_rows($result);
//断开连接
mysql_close($conn);

if($rows==0){
		echo "1"; //没有查找到
	}else{
		echo "0";
	}



?>