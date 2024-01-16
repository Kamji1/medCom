import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, remove, query, orderByChild, equalTo } from 'firebase/database';
import { Container, Typography, Paper, Button, TextField } from '@mui/material';
import DocNavbar from './navbar';

const AppointPage = () => {
    const [patientName, setPatientName] = useState('');
    const [patientEmail, setPatientEmail] = useState('');
    const [patientRequests, setPatientRequests] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const appointmentsRef = ref(db, 'appointments');

        // Create a query to fetch appointments based on patient's name and email
        const appointmentsQuery = query(
            appointmentsRef,
            orderByChild('patientName'),
            equalTo(patientName)
        );

        // Listen for changes to the appointments node in the database
        onValue(appointmentsQuery, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert the object of objects to an array of objects
                const requestsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setPatientRequests(requestsArray);
            } else {
                setPatientRequests([]);
            }
        });

        // Clean up the listener when the component unmounts
        return () => {
            // Remove the listener
        };
    }, [patientName]);

    const handleDeleteRequest = (id) => {
        const db = getDatabase();
        const appointmentsRef = ref(db, `appointments/${id}`);
        // Remove the appointment request with the specified ID
        remove(appointmentsRef);
    };

    return (
        <>
            <DocNavbar />
            <Container component="main" maxWidth="md">
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        Patient Appointment Request
                    </Typography>
                    {/* <TextField
                        label="Patient's Name"
                        variant="outlined"
                        fullWidth
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        label="Patient's Email"
                        variant="outlined"
                        fullWidth
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    /> */}
                    {patientRequests.length > 0 ? (
                        <ul>
                            {patientRequests.map((request) => (
                                <li key={request.id}>
                                    <Typography>
                                        Name: {request.patientName}
                                        <br />
                                        Email: {request.patientEmail}
                                        <br />
                                        WhatsApp: {request.patientWhatsApp}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleDeleteRequest(request.id)}
                                        style={{ marginTop: '10px' }}
                                    >
                                        Delete
                                    </Button>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Typography>No patient requests</Typography>
                    )}
                </Paper>
            </Container>
        </>
    );
};

export default AppointPage;
