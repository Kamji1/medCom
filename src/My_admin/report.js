import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Card,
    CardContent,
    Paper,
} from '@mui/material';
import Navbar from './navbar';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const AdminReportPage = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const db = getFirestore();
                const reportsCollection = collection(db, 'reports');
                const snapshot = await getDocs(reportsCollection);
                const fetchedReports = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setReports(fetchedReports);
            } catch (error) {
                console.error('Error fetching reports:', error.message);
            }
        };
        fetchReports();
    }, []);

    return (
        <>
            <Navbar />
            <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    View Patients Report
                </Typography>
                {reports.length === 0 ? (
                    <Typography variant="body1">No reports available.</Typography>
                ) : (
                    reports.map(report => (
                        <Paper key={report.id} style={{ marginBottom: '20px' }}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        From {report.patientEmail}
                                    </Typography>
                                    <Typography variant="body1" >
                                        {report.doctorEmail}
                                    </Typography>
                                    <Typography variant="body2">
                                        Doctor: {report.doctorName}
                                    </Typography>
                                    <Typography variant="body3" color="textSecondary">
                                        Report: {report.reportContent}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
                    ))
                )}
            </Container>
        </>
    );
};

export default AdminReportPage;
