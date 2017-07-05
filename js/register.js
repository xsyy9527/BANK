


//以下为正则验证表单
function checkAll(type,value){//需要判断的类型，比如电话，邮箱，，value是需要判断值
	switch(type){//判断类型
	
	case 'Name'://名字是否中文
		if((/^[\u4e00-\u9fa5]{0,}$/g).test(value)){
			return true; 	
		}else{
			return false;
		}
		break;
	case 'Password'://密码
		if((/^[a-zA-Z]\w{5,17}$/).test(value)){
			return true;
		}else{
			return false;
		}
		break;
		
	/*case "Password" : //密码 应该由6-15位的数字字母下划线特殊字符构成
			if((/^([@#$%^&*]|\w){6,15}$/).test(value)){
				return true;
			}else{
				return false;
			}
			break;
*/
	case 'Maydate'://日期
		if((/^\d{2}|\d{4}[-\/\.]\d{2}[-\/\.]\d{2}$/).test(value)){
			return true;	
		}else{
			return false;
		}
		break;
	case 'Phone':   			//如果类型是Phone的话，就执行下面的判断  
		if((/^1[34578]\d{9}$/).test(value)){   //1开头后跟345678，后跟9个数字，结尾
			return true;   
		}else{  
			return false;
		}  
		break;  
	case 'Email':  //邮箱
		if((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test(value)){   
			return true;   
		}else{  
			return false;
		}  
		break; 
	case 'Postcode'://邮编
		if((/^[1-9]\d{5}$/).test(value)){
			return true;
		}else{  
			return false;
		}  
		break;
	case 'Picture'://图片格式
		if((/^\w+\.(jpg|gif|png)$/).test(value)){
			return true;
		}else{  
			return false;
		}
	} 
}


/*
//地址验证
$("#site").blur(function(){
	let value = $("#site").val();
	let t=checkAll("Name",value);
	if(t==true){
		$("#site").css("border","1px solid #666")
		$(".sitetishi").text("√离女神又进了一步");
		$(".sitetishi").css("color","#000");
	}else{
		$(".sitetishi").text("x枣糕，快删了重写");	
		$(".sitetishi").css("color","#f00");
		$("#site").css("border","1px solid #f00")
	}
});



//邮编验证
$("#Postcode").blur(function(){
	let value = $("#Postcode").val();
	let t=checkAll("Postcode",value);
	if(t==true){
		$("#Postcode").css("border","1px solid #666")
		$(".Postcodetishi").text("√离女神又进了一步");
		$(".Postcodetishi").css("color","#000");
	}else{
		$(".Postcodetishi").text("x枣糕，快删了重写");	
		$(".Postcodetishi").css("color","#f00");
		$("#Postcode").css("border","1px solid #f00")
	}
});



//区域验证
$("#area").blur(function(){
	let value = $("#area").val();
	let t=checkAll("Name",value);
	if(t==true){
		$("#area").css("border","1px solid #666")
		$(".areatishi").text("√离女神又进了一步");
		$(".areatishi").css("color","#000");
	}else{
		$(".areatishi").text("x枣糕，快删了重写");	
		$(".areatishi").css("color","#f00");
		$("#area").css("border","1px solid #f00")
	}
});









//城市验证
$("#city").blur(function(){
	let value = $("#city").val();
	let t=checkAll("Name",value);
	if(t==true){
		$("#city").css("border","1px solid #666")
		$(".citytishi").text("√离女神又进了一步");
		$(".citytishi").css("color","#000");
	}else{
		$(".citytishi").text("x枣糕，快删了重写");	
		$(".citytishi").css("color","#f00");
		$("#city").css("border","1px solid #f00")
	}
});





//电话验证
$("#Phone").blur(function(){
	let value = $("#Phone").val();
	let t=checkAll("Phone",value);
	if(t==true){
		$("#Phone").css("border","1px solid #666")
		$(".Phonetishi").text("√离女神又进了一步");
		$(".Phonetishi").css("color","#000");
	}else{
		$(".Phonetishi").text("x枣糕，快删了重写");	
		$(".Phonetishi").css("color","#f00");
		$("#Phone").css("border","1px solid #f00")
	}
});








//邮箱验证	
$("#youxiang").blur(function(){
	let value = $("#youxiang").val();
	let t=checkAll("Email",value);
	if(t==true){
		$("#youxiang").css("border","1px solid #666")
		$(".emailTishi").text("√离女神又进了一步");
		$(".emailTishi").css("color","#000");
	}else{
		$(".emailTishi").text("x枣糕，快删了重写");	
		$(".emailTishi").css("color","#f00");
		$("#youxiang").css("border","1px solid #f00")
	}
});
$("#youxiang01").blur(function(){
	let value = $("#youxiang").val();
	let value01 = $("#youxiang01").val();
	
	if(value==value01){
		$("#youxiang01").css("border","1px solid #666")
		$(".emailQueren").text("√离女神又进了一步");
		
	}else{
		$(".emailQueren").text("x枣糕，快删了重写");	
		$(".emailQueren").css("color","#f00");
		$("#youxiang01").css("border","1px solid #f00")
	}
});

*/

//密码验证

$("#Password01").blur(function(){
	let value = $("#Password").val();
	let value01 = $("#Password01").val();
	
	if(value==value01){
		$("#Password").css("border","1px solid #666")
		$(".PasswordQueren").text("√离女神又进了一步");
		
	}else{
		$(".PasswordQueren").text("x枣糕，快删了重写");	
		$(".PasswordQueren").css("color","#f00");
		$("#Password").css("border","1px solid #f00")
	}
});






























