import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Typography, Toolbar } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Homes from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  drawerPaper: {
      border: 'none',
      width: 70,
  },
  ListItemText: {
      fontSize: 10
  },

}));

function BarraLateral() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Box style={{display: 'flex'}}>  
      <Drawer
        variant="permanent"
        style={{position: 'fixed'}}
        classes={{
            paper: classes.drawerPaper,
            }}
      >
        
        <List style={{marginTop: 80}}>
    
            <ListItem style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} button>
              <ListItemIcon style={{display: 'flex', justifyContent: 'center'}}><Homes/></ListItemIcon>
              <ListItemText classes = {{ primary: classes.ListItemText}} primary={'Inicio'} />
            </ListItem>
          
        </List>
        <List>
            <ListItem style={{display: 'flex', flexDirection: 'column'}} button>
              <ListItemIcon style={{display: 'flex', justifyContent: 'center'}}><Whatshot/></ListItemIcon>
              <ListItemText classes = {{ primary: classes.ListItemText}} primary={'Em alta'} />
            </ListItem>
         
        </List>
        <List>
    
            <ListItem style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} button>
                <ListItemIcon style={{display: 'flex', justifyContent: 'center'}} ><Subscriptions/></ListItemIcon>
                <ListItemText classes = {{ primary: classes.ListItemText}} primary={'Incricões'} />
            </ListItem>
  
        </List>
        <List>
            <ListItem style={{display: 'flex', flexDirection: 'column'}} button>
                <ListItemIcon style={{display: 'flex', justifyContent: 'center'}}><VideoLibrary/></ListItemIcon>
                <ListItemText classes = {{ primary: classes.ListItemText}} primary={'Biblioteca'} />
            </ListItem>
        
        </List>
        </Drawer>     
    </Box>        
    </div>
  );
}

export default BarraLateral