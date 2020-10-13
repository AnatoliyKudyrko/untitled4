import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {connect} from "react-redux";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    dropdown: {
        position: 'absolute',
        top: 28,
        right: '0',
        zIndex: 1,
        border: '1px solid',
        backgroundColor: theme.palette.background.paper,
        width: '150px'
    },
}));

const DropDowns = (props)=> {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false);
    };
    useEffect(()=>{
        setData((value)=>[...value,props.messageChange.count]);
    },[props.messageChange.count])


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
                <div onClick={handleClick}>
                    {props.icon}
                </div>
                {open ? (
                    <div className={classes.dropdown}>
                        <List component="nav"  aria-label="contacts">
                            {
                                props.content === 'Notifications'  ?  <Notifications data={data} /> :
                                    props.content === 'Mail'  ?  <Mail data={data} /> :
                                props.content === 'Account'  ?  <Account  /> : null
                             }

                        </List>

                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    );
}
const Notifications =({data})=> {
    return (
        data.map(item=>{
            if (item === 0) {
                return null;
            }
            return (
                <ListItem button key={item}>
                    <ListItemText primary="Добавлено"  style={{color:'black'}}/>
                </ListItem>
            )
        })
    )
}
const Mail =({data})=> {
    return (
        data.map(item=>{
            if (item === 0) {
                return null;
            }
            return (
                <ListItem button key={item}>
                    <ListItemText primary="Переглянути"  style={{color:'black'}}/>
                </ListItem>
            )
        })
    )
}
const Account =()=> {
    return (
        <List component="nav" aria-label="main mailbox folders" style={{color:'black'}}>
            <ListItem button>
                <ListItemIcon>
                    <SettingsApplicationsIcon />
                </ListItemIcon>
                <ListItemText primary="Змінити" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    < ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Вийти" />
            </ListItem>
        </List>
            )
}
const mapStateToProps = ({messageChange})=>{
    return {
        messageChange
    }
}

export  default (connect(mapStateToProps)(DropDowns));