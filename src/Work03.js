import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './work.css';

const cent = {
  marginTop: 100,
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Helmet bodyAttributes={{style: 'background-color : #ffd9f8'}}/>
      <div className={classes.root}>
        <Link to="/Work01" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
      <Button variant="contained" color="primary">
        経歴1（HTML、CSS）
      </Button></Link>
      <Link to="/Work02" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
        <Button variant="contained" color="primary">
        経歴2（CMS）
      </Button></Link>
      
      <Button variant="contained" color="secondary">
      経歴3（バナー、広告）
      </Button>
      <Link to="/Work04" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
      <Button variant="contained" color="primary">
      経歴4（制作物一覧）
      </Button></Link>
    </div>
        <p>これまで制作したバナーの一覧となります。</p>
        <ul class="bnrList">
        <li><img src={require('./bnr001.jpg')} /><p>喫茶店イメージバナー</p></li>
        <li><img src={require('./bnr002.jpg')} /><p>芸術の秋特集</p></li>
        <li><img src={require('./bnr003.jpg')} /><p>ノーベル賞特集</p></li>
        </ul>
      </Container>
    </React.Fragment>
  );
}
