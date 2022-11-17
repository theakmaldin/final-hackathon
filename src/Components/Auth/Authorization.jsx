import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, NavLink } from "react-router-dom";
import { authContext } from "../../Context/AuthContextProvider";
import "./Authorization.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website1
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
export default function Authorization() {
  const {
    email,
    user,
    password,
    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleLogin,
    handleLogout,
    handleSignUp,
  } = React.useContext(authContext);

  const navigate = useNavigate();

  const handleIn = e => {
    navigate("/");
  };

  const signIn = () => {
    handleLogin();
    console.log(email);
    // navigate("/");
  };
  return (
    <div id="body-auth">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Grid sx={{ marginTop: "40%" }}>
              <Avatar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "lightblue",
                  marginLeft: "40%",
                }}>
                <LockOutlinedIcon />
              </Avatar>
              {hasAccount ? (
                <Typography component="h1" variant="h5">
                  Добро пожаловать!
                </Typography>
              ) : (
                <Typography component="h1" variant="h5">
                  Добро пожаловать!
                </Typography>
              )}
            </Grid>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <span>{passwordError}</span>
              <span>{emailError}</span>
              {hasAccount ? (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "green" }}
                  onClick={signIn}>
                  <NavLink to="/">Войти</NavLink>
                </Button>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSignUp}>
                  <NavLink to="/">Зарегистрироваться</NavLink>
                </Button>
              )}

              <Grid container>
                <Grid item>
                  {hasAccount ? (
                    <Link
                      onClick={() => setHasAccount(!hasAccount)}
                      href="#"
                      variant="body2">
                      {"У вас нет аккаунта?"}
                    </Link>
                  ) : (
                    <Link
                      onClick={() => setHasAccount(!hasAccount)}
                      href="#"
                      variant="body2">
                      {"У вас уже есть аккаунт?"}
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
