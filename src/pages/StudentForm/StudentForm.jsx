import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";

// components
import InputBox from "../../components/InputBox/InputBox";
import InputArea from "../../components/InputArea/InputArea";
import CustomDatePicker from "../../components/DatePicker/DatePicker";
import DropDown from "../../components/DropDown/DropDown";
import CustomButton from "../../components/CustomButton/CustomButton";
import { studentFormValidator } from "../../validations/StudentFormValidation";
import toast from "react-hot-toast";

function StudentForm() {
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState("m");
  const [address, setAddress] = useState("");

  function clickHandler() {
    let { error } = studentFormValidator({
      firsName,
      lastName,
      mobileNo,
      email,
      dob,
      gender,
      address,
    });
    console.log(error);
    if (error) return toast.error(error.message);
  }

  return (
    <div className="wrapper w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl m-3">Student Form</h1>
      <Paper
        className="from_wrapper p-[2rem] md:w-[70%] xl:w-[70%] w-full"
        elevation={3}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputBox
              name={"First Name"}
              value={firsName}
              setValue={setFirstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputBox
              name={"Last Name"}
              value={lastName}
              setValue={setLastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputBox
              name={"Mobile Number"}
              value={mobileNo}
              setValue={setMobileNo}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputBox name={"Email Id"} value={email} setValue={setEmail} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomDatePicker name={"DOB"} value={dob} setValue={setDob} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DropDown
              name={"Gender"}
              value={gender}
              setValue={setGender}
              options={[
                { name: "Male", value: "m" },
                { name: "female", value: "f" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputArea name={"Address"} value={address} setValue={setAddress} />
          </Grid>
          <Grid item xs={12} md={6} className="  flex justify-center items-end">
            <CustomButton name={"Submit"} clickHandler={clickHandler} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default StudentForm;
