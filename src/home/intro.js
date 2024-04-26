import React from "react";
import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";

const WhoWeAreSection = () => {
    return (
        <section id="about" style={{ justifyContent: "center", alignContent: "center", marginTop: "3%" }}>
            <Typography variant="h4" align="center" color="grey" gutterBottom>
                WHO WE ARE
            </Typography>
            <Divider sx={{ backgroundColor: 'grey', height: '4px', width: '10%', margin: 'auto' }} />
            <Grid container spacing={3} marginTop={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                About MedCom
                            </Typography>
                            <Typography style={{ maxHeight: "120px" }}>
                                MedCom is a platform connecting patients with healthcare
                                providers for convenient and accessible healthcare services.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                What We Do
                            </Typography>
                            <Typography style={{ maxHeight: "120px" }}>
                                We provide a seamless experience for patients to consult with
                                qualified doctors, receive medical advice, and schedule
                                appointments online.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Our Doctors
                            </Typography>
                            <Typography style={{ maxHeight: "120px" }}>
                                Our platform features experienced doctors in various medical
                                fields, ensuring you find the right healthcare professional for your care.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                How to Use
                            </Typography>
                            <Typography style={{ maxHeight: "120px" }}>
                                Using MedCom is easy! Sign up, search for a doctor, schedule
                                an appointment or start a consultation from home at your comfort.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </section>
    );
};

export default WhoWeAreSection;
