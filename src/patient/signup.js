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
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";


const theme = createTheme();

const PatientSignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("male");
    const [presentSickness, setPresentSickness] = useState("");
    const [dob, setDob] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("single");
    const [hasDisorder, setHasDisorder] = useState(false);
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

            // Save user information to Firestore
            const db = getFirestore();
            const patientsCollection = collection(db, "patients");

            const patientData = {
                fullName,
                email,
                gender,
                presentSickness,
                dob,
                maritalStatus,
                hasDisorder,
                // Add other fields as needed
            };

            // Use addDoc to add a new document to the "doctors" collection
            const patRef = await addDoc(patientsCollection, patientData);

            console.log("Document written with ID: ", patRef.id);

            // Additional logic after signup
            console.log("User signed up:", userCredential.user);

            // Redirect to patient dashboard or login page
            console.log("Processing");
            navigate("/PatientSignIn");
            console.log("Redirect success");

        } catch (error) {
            console.error("Error signing up", error.message);
            // Handle error and show appropriate feedback to the user
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
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
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
                        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                            Patient Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1, width: "100%" }}>
                            <TextField
                                autoComplete="fullname"
                                name="fullName"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                autoFocus
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                margin="normal"
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
                            <FormControl component="fieldset" sx={{ mt: 2 }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                margin="normal"
                                fullWidth
                                name="presentSickness"
                                label="Review of Present Sickness or Symptoms"
                                multiline
                                rows={4}
                                value={presentSickness}
                                onChange={(e) => setPresentSickness(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="dob"
                                label="Date of Birth"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="marital-status-label">Marital Status</InputLabel>
                                <Select
                                    labelId="marital-status-label"
                                    id="marital-status"
                                    value={maritalStatus}
                                    label="Marital Status"
                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                >
                                    <MenuItem value="single">Single</MenuItem>
                                    <MenuItem value="married">Married</MenuItem>
                                    <MenuItem value="divorced">Divorced</MenuItem>
                                    <MenuItem value="widowed">Widowed</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value={hasDisorder} onChange={(e) => setHasDisorder(e.target.checked)} />}
                                label="Do you have any disorder?"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/PatientSignIn" variant="body2">
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

export default PatientSignUp;
