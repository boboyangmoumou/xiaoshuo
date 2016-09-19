$(function(){
	$('.main-register').find('.main-register-left-mu>li').click(function(){
		$('.main-register').find('.main-register-left-mu>li').attr('class',' ');
		$('.main-register').find('.main-register-right').css('display','none').eq($(this).index()).css('display','block');;
		$(this).attr('class','active');
			});
});

$(function(){
	  var ok1=false;
                var ok2=false;
                var ok3=false;
                var ok4=false;
                  var ok5=false;
                    var ok6=false;
                //验证注册邮箱
	$('#inputEmail').focus(function(){
		$(this).next().text('请输入正确的emial格式').removeClass('state1').addClass('atate2');
	}).blur(function(){
		if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
			$(this).next().text('请输入正确的EMAIL格式').removeClass('state1').addClass('state3');
			ok4=false;
                    }else{                  
                      $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                        ok4=true;
                    }	
	});
	 //验证注册用户名
	$('#username').focus(function(){
		$(this).next().text('用户名为6~16位之间').removeClass('state1').addClass('state2');
	}).blur(function(){
		if ($(this).val().length>=6&&$(this).val().length<=16&&$(this).val()!=' ') {
			 $(this).next().text('输入成功').removeClass('state1').addClass('state4');
			ok1=true;
		}else{
			$(this).next().text('用户名为6~16位之间').removeClass('state1').addClass('state3');
			
		}
	});
	 //验证登录用户名
	$('#username1').focus(function(){
		$(this).next().text('用户名为6~16位之间').removeClass('state1').addClass('state2');
	}).blur(function(){
		if ($(this).val().length>=6&&$(this).val().length<=16&&$(this).val()!=' ') {
			 $(this).next().text('输入成功').removeClass('state1').addClass('state4');
			ok5=true;
		}else{
			$(this).next().text('用户名为6~16位之间').removeClass('state1').addClass('state3');
			
		}
	});
	//验证密码
	$('#inputPassword1').focus(function(){
		$(this).next().text('密码应该在6-20位之间').removeClass('state1').addClass('state2');
	}).blur(function(){
		if ($(this).val().length>=6&&$(this).val().length<=20&&$(this).val()!=' ') {
			 $(this).next().text('输入成功').removeClass('state1').addClass('state4');
			ok2=true;
		}else{
			$(this).next().text('密码应该在6-20位之间').removeClass('state1').addClass('state3');
			
		}
	});
	//确认登录密码
	$('#inputPassword2').focus(function(){
		$(this).next().text('请确认密码').removeClass('state1').addClass('state2');
	}).blur(function(){
		if($(this).val().length>=6&&$(this).val().length<=20&&$(this).val()!=' '&& $(this).val() == $('#inputPassword1').val()){
			  $(this).next().text('输入成功').removeClass('state1').addClass('state4');
			 ok3=true;
		}else{
			$(this).next().text('输入的确认密码要和上面的密码一致').removeClass('state1').addClass('state3');
			
		}
	});
	//确认注册密码
	$('#inputPassword3').focus(function(){
		$(this).next().text('请确认密码').removeClass('state1').addClass('state2');
	}).blur(function(){
		if($(this).val().length>=6&&$(this).val().length<=20&&$(this).val()!=' '&& $(this).val() == $('#inputPassword1').val()){
			  $(this).next().text('输入成功').removeClass('state1').addClass('state4');
			 ok6=true;
		}else{
			$(this).next().text('输入的确认密码要和上面的密码一致').removeClass('state1').addClass('state3');
			
		}
	});
	//提交按钮,所有验证通过方可提交
	$('#submit').click(function(){
		if(ok1 && ok2 && ok3 && ok4){
			$('form').submit();
			alert('验证成功');
		}else if(ok5 && ok6){
			$('form').submit();
			alert('验证成功');
		}else{
			alert('验证错误，请重新输入');
		}
	});

});