import { container, title } from "../material-kit-react/material-kit-react";
import headerLinksStyle from "../Header/headerLinksStyle";

const navbarsStyle = theme => ({
  section: {
    padding: "0px 0",
    paddingTop: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "0px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    },
    opacity:0.8,
    width:'100%',
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  }
});

export default navbarsStyle;
