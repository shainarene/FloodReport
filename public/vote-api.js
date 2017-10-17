window.onload = function(){
	window.fetch('/ballot')
	.then( function (response){
		return response.json();
	})
	.then( function (data){
		let questionHeader = document.getElementById('question');
		questionHeader.innerText = data.question;
		
		let choicesList = document.getElementById('choices');
		
		let choices = data.choices;
		
		choices.forEach(function (choice){
			let listItem = document.createElement('li');
			listItem.innerText = choice;
			listItem.classList.add('choice', 'flex-center');
			listItem.addEventListener('click', function(event){
			let choice = event.target.innerText;
			window.fetch('ballot/' + choice, {method: 'POST'})
			.then(function (response){
				return response.json()
			})
			.then(function (voteData){
				if (voteData.error){
					window.alert(voteData.error);
				}else{
					window.location = 'results.html';
				}
			})
			});

			choicesList.appendChild(listItem);
		});	
	});
};