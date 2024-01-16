import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Paper,
    Box,
    Grid,
    Typography,

} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const theme = createTheme();

const ProfessionalSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            updateProfile(auth.currentUser, { displayName: email });

            // Additional logic after signup
            console.log("User signed up:", userCredential.user);

            // Redirect to professional dashboard or home page
            navigate("/ProfessionalSignIn");
        } catch (error) {
            console.error("Error signing up:", error.message);
            // Handle error and show appropriate feedback to the user
            alert(`Error signing up: ${error.message}`);
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                sx={{
                    height: "100%",
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
                        padding: "16px",
                        margin: "auto",
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
                            Professional Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1, width: "100%" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="new-password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="specialization"
                                        label="Specialization"
                                        name="specialization"
                                        autoComplete="specialization"
                                        value={specialization}
                                        onChange={(e) => setSpecialization(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="licenseNumber"
                                        label="License Number"
                                        id="licenseNumber"
                                        value={licenseNumber}
                                        onChange={(e) => setLicenseNumber(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                                        label="Remember me"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/ProfessionalSignIn" variant="body2">
                                        Already have an account? Sign in
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

export default ProfessionalSignUp;
