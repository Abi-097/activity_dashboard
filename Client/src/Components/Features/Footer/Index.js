import "./Style.css";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import logo from "../../Images/automed.png";
import GoogleMapReact from "google-map-react";
import {
  faEnvelope,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputBase } from "@mui/material";
import Button from "@mui/material/Button";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ center, zoom }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <footer>
      <Box className="main_box">
        <img
          src={logo}
          style={{ paddingTop: "4%", paddingBottom: "2%" }}
          alt="Logo"
        />
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Home
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            About
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Service
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Testimonial
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Blog
          </Grid>
          <Grid lg={1} md={4} sm={6} xs={12} className="footer_context">
            Contact us
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid lg={3} md={6} xs={12}>
            <div className="footer_context2">
              <div style={{ marginRight: "5px" }}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div style={{ fontSize: "14px" }}>Call Now +01 123467890</div>
            </div>
          </Grid>
          <Grid lg={3} md={6} xs={12}>
            <div className="footer_context2">
              <div style={{ marginRight: "5px" }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div style={{ fontSize: "14px" }}>demo@gmail.com</div>
            </div>
          </Grid>
          <Grid lg={3} xs={12} className="footer_context2">
            <Box
              display="flex"
              backgroundColor={"white"}
              borderRadius="30px"
              overflow="hidden"
              width="350px"
              height="60px"
              marginBottom="7px"
            >
              <InputBase
                sx={{ ml: 2, mr: 1, flex: 1 }}
                placeholder="Enter Your Email"
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  minWidth: 0,
                  width: "100px",
                  border: "4px solid white",
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            height: "500px",
          }}
        >
          {/* Google Maps location */}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCwEkxb1ZdoxyN3uf8ELq3mZSN_-cI_mlY", // Replace with your actual API key
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid lg={6} md={6} sm={12} xs={12} className="footer_context3">
              <p> © 2022 All Rights Reserved. </p>
            </Grid>
            <Grid lg={6} md={6} sm={12} xs={12} className="footer_context4">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="xl"
                    className="footer_icons"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className={
                      isHovered ? "footer_icons hovered" : "footer_icons"
                    }
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    className={
                      isHovered ? "footer_icons hovered" : "footer_icons"
                    }
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className={
                      isHovered ? "footer_icons hovered" : "footer_icons"
                    }
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </footer>
  );
};
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default Footer;
