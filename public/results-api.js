window.onload = function(){ //don't run anything until the page loads
	window.fetch('/tally') //get the endpoint
	.then( function (response){
		return response.json();  //turn the text response into a json object
	})
	
	.then(function (data){
		let questionHeader = document.getElementById('question');
		questionHeader.innerText = data.question; //replace the text with what was at the endpoint
		
		let resultsList = document.getElementById('results');
		for (result in data.results){
			let listItem = document.createElement('li');
			listItem.classList.add('result', 'flex-center');
			listItem.innerText = result + ': ' + data.results[result]; // data.results[result] get the information at that key
			resultsList.appendChild(listItem);
		}
	});
};