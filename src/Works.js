import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { tileData } from './tileData';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 700,
    height: 525,

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  cent: {
    marginTop: 100, 
  },
}));


export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.cent}>
      <Helmet bodyAttributes={{style: 'background-color : #ffd9f8'}}/>
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">これまでの経歴一覧</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <Link to={tile.box} style={{color:'inherit'}}><img src={tile.img} alt={tile.title} /></Link>
            <GridListTileBar
              title={tile.title}
             
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}