/*//사진 보여주기
function showPhoto(cName){
	$('.gallery_photo_cover').empty();
for(i=0;i<=10;i++){
		$('.gallery_photo_cover').append("<img title="+i+".jpg>");
	}
	var new_img = $('.gallery_photo_cover img');
	new_img.attr("id",function(arr){
		return cName+"_"+arr;
	})
	.attr("src",function(){
		return "img/country/"+cName+"/"+cName+"_"+this.title;
	})
	.each(function(){
		$('.gallery_photo_cover').append(this)
	})
	image = $('img');
}*/
//첫글자만 대문자로 만들기
function capitalizeFistLetter(string){
	return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}


//사진 보여주기
function showPhoto(cList){
	console.log(cList.name);
	cName = capitalizeFistLetter(cList.name);
	console.log(cList.num);
	$('.paper-holder').empty();
	debugger;
for(i=0;i<=cList.num;i++){
		$('.paper-holder').append("<img title="+i+".jpg>");
	}
	var new_img = $('.paper-holder img');
	new_img.attr("id",function(arr){
		return cName+"_"+arr;
	})
	.attr("src",function(){
		return "img/country/"+cName+"/"+cName+"_"+this.title;
	})
	.each(function(){
		$('.paper-holder').append(this)
	})
	image = $('img');
}







//시작
$(document).ready(function(){
	image = $('img');
//국가 목록
var countryList = [{'name':'india', 'num':26},{'name':'america','num':10},{'name':'czech','num':11},{'name':'england','num':14},{'name':'europe','num':18},
{'name':'spain','num':11},{'name':'iceland','num':11},{'name':'italia','num':14}];
//사진을 보여주는 기본값 "America"
var Country = "America";
//사진을 뿌려주는 함수 호출
//showPhoto(Country)

showPhoto(countryList[1])
//이미지 로드 확인
$('#main-section').imagesLoaded(function () {
	// jQuery Masonry 플러그인 적용
    $('#main-section').masonry({
        itemSelector: '.paper',
        columnWidth: 230,
        isAnimated: true
    });
});


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
//이미지를 클릭했을 경우
image.on('click',function(){
	console.log(this.id)
	$('.modal-header').empty();
	$('.modal-body').empty();
	$('.modal-footer').empty();
	//클린된 이미지에 대한 정보를 찾는다
	for(var i in fileDesc){
		
		console.log(fileDesc[i].id)
		console.log(this.id)
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
//////////////////////////////////
//열어보세요
/*$('.gallery').on('click','img',function(){
	console.log(this.id)
	$('.modal-header').empty();
	$('.modal-body').empty();
	$('.modal-footer').empty();
	//클린된 이미지에 대한 정보를 찾는다
	for(var i in fileDesc){
		
		console.log(fileDesc[i].id)
		console.log(this.id)
		//저장된 정보와 클린된 이미지의 제목이 같을경우
		if(fileDesc[i].id==this.id){
			//modal에  있던 이전 정보 초기화
			
        	var img_src = this.src.split("firstProject/");
        	$('.modal-header').append("<h2>"+fileDesc[i].head+"<h2>")
        	$('.modal-body').append("<img src='"+img_src[1]+"'style='width:70%;'>");
        	$('.modal-footer').append("<span>"+fileDesc[i].desc+"<span>")
		}
	}
	modal.style.display="block";
})*/
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
/* //*****************google map******************
function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}

	function showPosition(position) {
	    my_lat= position.coords.latitude;
	    my_lon= position.coords.longitude;
	    initMap(my_lat,my_lon)
	}
	
	function initMap(my_lat, my_lon) {
		var myLatlng = new google.maps.LatLng(my_lat, my_lon);
		var mapOptions = {
				zoom:5,
				center:myLatlng
		}
	  map = new google.maps.Map(document.getElementById('map'), mapOptions);
		var marker = new google.maps.Marker({
		    position: myLatlng,
		    title:"Hello World!"
		});

		// To add the marker to the map, call setMap();
		marker.setMap(map);
	}
//*****************google map 끝**************** */
})