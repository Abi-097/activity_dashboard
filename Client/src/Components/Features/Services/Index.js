import React from "react";
import { Grid, Box } from "@mui/material";
import cho from "../../Images/cho1.png";
import cho1 from "../../Images/cho2.png";
import cho3 from "../../Images/cho3.3.png";
import cho4 from "../../Images/cho4.png";
import logo from "../../Images/heading.png";
import "./Style.css";
import CustomButton from "../../Component/Button/Index";

const Services = () => {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <div className="service_heading">
          <img src={logo} alt="logo" width="75px" height="75px" />
          <h2>OUR SERVICES</h2>
        </div>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={2}
            lg={2}
            sm={6}
            sx={{
              marginBottom: {
                lg: 20,
                md: 20,
              },
            }}
          >
            <img src={cho1} alt="Image 1" className="service_image" />
            <h3>AIR CONDITIONING</h3>
            <p>
              content of a page when looking at its layout. The point of using
              Lorem Ipsum
            </p>
            <CustomButton
              text="Read More"
              background="#636c9a"
              hoverBackground="#ff8f81"
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sm={6}
            lg={2}
            sx={{
              marginTop: {
                lg: 20,
                md: 20,
              },
            }}
          >
            <img src={cho3} alt="Image 3" className="service_image" />
            <h3>AUTOMOTIVE FILTERS</h3>
            <p>
              content of a page when looking at its layout. The point of using
              Lorem Ipsum
            </p>
            <CustomButton
              text="Read More"
              background="#636c9a"
              hoverBackground="#ff8f81"
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sm={6}
            lg={2}
            sx={{
              marginBottom: {
                lg: 20,
                md: 20,
              },
            }}
          >
            <img src={cho} alt="Image 1" className="service_image" />
            <h3>ELECTRICAL SYSTEM</h3>
            <p>
              content of a page when looking at its layout. The point of using
              Lorem Ipsum
            </p>
            <CustomButton
              text="Read More"
              background="#636c9a"
              hoverBackground="#ff8f81"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            lg={2}
            sx={{
              marginTop: {
                lg: 20,
                md: 20,
              },
            }}
          >
            <img src={cho4} alt="Image 4" className="service_image" />
            <h3>BRAKE REPAIR</h3>
            <p>
              content of a page when looking at its layout. The point of using
              Lorem Ipsum
            </p>
            <CustomButton
              text="Read More"
              background="#636c9a"
              hoverBackground="#ff8f81"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
