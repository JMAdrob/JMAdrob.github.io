const cvData = async () => {
  let url = `https://randomuser.me/api/`;
  let response = await fetch(url);
  let { results } = await response.json();
  let data = results[0];

  photo.src = data.picture.large;
  name.textContent = data.name.first + " " + data.name.last;
  age.textContent = data.dob.age;
  nationality.textContent = data.location.country + ", " + data.location.state;

  console.log(data);
};

document.addEventListener("DOMContentLoaded", cvData);

let photo = document.querySelector(".photo");
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let nationality = document.querySelector(".nationality");
