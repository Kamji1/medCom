// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AppBar, Toolbar, Typography, Button, Box,
    IconButton,
    Menu,
    MenuItem,
    MenuList,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const [anchorNav, setAnchorNav] = useState(null);

    const isLargeScreen = useMediaQuery('(min-width:900px)');

    // Open anchorNav
    const openNav = (event) => {
        setAnchorNav(event.currentTarget);
    };

    const closeNav = () => {
        setAnchorNav(null);
    };
    return (
        <AppBar position="static">
            <Toolbar className="d-flex justify-content-between align-items-center">
                <Typography variant="h6" component="div" sx={{ display: { xs: "none", md: "flex" } }}>
                    Admin Dashboard
                </Typography>
                <div className={`d-flex align-items-center ${isLargeScreen ? '' : 'd-none'}`} >
                    <Button color="inherit" component={Link} to="/AdminPortal">
                        Admin Portal
                    </Button>
                    <Button color="inherit" component={Link} to="/PostPage">
                        Create post
                    </Button>
                    <Button color="inherit" component={Link} to="/AdminReportPage">
                        Reports
                    </Button>
                    <Button color="inherit" component={Link} to="/">
                        back Home
                    </Button>
                </div>

                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton size="large" edge="start" color="inherit" onClick={openNav}>
                        <MenuIcon />
                    </IconButton>
                    <Menu open={Boolean(anchorNav)} anchorEl={anchorNav} onClose={closeNav} sx={{ display: { xs: "flex", md: "none" } }}>
                        <MenuList>
                            <MenuItem>
                                <Button color="inherit" component={Link} to="/AdminPortal">
                                    Admin Portal
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color="inherit" component={Link} to="/PostPage">
                                    Create post
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color="inherit" component={Link} to="/AdminReportPage">
                                    Reports
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color="inherit" component={Link} to="/">
                                    back Home
                                </Button>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Typography variant="h6" component="div" sx={{ display: { xs: "flex", md: "none" } }}>
                    Admin Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
