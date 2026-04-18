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
    

      let button = document.createElement("button");
      button.innerHTML = "Delete";
      button.className = "Delele_li";
      li.append(button);


      list.onclick = (event) => {
        let isRemoveLI = event.target.className === "Delele_li";

        if (isRemoveLI) {
          let album_titleBlock = event.target.closest(".album_title");
          album_titleBlock.remove();
        }
      };
    });

    console.log(list);
    document.body.style.backgroundColor = "#B0C4DE";
  })
  .catch((error) => console.error(error));