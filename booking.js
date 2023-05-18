
function printUserDetail(event) {
  event.preventDefault();
  // Get form input values
  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // converting userdetail into object
  var userDetail = { Name: name, Email: email, Phone: phone, Date: date, Time: time };
  var displayDetail = userDetail.Name + '-' + userDetail.Email + '-' + userDetail.Phone + '-' + userDetail.Date + '-' + userDetail.Time;

  // converting object to string
  let stringUserDetail = JSON.stringify(userDetail);

  // making addevent and remove event 
  var itemList = document.getElementById('items');

  //making new element li
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(displayDetail));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-primary btn-sm float-right edit';

  deleteBtn.style.float = 'right';
  editBtn.style.float = 'right';
  editBtn.style.marginRight = '5px';
  editBtn.style.marginLeft = '5px';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete'));
  editBtn.appendChild(document.createTextNode('Edit'));

  
  deleteBtn.onclick = () => {
    localStorage.removeItem(userDetail.Description);
    itemList.removeChild(li);
  }
  editBtn.onclick = () => {
    localStorage.removeItem(userDetail.Description);
    itemList.removeChild(li);
    document.getElementById("amount").value = amount;
    document.getElementById("description").value = description;
    document.getElementById("select").value = category;
  }



  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);


  // Append li to list
  itemList.appendChild(li);

axios.post("https://crudcrud.com/api/53cd7ae4f1aa4298ab23399f975dc2f9/bookingapp/",userDetail)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
  // localStorage.setItem(email, stringUserDetail);
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}
