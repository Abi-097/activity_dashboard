import Grid from "@mui/material/Grid";
import React from "react";
import "./Style.css";
import CustomButton from "../../Component/Button/Index";
import image from "../../Images/imf.png";
const AutoService = () => {
  return (
    <div>
      <Grid container sx={{ mt: 17 }}>
        <Grid item lg={6} md={6} xs={12}>
          <img src={image} width="100%" />
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="auto_bg">
          <div className="auto_content">
            <h1>
              AUTO
              <br />
              SERVICES
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
            <CustomButton
              text="Contact Us"
              background="white"
              hoverTextColor="white"
              hoverBackground="#636c9a"
              textColor="#000"
              className="auto_button"
            />{" "}
            &nbsp;
            <CustomButton
              text="Contact Us"
              background="white"
              hoverTextColor="white"
              hoverBackground="#636c9a"
              textColor="#000"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AutoService;
