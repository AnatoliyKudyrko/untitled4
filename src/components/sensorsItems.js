import React, {Fragment, useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import {connect } from 'react-redux';
import {withDatastoreService} from "../hoc/toDataService";
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import FullScreenDialog from "./FullScreenDialog";
import AddSensorItems from "./addSensorItems";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign:'center',
        flexWrap: 'wrap',
        backgroundColor:'#d1c4e9',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    value:{
        color:'red',
        fontSize:'32px',
    },
    title:{
        fontSize:'24px',
        color:'black'
    },
    titleChange:{
        fontSize:'12px',
        color:'blue',
        float:'right',
        cursor:'pointer',
        display:'block'
    },
    delete :{
        position:'absolute',
        right: '0',
        padding:'2px',
        cursor:'pointer'
    }
}));

const SensorsItems = (props) => {

    const classes = useStyles();
    const [changed,setChanged] = useState(false);

    const handleChanged =()=>{
        setChanged(()=>!changed);
    }
    const iconDelete =    <span className={classes.delete}><ClearIcon fontSize='small' color="error"/></span>;
    const  addIcon =  <AddIcon fontSize='large' style={{
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    margin: 'auto'
}}/>;
    useEffect(()=>{
        setChanged(false);
            const data = new props.dataService().getDevice();
              props.loads(data);

    },[])
    return (

        <Fragment>
            <span className={classes.title}>Показники</span>
            <span className={classes.titleChange} onClick={() => handleChanged()}><EditIcon
                style={{border: '1px solid black'}} color="error"/></span>
            <div className={classes.root}>

                {
                    props.device.map(({id, value, name, img}) => {
                        return (
                            <li key={id} style={{listStyle: "none"}}>
                                <Paper elevation={0} style={{textAlign: 'center', position: 'relative'}}>
                                    {changed ? iconDelete : null}
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <img src={img} alt="" style={{width: '50%'}}/>
                                        <span>{name}</span>
                                    </div>
                                    <span className={classes.value}>{value}</span>
                                </Paper>

                            </li>
                        )

                    })
                }
                {
                    changed ? <Paper elevation={8} style={{position: "relative"}} >
                       <FullScreenDialog addIcon ={ addIcon } content={<AddSensorItems />} />
                    </Paper>  : null
                }


            </div>
        </Fragment>
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
export default withDatastoreService()(connect(mapStateToProps,mapDispatchToProps)(SensorsItems));