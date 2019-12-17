import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";

const StyledMenu = withStyles({
  paper: {}
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:hover": {
      //backgroundColor:linearGradient('45deg', '#ff5263 0%', '#ff7381 60%', '#fcbd01 115%')
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function AddMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let addIcon = <AddCircleIcon color="secondary" />;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ backgroundColor: 'transparent' }} 
        disableRipple="true"
        >
        {addIcon}
      </Button> */}
      <IconButton
        children={addIcon}
        onClick={handleClick}
        style={{
          backgroundColor: "transparent",
          outline: "0",
          right: "-12px"
        }}
        disableRipple="true"
      ></IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <CheckCircleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Task" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AssignmentOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Project" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ForumOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Conversation" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <GroupOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Team" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PersonAddOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Invite" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}