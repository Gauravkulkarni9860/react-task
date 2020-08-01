import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './UniversalSlider.css'


const CustomLinearProgress = withStyles({
    root: {
        height: 18,
        borderRadius: 9,
        width: '100%',
        display: 'flex',
    },
    colorPrimary: {
        backgroundColor: '#6066d277',
      },
      barColorPrimary: {
        backgroundColor: '#6066d2',
    }
})(LinearProgress)


const UniversalSlider = (props) => {
    //const classes = useStyles();

    return (
        <div className="UniversalSlider">
            <div className="slider-container">
            <CustomLinearProgress variant="determinate" value={props.percentage}/>
            <span className="progress-text">{props.percentage}%</span>
            </div>
        
        <span>Assessment Progress</span>
        </div>
    )
}

export default UniversalSlider


