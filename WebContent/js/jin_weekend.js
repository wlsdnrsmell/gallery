/* function plane_mov(){
			var obj = $('#airplane').offset();	
			var c_left = obj.left;
			var c_top=obj.top;
			$('#airplane').animate({
				left: c_left + 500,
				top: c_top-150,
				width:"+=100px",
				specialEasing: {top: 'easeOutQuad', left: 'easeInQuad'}
			},2000,function(){
				location.href="gallery.html";
			})
		} */
/* function plane_mov(){
  var elem = document.getElementById("airplane");   
  var x = 1;
  var id = setInterval(frame, 20);
  function frame() {
    if (x >= 80) {
      clearInterval(id);
    } else {
      x++; 
      elem.style.marginLeft = x + '%'; 
    }
  }
} */
function plane_mov(){
	  $('#airplane').animate({
		  marginLeft:'80%'
	  },
	  {
		  duration:2000,
		  easing:"swing",
		  step:function(x){
			  $("#demo").text(Math.round(x*1000/800)+"%");
		  },
		  complete:function(){
			  $('#airplane').animate({
					
				  },100,function(){
					  location.href="gallery.html"
					  }) 
			  }
		  }
			  );
		}
$(document).ready(function(){
	//값 받아오기
 var btn = document.getElementsByClassName('circle')[0]
 var modal = document.getElementById('myModal')
 var span = document.getElementsByClassName('close')[0]
 //When the user clicks the button, open the modal
//btn.onclick = function(){
//modal.style.display="block";
//}
//circle click
 btn.onclick = function(){
     modal.style.display="block";
     $('input[name=uname]').focus();
 }
 //When the user clicks on <span> (x), close the modal
 span.onclick = function(){
     modal.style.display = "none";
 }

 //When the user clicks anywhere out side of the modal, close it
 window.onclick = function(event){
     if(event.target == modal){
         modal.style.display ="none"
 	}
 }
 //When the user click Login
 $('#login').on('click',function login_check(){
	var myid="jwIm";
	var mypwd = "1234";
	
	var inputid= $('input[name=uname]').val();
	var inputpw= $('input[name=psw]').val();
	/* console.log(inputid);
	console.log(inputpw); */
	if(inputid==myid){
		if(inputpw==mypwd){
			modal.style.display = "none";
			/* $('#airplane').css('display','block'); */
	         plane_mov();
		}
		else{
			alert('비밀번호가 잘못됬습니다.');
		}
	}
	else{
		alert('아이디와 패스워드를 다시 확인하세요.');
		}
	});
})