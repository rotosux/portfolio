import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Helmet} from 'react-helmet';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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
      <Button variant="contained" color="secondary">
        経歴1（HTML、CSS）
      </Button>
      
      <Link to="/Work02" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
        <Button variant="contained" color="primary">
        経歴2（CMS）
      </Button></Link>
      <Link to="/Work03" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
      <Button variant="contained" color="primary">
      経歴3（バナー、広告）
      </Button></Link>
      <Link to="/Work04" style={{boxshadow: 'none',textDecoration: 'none',color:'inherit',fontFamily:'Montserrat,sans-serif'}}>
      <Button variant="contained" color="primary">
      経歴4（制作物一覧）
      </Button></Link>

    </div>
        <div style={cent}>
        <h2 class="title">基本的な業務内容</h2>
      <img src={require('./img_workbox01s.jpg')} alt="html,css" />
    <p>業務内容としましては、既存のECサイトに1ページ新規で追加したり文言修正を行っておりました。既存のスタイルシートを活かしつつ、
      さらに変更が必要な場合はイメージを損なわないようにスタイルの更新をしております。</p>
      <p>使用言語：HTML、CSS、javaScript、Wordpress、CMS</p>
      </div>
      <h2 class="title">新着情報ボックス</h2>
      <dl class="box">
      <dt>2020.10.16</dt>
					<dd>全ページ調整</dd> 
      <dt>2020.10.14、15</dt>
					<dd>カフェトップ画面　プランの説明追記</dd> 
      <dt>2020.10.12、13</dt>
					<dd>地図の制作</dd>  
          <dt>2020.10.06～09</dt>
					<dd>カフェメニューのレイアウト調整</dd>
      <dt>2020.10.05</dt>
					<dd>問い合わせフォームの制作、洋菓子の写真選別</dd>   
      <dt>2020.09.28</dt>
					<dd>経歴内容を3ページ分完成。</dd>   
          <dt>2020.09.25</dt>
					<dd>バナーページに掲載するバナー画像の制作をする。</dd>   
          <dt>2020.09.24</dt>
					<dd>商品表示一覧を制作。並びがうまくいかずちょっと苦戦。</dd>  
          <dt>2020.09.23</dt>
					<dd>ランキングリストの制作。
            再現はやはり難しい。</dd>  
      <dt>2020.09.16</dt>
					<dd>経歴内容（現ページ）の制作に着手。スクリーンショットより直接表示した方が伝わるように感じた。</dd>   
      <dt>2020.09.15</dt>
					<dd>トップ画面のアニメーションを考える。プラグインでも様々なアニメーションがそんざいする模様。</dd>   
      <dt>2020.09.14</dt>
					<dd>プロフィール画面にスキルのグラフを掲載することに決定。reactで表示する方法を模索。</dd>    
<dt>2020.09.11</dt>
					<dd>分岐エラーが解消したので各画面を中央表示されるように調整。</dd>
<dt>2020.09.09</dt>
					<dd>経歴部分がまとまったので分岐を試してみる。しかし何かエラーが発生しているもよう。</dd>
<dt>2020.09.08</dt>
					<dd>モーダルウィンドウを予定していた経歴部分をどう掲載するか思索中。リンクに変更予定。</dd>
<dt>2020.09.04</dt>
					<dd>ページ制作をReactに変更。動画を見直してポートフォリオサイトに作業環境を構築。</dd>
<dt>2020.09.02</dt>
					<dd>モーダルウィンドウの実装に苦戦中。jQueryのプラグインがとても多い。</dd>
					<dt>2020.09.01</dt>
					<dd>ポートフォリオのモックアップ作業を進めています。</dd>
				</dl>
        <h2 class="title">リストボックス</h2>
        <div class="box">
<div class="text">
題字</div>
簡単な項目を記載する際にはこういったボックスを使うと読みやすいです。
</div>


      </Container>
    </React.Fragment>
  );
}
