const imageIconPng = []
const imageIconSvg = []
const imageIconSvgMbile = { menuTags: [] }

export const createImage = (
  data,
  eliminar,
  i,
  setImageStepbyStepJpg,
  setImageStepbyStepSvg,
  setImageStepbyStepSvgMobile
) => {
  if (
    data.target.fields.file['en-US'].url.indexOf('png') >= 0 ||
    data.target.fields.file['en-US'].url.indexOf('jpg') >= 0
  ) {
    if (data) {
      imageIconPng.push({
        alt: data.target.fields.description['en-US'],
        step: data.target.fields.file['en-US'].url
      })
    }
    setImageStepbyStepJpg(imageIconPng)
  } else {
    if (data) {
      imageIconSvgMbile['menuTags'].push({
        imagenActiva: data.target.fields.file['en-US'].url,
        imagenInactive: data.target.fields.file['en-US'].url,
        alt: data.target.fields.description['en-US']
      })
    }

    if (data) {
      imageIconSvg.push({
        alt: data.target.fields.description['en-US'],
        step: data.target.fields.file['en-US'].url
      })
    }

    setImageStepbyStepSvg(imageIconSvg)
    setImageStepbyStepSvgMobile(imageIconSvgMbile)
  }
  eliminar.splice(i, 1)
}
