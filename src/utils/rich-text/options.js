import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import React from 'react'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents,
  sendGaPush,
  upperFirst
} from '../classGtmUtil'
import {
  AllyCard,
  AssetHyperlink,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Hyperlink,
  Image,
  LinkOfInterest,
  List,
  Paragraph,
  Portfolio,
  Quote,
  Report,
  Table,
  TechnicalSheetHyperlink
} from './components'
import { ENTRY_TYPES } from '../../const/rich-text'
import './rich-text.scss'

const tittleTransformate = title => {
  return upperFirst(removeAccents(title))
}

export const getOptions = ({
  fontSizeGlobal = '15px',
  lineHeightGlobal = '25px',
  titleContent = '',
  lineUser = '',
  userCategory = '',
  userSubcategory = '',
  userType = '',
  typeContent = '',
  accessibilityInfo = null,
  buttonTHS = false,
  isTechnicalSheet = false
}) => {
  const addClassName = (title, url, isTechnicalSheetLink = false) => {
    let titleFinal = tittleTransformate(title)
    clickBtn(titleFinal, url, isTechnicalSheetLink)
  }

  const clickBtn = (title, url, isTechnicalSheetLink = false) => {
    let gtmAction
    if (userType && userCategory && userSubcategory) {
      gtmAction = `Clic${getTypeName(
        userType
      )}${getSubCategoryNameWhenIsPensionAndPerson(
        userType,
        removeAccents(userCategory),
        userSubcategory
      )}${
        removeAccents(userCategory) === 'Ahorro' ? '-Url' : '-ContenidosUrl'
      }-${title}`
    }
    if (!gtmAction || typeContent === 'InternaAhorro') {
      gtmAction = `Clic${typeContent}-${
        typeContent === 'InternaAhorro' ? 'Url-' : 'ContenidosUrl-'
      }${title}`
    }
    if (isTechnicalSheetLink) {
      gtmAction = `ClicPersona-Url-${title}`
    }
    sendGaPush(
      userCategory ? removeAccents(userCategory) : removeAccents(lineUser),
      gtmAction,
      url
    )
  }

  return {
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [
          ...children,
          index > 0 && <br key={index} className="break-line" />,
          textSegment
        ]
      }, [])
    },
    renderMark: {
      [MARKS.CODE]: ([_, text]) => <Code text={text} />,
      [MARKS.BOLD]: ([_, text]) => <Bold text={text} />
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (_, text) => (
        <Heading1
          text={text}
          lineUser={lineUser}
          accessibilityInfo={accessibilityInfo}
        />
      ),
      [BLOCKS.HEADING_2]: (node, text) => (
        <Heading2
          text={text}
          node={node}
          lineUser={lineUser}
          accessibilityInfo={accessibilityInfo}
        />
      ),
      [BLOCKS.HEADING_3]: (_, text) => (
        <Heading3
          text={text}
          lineUser={lineUser}
          accessibilityInfo={accessibilityInfo}
        />
      ),
      [BLOCKS.HEADING_4]: (_, text) => (
        <Heading4
          text={text}
          lineUser={lineUser}
          accessibilityInfo={accessibilityInfo}
        />
      ),
      [BLOCKS.HEADING_5]: (_, text) => (
        <Heading5
          text={text}
          lineUser={lineUser}
          accessibilityInfo={accessibilityInfo}
        />
      ),
      [BLOCKS.HEADING_6]: (_, text) => (
        <Heading6
          text={text}
          lineUser={lineUser}
          accessibilityInfo={accessibilityInfo}
        />
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => <Image node={node} />,
      [INLINES.HYPERLINK]: (node, children) =>
        isTechnicalSheet ? (
          <TechnicalSheetHyperlink
            node={node}
            addClassName={addClassName}
            titleContent={titleContent}
          >
            {children}
          </TechnicalSheetHyperlink>
        ) : (
          <Hyperlink
            node={node}
            addClassName={addClassName}
            titleContent={titleContent}
          >
            {children}
          </Hyperlink>
        ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => (
        <AssetHyperlink
          node={node}
          addClassName={addClassName}
          titleContent={titleContent}
        >
          {children}
        </AssetHyperlink>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Paragraph
          node={node}
          accessibilityInfo={accessibilityInfo}
          fontSizeGlobal={fontSizeGlobal}
          lineHeightGlobal={lineHeightGlobal}
        >
          {children}
        </Paragraph>
      ),
      [BLOCKS.UL_LIST]: (_, children) => <List>{children}</List>,
      [BLOCKS.QUOTE]: (_, text) => <Quote text={text} lineUser={lineUser} />,
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const entryType =
          node?.data?.target?.sys?.contentType?.sys?.contentful_id

        const ComponentByEntryType = {
          [ENTRY_TYPES.TABLE]: () => <Table node={node} />,
          [ENTRY_TYPES.LINK_OF_INTEREST]: () => (
            <LinkOfInterest node={node} accessibilityInfo={accessibilityInfo} />
          ),
          [ENTRY_TYPES.REPORT]: () => (
            <Report node={node} accessibilityInfo={accessibilityInfo} />
          ),
          [ENTRY_TYPES.ALLY_CARD]: () => (
            <AllyCard
              node={node}
              buttonTHS={buttonTHS}
              accessibilityInfo={accessibilityInfo}
            />
          ),
          [ENTRY_TYPES.PORTFOLIO]: () => (
            <Portfolio
              node={node}
              lineUser={lineUser}
              accessibility={accessibilityInfo}
            />
          ),
          DEFAULT: () => <div />
        }

        const EmbeddedEntry =
          ComponentByEntryType[entryType] ?? ComponentByEntryType.DEFAULT
        return <EmbeddedEntry />
      }
    }
  }
}
