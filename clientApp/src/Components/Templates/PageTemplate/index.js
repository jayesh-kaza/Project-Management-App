import React from 'react';

const Wrapper = {
    display : "flex",
    flexDirection : "column",
    paddingTop : "3.75rem",
    minHeight : "100vh",
    boxSizing : "border-box",
}

const Header = {
    position : "fixed",
    top : 0,
    width : "100%",
    zIndex : "999",
}

const Content = {
    width : "100%",
    boxSizing : "border-box",
    margin : "2rem auto",
}




function PageTemplate({header,children}){
    return(
    <div style={Wrapper}>
       <div style={Header}>{header}</div>
       <div style={Content}>{children}</div>
    </div>
    )
}

export default PageTemplate;