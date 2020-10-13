import React, {Component, Fragment, useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import Switched from '../components/Switch'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import {connect} from 'react-redux';
import {withDatastoreService} from '../hoc/toDataService';
import {ADDLOADERDATA} from '../actions/actions'
import {bindActionCreators} from "redux";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import FullScreenDialog from "./FullScreenDialog";
import AddSensorItems from "./addSensorItems";
import AddControlDevice from "./AddControlDevice";

const useDevice = makeStyles((theme) => ({
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
        cursor:'pointer'
    },
    delete :{
        position:'absolute',
        right: '0',
        padding:'2px',
        cursor:'pointer'
    }
}));

const ControlDevice = (props)=>{
    const classes = useDevice();
    const [changed,setChanged] = useState(false);
    const [obj,setObj,] = useState({});
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
    const data = new props.dataService().getDeviceControl();
    props.load(data);

},[])
    console.log(props.deviceControl.filter(item=>item.name === 'LED1'))
   const handleSelectID =(id)=>{
       props.SelectID(id)
    }
    const toggleChecked = (value)=>{
    console.log(value)
        return value;
    }
    const LoadData = (id,value,name,img)=>{
    setObj({
        id,
        value,
        name,img
    })
    }

    return (
        <Fragment >
            <span className={classes.title}>Показники Девайсів</span>
            <span className={classes.titleChange} onClick={() => handleChanged()}><EditIcon
                style={{border: '1px solid black'}} color="error"/></span>
            <div className={classes.root}>
                {
                    props.deviceControl.map(({id,value,name, type,img})=>{
                        const color = value ? 'yellow' : 'black';
                        return (
                            <li key={id} style={{listStyle:"none",cursor:'pointer'}} onClick={()=>handleSelectID(id)}>
                                <Paper elevation={0} style={{textAlign:'center',position: 'relative'}}>
                                    {changed ? iconDelete : null}
                                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                        {type === 'LED' ? <WbIncandescentIcon  style={{color:`${color}`, fontSize:'64'}}/> : null}
                                        <span>{name}</span>
                                        <Switched value={value} toggleChecked={()=>toggleChecked(value)}
                                                  onClick ={  ()=> LoadData(id,toggleChecked(value),name,img)} />
                                    </div>
                                </Paper>
                            </li>
                        )

                    })
                }
                    {
                        changed ? <Paper elevation={8} style={{position: "relative"}} >
                            <FullScreenDialog addIcon ={ addIcon } content={<AddControlDevice />} />
                        </Paper>  : null
                    }

            </div>
        </Fragment>
    );

};

const mapStateToProps = ({deviceControl,loader})=>{
    return {deviceControl,loader}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        load:(newData)=>{
          dispatch({type:'ADD_LOADER_DEVICE_CONTROL', payload:newData})
        },
        SelectID:(newData)=>{
            dispatch({type:'SELECT_ID_DEVICE', payload:newData})
        },
        CheckedDevice:(newData)=>{
            dispatch({type:'CHECKED_DEVICE', payload:newData})
        }
    }
}

export default withDatastoreService()(connect(mapStateToProps,mapDispatchToProps)(ControlDevice));