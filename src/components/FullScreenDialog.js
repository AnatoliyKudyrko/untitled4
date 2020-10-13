import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const  FullScreenDialog=(props)=> {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true );
    };
    const handleClose = () => {
        setOpen(false);
        props.changeMessage()
    };

    return (
        <div>
            <div style={{padding:'100%'}} onClick={()=>handleClickOpen()}>{props.addIcon }</div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Редагування
                        </Typography>
                        <Button autoFocus color="inherit" onClick={()=>handleClose()} >
                            Зберегти
                        </Button>
                    </Toolbar>
                </AppBar>
               <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                   {props.content}
               </div>
            </Dialog>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeMessage:()=>{
            dispatch({type:'ADD_MESSAGE_CHANGE'})
        }
    }
}

export default (connect(mapDispatchToProps,mapDispatchToProps)(FullScreenDialog));