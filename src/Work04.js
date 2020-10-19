import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

const cent = {
  marginTop: 100,
}
export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div style={cent}>
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
      
      <Link to="/Work03" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
      <Button variant="contained" color="primary">
      経歴3（バナー、広告）
      </Button></Link>
      <Button variant="contained" color="secondary">
      経歴4（制作物一覧）
      </Button>
</div>
<p>これまでのスキルや学んだものを使って制作したページになります。</p>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Link to="/anthology/ThunderClash" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}><img src={require('./bnr_mrk.jpg')} alt="mrk" /></Link></TableCell>
            <TableCell>架空コワーキングカフェのホームページです。</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
        <TableCell> <Link to="/anthology/2border" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}><img src={require('./bnr_2border.jpg')} alt="2border" /></Link></TableCell>
              <TableCell>本・CDの企画イメージサイトです。</TableCell>
              <TableCell align="right"></TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </React.Fragment>
    </div>
  );
}
