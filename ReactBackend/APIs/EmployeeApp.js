import exp from 'express';
import { EmployeeModel } from '../models/EmployeeModel.js';
export const employeeApp = exp.Router();

// 1. CREATE Employee
employeeApp.post('/employees', async (req, res) => {
    try {
        const employee = new EmployeeModel(req.body);
        await employee.save(); // FIXED: using the model instance 'employee'
        res.status(201).json({ message: "Employee created", payload: employee });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 2. READ ALL Employees (FIXED: This was your React function, replaced with Express route)
employeeApp.get('/employees', async (req, res) => {
    try {
        const list = await EmployeeModel.find();
        res.status(200).json({ message: "Employee List", payload: list });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Update Employee 
employeeApp.put('/employees/:id', async (req, res) => {
    const modifiedEmp = req.body;
    try {
        const updated = await EmployeeModel.findByIdAndUpdate(
            req.params.id,
            { $set: { ...modifiedEmp } },
            { new: true } // 'new: true' is the standard way to return the updated doc
        );
        if (!updated) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee updated successfully", payload: updated });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. Delete Employee by id
employeeApp.delete('/employees/:id', async (req, res) => {
    try {
        let deletedEmp = await EmployeeModel.findByIdAndDelete(req.params.id);
        if (!deletedEmp) {
            return res.status(404).json({ message: "emp not found" });
        }
        res.status(200).json({ message: "employee deleted", payload: deletedEmp });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});