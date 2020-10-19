import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './anthology.css';

let link = '<Link to="/Work02"><img src="http://mokomokomerak.hannnari.com/img/banner.png"></Link>';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    marginTop: 10,
    float:'left',
    backgroundColor: theme.palette.background.paper,
  },
}));
const cent = {
	marginTop: 100,
  }


export default function SimpleList() {
  const classes = useStyles();

  return (
<Container maxWidth="md">
<div style={cent}>
    <React.Fragment>
    <img src={require('./topa.jpg')} alt="keyvisual" />
    <CssBaseline />
    <div className={classes.root}>
    <h2 class="title">執筆者</h2>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
        <img src={require('./bnr_no.jpg')} alt="banner"  />
        </ListItem>
  
        <Divider />
        <ListItem button>
        <img src={require('./bnr_no.jpg')} alt="banner" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
        <img src={require('./bnr_no.jpg')} alt="banner" />
        </ListItem>
      </List>
    </div>
    </React.Fragment>
        <div class="contents">
    <h2 class="title">新着情報ボックス</h2>
      <dl class="box">
      <dt>2016.04.26</dt>
					<dd>商品情報を掲載しました。</dd>
<dt>2016.03.04</dt>
					<dd>楽曲Lのブックレットデザイン担当者が決定しました。</dd>
<dt>2016.02.12</dt>
					<dd>CDの項目に視聴ボックスを更新しました。楽曲Jの楽曲を楽曲Kに変更しました。</dd>
<dt>2016.02.08</dt>
					<dd>CDのデザイン募集を更新しました。CDの項目に視聴ボックスを更新しました。</dd>
<dt>2016.02.02</dt>
					<dd>sulfer様の参加形態をを更新しました。CDの項目に視聴ボックスを更新しました。</dd>
					<dt>2016.02.01</dt>
					<dd>CD企画の参加者を更新しました。楽曲Iのブックレットデザイン担当者が決定しました。</dd>
<dt>2016.01.18</dt>
					<dd>CDの項目に視聴ボックスを更新しました。</dd>
					<dt>2016.01.01</dt>
					<dd>CD企画の参加者を更新しました。楽曲Hのブックレットデザイン担当者が決定しました。</dd>
					<dt>2015.12.21</dt>
					<dd>CD企画の参加者を更新しました。楽曲Gのブックレットデザイン担当者が決定しました。</dd>
					<dt>2015.12.19</dt>
					<dd>CD企画の参加者を更新しました。楽曲Fのブックレットデザイン担当者が決定しました。</dd>
					<dt>2015.12.01</dt>
					<dd>BOOK企画の参加者を更新しました。</dd>
					<dt>2015.11.30</dt>
					<dd>CD企画の参加者を更新しました。楽曲Eのブックレットデザイン担当者が決定しました。</dd>
					<dt>2015.11.25</dt>
					<dd>CD企画の参加者を更新しました。楽曲C、楽曲Dのブックレットデザイン担当者が決定しました。</dd>
					<dt>2015.11.19</dt>
					<dd>CD企画の参加者を更新しました。楽曲2のブックレットデザイン担当者が決定しました。</dd>
					<dt>2015.11.08</dt>
					<dd>CD企画の参加者を更新しました。CDのデザイン募集を更新しました。</dd>
					<dt>2015.10.12</dt>
					<dd>CDの項目に視聴ボックスを更新しました。</dd>
					<dt>2015.09.15</dt>
					<dd>CDの項目にアレンジ担当者を更新しました。デザインの募集項目を2件更新しました。</dd>
					<dt>2015.09.13</dt>
					<dd>B企画の執筆者を更新しました。楽曲1のブックレットデザイン担当者が決定しました。</dd>
					<dt>2015.08.28</dt>
					<dd>CDの項目にアレンジ担当者を更新しました。B作品の情報を掲載しました。メールフォームを設置しました。</dd>
					<dt>2015.08.28</dt>
					<dd>CDの項目にイラストの募集を掲載しました。</dd>				
					<dt>2015.08.03</dt>
					<dd>B企画の執筆者を更新しました。</dd>
					<dt>2015.07.21</dt>
					<dd>A企画、B企画の執筆者を更新しました。（各１名）</dd>
					<dt>2015.07.15</dt>
					<dd>A企画の執筆者を更新しました。</dd>
					<dt>2015.07.12</dt>
					<dd>A企画の執筆者を2名更新しました。</dd>
					<dt>2015.07.11</dt>
					<dd>企画サイトを開設しました。現在執筆者募集中です！</dd>
				</dl>
<p>本とCDのセットとなります。<br />
頒布価格：2000円</p>
<p>BOOK<br />
全42P、A5サイズ</p>

<p>CD<br />

CD全10トラック＆ブックレット18P</p>

<p>
※再版分より内容の修正がございました。<br />
(1) 本に掲載されておりました小説を縦書き表記に変更致しました。<br />
(2) CDにありますイラストGの解像度を修正致しました。<br />
お取替えを希望の方はお問合せよりお願い致します。なお、イベント後の対応とさせていただきます。
</p>
<h2 class="title">トラックリスト</h2>
<table class="track">
	<tr>
		<th>1.</th>
		<td>楽曲A</td>
	</tr>
<tr>
		<th>2.</th>
		<td>楽曲B</td>
	</tr>
<tr>
		<th>3.</th>
		<td>楽曲C</td>
	</tr>
<tr>
		<th>4.</th>
		<td>楽曲D</td>
	</tr>
<tr>
		<th>5.</th>
		<td>楽曲E</td>
	</tr>
<tr>
		<th>6.</th>
		<td>楽曲F</td>
	</tr>
<tr>
		<th>7.</th>
		<td>楽曲G</td>
	</tr>
<tr>
		<th>8.</th>
		<td>楽曲H</td>
	</tr>
<tr>
		<th>9.</th>
		<td>楽曲I</td>
	</tr>
<tr>
		<th>10.</th>
		<td>楽曲K</td>
	</tr>
</table>
<h2 class="title">募集要項まとめ</h2>
<table class="track">
	<tr>
		<th>タイトル</th>
		<td>2border</td>
	</tr>
<tr>
		<th>内容</th>
		<td>某作品を取り扱った作品集。</td>
	</tr>
<tr>
		<th>頒布価格</th>
		<td>2000</td>
	</tr>
<tr>
		<th>装丁</th>
		<td>A5サイズ冊子、ブックレットつきのジュエルケース</td>
	</tr>
<tr>
		<th>執筆者</th>
		<td>公募制</td>
	</tr>
<tr>
		<th>募集内容</th>
		<td>曲をイメージしたアレンジ楽曲、コメント<br />曲をイメージしたイラスト・小説等</td>
	</tr>
<tr>
		<th>印刷会社</th>
		<td>株式会社M</td>
	</tr>
<tr>
		<th>謝礼</th>
		<td>完成品を1セットお渡しします。</td>
	</tr>
<tr>
		<th>制作スケジュール</th>
		<td>	執筆者受付締め切り：2016年2月28日<br />
原稿提出締切：2016年4月10日</td>
	</tr>
<tr>
		<th>原稿形態</th>
		<td>冊子<br />データ形式：photoshop PSD/tiff、eps、pdf<br />
		解像度（カラーデータ/CMYKやRGB）300～350dpi<br />
解像度（グレースケール）350～600dpi<br />
解像度（モノクロ２階調）600～1200dpi<br />
必要のないパス・チャンネルやレイヤーは削除してください。また、レイヤーは結合して提出してください。<br />
CD<br />mp3もしくはoggデータなど音楽プレーヤーで再生できるもの。
</td>
	</tr>
</table>

<h2 class="title">バナーリンク</h2>
<img src={require('./bnr_no.jpg')} alt="banner" />
<div class="box">{link}</div>

                </div>
				</div>
    </Container>
  );
}
