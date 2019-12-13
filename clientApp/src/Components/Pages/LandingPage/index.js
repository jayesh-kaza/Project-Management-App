import React ,{useState}from "react";
import PageTemplate from "../../Templates/PageTemplate";
import Header from "../../Organism/LandingPageHeader";
import Heading from "../../Atoms/MainHeading";
import SubHeading from "../../Atoms/SubHeading";
import { Button } from "@material-ui/core";
import Login from '../Login/Login'
const headingStyle = {
  fontFamily: "gordita,Helvetica Neue,sans-serif",
  fontSize: "2.8125rem",
  marginTop: "0",
  marginBottom: "32px",
  color: "#151b26",
  padding: "15px 300px 15px 300px"
};

const subHeadingStyle = {
  fontSize: "1.375rem",
  lineHeight: "1.636",
  color: "#646f79",
  fontWeight: "300",
  paddingRight: "200px",
  paddingLeft: "200px",
  marginBottom: "50px"
};

const buttonStyle = {
  backgroundColor: "#635ac7",
  outline: 0,
  textTransform: "none"
};

const LandingPage=(props)=> {
  const [logged,setLogged]=useState(false)
  const [test,setTest]=useState('test')

const loginOpen=()=>{
console.log("WE")
setLogged(true)
setTest('jayesh')
}

const loginClose=()=>{
setLogged(false)
}
  return (
    <div><Login logged={logged} loginClose={loginClose}/>
    <PageTemplate header={<Header loginOpen={loginOpen}/>}>
      <div align="center">
        <Heading style={headingStyle}>
          Make more time for the work that matters most{" "}
        </Heading>
        <SubHeading style={subHeadingStyle}>
          Asana is the work management platform teams use to stay focused on the
          goals, projects, and daily tasks that grow business.{" "}
        </SubHeading>
        <Button variant="contained" color="primary" style={buttonStyle}>
          <Typography>Try For Free</Typography>
        </Button>
      </div>
    </PageTemplate></div>
  );
}

export default LandingPage;