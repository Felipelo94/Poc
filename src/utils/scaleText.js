import { scale } from './typography'

export const SCALE_SIZE_34PX = 5.5
export const SCALE_SIZE_32PX = 5
export const SCALE_SIZE_30PX = 4.6
export const SCALE_SIZE_26PX = 3.2
export const SCALE_SIZE_23PX = 2.4
export const SCALE_SIZE_22PX = 2.2
export const SCALE_SIZE_20PX = 1.7
export const SCALE_SIZE_19PX = 1.32
export const SCALE_SIZE_18PX = 0.8
export const SCALE_SIZE_15PX = -0.5
export const SCALE_SIZE_16PX = 0
export const SCALE_SIZE_14PX = -1.2
export const SCALE_SIZE_13PX = -1.7

const scaleText = (scaleValue, scaleRate, numberUpDown) => {
  const scaleValeFinal =
    scaleValue === 2
      ? scaleRate
      : scaleValue > 2
      ? scaleRate + numberUpDown
      : scaleRate - numberUpDown
  return scale(scaleValeFinal / 5)
}

const scaleLine = scaleValue => {
  return scaleValue >= 10
    ? '2rem'
    : '1.' + (scaleValue < 4 ? 4 : scaleValue) + 'rem'
}

export { scaleText, scaleLine }
