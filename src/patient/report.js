import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
} from '@mui/material';
import PatNavbar from './navbar';

const ReportPage = () => {
    const [doctorName, setDoctorName] = useState('');
    const [doctorEmail, setDoctorEmail] = useState('');
    const [reportContent, setReportContent] = useState('');

    const handleSubmit = () => {
        // Handle the submission logic, e.g., send the report to the admin
        console.log('Report submitted:', {
            doctorName,
            doctorEmail,
            reportContent,
        });

        // Optionally, you can reset the form fields
        setDoctorName('');
        setDoctorEmail('');
        setReportContent('');

        // You can also show a confirmation message to the user
        alert('Report submitted successfully!');
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
