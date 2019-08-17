import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Task Manager
                        </Typography>
                    </Toolbar>
                    <MenuList style={{float:"right"}}>
                        <MenuItem style={{float:"right"}}>
                            <Typography variant="inherit" noWrap>
                                Log Out
                            </Typography>
                        </MenuItem>
                        <MenuItem style={{float:"right"}}>
                            <Typography variant="inherit">
                                Notifications
                            </Typography>
                        </MenuItem>
                        <MenuItem style={{float:"right"}}>
                            <Typography variant="inherit">
                                Reports
                            </Typography>
                        </MenuItem>
                        <MenuItem style={{float:"right"}}>
                            <Typography variant="inherit">
                                Users
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;