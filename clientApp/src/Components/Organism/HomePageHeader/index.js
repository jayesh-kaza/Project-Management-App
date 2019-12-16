import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';
import CustomButton from '../../Atoms/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import img from '../../Atoms/Images/1.jpg'
import SearchBar from '../../Molecules/SeachBar';
import AddMenu from '../AddMenu';
import UserMenu from '../UserMenu'
import HelpMenu from '../HelpMenu'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    background: '#4caf50',
    width: 24,
    height: 24,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  //   container:{
  //       display:"flex",
  //     flexDirection:"row-reverse",
  //   },

  title: {
    flexGrow: 1,
    fontSize: '20px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(6),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 500,
      },
    },
  },
}));



export default function HomePageHeader() {
  const theme1 = createMuiTheme({
    overrides: {
      MuiSelect: {
        select: {
          "&:focus": {
            background: "$labelcolor"
          }
        }
      }
    }
  });
  const classes = useStyles();
  let addIcon = <AddCircleIcon color="secondary" />
  let helpIcon = <HelpOutlineOutlinedIcon />
  let userIcon = <Avatar alt="r" className={classes.avatar} src={img} />
  // let userIcon=<Avatar variant="rounded" className={classes.avatar}>r</Avatar>
  return (
    <MuiThemeProvider theme={theme1}>
      <div className={classes.root}>
        <AppBar position="static" color="default" elevation="none">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Home
          </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon fontSize='small' style={{ color: "#bdbdbd" }} />
              </div>
              <SearchBar />
            </div>
            <div>
              <AddMenu />
            </div>
            <div>
              <HelpMenu />
            </div>
            <div>
              <CustomButton type="warning" name="Upgrade" />
            </div>
            <div>
              <UserMenu name={userIcon} />
            </div>

          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

