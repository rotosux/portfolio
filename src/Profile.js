import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {Helmet} from 'react-helmet';
import {
  BarChart, Bar, XAxis, Legend,
} from 'recharts';

const data = [
  {
    name: 'HTML', uv: 4000, SKILL: 10000, amt: 2400,
  },
  {
    name: 'CSS', uv: 3000, SKILL: 8600, amt: 2210,
  },
  {
    name: 'JavaScript', uv: 2000, SKILL: 5200, amt: 2290,
  },
  {
    name: 'PHP', uv: 2780, SKILL: 100, amt: 2000,
  },
  {
    name: 'React', uv: 1890, SKILL: 800, amt: 2181,
  },

];

export default function Width() {
  return (
    <Container maxWidth="md">
      <Helmet bodyAttributes={{style: 'background-color : #CCFFFF'}}/>
    <Box width="100%">
      <Box width="auto" bgcolor="#CCFFFF.300" p={1} my={0.5}>
  

    <div class="Lbox">
      <img src={require('./id.jpg')} alt="profile"/>
      <p>名前：　山田智子<br />
        趣味：特技：　イラスト、フルート<br />
        連絡先：　satoko.yamada@dwn.co.jp<br />
        2013年にデータウェアネットワーク株式会社入社。<br />
            研修の後出向し、webエンジニアとして働きました。<br />
        主な業務内容はwebページの制作、更新。バナー画像やチラシ広告の制作。<br />
            googleアナリティクスを私用したアクセス解析です。<br />
            必要に応じ、セミナーのご案内ページと受付フォームも制作しておりました。</p>
            <p>将来はwebデザインを学び、デザイナーとしてのスキルを身に着けたいと考えています。</p>
            </div>
            <div class="Rbox">
            <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={40}
      >
      
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      
       
        <Legend />
     
        <Bar dataKey="SKILL" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
      </div>
      </Box>
    </Box>
    </Container>

  );
}