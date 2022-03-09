import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../img/logo.png';

import useStyles from '../styles/header';

const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();
  
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt='logo'/>
          <Box display="flex">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search places…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;