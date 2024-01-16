// AdminHomePage.js

import React, { useState } from "react";
import { db } from "../firebase";
import { Typography, TextField, Button } from "@mui/material";
import Navbar from "./navbar";

const AdminHomePage = () => {
    const [postText, setPostText] = useState("");

    const handlePost = () => {
        // Save the post to Firebase
        db.collection("posts").add({
            text: postText,
            createdBy: "admin", // Add the admin's identifier
            createdAt: new Date(),
        });

        // Clear the post text after posting
        setPostText("");
    };

    return (
        <div>
            <Navbar />
            <Typography variant="h4" align="center" mt={3}>
                Admin Home Page
            </Typography>

            {/* Admin post input */}
            <TextField
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
            />
            <Button variant="contained" onClick={handlePost}>
                Post
            </Button>
        </div>
    );
};

export default AdminHomePage;
