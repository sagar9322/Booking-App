
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

  //now uploding post to server
  axios.post("https://crudcrud.com/api/f8ee20b66e8d424e8056a34d9a9d2434/bookingapp/", userDetail)
    .then(() => {
      getUserDetailsFromServer(); // Fetch user details after successful POST request
    })

  //calling getuserdetail function to show user detail when we click button

  var itemList = document.getElementById('items');
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

  deleteBtn.onclick = (event) => {
    event.preventDefault();
    deleteFromServer(uniqId);
    itemList.removeChild(li);
  }
  editBtn.onclick = (event) => {
    event.preventDefault();
    deleteFromServer(uniqId);
    itemList.removeChild(li);
    // filling all value in input field to edit
    document.getElementById("fname").value = userDetail.Name;
    document.getElementById("email").value = userDetail.Email;
    document.getElementById("phone").value = userDetail.Phone;
    document.getElementById("date").value = userDetail.Date;
    document.getElementById("time").value = userDetail.Time;
  }


  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  itemList.appendChild(li);

  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";

}

function deleteFromServer(uniqId) {

  axios.delete(`https://crudcrud.com/api/f8ee20b66e8d424e8056a34d9a9d2434/bookingapp/${uniqId}`)
    .then(() => {
      getUserDetailsFromServer(); // Fetch user details after successful DELETE request
    })
  // getUserDetailsFromServer()
}

function getUserDetailsFromServer() {
  axios.get("https://crudcrud.com/api/f8ee20b66e8d424e8056a34d9a9d2434/bookingapp/")
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

        deleteBtn.onclick = (event) => {
          event.preventDefault();
          deleteFromServer(uniqId);
          itemList.removeChild(li);
        }
        editBtn.onclick = (event) => {
          event.preventDefault();
          deleteFromServer(uniqId);
          itemList.removeChild(li);
          // filling all value in input field to edit
          document.getElementById("fname").value = userDetail.Name;
          document.getElementById("email").value = userDetail.Email;
          document.getElementById("phone").value = userDetail.Phone;
          document.getElementById("date").value = userDetail.Date;
          document.getElementById("time").value = userDetail.Time;
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
// getUserDetailsFromServer();
