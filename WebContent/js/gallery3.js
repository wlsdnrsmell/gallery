//사진 보여주기
//첫글자만 대문자로 만들기
function capitalizeFistLetter(string){
	return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}


//사진 보여주기
function showPhoto(cList){
	//console.log(cList.name);
	cName = capitalizeFistLetter(cList.name);
	//console.log(cList.num);
	$('#main-section').empty();
	//$grid.masonry('destroy')
	$grid.masonry();
	$grid.masonry('remove',$('.paper'))
	var $items=[]
	for(i=0;i<=cList.num;i++){
		$items.push($('<div class="paper"><div class="paper-holder"><img title='+i+'.jpg></div></div>'));
		//$('#main-section').append('<div class="paper"><div class="paper-holder"><img title='+i+'.jpg></div></div>')
		$grid.append($items[i]);
	}
	
	var new_img = $('.paper-holder img');
	new_img.attr("id",function(arr){
		return cName+"_"+arr;
	})
	.attr("src",function(){
		return "img/country/"+cName+"/"+cName+"_"+this.title;
	})
	.each(function(idx){
		$('.paper-holder').eq(idx).append(this)
	})
	image = $('img');
	//console.log($items);
	//console.log($grid);
	setTimeout(function(){
		$items.forEach(function(value,idx){
			$grid.masonry('appended',$items[idx])
		})
	},100)	
}
//팝업창에 메세지 전송
function myFunction(input_val) {
    var tar_width = $(document).width()/2-350;
    var tar_height = $(window).height()/2-250;
    //console.log(tar_width);
    //console.log(tar_height);
    myWindow = window.open("calendar.html", "myWindow", "width=700,height=500,left="+tar_width+",top="+tar_height+"");
    //팝업창이 완전히 켜지기 기다렸다가 메세지 전송
    setTimeout(function(){
  		myWindow.postMessage(input_val,"*");  	
    }, 100);
}
//시작
$(document).ready(function(){
//modal창에서 이미지 검색할 경우 사용
	image = $('img');
//calendar 처리
	var myWindow;
	var date = new Date();
	var selected_day=date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
	//팝업창에서 골라진 날짜를 받아옴
	window.addEventListener("message", function(event) {
        //추후 유지 관리에 사용
		selected_day = event.data;
	    }, false);
	$('#day_picker').on('click',function(){
		//console.log('hi')
	  myFunction(selected_day);
	})
	
//국가 목록
	var countryList = [{'name':'india', 'num':26},{'name':'america','num':10},{'name':'czech','num':11},{'name':'england','num':14},{'name':'europe','num':18},
	{'name':'spain','num':11},{'name':'iceland','num':11},{'name':'italia','num':14}];
	//사진을 보여주는 기본값 "America"
	var Country = "America";
//사진을 뿌려주는 함수 호출

	// jQuery Masonry 플러그인 적용
    $grid=$('#main-section').masonry({
        itemSelector:'.paper',
    	columnWidth: 230,
        isAnimated: true
    });
showPhoto(countryList[1])

/*$('#main-section').imagesLoaded(function () {
			alert('1');
			// jQuery Masonry 플러그인 적용
			$masonry = $('#main-section').masonry({
				itemSelector :'.paper',
				columWidth:230,
				isAnimated:true
			});
		});	
*/
//nav에서 국가를 선택시
$('.country').on('click',function(){
	Country = $(this).text();
	for(var i in countryList){
		if(Country.toLowerCase() == countryList[i].name){
			showPhoto(countryList[i]);
		}
	}
})
//국가 검색 버튼 사용시
$('#searchBtn').on('click',function(){
	var flag = true;
	Country = $('#search').val();
	for(var i in countryList){
		if(Country.toLowerCase() == countryList[i].name){
			showPhoto(countryList[i]);
			alert('검색 성공');
			$('#search').val("");
			flag = false;
			break;
		}
	}
	if(flag){
		alert("존재하지 않는 국가입니다. 다시 검색해주세요");
		$('#search').val("");
		$('#search').focus();
	}
	/*//이미지 로드 확인
	$('#main-section').imagesLoaded(function () {
		// jQuery Masonry 플러그인 적용
	    $('#main-section').masonry({
	        itemSelector: '.paper',
	        columnWidth: 230,
	        isAnimated: true
	    });
	});*/
})


//*****************modal 처리하기*****************
fileDesc = [{'id':'India_0','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'India_1','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'India_2','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'America_0','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'America_1','head':"미래의 다짐","desc":"2013년 캘리포니아주의 스탬퍼드 대학교에서 HP창시자인 휴렛&페커드 처럼 프로그래머로서 성공해보자는 친구와의 다짐"},
            {'id':'America_2','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_0','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_1','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_2','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_3','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_4','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_5','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_6','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_7','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_8','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_9','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Europe_10','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Italia_0','head':"이탈리아0","desc":"이건 무슨 사진이지?"},
            {'id':'Italia_1','head':"이탈리아1","desc":"요건 뭘까?"},
            {'id':'Italia_2','head':"이탈리아2","desc":"귱구미 귱구미"},
            {'id':'Italia_3','head':"이탈리아3","desc":"Who am I?"},
            {'id':'Italia_4','head':"이탈리아4","desc":"나는 누굴까요?"},
            {'id':'Italia_5','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Italia_6','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Italia_7','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Italia_8','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Italia_9','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Italia_10','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Italia_11','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Czech_0','head':"슬픔","desc":"나의 슬픈 감정을 표현"},
            {'id':'Czech_1','head':"슬픔","desc":"나의 슬픈 감정을 표현"}];
/* var image = $('img'); */
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
//console.log('modal'+modal)
//console.log('span'+span)
//이미지를 클릭했을 경우
image.on('click',function(){
	//console.log(this.id)
	$('.modal-header').empty();
	$('.modal-body').empty();
	$('.modal-footer').empty();
	//클린된 이미지에 대한 정보를 찾는다
	for(var i in fileDesc){
		
		//console.log(fileDesc[i].id)
		//console.log(this.id)
		//저장된 정보와 클린된 이미지의 제목이 같을경우
		if(fileDesc[i].id==this.id){
			//modal에  있던 이전 정보 초기화
        	var img_src = this.src.split("first_project/");
        	$('.modal-header').append("<h2>"+fileDesc[i].head+"<h2>")
        	$('.modal-body').append("<img src='"+img_src[1]+"'style='width:70%;'>");
        	$('.modal-footer').append("<span>"+fileDesc[i].desc+"<span>")
		}
	}
	modal.style.display="block";
})

/////////////////////////////////////
//When the user clicks on <span> (x), close the modal
span.onclick = function(){
	modal.style.display="none";
} 

//When the user clicks anywhere out side of the modal, close it
window.onclick = function(event){
    if(event.target == modal){
    	modal.style.display="none";
    }
}
//*****************modal 처리 끝******************

})