import { CoderHttp } from "./api/CoderHttp.js";
const serverUrl = "http://127.0.0.1:5000/api";

//if(typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded',()=>{
        fetchAllEmployees();
    })
 // }


let fetchAllEmployees = ()=>{

    let http = new CoderHttp();

let url = `${serverUrl}/employees`;

http.get(url, (err, employees)=>{

    if(err) throw err;
    let count = 1;
    let employeesRows =``;
    for(let employee of employees){

    employeesRows +=`<tr>
                    <td> ${count++}</td>
                    <td> ${employee.id}</td>
                    <td> ${employee.first_name}</td>
                    <td> ${employee.last_name}</td>
                    <td> ${employee.email}</td>
                    <td> ${employee.gender}</td>
                    <td> ${employee.ip_address}</td>
                    <td> <button class="btn btn-secondary btn-sm update"> Update</button> 
                    <button class="btn btn-danger btn-sm  delete"> Delete</button> </td>
                    </tr>`
   
    }  
    document.querySelector('#table-body').innerHTML = employeesRows;
})

}

document.querySelector('.add-employee-form').addEventListener('submit', function(e) {
    e.preventDefault(); // stop auto form submit

$('#add-employee-modal').modal('hide'); // to close the modal // using jquery

    let newEmployee = {
        first_name: document.getElementById('add-first-name').value,
        last_name: document.getElementById('add-last-name').value,
        email: document.getElementById('add-email').value,
        gender: document.getElementById('add-gender').value,
        ip_address: document.getElementById('add-ip-address').value
    };
  

let url = `${serverUrl}/employees`


    let http = new CoderHttp();
    http.post(url, newEmployee, (response) => {
        console.log(response);
        if(response) {
            fetchAllEmployees();
            clearFormFields();
        }
    });
  });

  let clearFormFields = ()=>{ // empty form fileds
     document.getElementById('add-first-name').value='';
      document.getElementById('add-last-name').value='';
       document.getElementById('add-email').value='';
        document.getElementById('add-gender').value='';
        document.getElementById('add-ip-address').value='';
  }


  // click event on entire table body to know what is clicked for update and delete

  let tableBody = document.querySelector('#table-body');

  tableBody.addEventListener('click', function(e){
    let targetElement = e.target;


    // delete
    if(targetElement.classList.contains('delete')){
       // let selectedId = targetElement.parentElement.parentElement.firstElementChild.innerHTML; // button->td->tr// 1st and 2nd parent 3rd// get 1st value inside tr
       let selectedId = targetElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
        let url = `${serverUrl}/employees/${selectedId.trim()}`;
        console.log(url)
        //delete
        let http = new CoderHttp();
        http.delete(url, (data)=>{
          
            fetchAllEmployees();
        })
    }


    //UPDATE
    if(targetElement.classList.contains('update')){
       let selectedId = targetElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
   
       
       let http = new CoderHttp();
       let url = `${serverUrl}/employees`;

       http.get(url, (err, employees)=>{
        if(err) throw err;

        let selectedEmployee = employees.find((employee)=>{
            return employee.id === selectedId.trim();
        });
       console.log(selectedEmployee);
        populateUpdateModal(selectedEmployee);
       })
    }
  })

 let populateUpdateModal = (selectedEmployee)=>{
    document.querySelector('#update-emp-id').value = selectedEmployee.id;
    document.querySelector('#update-first-name').value = selectedEmployee.first_name;
    document.querySelector('#update-last-name').value = selectedEmployee.last_name;
    document.querySelector('#update-email').value = selectedEmployee.email;
    document.querySelector('#update-gender').value = selectedEmployee.gender;
    document.querySelector('#update-ip-address').value = selectedEmployee.ip_address;
    $('#update-employee-modal').modal('show'); // to show the update modal // using jquery
 }

 // UPDATE FORM SUBMISSION
 let updateEmployeeForm = document.querySelector('#update-employee-form');

 updateEmployeeForm.addEventListener('submit', (e)=>{

let employeeID = document.querySelector('#update-emp-id').value.trim(); //get emp id

    e.preventDefault();

    $('#update-employee-modal').modal('hide'); // to show the update modal // using jquery

    let newEmployee = {
        first_name: document.getElementById('update-first-name').value,
        last_name: document.getElementById('update-last-name').value,
        email: document.getElementById('update-email').value,
        gender: document.getElementById('update-gender').value,
        ip_address: document.getElementById('update-ip-address').value
    };
  

let url = `${serverUrl}/employees/${employeeID}`

console.log(url);

    let http = new CoderHttp();
    http.put(url, newEmployee, (response) => {
        console.log(response);
        if(response) {
            fetchAllEmployees();
        }
    });
 })