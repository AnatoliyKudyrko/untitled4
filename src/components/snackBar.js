import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {connect} from "react-redux";

const action = (
    <Button color="secondary" size="small">
        close
    </Button>
);

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight:'10px',
        marginBottom:'15px',
        position:'absolute',
        right:'0',
        bottom:'0'
    },
}));

const  SnackBar = (props) =>{
    const classes = useStyles();
    const [open, setOpen] = useState();
    useEffect(()=>{
        setOpen(props.messageChange.message);
        const timer = setTimeout(() => {
            props.ResetComponent();
        }, 5000);
        return () => clearTimeout(timer);
    },[props.messageChange.message])

    return (
        <div className={classes.root}>
            {
                open ?   <SnackbarContent message="Було зміненно" action={action} /> : null
            }
        </div>
    );
}

const mapStateToProps = ({messageChange})=>{
    return {
        messageChange
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        ResetComponent:()=>{
            dispatch({type:'RESET_MESSAGE_CHANGE'})
        }
    }
}
export default (connect(mapStateToProps,mapDispatchToProps)(SnackBar));