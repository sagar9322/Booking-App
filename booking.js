// var count = localStorage.length+1;
//       var button = document.getElementById("btn");
//       button.addEventListener("click", function(e) {
//         e.preventDefault;
//          count++;
    
//       });

    
function printUserDetail(event) {
    event.preventDefault();
    // Get form input values
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // converting userdetail into object
    var userDetail = {Name:name,Email:email,Phone:phone,Date:date,Time:time};

    // converting object to string
    let stringUserDetail = JSON.stringify(userDetail);

    // making addevent and remove event 
    var itemList = document.getElementById('items');
    itemList.addEventListener('click', removeItem);
    // itemList.addEventListener('dblclick', editDetails);

    //making new element li
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(stringUserDetail));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    
  
    // Append li to list
    itemList.appendChild(li);

    // remove li function
    function removeItem(event){
      event.preventDefault();
      
      if(event.target.classList.contains('delete')){
        console.log(event.target.classList);
        var li = event.target.parentElement;
          var email = JSON.parse(li.firstChild.textContent).Email;
          
          itemList.removeChild(li);
          localStorage.removeItem(`${email}`);
          
      }
      else if(event.target.classList.contains('edit')){
        console.log(event.target.classList);
        var li = event.target.parentElement;
          var email = JSON.parse(li.firstChild.textContent).Email;
          
          itemList.removeChild(li);
          localStorage.removeItem(`${email}`);
          document.getElementById("fname").value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;
  document.getElementById("date").value = date;
  document.getElementById("time").value = time;
      }
    }
    localStorage.setItem(email, stringUserDetail);
    document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}