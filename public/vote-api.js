window.onload = function () {

    window.fetch('/ballot')
        .then( (resp) => resp.json())
        .then( function (data) {
            // console.log(data);
            let questionHeader = document.getElementById('question');
            let choicesList = document.getElementById('choices');

            questionHeader.innerText = data.question;

            let answers = data.answers;

            data.choices.forEach(function (choice) {
                let listItem = document.createElement('li');
                listItem.classList.add('choice', 'flex-center');
                listItem.innerText = choice;
                choicesList.appendChild(listItem);
            });
        })
        .catch( function (error) {
            window.alert('There was an error loading the ballot');
        });

}
