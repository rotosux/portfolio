import React from 'react'
import {Helmet} from 'react-helmet';
import { Spring, animated } from 'react-spring/renderprops'
import Container from '@material-ui/core/Container';
import { interpolate } from 'flubber'
import { GradientPinkRed as Gradient } from '@vx/gradient'

const paths = [
  'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
  'M7 2v11h3v9l7-12h-4l4-8z',
  'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z',
]

const interpolators = []
for (let i = 0; i < paths.length; i++) {
  interpolators.push(
    interpolate(paths[i], paths[i + 1] || paths[0], { maxSegmentLength: 0.1 })
  )
}

export default class App extends React.Component {
  state = { interpolators, index: 0 }
  goNext = () =>
    this.setState(({ index, interpolators }) => ({
      index: index + 1 >= interpolators.length ? 0 : index + 1,
    }))
  render() {
    const title = {
      fontSize:"70pt",
    }
    const logo = {
      width: '300px'
    }
    const { interpolators, index } = this.state
    const interpolator = interpolators[index]
    return (
      <Container maxWidth="md">
      <div>
        <Helmet bodyAttributes={{style: 'background-color : #F3FFBD'}}/>
        <table><tr><td style={logo}>
      <div
        style={{
          background: '#F3FFBD',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          marginTop: 100,

        }}>
        <svg width="260" viewBox="0 0 22 22">
          <Gradient id="gradient-morph" />
          <g fill="url(#gradient-morph)">
            <Spring
              reset
              native
              from={{ t: 0 }}
              to={{ t: 1 }}
              onRest={this.goNext}>
              {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
            </Spring>
          </g>
        </svg>
      </div>
      </td><td>
      <h2 style={title}>PORTFOLIO</h2>
      </td></tr></table>
      </div>
      </Container>
    )
  }
}