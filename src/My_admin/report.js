import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Paper,
} from '@mui/material';
import Navbar from './navbar';

const AdminReportPage = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Example: Fetch reports from an API or database
        const fetchedReports = [
            {
                id: 1,
                doctorName: 'Dr. John Doe',
                doctorEmail: 'john.doe@example.com',
                reportContent: 'This is a report about Dr. John Doe.',
            },
            // Add more reports as needed
        ];

        setReports(fetchedReports);
    }, []);

    return (
        <>
            <Navbar />
            <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
                <Paper style={{ padding: '20px' }} elevation={3}>
                    <Typography variant="h5" gutterBottom>
                        View Patients Report
                    </Typography>
                    {reports.length === 0 ? (
                        <Typography variant="body1">No reports available.</Typography>
                    ) : (
                        <List>
                            {reports.map((report) => (
                                <ListItem key={report.id} alignItems="flex-start">
                                    <ListItemText
                                        primary={`Doctor: ${report.doctorName}`}
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    {`Email: ${report.doctorEmail}`}
                                                </Typography>
                                                <br />
                                                {`Report: ${report.reportContent}`}
                                            </>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Paper>
            </Container>
        </>
    );
};

export default AdminReportPage;
