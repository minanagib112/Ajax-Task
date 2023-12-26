const usersDiv = document.getElementById("users");

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Specify the request method, URL, and asynchronous flag
xhr.open("GET", "https://reqres.in/api/users?page=2", true);

// Add an event handler for when the request is completed
xhr.onload = function () {
  if (xhr.status == 200) {
    const data = JSON.parse(xhr.responseText);
    const users = data.data;
    for (let user of users) {
      const img = document.createElement("img");
      // Set the src attribute to the user's avatar URL
      img.src = user.avatar;
      // Append the img element to the users div
      usersDiv.appendChild(img);
      // Create a p element for the user's email
      const p = document.createElement("p");
      p.textContent = user.email;
      // Append the p element to the users div
      usersDiv.appendChild(p);
    }
  } else {
    alert("Something went wrong: " + xhr.statusText);
  }
};

// Sendinf request to server
xhr.send();
