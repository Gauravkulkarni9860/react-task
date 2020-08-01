import React from 'react';
import './Question.css'
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';


const CustomSlider = withStyles({
    root: {
      color: '#6066d2',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#6066d2',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
      width: '101%',
    },
  })(Slider);


function valuetext(value) {
    return value;
}

const Question = (props) => {
    //const classes = useStyles();


    return (
        <div className="Question">
            <div className="question-container">
            {props.question}
            </div>
            
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className="slider-styles"
                >
                <Typography variant="body1">
                    Never   
                </Typography>
                <Typography variant="body1">
                    Always
                </Typography>
            </Grid>
            <CustomSlider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={1}
                max={10}
            />
        </div>
    )
}

const marks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 10,
        label: '10',
    },
    
    
      ];
    
export default Question