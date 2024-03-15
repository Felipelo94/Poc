import styled from 'styled-components'

export const SpanIconStyled = styled.span`
  background-image: ${props =>
    props.isActive
      ? props.theme.colors.menuAccessibility.bgIconUserTypeActive
      : null};
  & svg {
    & path {
      fill: ${props =>
        props.isActive
          ? props.theme.colors.menuAccessibility.colorIconUserTypeActive
          : props.theme.colors.menuAccessibility.colorIconUserTypeInactive};
    }
  }
`

export const SpanLabelStyled = styled.span`
  color: ${props =>
    props.isActive
      ? props.theme.colors.menuAccessibility.colorLabelUserTypeActive
      : props.theme.colors.menuAccessibility.colorLabelUserTypeInactive};
`
