import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddSensorItems = () => {
    const classes = useStyles();
    const [valued, setValued] = React.useState('');


    const handleChange = (event) => {
        setValued(event.target.value);
    };

    return (
        <div style={{marginTop:'10%'}}>
            <FormControl className={classes.formControl} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <InputLabel id="demo-simple-select-label">Тип дачика</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={valued}
                                onChange={handleChange}
                                fullWidth={true}
                            >
                                <MenuItem value={'temp'}>Температура</MenuItem>
                                <MenuItem value={'volog'}>Вологість</MenuItem>
                                <MenuItem value={'tick'}>Тиск</MenuItem>
                                <MenuItem value={'light'}>Освітлення</MenuItem>
                                <MenuItem value={'light'}>Освітлення</MenuItem>
                            </Select>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <TextField
                            id="standard-textarea"
                            placeholder="Імя"
                            multiline
                            fullWidth={true}
                        />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>

                            <TextField
                                id="standard-textarea"
                                placeholder='Pin'
                                multiline
                                fullWidth={true}
                            />

                        </Paper>
                    </Grid>
                </Grid>






            </FormControl>
        </div>
    );
};

export default AddSensorItems;