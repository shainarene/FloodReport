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

                listItem.addEventListener('click', function (event) {
                    let choice = event.target.innerText;

                    window.fetch('ballot/' + choice, { method: "POST" })
                        .then( (resp) => resp.json() )
                        .then( function (data) {
                            if (data.error) {
                                window.alert(data.error);
                            } else {
                                window.location = 'results.html'
                            }
                        });
                });
                choicesList.appendChild(listItem);
            });
        })
        .catch( function (error) {
            window.alert('There was an error loading the ballot');
        });

}
