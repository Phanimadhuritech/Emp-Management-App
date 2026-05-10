import { Schema, model } from 'mongoose';

const empSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name of the employee is mandatory']
  },
  email: {
    type: String,
    required: [true, 'Email of employee is required'],
    unique: true
  },
  mobile: {
    type: Number,
    minLength: [10, 'Mobile number must be at least 10 digits']
  },
  designation: {
    type: String,
    required: [true, 'Designation of employee is required']   
  },
  companyName:{
    type: String,
    required: [true, 'Company name of employee is required']
  },
},
  { strict: "throw", versionKey: false,timestamps: true },
);

export const EmployeeModel = model('Employee', empSchema);