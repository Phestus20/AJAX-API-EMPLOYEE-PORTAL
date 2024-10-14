import { CoderHttp } from "./api/CoderHttp.js"; 
const serverUrl = `http://127.0.0.1:5000/api`;
//GET

let getBtn = document.querySelector('#get-btn');

getBtn.addEventListener('click', ()=>{
    fetchEployees();
})

let fetchEployees = ()=>{
    // ajax calls
    let http = new CoderHttp();
    let url = `${serverUrl}/employees`;

   //let users =  http.get(url); 
   //console.log(users); // will be undefined cause we are calling get which has another function or use callback
   http.get(url, (err, employees)=>{
        if(err) throw err;
        let i = 1;
        let tableRows ='';
       for(let employee of employees){

        tableRows += `<tr>
                    <td class=''>${i++}</td>
                    <td>${employee.id} </td>
                    <td>${employee.first_name} </td>
                    <td>${employee.last_name} </td>
                    <td>${employee.email} </td>
                    <td>${employee.gender} </td>
                    <td>${employee.ip_address} </td>
                 </tr>`

       }

       document.querySelector('#table-body').innerHTML = tableRows;
   })

}

let postBtn = document.querySelector('#post-btn');
postBtn.addEventListener('click', ()=>{
let url = `${serverUrl}/employees`;
// create employee
let employee = {
    first_name: "Phestus4",
    last_name: "Fiston4",
    email: "fpest@gmail.com4",
    gender: "male",
    ip_address: "127.0.0.7"
}

    let http = new CoderHttp();

    http.post(url, employee, (data)=>{ // callback for the coming back data
        alert(JSON.stringify(data));
        fetchEployees();

    })
});




let putBtn = document.querySelector('#put-btn');
putBtn.addEventListener('click', ()=>{
    let empId = '4568p1g7';

    let employeeInfo = {
        id: empId,
        first_name: "Exodus",
        last_name: "Liviticus",
        email: "Liviticus@gmail.com",
        gender: "Male",
        ip_address: "255.2234.2258"
    }

    let url = `${serverUrl}/employees/${empId}`;

    let http = new CoderHttp();

    http.put(url, employeeInfo, (data)=>{
        alert(JSON.stringify(data));
        fetchEployees();
    })
})



let deleteBtn = document.querySelector('#delete-btn');
deleteBtn.addEventListener('click', ()=>{
    let empId = '4568p1g7';
    let url = `${serverUrl}/employees/${empId}`;

    let http = new CoderHttp();
    http.delete(url, (data)=>{
        alert(JSON.stringify(data));
        fetchEployees();
    })
})

