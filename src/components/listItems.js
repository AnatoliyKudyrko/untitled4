import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import {Link } from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },

}));

const MainListItems =()=> {
    return (
        <div>
            <Link to='/dashboard/main'>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
            </Link>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon/>
                </ListItemIcon>
                <ListItemText primary="Orders"/>
            </ListItem>
            <Link to='/dashboard/user'>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Customers"/>
                </ListItem>
            </Link>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>

                <ListItemText primary="Reports"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Integrations"/>
            </ListItem>
        </div>
    );
}

 const SecondaryListItems =()=>{
    return (
        <div>
            <ListSubheader inset>Saved reports</ListSubheader>
            <ListItem button>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Current month" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Last quarter" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Year-end sale" />
            </ListItem>
        </div>
    );
}

export  {
    MainListItems,
    SecondaryListItems
}