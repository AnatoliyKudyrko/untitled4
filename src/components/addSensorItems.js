import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Formik, Form, Field } from 'formik';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import * as Yup from 'yup';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Коротко!')
        .max(50, 'Забагато симфолів!')
        .required(<span style={{color:'red'}}>Обовязково</span>),
    value: Yup.number()
        .required(<span style={{color:'red'}}>Обовязково</span>),
    select: Yup.string().required(<span style={{color:'red'}}>Обовязково</span>)
});


const AddSensorItems = (props) => {
    const classes = useStyles();
    const TransfromToImg = (name)=>{
        switch (name){
            case 'temp': return {img:'https://img.icons8.com/windows/64/000000/thermometer.png'};
            case 'volog': return {img:'https://img.icons8.com/windows/64/000000/wet.png'};
            case 'tisk': return {img:'https://img.icons8.com/windows/64/000000/barometer-gauge.png'};
            default : return {
                img:'none'
            }
        }
    }
    const TransformToMap =({select,name,value })=>{

       const lastIndex = props.device.reduce(function (p, v) {
            return ( p > v ? p : v );
        }).id +1 ;
       props.AddedItem({
           ...{id:lastIndex} , ...{value} , ...{name},...TransfromToImg(select)
    });
     props.changeMessage();
    }
    return (
        <div style={{marginTop:'10%'}}>
            <Formik
                initialValues={{ select: '', name: '',value:'' }}
                onSubmit={(values, { setSubmitting,resetForm }) => {

                   TransformToMap(values);
                    resetForm({})
            }}
                validationSchema={SignupSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                <form className={classes.formControl} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <InputLabel id="demo-simple-select-label">Тип дачика</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='select'
                                    value={values.select}
                                    onChange={handleChange}
                                    fullWidth={true}
                                >
                                    <MenuItem value={'temp'}>Температура</MenuItem>
                                    <MenuItem value={'volog'}>Вологість</MenuItem>
                                    <MenuItem value={'tick'}>Тиск</MenuItem>
                                    <MenuItem value={'light'}>Освітлення</MenuItem>
                                </Select>
                                {errors.select && touched.select && errors.select}
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <TextField
                                    id="standard-textarea"
                                    placeholder="Імя"
                                    name='name'
                                    multiline
                                    fullWidth={true}
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                {errors.name && touched.name && errors.name}
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>

                                <TextField
                                    id="standard-textarea"
                                    placeholder='value'
                                    multiline
                                    name='value'
                                    fullWidth={true}
                                    onChange={handleChange}
                                    value={values.value}
                                />
                                {errors.value && touched.value && errors.value}
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{textAlign:'center', paddingTop:'30px'}}>
                            <Button type="submit" disabled={isSubmitting} color="primary" variant="contained" disable>
                                Добавити
                            </Button>
                    </Grid>


                </form>
                    )}
            </Formik>


        </div>
    );
};

const mapStateToProps = ({device})=>{
    return {
        device
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        AddedItem:(newData)=>{
            dispatch({type:'ADD_TO_DEVICE', payload:newData})
        },
        changeMessage:()=>{
            dispatch({type:'ADD_MESSAGE_CHANGE'})
        }
    }
}
export default (connect(mapStateToProps,mapDispatchToProps)(AddSensorItems));