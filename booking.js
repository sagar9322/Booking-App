
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
    deleteFromServer(userDetail);
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

  axios.post("https://crudcrud.com/api/3b5e6bd0a5b54080b708a64ed892e11c/bookingapp/", userDetail)
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
  // getUserDetailsFromServer();
}

function deleteFromServer(uniqId) {
  // Assuming userDetail.Description is the unique identifier for each user detail
  // const uniqueIdentifier = userDetail.Name;
  console.log(uniqId)

  axios.delete(`https://crudcrud.com/api/3b5e6bd0a5b54080b708a64ed892e11c/bookingapp/${uniqId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getUserDetailsFromServer() {
  axios.get("https://crudcrud.com/api/3b5e6bd0a5b54080b708a64ed892e11c/bookingapp")
    .then((res) => {
      var itemList = document.getElementById('items');
      itemList.innerHTML = ""; // Clear the current list
      for (let i = 0; i < res.data.length; i++) {
        const userDetail = res.data[i];
        uniqId = res.data[i]['_id'];
        var displayDetail = userDetail.Name + '-' + userDetail.Email + '-' + userDetail.Phone + '-' + userDetail.Date + '-' + userDetail.Time;

        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(displayDetail));

        var deleteBtn = document.createElement('button');
        var editBtn = document.createElement('button');

        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        editBtn.className = 'btn btn-primary btn-sm float-right edit';

        deleteBtn.style.float = 'right';
        editBtn.style.float = 'right';
        editBtn.style.marginRight = '5px';
        editBtn.style.marginLeft = '5px';

        deleteBtn.appendChild(document.createTextNode('Delete'));
        editBtn.appendChild(document.createTextNode('Edit'));

        deleteBtn.onclick = () => {
          deleteFromServer(uniqId);
          itemList.removeChild(li);
        }
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        itemList.appendChild(li);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// Call getUserDetailsFromServer() when the page is loaded
window.addEventListener("DOMContentLoaded", getUserDetailsFromServer);
