import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignInPage.scss';
import { Link } from "react-router-dom";
import React,{useState} from "react";
import Axios from 'axios';
// import { useQuery } from 'react-query';
// import administratorDashboard from "./administratorDashboard"; 
import {useNavigate} from "react-router-dom"
  

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);
  // const [student, setStudent] = useState(""); 
  const [admin, setAdmin] = useState(""); 
  const navigate = useNavigate();

  props.getdata(loginStatus,registerStatus);
  const register =()=> {
    Axios.post("http://localhost:3001/admin",{
      username:username,
      password:password,
    }).then((response)=>{
    if(response.data.message){
      alert("Incorrect loginId or password!");
    }else{
      setRegisterStatus(true);
      // if(typeof window !== 'undefined'){
      //   localStorage.setItem('email',email);
      //   }
    }
    // console.log(registerStatus);
  });
  };
  const login =()=>{
    Axios.post("http://localhost:3001/student",{  
      email:email,
      password:password,
    }).then((response)=>{
      if(response.data.message){
        alert("Incorrect loginId or password!");
      }else{
        setLoginStatus(true); 
        // console.log(response.data[0].username);
        if(typeof window !== 'undefined'){
        localStorage.setItem('email',email);
        localStorage.setItem('username',response.data[0].username);
        console.log(username);

        }
        
      }
  });
  };
  
  return (
    <>
  <div style={{ backgroundColor: '#99cc99' }}>
        <div>
          <marquee behavior="scroll" direction="left" scrollamount="4,0">
            <font size="5"><b> (1)</b></font>&nbsp;<span style={{ color: '#000080', fontSize: '20px', fontStyle: 'oblique' }}>
              <strong>The respective informations and updates on the Hostel Allotment Dates and the respective rank lists will be displayed on the dashboard of the applicable students. In addition to that, the fee withdrawal procedures are neglected for now !!!!!</strong>
            </span>
          </marquee>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '7%', marginTop: '2px', backgroundColor: '#2196F3', height: '40px', justifyContent: 'center', alignItems: 'center' }}>


        <Link to="/">
          <div className='topLink'>
            HOME
          </div>
        </Link>
        <Link to="/people">
          <div className='topLink'>
            People
          </div>
        </Link>
        <Link to="/hostel-details">
          <div className='topLink'>
            Hostels
          </div>
        </Link>
        <Link to="/hostel-rules">
          <div className='topLink'>
            Rules
          </div>
        </Link>
        <Link to="/">
          <div className='topLink'>
            COMMITTEE
          </div>
        </Link>
        <Link to="/">
          <div className='topLink'>
            News
          </div>
        </Link>
        <Link to="/">
          <div className='topLink'>
            ABOUT US
          </div>
        </Link>
        <Link to="/">
          <div className='topLink'>
            CONTACT
          </div>
        </Link>
      </div>
      <div className='d-flex gap-5' style={{ justifyContent: 'center' }}>
        <div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Student
                </Typography>
                <Box component="form" noValidate >
                  <TextField
                    className='inputBox'
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e)=>{
                      setEmail(e.target.value);
                      e.preventDefault();
                    }}
                  // sx={{ mt: "3px", mb: "2px" }}
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
                    onChange={(e)=>{
                      setPassword(e.target.value);
                      e.preventDefault();
                    }}
                  />
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={login}
                    >
                      Sign In
                    </Button>
                    <>
                    {loginStatus===true ?navigate("/StudentDashboard") : 
                    <></>}
                    </>
                  {/* <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                      <Link href="../Pages/Createaccount/createaccount" variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                    </Grid>
                  </Grid> */}
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Administration
                </Typography>
                <Box component="form" noValidate >
                  <TextField
                    className='inputBox'
                    margin="normal"
                    required
                    fullWidth
                    id="email1"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e)=>{
                      setUsername(e.target.value);
                      e.preventDefault();
                    }}
                  // sx={{ mt: "3px", mb: "2px" }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password1"
                    autoComplete="current-password"
                    onChange={(e)=>{
                      setPassword(e.target.value);
                      e.preventDefault();
                    }}
                  />
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
          
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={register}
                    >
                      Sign In
                    </Button>
                    <>
                    {registerStatus==true ?navigate("/administratorDashboard"): 
                    <></>}
                    </>
                    {/* <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                      </Grid>
                      <Grid item>
                        <Link to="../Pages/AdministrationDashboard/AdministrationAccount" variant="body2">
                        Don't have an account? Sign Up
                        </Link> 
                      </Grid>
                    </Grid> */}
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}