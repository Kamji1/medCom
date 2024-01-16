import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AppBar, Toolbar, Typography, Button, Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    IconButton,
    Menu,
    MenuItem,
    MenuList,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const PatNavbar = () => {
    const [user] = useAuthState(auth);
    const [anchorNav, setAnchorNav] = useState(null);
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);

    const isLargeScreen = useMediaQuery('(min-width:900px)');

    // Open anchorNav
    const openNav = (event) => {
        setAnchorNav(event.currentTarget);
    };

    const closeNav = () => {
        setAnchorNav(null);
    };

    // For Dialogue and validation
    const handleLogout = () => {
        setLogoutModalOpen(true);
    };

    const confirmLogout = () => {
        signOut(auth);
        setLogoutModalOpen(false);
    };

    const cancelLogout = () => {
        setLogoutModalOpen(false);
        signOut(auth);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar className="d-flex justify-content-between align-items-center">
                    <Typography variant="h6" component="div" sx={{ display: { xs: "none", md: "flex" } }}>
                        Dashboard
                    </Typography>
                    <div className={`d-flex align-items-center ${isLargeScreen ? '' : 'd-none'}`}>
                        {user && (
                            <span className="pe-4">
                                signed in as {user.email}
                            </span>
                        )}

                        <Button color="inherit" component={user ? Link : 'div'} to={user ? "/AppointmentPage" : null} disabled={!user} className="ms-2">
                            Make Appointment
                        </Button>
                        <Button color="inherit" component={user ? Link : 'div'} to={user ? "/ReportPage" : null} disabled={!user} className="ms-2">
                            Make a Report
                        </Button>
                        <Button color="inherit" component={Link} to="/" className="ms-2" onClick={handleLogout}>
                            back Home
                        </Button>
                        <button className="btn btn-secondary ms-2" disabled={!user} onClick={handleLogout}>
                            Logout
                        </button>
                    </div>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" edge="start" color="inherit" onClick={openNav}>
                            <MenuIcon />
                        </IconButton>
                        <Menu open={Boolean(anchorNav)} anchorEl={anchorNav} onClose={closeNav} sx={{ display: { xs: "flex", md: "none" } }}>
                            <MenuList>
                                <MenuItem>{user && <span className="pe-4">signed in as {user.email}</span>}</MenuItem>
                                <MenuItem>
                                    <Button color="inherit" component={user ? Link : 'div'} to={user ? "/AppointmentPage" : null} disabled={!user} className="ms-2">
                                        Make Appointment
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button color="inherit" component={user ? Link : 'div'} to={user ? "/ReportPage" : null} disabled={!user} className="ms-2">
                                        Make a Report
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button color="inherit" component={Link} to="/" className="ms-2" onClick={handleLogout}>
                                        back Home
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="btn btn-secondary ms-2" onClick={handleLogout} disabled={!user}>
                                        Logout
                                    </button>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ display: { xs: "flex", md: "none" } }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Dialog open={logoutModalOpen} onClose={cancelLogout}>
                <DialogTitle> LOGGED OUT</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">You have been successfully logged out.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelLogout} color="primary">
                        Close
                    </Button>
                    <Button component={Link} to="/" color="primary" onClick={confirmLogout}>
                        Go to Home
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PatNavbar;
