

import React from "react";
// import { db } from "../firebase";
import {
    Container, Typography, List, ListItem,
    CssBaseline,
} from "@mui/material";
import Navbar from "./navbar"; // Assuming you have a Navbar component

const AdminPortal = () => {
    // const [records, setRecords] = useState([]);

    // useEffect(() => {
    //     // Fetch records from Firebase and update the state
    //     const unsubscribe = db.collection("records").onSnapshot((snapshot) => {
    //         setRecords(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    //     });

    //     // Clean up the listener on component unmount
    //     return () => unsubscribe();
    // }, []);

    return (
        <>
            <Navbar />
            <Container>
                <Typography variant="h4" align="center" mt={3}>
                    Admin Portal
                </Typography>
                <Typography variant="h5" align="center" mb={3}>
                    See all registered users
                </Typography>

                {/* Display patient records */}
                <List>
                    {/* {records.map((record) => (
                        
                    ))} */}
                    <ListItem >
                        {/* Display record details as needed */}

                        <CssBaseline />
                        <Typography>
                            Patient: , Doctor: , ...
                        </Typography>
                    </ListItem>
                </List>
            </Container >
        </>
    );
};

export default AdminPortal;
