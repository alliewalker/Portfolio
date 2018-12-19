// fetch("https://www.songsterr.com/a/ra/songs.json?pattern=")
// .then(response => response.json())
// .then(json => console.log(json))

const baseURL = "https://www.songsterr.com/a/ra/songs.json?pattern=" //Will always be the same, whats after = will change
const searchTerm = document.querySelector('.search'); //document is the "DOCTYPE" in html "document"
const submitBtn = document.querySelector('.submit'); //querySelector is a specialized searcher 
const searchForm = document.querySelector('form');
const section = document.querySelector('section');
let url;

searchForm.addEventListener('submit', fetchResults); //when 'submit' do the function below. If you dont have 
//an event listener, the URL with the Marley example would just give you a page with all of the Marley info without buttons or clicks.

function fetchResults(e) {  //e-Event .preventDefault stops the page from refreshing in order to show the results. 
e.preventDefault();
url = baseURL + searchTerm.value;
// console.log('URL:', url);

fetch(url)                //fetch and .then are promises to get the info and then put it through the new results function and give it to you as json.
.then(function(result) {
  console.log(result)
  return result.json();
})

.then(function(arrayResults) {
  displayResults(arrayResults);
})
}

function displayResults(arrayResults) {  

  while (section.firstChild){
  section.removeChild(section.firstChild);
}

  // console.log(arrayResults);
  for(let i = 0; i < arrayResults.length; i++) {

    let titleElement = document.createElement('h2');
    let artistElement = document.createElement('span');

    titleElement.innerText = 'Title: '+ arrayResults[i].title;
    artistElement.innerText = 'Artist: ' + arrayResults[i].artist.name;

    section.appendChild(titleElement);
    section.appendChild(artistElement);
  }
}


//^^^ this is telling us who's birthday it is. 