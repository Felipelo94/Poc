import styled from 'styled-components'

export const UserLabelStyled = styled.span`
  color: ${props =>
    props.categoryDefaulft === 'Inversión'
      ? props.accessibility.darkMode
        ? props.isActive
          ? '#FFFFFF'
          : '#CBD1DE'
        : props.isActive
        ? '#292730'
        : '#626277'
      : props.isActive
      ? props.theme.colors
        ? props.theme.colors.textColor
        : null
      : props.theme.colors
      ? props.theme.colors.textColorInactive
      : null} !important;
  transition: ${props => props.theme.animation};
`
