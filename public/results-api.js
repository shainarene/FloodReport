window.onload = function () {

    window.fetch('/tally')
    .then( (resp) => resp.json())
    .then( function (data) {
        let questionHeader = document.getElementById('question');
        questionHeader.innerText = data.question;

        let resultsList = document.getElementById('results');

        for (result in data.results) {
            let listItem = document.createElement('li');
            listItem.classList.add('result', 'flex-center');
            listItem.innerText = result + ': ' + data.results[result];
            resultsList.appendChild(listItem);
        }
    });

}
