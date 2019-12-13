import React from 'react';

const container={
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    }

function NavGroup({components}){
    return(
        <div style={container}>
        {
            components.map(component => <div style={{margin:"20px"}}>{component}</div>)
        }
        </div>
    )
}

export default NavGroup;