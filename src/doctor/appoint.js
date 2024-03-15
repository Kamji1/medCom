import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
} from '@mui/material';
import { getFirestore, collection, getDocs, doc, updateDoc, query, where } from 'firebase/firestore';
import { useAuth } from '../AuthContext'; // Import the authentication context hook
import DocNavbar from './navbar';
import CancelIcon from '@mui/icons-material/Cancel';
import Swal from 'sweetalert2';

const AppointPage = () => {
    const [appointmentRequests, setAppointmentRequests] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const { currentUser } = useAuth(); // Get the currently signed-in user from your authentication context

    useEffect(() => {
        const fetchAppointmentRequests = async () => {
            if (!currentUser) return; // Check if user is signed in

            const db = getFirestore();
            const appointmentsCollection = collection(db, 'appointments');

            // Query appointments where patientEmail matches the email of the currently signed-in doctor
            const q = query(appointmentsCollection, where('doctorEmail', '==', currentUser.email));

            const appointmentsSnapshot = await getDocs(q);

            const appointmentData = [];
            appointmentsSnapshot.forEach((doc) => {
                const data = doc.data();
                appointmentData.push({
                    id: doc.id,
                    patientName: data.patientName,
                    patientEmail: data.patientEmail,
                    patientWhatsApp: data.patientWhatsApp,
                    status: data.status,
                });
            });

            setAppointmentRequests(appointmentData);
        };

        fetchAppointmentRequests();
    }, [currentUser]);


    const handleApproveReject = async (status) => {
        if (!selectedAppointment) {
            return;
        }

        try {
            const db = getFirestore();
            const appointmentsCollection = collection(db, 'appointments');
            const appointmentRef = doc(appointmentsCollection, selectedAppointment.id);

            await updateDoc(appointmentRef, { status });

            Swal.fire({
                icon: 'success',
                title: 'Appointment Updated',
                text: `Appointment request from ${selectedAppointment.patientName} ${status === 'approved' ? 'approved' : 'rejected'}.`,
            });

            setSelectedAppointment(null);
            setOpenModal(false);
        } catch (error) {
            console.error('Error updating appointment status: ', error);
        }
    };

    const handleCancelModal = () => {
        setSelectedAppointment(null);
        setOpenModal(false);
    };

    return (
        <>
            <DocNavbar />

            <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Appointment Requests
                </Typography>
                {appointmentRequests.map((appointment) => (
                    <Card key={appointment.id} style={{ marginBottom: '16px' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {appointment.patientName}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Email: {appointment.patientEmail}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                WhatsApp Link: {appointment.patientWhatsApp}
                            </Typography>
                            <Typography variant="body1" color="#2e4493" >
                                Status: {appointment.status}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    setSelectedAppointment(appointment);
                                    setOpenModal(true);
                                }}
                                style={{ marginTop: '8px' }}
                            >
                                View Details
                            </Button>
                        </CardContent>
                    </Card>
                ))}

                <Dialog open={openModal} onClose={handleCancelModal} >
                    <DialogTitle>
                        Appointment Details for {selectedAppointment?.patientName}
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleCancelModal}
                            aria-label="close"
                            style={{ position: 'absolute', right: 8, top: 8 }}
                        >
                            <CancelIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        {selectedAppointment && (
                            <>
                                <Typography variant="body1" color="textSecondary">
                                    Email: {selectedAppointment.patientEmail}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    WhatsApp Link: {selectedAppointment.patientWhatsApp}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Status: {selectedAppointment.status}
                                </Typography>
                            </>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => handleApproveReject('approved')}
                        >
                            Approve
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleApproveReject('rejected')}
                        >
                            Reject
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </>
    );
};

export default AppointPage;
