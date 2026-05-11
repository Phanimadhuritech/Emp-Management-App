import { Schema, model } from 'mongoose';

const empSchema = new Schema(
  {
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
      type: String,
      required: [true, 'Mobile number is required'],
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: 'Mobile number must be exactly 10 digits'
      }
    },

    designation: {
      type: String,
      required: [true, 'Designation of employee is required']
    },

    companyName: {
      type: String,
      required: [true, 'Company name of employee is required']
    }
  },
  {
    strict: "throw",
    versionKey: false,
    timestamps: true
  }
);

export const EmployeeModel = model('Employee', empSchema);