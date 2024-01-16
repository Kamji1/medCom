import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";

const theme = createTheme();

const AdminSignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // Use useNavigate hook

    const handleSignIn = (e) => {
        e.preventDefault();

        // Hardcoded admin credentials
        const AdminEmail = "admin";
        const AdminPassword = "admin";

        if (email === AdminEmail && password === AdminPassword) {
            navigate("/Adminportal");
        } else {
            alert('Admin not approved'); // Show alert for unauthorized admin
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                sx={{
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "70%",
                        width: "80%",
                        padding: '16px',
                        margin: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            my: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Admin
                        </Typography>
                        <Box component="form" onSubmit={handleSignIn} sx={{ mt: 1, width: '100%' }}>
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default AdminSignIn;
