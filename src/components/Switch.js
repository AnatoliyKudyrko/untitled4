import React, {Fragment, useEffect} from 'react';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from '@material-ui/core/Switch';
import {connect} from "react-redux";


const Switched = (props) => {
    const [checked ,setChecked] = React.useState(props.value);
    const toggleChecked = () => {
        setChecked((prev) => !prev);
        props.toggleChecked(checked);
    };
    return (
       <Fragment >
           <FormGroup>
               <FormControlLabel
                   control={<Switch checked={checked} onChange={()=>toggleChecked()}/>}
               />
               {console.log(checked)}
           </FormGroup>
       </Fragment>
    );
};



export default Switched;