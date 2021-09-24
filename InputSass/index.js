document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let dob = document.getElementById("dob");
  alert(
    `${name.value} ${surname.value} has submitted the message on ${dob.value}`
  );
});
