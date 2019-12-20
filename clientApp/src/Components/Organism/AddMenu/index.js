import React, { useState } from "react";
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
import TaskDialog from "../../Molecules/TaskDialog";
import ProjectDialog from "../../Molecules/ProjectDialog";
import TeamDialog from "../../Molecules/TeamDialog";

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
      // backgroundColor: `linearGradient('45deg', '#ff5263 0%', '#ff7381 60%', '#fcbd01 115%')`
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTask, setOpenTask] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);
  let addIcon = <AddCircleIcon color="secondary" />;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenTask = () => {
    setOpenTask(!openTask);
    setAnchorEl(null);
  };

  const handleOpenProject = () => {
    setOpenProject(!openProject);
    setAnchorEl(null);
  };

  const handleOpenTeam = () => {
    setOpenTeam(!openTeam);
    setAnchorEl(null);
  };

  const items = {
    Task: [<CheckCircleOutlinedIcon fontSize="small" />, handleOpenTask],
    Project: [<AssignmentOutlinedIcon fontSize="small" />, handleOpenProject],
    Conversation: [<ForumOutlinedIcon fontSize="small" />, null],
    Team: [<GroupOutlinedIcon fontSize="small" />, handleOpenTeam],
    Invite: [<PersonAddOutlinedIcon fontSize="small" />, null]
  };

  return (
    <div>
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
        {Object.keys(items).map(key => (
          <StyledMenuItem onClick={items[key][1]}>
            <ListItemIcon>{items[key][0]}</ListItemIcon>
            <ListItemText primary={key} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
      {openTask ? (
        <TaskDialog open={openTask} handleOpen={handleOpenTask} />
      ) : null}
      {openProject ? (
        <ProjectDialog open={openProject} handleOpen={handleOpenProject} />
      ) : null}
      {openTeam ? (
        <TeamDialog open={openTeam} handleOpen={handleOpenTeam} />
      ) : null}
    </div>
  );
}
