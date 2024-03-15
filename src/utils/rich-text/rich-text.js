import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getOptions } from './options'
import useGetUserInfoIndexDBState from '@hooks/useGetUserInfoIndexDBState'

const RichText = ({
  title,
  text,
  fontSize,
  lineHeight,
  line,
  type,
  accessibility,
  THS,
  technicalSheet
}) => {
  const userInfo = useGetUserInfoIndexDBState()

  return documentToReactComponents(
    text,
    getOptions({
      fontSizeGlobal: fontSize,
      lineHeightGlobal: lineHeight,
      titleContent: title,
      lineUser: line,
      userCategory: userInfo.category,
      userSubcategory: userInfo.subcategory,
      userType: userInfo.type,
      typeContent: type,
      accessibilityInfo: accessibility,
      buttonTHS: THS,
      isTechnicalSheet: technicalSheet
    })
  )
}

export default RichText
