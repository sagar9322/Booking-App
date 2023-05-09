var count = localStorage.length+1;
      var button = document.getElementById("btn");
      button.addEventListener("click", function(e) {
        e.preventDefault;
         count++;
    
      });



function printUserDetail(event) {
    event.preventDefault();
    // Get form input values
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    let userDetail = {Name:name,Email:email,Phone:phone,Date:date,Time:time};
let stringUserDetail = JSON.stringify(userDetail);
    // adding in localstorage
    localStorage.setItem("Candidate-"+count, stringUserDetail);
    document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}