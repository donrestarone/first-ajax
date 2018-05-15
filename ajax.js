document.addEventListener("DOMContentLoaded", function() {
	var sectionOne = document.getElementById("step12");
	var sectionTwo = document.getElementById("step3456");
	var firstTitle = document.getElementById("titleOne");
	var secondTitle = document.getElementById("titleTwo");
	var rootAjax = document.getElementById("rootbutton");
	var ajaxPingPong = document.getElementById("pingPong");

	rootAjax.addEventListener('click', function(){
		$.ajax({
		url: 'http://first-ajax-api.herokuapp.com/',
		method: 'GET',
		}).done(function(data){
			console.log('made request')
			firstTitle.innerText = 'made request'
			console.log(data);
		}).fail(function(){
			console.log('failed')
			firstTitle.innerText = 'Request failed'
		});
	})

	ajaxPingPong.addEventListener('click', function(){
		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/ping',
			method: 'GET',
			dataType: 'text',
		}).done(function(data){
			var pTag = document.createElement('p');
			console.log('made request to ping');
			console.log(data);
			pTag.innerText = data;
			sectionTwo.append(pTag);
		}).fail(function(){
			console.log('failed response to ping');
			pTag.innerText = 'failed response to ping';
			sectionTwo.append(pTag);
		});
	})


	
});
