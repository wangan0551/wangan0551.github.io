$(document).ready(function(){
  UpdJumbotron();
  JSQ();
});
function JSQ(){
  
   $('#tools button').click(function(){
	   var gs = $('#jsqText').val();
	   if (gs.length <= 0){
		   alert('��������㹫ʽ��');
	   }else{
		   var Xseach = /[^0-9,+,-,*,\/,(,),\.,%]/g.exec(gs);
		   if ( Xseach!=null)
			{
				alert("����Ĺ�ʽ����:"+Xseach);
			}else {
				try{
					var res = eval(gs);
				}catch(err){
					alert("����Ĺ�ʽ�������飡\n"+err.message);
				}
				alert(res);
				$('#result').text("result = "+res.toString());
				
		}
	   }
	
});

}
function UpdJumbotron(){
	$('.jumbotron').empty();
	$('.jumbotron').prepend("<h1>wdw</h1>");// ����
	$('.jumbotron').append("<p>this is JQuery done!</p>"); //���
	$('.jumbotron').append("<a class='btn btn-primary btn-large' href='test/MyForm.html'>Learn more</a>");//��ϸ��Ϣ��ť��
}

function UpdTechnology(){
	
}

function UpdTools(){
	
	
}
function UpdImg(){
	
	
}