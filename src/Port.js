import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});



export default function CenteredTabs() {
  const classes = useStyles();
  const [setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [setAnchorEl] = React.useState(null);
  return (
    <Paper className={classes.root}>
      <Tabs
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Link to="/App" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}><Tab label="TOP" /></Link>
        <Link to="/Profile" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}><Tab label="PROFILE" /></Link>
        <Link to="/Works" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}><Tab label="WORKS" /></Link>
      </Tabs>
    </Paper>
  );
}
