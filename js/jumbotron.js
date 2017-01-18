$(document).ready(function(){
  UpdJumbotron();
  JSQ();
});
function JSQ(){
  
   $('#tools button').click(function(){
	   var gs = $('#jsqText').val();
	   if (gs.length <= 0){
		   alert('请输入计算公式！');
	   }else{
		   var Xseach = /[^0-9,+,\-,*,\/,(,),\.,%]/g.exec(gs);
		   if ( Xseach!=null)
			{
				alert("输入的公式有误:"+Xseach);
			}else {
				try{
					var res = eval(gs);
				}catch(err){
					alert("输入的公式有误，请检查！\n"+err.message);
				}
				alert(res);
				$('#result').text("result = "+res.toString());
				
		}
	   }
	
});

}
function UpdJumbotron(){
	$('.jumbotron').empty();
	$('.jumbotron').prepend("<h1>wdw</h1>");// 标题
	$('.jumbotron').append("<p>this is JQuery done!</p>"); //简介
	$('.jumbotron').append("<a class='btn btn-primary btn-large' href='html/ljsw2016.html'>View details</a>");//详细信息按钮。
	var ljswFile = "json/ljsw.json";
	$.getJSON(ljswFile,function(data){
		//data中文乱码的解决方案，用记事本打开，另存为，选择utf-8
		$('.jumbotron').children('h1').text(data.name);
		$('.jumbotron p').text(data.title);
	});
}

function UpdTechnology(){
	
}

function UpdTools(){
	
	
}
function UpdImg(){
	
	
}
