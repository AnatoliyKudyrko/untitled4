import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {withDatastoreService} from "../hoc/toDataService";
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    }
}));

const DeviceDetalies = (props) => {
    const classes = useStyles();
    const [data,setData] = useState([]);
    useEffect(()=>{
            setData([...new props.dataService().getDeviceControlID(props.selectDevice)])
    },[props.selectDevice])

    return (
        <div className={classes.root}>
        <Grid>
            <Grid item xs={12} >
                <Typography variant="h6">
                    Налаштування {data.map(item=>item.name)}
                </Typography>
                <List>
                {
                    data.map(item=>{
                        return (
                                <ListItem  key={item.id} style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                                    <ListItemText primary={`Імя: ${item.name}`} />
                                    <ListItemText primary={`Дата: ${item.timeWork}`} />
                                    <ListItemText >
                                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                                            <Button>One</Button>
                                            <Button>Two</Button>
                                            <Button>Three</Button>
                                        </ButtonGroup>
                                        </ListItemText>
                                </ListItem>


                    )
                })
                }
                </List>
            </Grid>
        </Grid>
        </div>
    );
};

const MapStateToProps = ({selectDevice})=>{
    return {selectDevice}
}
export default withDatastoreService()(connect(MapStateToProps)(DeviceDetalies));