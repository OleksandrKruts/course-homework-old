"use strict";

 fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
 
  .then((result) => {
    let findUsers = result.find((item) => item.company.name === "Johns Group");
    let {name} = findUsers;
    console.log(name);
  })
  .catch((error) => console.error(error));

