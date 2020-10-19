import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './work.css';

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
        <Button variant="contained" color="secondary">
        経歴2（CMS）
      </Button>
      <Link to="/Work03" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
      <Button variant="contained" color="primary">
      経歴3（バナー、広告）
      </Button></Link>
      <Link to="/Work04" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
      <Button variant="contained" color="primary">
      経歴4（制作物一覧）
      </Button></Link>

    </div>

  <p>その他、通販サイト上でCMSを使って商品リストやランキングの更新を行っておりました。</p>
  <table>
    <tr>
      <td>
  <div class="rankingArea">
<div class="list">
  <ol>
  <li>
タイトル<br />
<span class="list_typeInformation">作者名／出版社</span>

  </li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
<li>タイトル<br />
<span class="list_typeInformation">作者名／出版社</span></li>
    </ol>
    </div>
        </div>
    </td>
    <td>
    <ul class="itemList">
                <li><img src={require('./itemimg.jpg')} alt="sampleproduct" /><p class="itemName">商品名</p><p class="price">5,272円</p></li>
                <li><img src={require('./itemimg.jpg')} alt="sampleproduct"  /><p class="itemName">商品名</p><p class="price">5,272円</p></li>
                <li><img src={require('./itemimg.jpg')} alt="sampleproduct"  /> <p class="itemName">商品名</p><p class="price">5,272円</p></li>
                <li><img src={require('./itemimg.jpg')} alt="sampleproduct"  /><p class="itemName">商品名</p><p class="price">5,272円</p></li>
              
            </ul>

    </td>
    </tr>
  </table>

      </Container>
    </React.Fragment>
  );
}
