import React, { useState } from "react";
import logo from "../../Images/heading.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import client from "../../Images/clint2.png";
import "./Style.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerReview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const data = [
    {
      id: 1,
      image: <img src={client} />,
      text: "Jackson",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
    {
      id: 2,
      image: <img src={client} />,
      text: "Jony Mental",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
    {
      id: 3,
      image: <img src={client} />,
      text: "Timson",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
    {
      id: 4,
      image: <img src={client} />,
      text: "Paulson",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  // navigation to the next page
  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  // Calculate the range of items
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the subset of data to display based on the current page
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="customer_heading">
        <img src={logo} alt="logo" height="70px" />
        <h2>OUR CUSTOMERS SAYS</h2>
      </div>
      <div className="customer_bg">
        <Paper
          elevation={0}
          sx={{
            background: "transparent",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {displayedData.map((item, index) => (
              <Grid
                item
                lg={5}
                md={5}
                sm={12}
                xs={12}
                key={index}
                sx={{
                  ml: {
                    sm: 10,
                    xs: 10,
                  },
                  mr: {
                    sm: 2,
                    xs: 2,
                  },
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: 250,
                    transition: "transform 0.5s ease-in",
                    transform: `translateX(${(index - currentPage) * 0}%)`,
                  }}
                >
                  <CardHeader
                    sx={{
                      textAlign: "left",
                      color: "#656c9a",
                      fontSize: "34px !important",
                    }}
                    avatar={
                      <Avatar
                        sx={{ width: "auto", height: "auto", borderRadius: 2 }}
                        aria-label="recipe"
                      >
                        {item.image}
                      </Avatar>
                    }
                    titleTypographyProps={{
                      variant: "h5",
                      sx: {
                        fontSize: "24px",
                        fontWeight: 500,
                      },
                    }}
                    title={item.text}
                  />

                  <CardContent sx={{ textAlign: "left" }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "15px", lineHeight: "26px" }}
                    >
                      {item.para}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item sx={{ mt: 3 }}>
              <IconButton onClick={goToPreviousPage}>
                <FontAwesomeIcon icon={faChevronLeft} size="xl" />
              </IconButton>
            </Grid>
            <Grid item sx={{ mt: 3 }}>
              <IconButton onClick={goToNextPage}>
                <FontAwesomeIcon icon={faChevronRight} size="xl" />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default CustomerReview;
