function saveToLocalStorage(e){
  e.preventDefault();
  const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    let obj = {
      Name:name,
      Email:email,
      PhoneNumber:phone,
      Date:date,
      Time:time
    }
    localStorage.setItem(email ,JSON.stringify(obj));
}