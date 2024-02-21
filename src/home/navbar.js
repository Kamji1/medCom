import * as React from "react";
import { Link, Toolbar, Typography } from "@mui/material";
import { link, navbarToolbar, title, titleToolbar } from "./styles";

const Navbar = (props) => {
  const { sections } = props;

  return (
    <React.Fragment id="">
      {/* TITLE */}

      <div >
        <Toolbar sx={titleToolbar}>
          {/* <Box sx={box} /> */}
          <Typography
            variant="h3"
            color="#11a2d7"
            align="start"
            noWrap
            sx={title}
          >
            MEDCOM
          </Typography>
          <Toolbar component="nav" variant="dense" sx={navbarToolbar}>
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="h6"
                href={section.url}
                sx={link}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </Toolbar>

        {/* LINKS TO VARIOUS SECTIONS */}

      </div>
    </React.Fragment>
  );
};

export default Navbar;
