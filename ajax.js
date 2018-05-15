document.addEventListener("DOMContentLoaded", function() {
	var sectionOne = document.getElementById("step12");
	var firstTitle = document.getElementById("titleOne");
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
	})
});
