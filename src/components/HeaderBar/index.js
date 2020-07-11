import React, { useState } from 'react'
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VideoCall from '@material-ui/icons/VideoCall'
import Apps from '@material-ui/icons/Apps'
import Notifications from '@material-ui/icons/Notifications'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Homes from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import WatchLater from '@material-ui/icons/WatchLater'
import Theaters from '@material-ui/icons/Theaters'
import YouTube from '@material-ui/icons/YouTube'
import SettingsInputAntenna from '@material-ui/icons/SettingsInputAntenna'
import SportsEsportsSharp from '@material-ui/icons/SportsEsportsSharp'
import Settings from '@material-ui/icons/Settings'
import Flag from '@material-ui/icons/Flag'
import Feedback from '@material-ui/icons/Feedback'
import Help from '@material-ui/icons/Help'




function HeaderBar(){

    const [visible, setVisible] = useState(false)

    const open = () => {
        setVisible(true)
   }

    const close = () => {
        setVisible(false)
}

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh'
        },
        AppBar: {
            boxShadow: 'none',
        },
        Grow: {
            flexGrow: 1
        },
        icons: {
            paddingRight: theme.spacing(4)
        },
        MenuIcon: {
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
           
        },
        label: {
            color: 'inherit',
            fontSize: 22,        
        },
        Sidebar: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1.8)
        },
        drawerPaper: {
            borderRight: 'none',
        },
        Logo: {
            paddingLeft: theme.spacing(2)
        },
        ListItemText: {
            fontSize: 14
        },
        ListItem: {
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0)
        },
        StrongIns: {
            paddingLeft: theme.spacing(2),
            paddingTop: theme.spacing(5)
        }

    }))

    const classes = useStyles()

   

    return (
        
        <div className={classes.root}>
            <AppBar position="fixed" color="inherit" className={classes.AppBar}>
                <Toolbar >
                   <IconButton onClick={open} edge="start" className={classes.MenuIcon} color="inherit" aria-label="menu">
                       <MenuIcon />
                    </IconButton>
                    <img src="/images/preto.png" alt="Logo" style={{width: 110}}/>

                    <div className={classes.Grow}/>
                    <IconButton edge="start" className={classes.icons} color="inherit" aria-label="menu">
                       <VideoCall />
                    </IconButton>
                    <IconButton edge="start" className={classes.icons} color="inherit" aria-label="menu">
                       <Apps />
                    </IconButton>
                    <IconButton edge="start" className={classes.icons} color="inherit" aria-label="menu">
                       <Notifications />
                    </IconButton>
                        <Button startIcon={<AccountCircle />} variant="outlined" style={{color: "#237cbf"}}>Fazer Login</Button>
                </Toolbar>
            </AppBar>
            
            {visible && (
                
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.Sidebar}>
                    <IconButton onClick={close} edge="start" className={classes.MenuIcon} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src="/images/preto.png" alt="Logo" className={classes.Logo} style={{width: 110, height: 30}}/>
                </div>
                <Divider />

                <div className={classes.drawerContainer}>
                <List>

                    <ListItem classes={{root: classes.ListItem}} button>
                        <ListItemIcon><Homes/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                         primary={'Inicio'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><Whatshot/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Em alta'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><Subscriptions/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Inscricões'} />
                    </ListItem>
                </List>
                <Divider />
                <List style={{width: 270}}>
                    <ListItem classes={{root: classes.ListItem}} button>
                        <ListItemIcon><VideoLibrary/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Biblioteca'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><History/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Historico'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><PlayCircleOutline/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Seus videos'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><WatchLater/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Assistir mais tarde'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><ThumbUpAlt/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Videos marcados co...'} />
                    </ListItem>
                </List>
                <Divider />
                <div style={{marginTop: 15, marginBottom: 15}}>
                    <strong className={classes.StrongIns}>INSCRICÕES</strong>
                </div>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><AccountCircle/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Codando'} />
                    </ListItem>
                </List>
                <Divider />
                <div style={{marginTop: 15, marginBottom: 15}}>
                    <strong className={classes.StrongIns}>MAIS DO YOUTUBE</strong>
                </div>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><YouTube/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'YOUTUBE PREMIUM'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><Theaters/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'YouTube Filmes'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><SportsEsportsSharp/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Jogos'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><SettingsInputAntenna/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Ao vivo'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><Settings/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Configuracões'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><Flag/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Histórico de denúncias'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><Help/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Ajuda'} />
                    </ListItem>
                </List>
                <List>
                    <ListItem classes={{root: classes.ListItem}} button >
                        <ListItemIcon><Feedback/></ListItemIcon>
                        <ListItemText classes = {{
                            primary: classes.ListItemText
                        }}
                        primary={'Enviar feedback'} />
                    </ListItem>
                </List>
                </div>
      </Drawer>
      )}
        </div>
    )
}

export default HeaderBar