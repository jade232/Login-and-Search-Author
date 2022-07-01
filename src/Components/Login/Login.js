import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"

const theme = createTheme();

export default function SignIn({ inputs, handleChange, errors, handleBlur, setErrors }) {

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name } = e.target;
    if (name === "username") {
      if (inputs.userName === "") {
        setErrors({ ...errors, userName: true })
      }
    } else if (name === "password") {
      if (inputs.password === "") {
        setErrors({ ...errors, password: true })
      }
    } else {
      history("/home")
    }

  };

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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              inputProps={{ maxLength: 12 }}
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
              // helperText={inputs.userName === "" ? "Please Enter UserName" : null}
              inputProps={{ maxLength: 12 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onSubmit={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
              disabled={(errors.userName === true || errors.password === true) &&
                (inputs.userName === "" || inputs.password === "")
              }
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}