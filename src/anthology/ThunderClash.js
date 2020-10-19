import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './anthology.css';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const back = {
  backgroundColor: '#c8e7f6',
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
    cards: {  
      maxWidth: 285,
  },
  media: {
    height: 140,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
    <CssBaseline />
    <div className={classes.root}>
  <div class="main">
    <div class="loop_wrap">
    <img src={require('./topb2.jpg')} alt="keyvisual" />    <img src={require('./topb2.jpg')} alt="keyvisual" />
    </div>
    <div class="logo">    <img src={require('./topb3.jpg')} alt="cafelogo" />  </div>
    </div>
  
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  centered>
          <Tab label="TOP" {...a11yProps(0)} />
          <Tab label="FOOD" {...a11yProps(1)} />
          <Tab label="SWEETS" {...a11yProps(2)} />
          <Tab label="COFFEE" {...a11yProps(3)} />
          <Tab label="SHOP" {...a11yProps(4)} />
          <Tab label="GOODS" {...a11yProps(5)} />
          <Tab label="CONTACT" {...a11yProps(6)} />
          
        </Tabs>
       
      </AppBar>
       <Container maxWidth="md">
      <TabPanel value={value} index={0} style={back}>
        <h2 class="anthology_h2">お知らせ・更新</h2>

        <div>
			
			<dl class="box">
				<dt>2016.04.30</dt>
				<dd>5月短縮営業のお知らせ</dd>
				<dt>2016.04.11</dt>
				<dd>スタッフブログをリニューアルしました</dd>
				<dt>2016.04.11</dt>
				<dd>コラボ期間中の諸注意を掲載しました</dd>
				<dt>2016.03.27</dt>
				<dd>映画「ヒモヴォルト」コラボメニューを掲載しました</dd>
				<dt>2016.03.24</dt>
				<dd>映画「ヒモヴォルト」とのコラボが決定！</dd>
				<dt>2016.03.21</dt>
				<dd>4月短縮営業のお知らせ</dd>
				<dt>2016.03.15</dt>
				<dd>ポイントカード制度を導入しました</dd>
				<dt>2016.03.09</dt>
				<dd>お花見メニューを更新しました</dd>
				<dt>2016.01.06</dt>
				<dd>年始のご挨拶を掲載しました。年明けメニューも展開中！</dd>
				<dt>2015.12.27</dt>
				<dd>年末のご挨拶と年始営業時間のお知らせを掲載しました</dd>
				<dt>2015.12.10</dt>
				<dd>クリスマスキャンペーンのお知らせを掲載しました</dd>
				<dt>2015.11.07</dt>
				<dd>ブログを開設しました。第一回「MRKの楽しみ方」掲載。</dd>
				<dt>2015.10.23</dt>
				<dd>ホームページを更新しました。</dd>
				<dt>2015.10.13</dt>
				<dd>COFFEESHOPMRKの公式HPをオープンしました。</dd>	
			</dl>
		</div>
        <h2 class="anthology_h2">COFFEE SHOP MRKについて</h2>
        <p>MRKはテレワーク中の会社員を対象にした全個室のコワーキングカフェです！</p>
        <p>仕事をしながらも合間にほっと休めるような温かい空間を目指します。</p>
        <p>当店の名物であるショートケーキのほか、様々なケーキや焼き菓子をご用意しています。</p>
        <p>仕事がリモートになったけど家だと仕事がやりづらい！そんな方は是非MRKへ足をお運びください。</p>
        <h2 class="anthology_h2">MRKの特徴</h2>
        <p><img src={require('./cafeimg.jpg')} alt="introspection" />  </p>
        <p>MRKは完全個室&amp;完全防音！電源・フリーwi-fi完備！</p>
        <p>席を確保する必要があるため、完全予約制となります。</p>
        <p>マイク付きヘッドフォン等仕事に使える備品を有料貸し出し中！</p>


        <h2 class="anthology_h2">お得な料金プラン</h2>

      <div class="card-container">

      <div class="card-item">            
                   <img class="card-img" src={require('./plan_001.jpg')} alt="plan01" />
                    <h2 class="card-title">シンプルプラン</h2>
                    <p>数時間ちょっと作業をするのに適したプランです。座席予約の際に1ドリンクサービスがつきます。<br />（利用時間　9:00～23:00）</p>
                    <p>500 yen</p>    
      </div>


<div class="card-item">            
             <img class="card-img" src={require('./plan_002.jpg')} alt="plan02" />
              <h2 class="card-title">チャットプラン</h2>
              <p>会議通話に特化したプランです。必要に応じイヤホンマイクの貸し出しを行っております。<br />（利用時間　9:00～23:00）</p>
              <p>700 yen</p>    
</div>




      <div class="card-item">            
                   <img class="card-img" src={require('./plan_003.jpg')} alt="plan03" />
                    <h2 class="card-title">宿泊プラン</h2>
                    <p>泊まり込みで作業を行う方へのプランです。ベッド付きの部屋をご利用いただけます。<br />（利用時間　23:00～6:00）</p>
                    <p>1700 yen</p>    
      </div>
      </div>

        

      </TabPanel>
      <TabPanel value={value} index={1} style={back}>
      <h2 class="anthology_h2">フードメニュー</h2>
      <div class="plate" id="navy"><span>

<table>
<tr>
      <td><img src={require('./food_001.jpg')} alt="food01" />  </td>
      <td><h3>デミグラスオムライス</h3><p>濃厚な味とふわふわな卵が魅力のオムライスです。お腹がすいたらまずはこれ。</p>
     <p>820 yen</p></td>
    </tr>
    
    </table></span>
    </div>

    <div class="plate" id="navy"><span>

<table>
<tr>
      <td><img src={require('./food_002.jpg')} alt="food02" />  </td>
      <td><h3>ナポリタン</h3><p>ケチャップの味が魅力的なナポリタンです。</p>
      <p>760 yen</p></td>
    
    </tr>
    
    </table></span>
    </div>

    <div class="plate" id="navy"><span>

<table>
<tr>
      <td><img src={require('./food_003.jpg')} alt="food03" />  </td>
      <td><h3>ホットサンド</h3><p>カツと卵のセットです。軽食に最適。</p>
      <p>760 yen</p></td>
    
    </tr>
    
    </table></span>
    </div>



      </TabPanel>
      <TabPanel value={value} index={2} style={back}>
      <h2 class="anthology_h2">スイーツメニュー</h2>
      <div class="plate" id="navy"><span>

      <table>
      <tr>
            <td><img src={require('./sweets_001.jpg')} alt="sweets01" />  </td>
            <td><h3>苺のショートケーキ</h3>
            <p>当店の名物です。新鮮な苺をふんだんに使った贅沢なケーキになります。</p><p>600 yen</p></td>
          </tr>
          
          </table></span>
          </div>
          <div class="plate" id="navy"><span>
          <table>
          <tr>
            <td><h3>モンブラン</h3><p>コーティングの綺麗なモンブランです。下地にはチョコレートを使用していて高級感あふれる一品です。</p>
            <p>500 yen</p></td>
            <td><img src={require('./sweets_002.jpg')} alt="sweets02" />  </td>
          </tr>
          </table></span>
          </div>
          <div class="plate" id="navy"><span>
          <table>
          <tr>
            <td><img src={require('./sweets_003.jpg')} alt="sweets03" />  </td>
            <td><h3>ガトー・ショコラ</h3><p>当店スタッフ自慢のケーキです。ほろ苦い味覚をお楽しみください。</p>
            <p>520 yen</p></td>
         
          </tr>
          </table>
          </span>
          </div>
          <div class="plate" id="navy"><span>
          <table>
          <tr>
            <td><h3>アップルパイ</h3><p>仕事疲れにはアップルパイ。焼きたてのアップルパイは疲れをほぐしてくれるはず。</p>
            <p>560 yen</p>
            </td>
            <td><img src={require('./sweets_004.jpg')} alt="sweets04" />  </td>
          </tr>
          </table>
          </span></div>
          <div class="plate" id="navy"><span>
          <table>
          <tr>
            <td><img src={require('./sweets_005.jpg')} alt="sweets05" />  </td>
            <td><h3>マドレーヌ全5種</h3><p>スタンダードなバター、味わい深いチョコ、甘い香りのイチゴ、ちょっぴりすっぱいマンゴー、ほんのり苦いの抹茶の全五種。</p>
            <p>各200 yen</p></td>
          </tr>
          </table>
          </span></div>
          <div class="plate" id="navy"><span>
          <table>
          <tr>
          <td><h3>フランボワーズ</h3><p>ストロベリーとピスタチオの柔らかい食感が魅力的なフランボワーズです。</p>
            <p>各300 yen</p></td>
            <td><img src={require('./sweets_006.jpg')} alt="sweets06" />  </td>
         
          </tr>
          </table>
          </span></div>




      </TabPanel>
      <TabPanel value={value} index={3} style={back}>
      <h2 class="anthology_h2">ドリンク</h2>
        <p>MRKコーヒー</p>
        <hr />
<dl class="menu">
  <dt>
    <p>MRKコーヒー<br /><span class="txtprice">500 yen</span></p>
  <p>キリマンジャロ<br /><span class="txtprice">600 yen</span></p>
  <p>ブルーマウンテン<br /><span class="txtprice">1000 yen</span></p>
  <p>モカ<br /><span class="txtprice">500 yen</span></p>
  <p>ブラジル<br /><span class="txtprice">500 yen</span></p>
  </dt><dd></dd>
</dl>
<p>MRKティー</p>
        <hr />
        <dl>
  <dt>
    <p>MRKティー<br /><span class="txtprice">￥500</span></p>
  <p>レモンティー<br /><span class="txtprice">￥600</span></p>
  <p>アイスティー<br /><span class="txtprice">￥1000</span></p>
  <p>ほうじ茶<br /><span class="txtprice">￥500</span></p>
  <p>豆茶<br /><span class="txtprice">￥500</span></p>
  </dt><dd></dd>
</dl>
<p>ドリンクバー　1時間につき￥800</p>

      </TabPanel>
      <TabPanel value={value} index={4} style={back}>
      <h2 class="anthology_h2">店舗情報</h2>
       <p>MRKは東京と神奈川の2店舗に出店しています。</p>
       <table>
          <tr>
              <td> <p><img src={require('./sugamomap.jpg')} alt="sugamomap" /> </p></td>
              <td><h3>巣鴨店</h3><br />
〒170-0002　東京都豊島区巣鴨2-10-21<br />JR巣鴨駅徒歩5分、地下鉄三田線徒歩4分</td>
          </tr>
          <tr>
              <td>  <p><img src={require('./kanagawamap.jpg')} alt="kanagawamap" /> </p></td>
              <td><h3>神奈川店</h3><br />
              〒221-0057 神奈川県横浜市神奈川区青木町8−5<br />上野東京ライン、京浜急行本線、東海道本線徒歩7分</td>
          </tr>
       </table>
     
     




      </TabPanel>
      <TabPanel value={value} index={5} style={back}>
      <h2 class="anthology_h2">グッズメニュー</h2>
      <div class="plate" id="navy"><span>

      <table>
      <tr>
            <td><img src={require('./goods_001.jpg')} alt="goods01" />  </td>
            <td><h3>ロゴ入りコーヒーカップ</h3><br />当店のMRKマークを使用したコーヒーカップです。自宅で雰囲気を味わいたい方に。</td>
           
          </tr>
          
          </table></span>
          </div>
          <div class="plate" id="navy"><span>

<table>
<tr>
      <td><h3>ロゴ入りエコバッグ</h3><br />当店のMRKマークを使用したエコバッグです。買い物をしていると否が応でも目立ちます。</td>
      <td><img src={require('./goods_002.jpg')} alt="goods02" />  </td>
    </tr>
    
    </table></span>
    </div>


      </TabPanel>
      <TabPanel value={value} index={6} style={back}>
        
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczf4ac4ZGWy3wk8LuKw3e2KjGLJNhmUMcfX-oaezVmK7WZCQ/viewform?embedded=true" width="840" height="873" frameborder="0" marginheight="0" marginwidth="0" title="
Inquiry">読み込んでいます…</iframe>
        
      </TabPanel>
      </Container>
    </div>
    </React.Fragment>
  );
}
