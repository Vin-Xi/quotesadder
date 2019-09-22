import React,{useState} from 'react'
import { withRouter } from 'react-router'
import {AppBar, Toolbar,List,ListItem, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../Constants';
import { Divider } from '@material-ui/core';
import {useStyles} from '../styles/Styles'
const authToken = localStorage.getItem(AUTH_TOKEN)


 const Header=(props)=> {
    const [state,setState]=useState({left:false})
    const classes=useStyles();    
    const style={textDecoration:'none',color:'black'}
   
     const toggleDrawer=()=>{
        setState({left:!state.left}) 
    }
    
    return (
    <div>
        <AppBar position="static">
            <Toolbar>
                    
             <MenuIcon onClick={toggleDrawer} />
             <div className={classes.list}>
                <Drawer variant="persistent" open={state.left} onClose={toggleDrawer}>
                    <List>
                    <Divider/>
                        <ListItem button onClick={toggleDrawer}><Link style={style} to="/"><Typography variant='h6'>   New</Typography></Link></ListItem>
                        <Divider/>
                        <ListItem button onClick={toggleDrawer}><Link style={style} to="/create"><Typography variant='h6'>   Submit</Typography></Link></ListItem>
                        <Divider/>
                        <ListItem button onClick={toggleDrawer}><Link style={style} to="/Search"><Typography variant='h6'>   Search</Typography></Link></ListItem>
                        <Divider/>
                        <ListItem button onClick={toggleDrawer}>{authToken?(
                            <div onClick={()=>{localStorage.removeItem(AUTH_TOKEN)
                                props.history.push('/')}}>,                 
                                    <Typography variant='h6'>Logout</Typography>
                            </div>):(<Link style={style}    to="/login"><Typography variant='h6'>Login</Typography></Link>)}</ListItem>
                            <Divider/>
                    </List>
                </Drawer>
                </div>
            </Toolbar>
        </AppBar>
    </div>
    )
}
export default withRouter(Header)
