import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from "@material-ui/core/Input";
import Divider from "@material-ui/core/Divider";
import {connect} from "react-redux";
import {light} from "@material-ui/core/styles/createPalette";
import {withMobileDialog} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import StorageIcon from '@material-ui/icons/Storage';
import {VolumeUp} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    slider:{
        width:'70%'
    },
    input:{
      marginTop:'-45px'
    },
    title:{
        marginTop:'-10px',
        fontSize:'22px'
    }
}));


function valuetext(value) {
    return `${value}°C`;
}

const ControlPanel = (props) => {
    const classes = useStyles();
    useEffect(()=>{

    },[])

    return (
        <div className={classes.root}>
            <Typography id="track-false-slider" gutterBottom style={{fontSize:'24px'}}>
                Значення показників
            </Typography>
            <Divider />
            {
                props.device.map(item=>{
                    return(
                        <span key={item.id}>
                            < ControlPanelItems values={item}/>
                        </span>
                        )

                })
            }



        </div>
    );
};
const mapStateToProps =({device})=>{
    return {device}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        loads:(newData)=>{
            dispatch({type:'ADD_LOADER_DEVICE', payload:newData})
        }
    }
}

const ControlPanelItems = ({values})=>{
    const [value, setValue] = React.useState(values.value);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 35) {
            setValue(35);
        }
    };

    return (
        <div>
            <Typography id="input-slider" gutterBottom>
                {values.name}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <StorageIcon />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        max={35}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 5,
                            min: 0,
                            max: 35,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
            <Divider />
        </div>
    );

}

export default (connect(mapStateToProps)(ControlPanel));