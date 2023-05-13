function printExpenseDetail(event) {
    event.preventDefault();
    // Get form input values
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("select").value;

    // converting userdetail into object
    var userDetail = {Amount:amount,Description:description,Category:category};

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
        var li = event.target.parentElement;
          var description = JSON.parse(li.firstChild.textContent).Description;
          
          itemList.removeChild(li);
          localStorage.removeItem(`${description}`);
          
      }
      else if(event.target.classList.contains('edit')){
        var li = event.target.parentElement;
          var description = JSON.parse(li.firstChild.textContent).Description;
          
          itemList.removeChild(li);
          localStorage.removeItem(`${description}`);
          document.getElementById("amount").value = amount;
  document.getElementById("description").value = description;
  document.getElementById("select").value = category;
      }
    }
    localStorage.setItem(description, stringUserDetail);
    document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("select").value = "";
}