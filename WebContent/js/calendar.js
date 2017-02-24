var date = new Date();	
var nowYear = date.getFullYear();
var	nowMonth = date.getMonth();
$(document).ready(function(){
	//리스너
	var res= ''
	window.addEventListener("message", function(event) {
            var gotDate=event.data;
            res = gotDate.split('/');
            console.log(res)

            $('td').text('')
            nowYear = parseInt(res[0]);
            nowMonth = parseInt(res[1])-1;
            var nowDate = parseInt(res[2]);

            var first_lastDay = getFirstDay(nowYear,nowMonth);
						console.log(first_lastDay);
						draw(first_lastDay,'#lableYear')
						removeDatecheck('td');
						$('td').each(function(idx){
							$('td').eq(nowDate+first_lastDay[0]-1).addClass('today');
						})
        }, false);

	var $table = $('table tbody');
	init($table,'#lableYear');
	var first_lastDay = getFirstDay(nowYear,nowMonth);
	console.log(first_lastDay);
	draw(first_lastDay)
	
	//버튼 이벤트
	$('button').on('click',function(){
		removeDatecheck('td');
		$('td').text('')
		switch($(this).attr('id')){
			case 'preYear':
				nowYear = preYear();
				break;
			case 'preMonth':
				nowMonth=preMonth();
				console.log(nowMonth)
				break;
			case 'nextMonth':
				nowMonth=nextMonth();
				break;
			case 'nextYear':
				nowYear = nextYear();
				break;
			case 'todayBtn':
				date.setFullYear(new Date().getFullYear());
				date.setMonth(new Date().getMonth());
				nowYear = date.getFullYear();
				nowMonth = date.getMonth();
				break;
		}
		//init($table,'#lableYear');
		var first_lastDay = getFirstDay(nowYear,nowMonth);
		console.log(first_lastDay);
		draw(first_lastDay,'#lableYear')
	})
	$('table').on('click','td',function(){
			date.setDate(parseInt($(this).text()))
			var txt=(date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate())
			console.log(txt);
			var parentWindow = window.opener;
    	console.log(parentWindow)
    	parentWindow.postMessage(txt,'*')
    	window.close();
	})
});
function removeDatecheck(selector){
	$(selector).each(function(idx){
							$(this).removeClass('today')
						})
}
//날짜 찾기
function findDate(find_year,find_month,find_date){
	var first_lastDay = getFirstDay(find_year,find_month);
	console.log('today'+first_lastDay);
	draw(first_lastDay)

	$('td').eq(find_date+first_lastDay[0]-1).addClass('today');
}

//이전년
function preYear(){
	date.setFullYear(nowYear-1);
	return date.getFullYear();
}
//이전달
function preMonth(){
	var pre_month_year;
		date.setMonth(nowMonth-1);
	return date.getMonth();
}
//내년
function nextYear(){
	date.setFullYear(nowYear+1);
	return date.getFullYear();
}
//다음달
function nextMonth(){
	date.setMonth(nowMonth+1);
	return date.getMonth();
}
//오늘표시
function today(){
	var d = new Date();
	var first_lastday = getFirstDay(d.getFullYear(),d.getMonth())
	console.log('gkgk'+date.getMonth()+' '+d.getMonth())
	if(date.getMonth()==d.getMonth()&&date.getYear()==d.getYear()){
		console.log('true')
		console.log(d.getDate()+first_lastday[0]-1)
	$('td').eq(d.getDate()+first_lastday[0]-1).addClass('today');}
	else{
		console.log('false')
		console.log(d.getDate()+first_lastday[0]-1)
		$('td').eq(d.getDate()+first_lastday[0]-1).removeClass('today');
	}
}
//달력 채우기
function draw(first_lastday,selector){
	var calDay=1;
	for(var i=first_lastday[0];i<first_lastday[1]+first_lastday[0];i++){
		$('td').eq(i).text(calDay++);
	}
	$(selector).text(nowYear+'년 ' +(nowMonth+1)+'월' );
	today();
}
//달력 그리기
function init($table,selector1){
	$(selector1).text(nowYear+'년 ' +(nowMonth+1)+'월' )
	for(var i=0;i<6;i++){
		$table.append('<tr>')
			for(var j=0;j<7;j++)
				if(j==0)
					$table.append('<td class="sun"></td>')
				else if(j==6)
					$table.append('<td class="sat"></td>')
				else
					$table.append('<td></td>')
		$table.append("</tr>")
	}
}
//첫번째날 찾기
function getFirstDay(setYear, setMonth){
	var firstDate = new Date();
	firstDate.setFullYear(setYear, setMonth,1)
	var first_last = [];
	first_last.push(firstDate.getDay())
	var d = new Date(setYear,setMonth+1,0)
	first_last.push(d.getDate())
	return first_last;
}
