import * as React from 'react';
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
import { Link } from "react-router-dom"

const theme = createTheme();

export default function SignIn({ inputs, handleChange, errors, handleBlur, setErrors }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.userName === "") {
      setErrors({ ...errors, userName: true })
    } else if (inputs.password === "") {
      setErrors({ ...errors, password: true })
    }
  };

  const activateLink = (e) => {
    if (inputs.userName === "") {
      e.preventDefault();
    } else if (inputs.password === "") {
      e.preventDefault();
    }
  }

  return (
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email UserName"
              name="username"
              // autoComplete="email"
              value={inputs.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.userName}
              helperText={errors && "Please enter Valid name"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              value={inputs.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              helperText={errors && "Please enter password"}
            />
            <Link to="/home" onClick={(e) => activateLink(e)} >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={(errors.userName === true || errors.password === true) &&
                  (inputs.userName === "" || inputs.password === "")
                }
              >
                Sign In
              </Button>
            </Link>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}