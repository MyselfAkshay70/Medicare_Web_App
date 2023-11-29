// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   Box,
//   Paper,
//   Grid,
//   TextField,
//   Typography,
//   Alert,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { auth, db } from "../firebase";
// import { box, signinGrid } from "./styles";

// const theme = createTheme();

// const Admin_Signin = () => {
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [admins, setAdmins] = useState([]);

//   useEffect(() => {
//     db.collection("admins").onSnapshot((snapshot) => {
//       setAdmins(snapshot.docs.map((doc) => doc.data()));
//     });
//   }, []);

//   // SIGN IN WITH EMAIL AND PASSWORD FUNCTION
//   const handleSignin = (e) => {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       return setEmailError("All fields are required!");
//     }

//     {
      
//         if (true) {
//           console.log(email);
//           console.log(password);
//           // console.log(admin.password);
//           // console.log(auth.signInWithEmailAndPassword(email, password));
         
//               history.push("/doctor/profile");
            
            
//         }
//          else {
//           setEmailError("Email is not authenticated!");
//         }
     
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />
//         <Grid item xs={false} sm={4} md={7} sx={signinGrid} />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box sx={box}>
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
//               Admin Sign in
//             </Typography>

//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSignin}
//               sx={{ mt: 1 }}
//             >
//               {/* ERROR ALERTS */}
//               {emailError && <Alert severity="error">{emailError}</Alert>}
//               {passwordError && <Alert severity="error">{passwordError}</Alert>}

//               {/* EMAIL TEXTFIELD */}
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 error={emailError}
//               />

//               {/* PASSWORD TEXTFIELD */}
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 error={passwordError}
//               />

//               {/* SIGN IN BUTTON */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//             </Box>
//             <Typography>
//               Lost credentials? Kindly contact the office.
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };

// export default Admin_Signin;
//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// Admin_Signin.js00000000000000000000000000000000000000000000000000
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  Box,
  Paper,
  Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { box, signinGrid } from "./styles";

const theme = createTheme();

const Admin_Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // HARDCODED ADMIN CREDENTIAL
  const adminCredentials = {
    email: "akshay@gmail.com",
    password: "123456",
  };

  // SIGN IN FUNCTION
  const handleSignin = (e) => {
    // const history = useHistory()
    e.preventDefault();
    if (email === "" || password === "") {
      return setEmailError("All fields are required!");
    }

    // Compare entered credentials with hardcoded admin credentials
    if (email === adminCredentials.email && password === adminCredentials.password) {
      // Authentication successful, redirect to admin dashboard
      // history.push("/dashboard");
            
            history.push('/admin/dashboard');
    } else {
      // Authentication failed
      setEmailError("Email or password is incorrect!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={signinGrid} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={box}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
              Admin Sign in
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSignin}
              sx={{ mt: 1 }}
            >
              {/* ERROR ALERTS */}
              {emailError && <Alert severity="error">{emailError}</Alert>}
              {passwordError && <Alert severity="error">{passwordError}</Alert>}

              {/* EMAIL TEXTFIELD */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />

              {/* PASSWORD TEXTFIELD */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
              />

              {/* SIGN IN BUTTON */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Typography>
              Lost credentials? Kindly contact the office.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Admin_Signin;
