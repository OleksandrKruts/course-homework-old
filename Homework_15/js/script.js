"use strict";

let list = document.getElementById("albums");

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      
      let li = document.createElement("li");
      li.className = "album_title";
      list.append(li);
      li.append(element.title);
      
      
    });
    console.log(list)
    document.body.style.backgroundColor = "#B0C4DE";
    
  })
  .catch((error) => console.error(error));
