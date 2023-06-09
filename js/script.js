

function addRSStoDOM(data) {
  let itemsContainer = document.createElement('DIV');

  for (let i = 0, t = data.items.length; i < t; ++i) {
    let item = data.items[i];  
    let itemContainer = document.createElement('DIV');
    let itemLinkElement = document.createElement('A');
    itemLinkElement.setAttribute('href', item.link);
    itemLinkElement.innerText = item.title;
    let itemTitleElement = document.createElement('H2');
    itemTitleElement.appendChild(itemLinkElement);
    let itemDescriptionElement = document.createElement('P');
    itemDescriptionElement.innerHTML = item.description;
    itemContainer.appendChild(itemTitleElement);
    itemContainer.appendChild(itemDescriptionElement);
    itemsContainer.appendChild(itemContainer);
  }

  //asked chatGPT why "rss feed is showing the "The request failed, please check your RSS url" is showing (ChatGPT 2023)
  function addRSStoDOM(data) {
    let content = document.getElementsByTagName('main')[0];
    let itemsContainer = document.createElement('DIV');
  
 
  }
  

  let titleElement = document.createElement('H1');
  titleElement.innerText = data.feed.title;
  content.appendChild(titleElement);
  content.appendChild(itemsContainer);
}

// Create the element
var content = document.getElementsByTagName('main')[0]
var xhr = new XMLHttpRequest();
xhr.onload = function() { 
  if (xhr.status >=200 && xhr.status < 300) {
    json = JSON.parse(xhr.responseText)
    console.log(json)
    addRSStoDOM(json)
  }else{
    console.log("The request failed")
    content.innerHTML = "The request failed, please check your RSS url"
  }

}

let addFeedButton = document.getElementById("add-feed");
let newRSSInput = document.getElementById("rss-input");


function onAddRSSClicked(event) {
  let URL = newRSSInput.value;
  newRSSInput.value = "";

  // Create and send a GET request
  // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
  // The second argument is the endpoint URL
  xhr.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=' + URL);
  xhr.send();
}






addFeedButton.addEventListener('click', onAddRSSClicked);
