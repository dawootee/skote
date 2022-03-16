import React from "react";
import "./Auth.css";
import Cover from "../../assets/profile-cover.png";
import Profile from "../../assets/profile.jpeg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://skote.netlify.app/">
        skote.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Signup = () => {
  return (
    <div className="login_box_wrapper">
      <div className="login_box">
        <div className="login_box_banner">
          <div className="login_cb_left">
            <div className="login_box_heading">Welcome Back !</div>
            <div className="login_box_subheading">
              Sign in to continue to skote
            </div>
          </div>
          <img
            src={Cover}
            alt=""
            width="35%"
            className="login_box_coverimage"
          />
        </div>
        <div className="login_box_body">
          <div className="lgnb_login_image">
            <img src={Profile} alt="" />
          </div>
          <Box component="form" noValidate sx={{ mt: 5 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Enter Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#556ee6",
                "&:hover": { backgroundColor: "#485ec4" },
              }}
            >
              Sign Up
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Box>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  className="login_bottom_txt"
                ></Link>
              </Grid>
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  className="login_bottom_txt"
                >
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Signup;
