// // import React, { useState } from 'react';
// // import { getAuth } from 'firebase/auth';
// // import { getDatabase, ref, push, set } from 'firebase/database';
// // import {
// //     Container,
// //     TextField,
// //     Button,
// //     Typography,
// //     Paper,
// // } from '@mui/material';
// // import PatNavbar from './navbar';

// // const AppointmentPage = () => {
// //     const [patientName, setPatientName] = useState('');
// //     const [patientEmail, setPatientEmail] = useState('');
// //     const [patientWhatsApp, setPatientWhatsApp] = useState('');
// //     const [doctorName, setDoctorName] = useState('');
// //     const [doctorEmail, setDoctorEmail] = useState('');

// //     const handleAppointmentRequest = async () => {
// //         const auth = getAuth();
// //         const user = auth.currentUser;

// //         // Ensure the user is signed in
// //         if (user) {
// //             // Use the user's display name as the patient's name
// //             const patientName = user.displayName || '';

// //             const db = getDatabase();
// //             const appointmentsRef = ref(db, 'appointments');

// //             // Generate a unique ID for the new appointment request
// //             const newRequestId = push(appointmentsRef).key;

// //             // Create a new appointment request object
// //             const newAppointment = {
// //                 patientName,
// //                 patientEmail: user.email || '', // Use the user's email as the patient's email
// //                 patientWhatsApp,
// //                 doctorId: 'doctor1', // Replace with the actual doctor's ID
// //                 doctorName,
// //                 doctorEmail,
// //                 status: 'pending',
// //             };

// //             // Save the new appointment request to the database
// //             await set(ref(appointmentsRef, newRequestId), newAppointment);

// //             // Reset the form fields
// //             setPatientName('');
// //             setPatientEmail('');
// //             setPatientWhatsApp('');
// //             setDoctorName('');
// //             setDoctorEmail('');

// //             alert('Appointment request sent successfully!');
// //         } else {
// //             // Handle the case where the user is not signed in
// //             alert('User not signed in. Please sign in to send an appointment request.');
// //         }
// //     };

// //     return (
// //         <>
// //             <PatNavbar />

// //             <Container component="main" maxWidth="sm" style={{ marginTop: '20px' }}>
// //                 <Paper style={{ padding: '20px' }} elevation={3}>
// //                     <Typography variant="h5" gutterBottom>
// //                         Appointment Request
// //                     </Typography>
// //                     <form>
// //                         <TextField
// //                             label="Patient Name"
// //                             variant="outlined"
// //                             fullWidth
// //                             value={patientName}
// //                             onChange={(e) => setPatientName(e.target.value)}
// //                         />
// //                         <TextField
// //                             label="Patient Email"
// //                             variant="outlined"
// //                             fullWidth
// //                             value={patientEmail}
// //                             onChange={(e) => setPatientEmail(e.target.value)}
// //                         />
// //                         <TextField
// //                             label="Patient WhatsApp Link"
// //                             variant="outlined"
// //                             fullWidth
// //                             value={patientWhatsApp}
// //                             onChange={(e) => setPatientWhatsApp(e.target.value)}
// //                         /><Typography component="h5" variant="h5">
// //                             To:
// //                         </Typography>
// //                         <TextField
// //                             label="Doctor's Name"
// //                             variant="outlined"
// //                             fullWidth
// //                             value={doctorName}
// //                             onChange={(e) => setDoctorName(e.target.value)}
// //                         />
// //                         <TextField
// //                             label="Doctor's Email"
// //                             variant="outlined"
// //                             fullWidth
// //                             value={doctorEmail}
// //                             onChange={(e) => setDoctorEmail(e.target.value)}
// //                         />
// //                         <Button
// //                             type="button"
// //                             variant="contained"
// //                             color="primary"
// //                             style={{ marginTop: '16px' }}
// //                             onClick={handleAppointmentRequest}
// //                         >
// //                             Send Appointment Request
// //                         </Button>
// //                     </form>
// //                 </Paper>
// //             </Container>
// //         </>
// //     );
// // };

// // export default AppointmentPage;


// import React, { useState, useEffect } from 'react';
// import { getAuth } from 'firebase/auth';
// import { getDatabase, ref, push, set } from 'firebase/database';
// import {
//     Container,
//     TextField,
//     Button,
//     Typography,
//     Paper,
// } from '@mui/material';
// import PatNavbar from './navbar';

// const AppointmentPage = ({ selectedDoctor }) => {
//     const [patientWhatsApp, setPatientWhatsApp] = useState('');
//     const [doctorName, setDoctorName] = useState('');
//     const [doctorEmail, setDoctorEmail] = useState('');

//     useEffect(() => {
//         // Pre-fill doctor's information when selectedDoctor changes
//         if (selectedDoctor) {
//             setDoctorName(selectedDoctor.name);
//             setDoctorEmail(selectedDoctor.email);
//         }
//     }, [selectedDoctor]);


//     // ... (rest of the code remains unchanged)
//     const handleAppointmentRequest = async () => {
//         const auth = getAuth();
//         const user = auth.currentUser;

//         // Ensure the user is signed in
//         if (user) {
//             // Use the user's display name as the patient's name
//             const patientName = user.displayName || '';

//             const db = getDatabase();
//             const appointmentsRef = ref(db, 'appointments');

