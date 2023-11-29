import React, { useState } from "react";
import CustomButton from "../../Component/Button/Index";
import headicon from "../../Images/heading.png";
import { Grid, TextField } from "@mui/material";
import contact from "../../Images/contact.png";
import axios from "axios";
import "./Style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:4000/postDetails",
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    })
      .then((response) => {
        console.log("Data sent:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div>
      <div className="contact_heading">
        <img src={headicon} alt="headicon" />
        <h2>REQUEST A CALL BACK</h2>
      </div>
      <Grid container>
        <Grid
          item
          lg={6}
          md={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                id="name"
                label="Name"
                onChange={handleChange}
                value={formData.name}
                variant="standard"
                sx={{ width: "400px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                label="Email"
                value={formData.email}
                // error={!!emailError}
                helperText={emailError}
                variant="standard"
                onChange={handleChange}
                sx={{ width: "400px" }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="phone"
                label="Phone number"
                value={formData.phone}
                onChange={handleChange}
                variant="standard"
                sx={{ width: "400px", mb: 5 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                variant="standard"
                sx={{ width: "400px", mb: 5 }}
              />
            </Grid>
            <div className="contact_Send">
              <CustomButton
                variant="contained"
                text="Send"
                onClick={handleSubmit}
                type="button"
              />
            </div>
          </Grid>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <img src={contact} width="600px" height="400px" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
