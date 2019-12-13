import React from 'react'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
const Credential=(props)=>{

    return( <div>
        <Typography className={props.typeClass}>{props.typeContent}</Typography>
        <TextField
          id="outlined-bare"
          className={props.textFieldClass}
          margin="normal"
          variant="outlined"
          inputProps={{ "aria-label": "bare" }}
          label={props.label}
        />
        </div>);
}
export default Credential