// apiRouter.js

const express = require('express');
const router = express.Router();

// employee data
let employees = [
    {
        id: '4568p1g7',
        first_name: 'John',
        last_name: 'Doe',
        email: 'doe@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '5425p1g5',
        first_name: 'Mark',
        last_name: 'Mikky',
        email: 'mark@gmail.com',
        gender: 'male',
        ip_address: '127.0.5.1'
    }
];

let getID = () => {
    return '_' + Math.random().toString(36).substring(2, 9);
};

// GET ALL EMPLOYEES
router.get('/employees', (req, res) => {
    console.log(`GET request received at server... ${new Date().toLocaleTimeString()}`);
    res.json(employees);
});

// GET EMPLOYEE BY ID
router.get('/employees/:id', (req, res) => {
    console.log(`GET request received at server... ${new Date().toLocaleTimeString()}`);
    const employee = employees.find(emp => emp.id === req.params.id);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ msg: "Employee not found" });
    }
});

// POST EMPLOYEE
router.post('/employees', (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Content-Type:', req.get('Content-Type'));
    console.log('Received body:', req.body);
    
    let employee = {
        id: getID(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        ip_address: req.body.ip_address
    };
    
    console.log('Created employee:', employee);
    employees.push(employee);
    res.json({ msg: "POST request is successful", employee: employee });
});


// PUT EMPLOYEE
router.put('/employees/:id', (req, res) => {
    let empId = req.params.id;
    let employeeIndex = employees.findIndex((employee) => employee.id === empId);

    if (employeeIndex !== -1) {
        let updateEmployee = {
            id: empId,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender,
            ip_address: req.body.ip_address
        };

        employees[employeeIndex] = updateEmployee;

        console.log(`PUT request received at server... ${new Date().toLocaleTimeString()}`);
        res.json({ msg: "PUT request is successful", employee: updateEmployee });
    } else {
        res.status(404).json({ msg: "Employee not found" });
    }
});

// DELETE EMPLOYEE
router.delete('/employees/:id', (req, res) => {
    let empId = req.params.id;
    let initialLength = employees.length;
    employees = employees.filter((employee) => employee.id !== empId);
    
    if (employees.length < initialLength) {
        console.log(`DELETE request received at server... ${new Date().toLocaleTimeString()}`);
        res.json({ msg: "DELETE request is successful" });
    } else {
        res.status(404).json({ msg: "Employee not found" });
    }
});

module.exports = router;