import { EMBEDDED_ENTRY_BLOCK } from '../../const/rich-text'

export class FilterOptionsBuilder {
  constructor(richTextData) {
    this.richTextData = richTextData
  }

  addRichTextData(richTextData) {
    this.richTextData = this.richTextData.concat(richTextData)
    return this
  }

  keepOnlyContentProp() {
    this.richTextContent = this.richTextData.map(item => item?.content)
    return this
  }

  flatContentArrays() {
    this.flattedArray = this.richTextContent.flat()
    return this
  }

  keepOnlyEntryBlocks() {
    this.entryBlocks = this.flattedArray.filter(
      item => item?.nodeType === EMBEDDED_ENTRY_BLOCK
    )
    return this
  }

  keepOnlyPrivilegeTypeProp() {
    this.privilegeTypes = this.entryBlocks.map(
      item => item?.data?.target?.fields?.tipoDePrivilegio?.['en-US']
    )
    return this
  }

  setFilterTabsInformation() {
    let uniquePrivilegeTypes = []

    this.privilegeTypes.forEach(type => {
      const optionId = uniquePrivilegeTypes.findIndex(
        ({ name }) => name === type
      )
      if (optionId === -1) {
        uniquePrivilegeTypes.push({ name: type, quantity: 1 })
      } else {
        uniquePrivilegeTypes[optionId].quantity += 1
      }
    })
    this.uniquePrivilegeTypes = uniquePrivilegeTypes
    return this
  }

  getFilterOptions() {
    return this.uniquePrivilegeTypes
  }
}
