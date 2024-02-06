import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import PatNavbar from './navbar';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [patientName, setPatientName] = useState('');
    const [patientEmail, setPatientEmail] = useState('');
    const [patientWhatsApp, setPatientWhatsApp] = useState('');
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchDoctors = async () => {
            const db = getFirestore();
            const doctorsCollection = collection(db, 'doctors');
            const doctorsSnapshot = await getDocs(doctorsCollection);

            const doctorsData = [];
            doctorsSnapshot.forEach((doc) => {
                const data = doc.data();
                doctorsData.push({
                    id: doc.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    specialization: data.specialization,
                });
            });

            setDoctors(doctorsData);
        };

        fetchDoctors();
    }, []);

    const handleRequestClick = (doctor) => {
        setSelectedDoctor(doctor);
        setPatientName('');
        setPatientEmail('');
        setPatientWhatsApp('');
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleAppointmentRequest = async () => {
        // Handle appointment request logic
        const db = getFirestore();
        const appointmentsCollection = collection(db, 'appointments');

        // Create a new appointment request object
        const newAppointment = {
            patientName,
            patientEmail,
            patientWhatsApp,
            doctorId: selectedDoctor.id,
            doctorfirstName: selectedDoctor.firstName,
            doctorlastName: selectedDoctor.lastName,
            doctorEmail: selectedDoctor.email,
            status: 'pending',
        };

        // Save the new appointment request to Firestore
        const added = await addDoc(appointmentsCollection, newAppointment);
        console.log("Document written with ID: ", added.id);

        // Reset the form fields
        setPatientName('');
        setPatientEmail('');
        setPatientWhatsApp('');

        alert('Appointment request sent successfully!');
        setSelectedDoctor(null);
        setOpenModal(false);
    };

    return (
        <>
            <PatNavbar />

            <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Choose a Doctor
                </Typography>
                {doctors.map((doctor) => (
                    <Card key={doctor.id} style={{ marginBottom: '16px' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {doctor.firstName} {doctor.lastName}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Email: {doctor.email}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Specialization: {doctor.specialization}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleRequestClick(doctor)}
                                style={{ marginTop: '8px' }}
                            >
                                Request
                            </Button>
                        </CardContent>
                    </Card>
                ))}

                {selectedDoctor && (
                    <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
                        <DialogTitle>{`Appointment Request for Dr. ${selectedDoctor.firstName}`}</DialogTitle>
                        <DialogContent>
                            {/* Display doctor details and form fields here */}
                            <Typography variant="h5" gutterBottom>
                                Appointment Request for Dr. {selectedDoctor.firstName}
                            </Typography>
                            <TextField
                                label="Your Name"
                                variant="outlined"
                                fullWidth
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                            />
                            <TextField
                                label="Your Email"
                                variant="outlined"
                                fullWidth
                                value={patientEmail}
                                onChange={(e) => setPatientEmail(e.target.value)}
                            />
                            <TextField
                                label="Your WhatsApp Link"
                                variant="outlined"
                                fullWidth
                                value={patientWhatsApp}
                                onChange={(e) => setPatientWhatsApp(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleAppointmentRequest} color="primary" variant="contained">
                                Send Appointment Request
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Container>
        </>
    );
};

export default DoctorList;