//             // Generate a unique ID for the new appointment request
//             const newRequestId = push(appointmentsRef).key;

//             // Create a new appointment request object
//             const newAppointment = {
//                 patientName,
//                 patientEmail: user.email || '', // Use the user's email as the patient's email
//                 patientWhatsApp,
//                 doctorId: 'doctor1', // Replace with the actual doctor's ID
//                 doctorName,
//                 doctorEmail,
//                 status: 'pending',
//             };

//             // Save the new appointment request to the database
//             await set(ref(appointmentsRef, newRequestId), newAppointment);

//             // Reset the form fields

//             setPatientWhatsApp('');
//             setDoctorName('');
//             setDoctorEmail('');

//             alert('Appointment request sent successfully!');
//         } else {
//             // Handle the case where the user is not signed in
//             alert('User not signed in. Please sign in to send an appointment request.');
//         }
//     };


//     return (
//         <>
//             <PatNavbar />
//             <Container component="main" maxWidth="sm" style={{ marginTop: '20px' }}>
//                 <Paper style={{ padding: '20px' }} elevation={3}>
//                     <Typography variant="h5" gutterBottom>
//                         Appointment Request
//                     </Typography>
//                     <form>

//                         <TextField
//                             label="Patient WhatsApp Link"
//                             variant="outlined"
//                             fullWidth
//                             value={patientWhatsApp}
//                             onChange={(e) => setPatientWhatsApp(e.target.value)}
//                         /><Typography component="h5" variant="h5">
//                             To:
//                         </Typography>
//                         <TextField
//                             label="Doctor's Name"
//                             variant="outlined"
//                             fullWidth
//                             value={doctorName}
//                             onChange={(e) => setDoctorName(e.target.value)}
//                         />
//                         <TextField
//                             label="Doctor's Email"
//                             variant="outlined"
//                             fullWidth
//                             value={doctorEmail}
//                             onChange={(e) => setDoctorEmail(e.target.value)}
//                         />
//                         <Button
//                             type="button"
//                             variant="contained"
//                             color="primary"
//                             style={{ marginTop: '16px' }}
//                             onClick={handleAppointmentRequest}
//                         >
//                             Send Appointment Request
//                         </Button>
//                     </form>
//                 </Paper>
//             </Container>
//         </>
//     );
// };

// export default AppointmentPage;

// import React, { useState } from 'react';
// import { getAuth } from 'firebase/auth';
// import { getDatabase, ref, push, set } from 'firebase/database';
// import { Typography, TextField, Button, Paper } from '@mui/material';

// const AppointmentForm = ({ selectedDoctor, onBack }) => {
//     const [patientName, setPatientName] = useState('');
//     const [patientEmail, setPatientEmail] = useState('');
//     const [patientWhatsApp, setPatientWhatsApp] = useState('');

//     const handleAppointmentRequest = async () => {
//         const auth = getAuth();
//         const user = auth.currentUser;

//         // Ensure the user is signed in
//         if (user) {
//             const db = getDatabase();
//             const appointmentsRef = ref(db, 'appointments');

//             // Generate a unique ID for the new appointment request
//             const newRequestId = push(appointmentsRef).key;

//             // Create a new appointment request object
//             const newAppointment = {
//                 patientName,
//                 patientEmail,
//                 patientWhatsApp,
//                 doctorId: selectedDoctor.id,
//                 doctorName: selectedDoctor.name,
//                 doctorEmail: selectedDoctor.email,
//                 status: 'pending',
//             };

//             // Save the new appointment request to the database
//             await set(ref(appointmentsRef, newRequestId), newAppointment);

//             // Reset the form fields
//             setPatientName('');
//             setPatientEmail('');
//             setPatientWhatsApp('');

//             alert('Appointment request sent successfully!');
//             onBack(); // Go back to the doctor list
//         } else {
//             // Handle the case where the user is not signed in
//             alert('User not signed in. Please sign in to send an appointment request.');
//         }
//     };

//     return (
//         <Paper style={{ padding: '20px', marginTop: '20px' }}>
//             <Typography variant="h5" gutterBottom>
//                 Appointment Request for Dr. {selectedDoctor.name}
//             </Typography>
//             <form>
//                 <TextField
//                     label="Your Name"
//                     variant="outlined"
//                     fullWidth
//                     value={patientName}
//                     onChange={(e) => setPatientName(e.target.value)}
//                 />
//                 <TextField
//                     label="Your Email"
//                     variant="outlined"
//                     fullWidth
//                     value={patientEmail}
//                     onChange={(e) => setPatientEmail(e.target.value)}
//                 />
//                 <TextField
//                     label="Your WhatsApp Link"
//                     variant="outlined"
//                     fullWidth
//                     value={patientWhatsApp}
//                     onChange={(e) => setPatientWhatsApp(e.target.value)}
//                 />
//                 <Button
//                     type="button"
//                     variant="contained"
//                     color="primary"
//                     style={{ marginTop: '16px' }}
//                     onClick={handleAppointmentRequest}
//                 >
//                     Send Appointment Request
//                 </Button>
//                 <Button variant="outlined" color="primary" style={{ marginTop: '8px' }} onClick={onBack}>
//                     Back to Doctor List
//                 </Button>
//             </form>
//         </Paper>
//     );
// };

// export default AppointmentForm;

