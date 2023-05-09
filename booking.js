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

    // converting userdetail into object
    var userDetail = {Name:name,Email:email,Phone:phone,Date:date,Time:time};


    // converting object to string
    let stringUserDetail = JSON.stringify(userDetail);

    // making addevent and remove event 
    var itemList = document.getElementById('items');
    itemList.addEventListener('click', removeItem);

    //making new element li
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(JSON.stringify(userDetail)));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    
  
    // Append li to list
    itemList.appendChild(li);

    // remove li function
    function removeItem(e){
      if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
          var email = JSON.parse(li.firstChild.textContent).Email;
          
          itemList.removeChild(li);
          localStorage.removeItem(`${email}`);
          
      }
    }
    localStorage.setItem(email, stringUserDetail);
    document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}