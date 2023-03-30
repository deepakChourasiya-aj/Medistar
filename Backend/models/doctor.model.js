const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({

  doctorName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  qualifications: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  departmentId: {
    type: Number,
    required: true,
  },
},{
  versionKey:false
});

const DoctorModel = mongoose.model("Doctors", doctorSchema);

module.exports = {
  DoctorModel,
};
