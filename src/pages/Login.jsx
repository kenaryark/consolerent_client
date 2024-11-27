import React, { useContext, useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        // "consolerentapi-production.up.railway.app/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 flex justify-center items-center">
      <Container maxWidth="xs" className="mt-10">
        <Box
          component="form"
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-lg">
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 4, fontWeight: "bold" }}>
            Login
          </Typography>

          <TextField
            id="username"
            label="Usernam"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 3 }}
            onChange={handleChange}
          />

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            sx={{ mb: 3 }}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}>
            Login
          </Button>

          <Typography variant="body2" color="text.secondary" align="center">
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
