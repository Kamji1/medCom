
// NAVBAR SECTION


export const titleToolbar = {
  // borderBottom: 1,
  // borderColor: "divider",

  background: "transparent",
  // backgroundImage: `grey`,
  color: "#ffffff",

};

export const title = {
  flex: 1,
  fontWeight: "bold",
  fontFamily: "Raleway",
};

export const navbarToolbar = {
  justifyContent: "space-between",
  overflowX: "auto",
  backgroundColor: "fff",
};

export const link = {
  p: 1,
  flexShrink: 0,
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "Raleway",
  "&:hover": {
    // backgroundColor: "#E9F1FA",
    color: "#11a2d7",
  },
};

// HEADER SECTION

export const headerPaper = {
  position: "relative",
  backgroundColor: "transparent",
  color: "#fff",
  mb: 4,

  height: "100vh"
};

export const headerBox = {
  position: "relative",
  p: { xs: 3, md: 6 },
  pr: { md: 0 },
  mt: 20,
};

export const raleway = {
  fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
};

// REGISTER SECTION

export const button = {
  backgroundColor: "#11a2d7",
  border: "1px solid #e5f3fa",
  color: "white",
  margin: "1%",
  fontFamily: "Raleway",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#E9F1FA",
    color: "#11a2d7",
  },
};


export const cardMedia = {
  width: 160,
  display: { xs: "none", sm: "block" },
};

export const boldRaleway = {
  fontFamily: "Raleway",
  fontWeight: "bold",
};

// ABOUT SECTION

export const description = {
  fontFamily: "Raleway",
  marginBottom: "3vh",
};

export const aboutPaper = {
  position: "relative",
  backgroundColor: "grey.800",
  color: "#fff",
  mb: 4,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url('images/ban.jpg')`,
};

export const box = {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.3)",
};

export const subtitle = {
  fontFamily: "Raleway",
  fontWeight: "bold",
  fontStyle: "italic",
};

// TESTIMONIALS SECTION

export const message = {
  fontFamily: "Raleway",
  fontStyle: "italic",
};

export const testimonialsTitle = {
  fontFamily: "Raleway",
  paddingBottom: "2%",
  fontStyle: "italic",
  fontWeight: "bold",
};

export const card = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

// FOOTER SECTION

export const footerBox = {
  py: 1,
  backgroundColor: "grey",
  color: "#ffffff",
};

export const iconButton = {
  color: "#ffffff",
  "&:hover": { fontWeight: "bold" },
};

export const footerTitle = {
  mt: 1,
  fontFamily: "Raleway",
  fontWeight: "bold",
};

export const sendButton = {
  color: "#11a2d7",
  backgroundColor: "#ffffff",
  fontFamily: "Raleway",
  fontWeight: "bold",
};

//navbar doc/pat

export const grow = {
  flexGrow: 1,
};

