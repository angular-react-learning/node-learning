const express = require("express");
const app = express();
const axios = require("axios").default;
const Employees = require("./employee.json");
const Projects = require("./project.json");

app.get("/employee/:id", (req, res)=>{
    const empID = req.params.id;
    for (let index = 0; index < Employees.length; index++) {
        const employee = Employees[index];
        if(employee.employeeid === parseInt(empID, 10))
            {
                res.send(employee);
            }
    }
    res.send({});
})

app.get("/project/:id", (req, res)=>{
    const projectID = req.params.id
    for (let index = 0; index < Projects.length; index++) {
        const project = Projects[index];
        if(project.projectid === parseInt(projectID, 10))
            {
                res.send(project);
            }
    }
    res.send({});
})

app.get("/getemployeedetails/:id", async (req, res)=>{
    try {
        const empID = req.params.id
        const employeeData = await axios.get(`http://localhost:3001/employee/${empID}`);
        const projectData = await axios.get(`http://localhost:3001/project/${employeeData.data.project}`)
        res.send({...employeeData.data, project : projectData.data });
    } catch (error) {
        console.error(error);   
    }
    
})

app.listen(3001)