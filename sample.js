let cart = {name:"sagar",age:30,degree:"B.E Mechanical", expereance: "7 year"};
var name1 = ["sagar", "dhaval", "ritva","vishva"];
    // axios.post("https://crudcrud.com/api/0926b57f6f9c4f2e887635f8513e28fe/book/", cart).then((res)=> console.log(res))

axios.get("https://crudcrud.com/api/0926b57f6f9c4f2e887635f8513e28fe/book/").then((res) => console.log(res))
    
// for(let i = 0; i < res.data.length; i++){
    
//     let id = res.data[i]["_id"];
//         axios.put(`https://crudcrud.com/api/0926b57f6f9c4f2e887635f8513e28fe/book/${id}`, {name: `${name1[i]}`});
//     }
// })
    