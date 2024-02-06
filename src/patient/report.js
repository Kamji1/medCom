import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
} from '@mui/material';
import { auth } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import PatNavbar from './navbar';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const ReportPage = () => {
    const [user] = useAuthState(auth);
    const [doctorName, setDoctorName] = useState('');
    const [doctorEmail, setDoctorEmail] = useState('');
    const [reportContent, setReportContent] = useState('');

    const handleSubmit = async () => {
        try {
            // Fetch patient's email dynamically (replace this with your logic)
            const patientEmail = fetchPatientEmail();

            // Ensure that you have a valid patient email before proceeding
            if (!patientEmail) {
                alert('Sorry, Due to some error this cannot be submitted.');
                return;
            }

            const db = getFirestore();
            const reportsCollection = collection(db, 'reports');

            const reportData = {
                doctorName,
                doctorEmail,
                patientEmail, // Dynamically fetched patient email
                reportContent,
            };

            // Use addDoc to add a new document to the "reports" collection
            const reportRef = await addDoc(reportsCollection, reportData);

            console.log('Report submitted successfully with ID:', reportRef.id);

            // Optionally, you can reset the form fields
            setDoctorName('');
            setDoctorEmail('');
            setReportContent('');

            // You can also show a confirmation message to the user
            alert('Report submitted successfully!');
        } catch (error) {
            console.error('Error submitting report:', error.message);
            // Handle error and show appropriate feedback to the user
        }
    };

    // Function to fetch patient's email from local storage or console
    const fetchPatientEmail = () => {
        // Replace this with your logic to fetch patient's email from local storage or console
        // For example, if the email is stored in local storage with key 'patientEmail':
        const patientEmail = user.email;
        // If not found in local storage, you can prompt the user to enter it via console
        if (!patientEmail) {
            console.log('Patient email not found in local storage. Please enter it via console.');
        }
        return patientEmail;
    };



    return (
        <>
            <PatNavbar />
            <Container component="main" maxWidth="sm" style={{ marginTop: '20px' }}>
                <Paper style={{ padding: '20px' }} elevation={3}>
                    <Typography variant="h5" gutterBottom>
                        Doctor Report
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                            label="Doctor's Name"
                            variant="outlined"
                            fullWidth
                            value={doctorName}
                            onChange={(e) => setDoctorName(e.target.value)}
                        />
                        <TextField
                            label="Doctor's Email"
                            variant="outlined"
                            fullWidth
                            value={doctorEmail}
                            onChange={(e) => setDoctorEmail(e.target.value)}
                        />
                        <TextField
                            label="Write your report"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            value={reportContent}
                            onChange={(e) => setReportContent(e.target.value)}
                        />
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            style={{ marginTop: '16px' }}
                        >
                            Submit Report
                        </Button>
                    </form>
                </Paper>
            </Container>
        </>
    );
};

export default ReportPage;
