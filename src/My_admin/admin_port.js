import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, CircularProgress } from '@mui/material';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Navbar from './navbar';

const AdminPortal = () => {
    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctorsAndPatients = async () => {
            try {
                const db = getFirestore();

                // Fetch doctors
                const doctorsCollection = collection(db, 'doctors');
                const doctorsSnapshot = await getDocs(doctorsCollection);
                const doctorsData = doctorsSnapshot.docs.map((doc) => doc.data());
                setDoctors(doctorsData);

                // Fetch patients
                const patientsCollection = collection(db, 'patients');
                const patientsSnapshot = await getDocs(patientsCollection);
                const patientsData = patientsSnapshot.docs.map((doc) => doc.data());
                setPatients(patientsData);
            } catch (err) {
                // Log the error to the console
                console.error('Error fetching data:', err);

                // Set the error state
                setError('Error fetching data. Please wait or refresh .');
            } finally {
                // Set loading to false whether fetching was successful or not
                setLoading(false);
            }
        };

        fetchDoctorsAndPatients();
    }, []);


    return (
        <>
            <Navbar />
            <Container
                component="main"
                maxWidth="lg"
                style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh' }}
            >
                <Typography variant="h5" gutterBottom>
                    Admin Portal
                </Typography>
                {loading && <CircularProgress />} {/* Show spinner while loading */}
                {
                    error && (
                        <Typography variant="body1" color="error" gutterBottom>
                            {error}
                        </Typography>
                    )
                }
                {
                    !loading && !error && (
                        <Grid container spacing={3} style={{ marginTop: '20px' }} >
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Paper>
                                        <Typography variant="h6" style={{ padding: '10px' }}>
                                            DOCTORS
                                        </Typography>
                                        <TableContainer>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>#</TableCell>
                                                        <TableCell>First Name</TableCell>
                                                        <TableCell>Last Name</TableCell>
                                                        <TableCell>Email</TableCell>
                                                        <TableCell>Specialization</TableCell>
                                                        <TableCell>license Number</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {doctors.map((doctor, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{index + 1}</TableCell>
                                                            <TableCell>{doctor.firstName}</TableCell>
                                                            <TableCell>{doctor.lastName}</TableCell>
                                                            <TableCell>{doctor.email}</TableCell>
                                                            <TableCell>{doctor.specialization}</TableCell>
                                                            <TableCell>{doctor.licenseNumber}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper>
                                        <Typography variant="h6" style={{ padding: '10px' }}>
                                            PATIENTS
                                        </Typography>
                                        <TableContainer>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>#</TableCell>
                                                        <TableCell>FullName</TableCell>
                                                        <TableCell>Email</TableCell>
                                                        <TableCell>gender</TableCell>
                                                        <TableCell>Sickness</TableCell>
                                                        <TableCell>DOB</TableCell>
                                                        <TableCell>Status</TableCell>
                                                        <TableCell>Disorder</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {patients.map((patient, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell>{index + 1}</TableCell>
                                                            <TableCell>{patient.fullName}</TableCell>
                                                            <TableCell>{patient.email}</TableCell>
                                                            <TableCell>{patient.gender}</TableCell>
                                                            <TableCell>{patient.presentSickness}</TableCell>
                                                            <TableCell>{patient.dob}</TableCell>
                                                            <TableCell>{patient.maritalStatus}</TableCell>
                                                            <TableCell>{patient?.hasDisorder?.toString()}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
            </Container>
        </>
    );
};

export default AdminPortal;


