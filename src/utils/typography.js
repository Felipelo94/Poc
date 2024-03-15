import Typography from 'typography'

const theme = {
  baseFontSize: '16px',
  baseLineHeight: '20px',
  scaleRatio: 2
}

const typography = new Typography(theme)
export const { scale, rhythm } = typography

const { fontSize, lineHeight } = scale(0)
// fontSize = 1rem
// lineHeight = 1.52941rem

const one = rhythm(1)
