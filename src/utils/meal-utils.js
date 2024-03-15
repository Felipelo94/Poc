export const getMenuTitlesWithSuboptions = data => {
  return (
    data?.map(item => {
      const nodes =
        item?.content?.map((node, indexNode) => {
          const subNodes =
            node?.content?.map((subNode, index) => {
              if (subNode.nodeType === 'heading-2') {
                return { index: item.index, heading: subNode }
              }
              if (subNode.nodeType === 'heading-3') {
                return { index: indexNode, heading: subNode }
              }
              return { heading: { nodeType: 'empty' } }
            }) ?? []
          return subNodes
        }) ?? []
      const h2 =
        nodes
          .map(node =>
            node.filter(subnode => subnode.heading.nodeType === 'heading-2')
          )
          .filter(node => node.length > 0) ?? []
      const h3 = nodes.map(node =>
        node.filter(subnode => subnode.heading.nodeType === 'heading-3')
      )
      return { option: h2, subOptions: h3 }
    }) ?? []
  )
}
