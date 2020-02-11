import { container, title } from "../material-kit-react/material-kit-react";

const pillsStyle = {
    section: {
    padding: "0 0",
    backgroundImage:'url(https://orlandoinformer.com/wp-content/uploads/2017/07/20170127-_DSC3595.jpg)',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundAttachment:'fixed'
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none", 
      alignItems:"center",
      justify:"center",
  }
};

export default pillsStyle;
