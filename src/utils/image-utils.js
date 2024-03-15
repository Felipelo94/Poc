const ALLOWED_EXTENSIONS_NOCOVER = ['.svg', 'image/svg+xml']
const ALLOWED_EXTENSIONS_COVER = [
  '.jpg',
  '.png',
  '.jpeg',
  'image/png',
  'image/jpeg'
]

const checkSrcImgIncludesExtension = (extension, srcImg) =>
  srcImg.includes(extension)

const checkAllowedExtensionsImagesCover = (extensions, srcImg) => {
  return extensions.some(extension =>
    checkSrcImgIncludesExtension(extension, srcImg)
  )
}

export const checkIfExtensionImageIsAllowed = (srcImg = '') => {
  const isAllowedExtensionCover = checkAllowedExtensionsImagesCover(
    ALLOWED_EXTENSIONS_COVER,
    srcImg
  )
  const isNotAllowedExtensionCover = !checkAllowedExtensionsImagesCover(
    ALLOWED_EXTENSIONS_NOCOVER,
    srcImg
  )

  if (isAllowedExtensionCover && isNotAllowedExtensionCover) {
    return true
  }

  return false
}

export const createProcessedImageContentfulData = (
  imageFromContentful = {}
) => {
  return {
    imagen: imageFromContentful?.file?.url ?? '',
    nameImage: imageFromContentful?.description ?? '',
    title: imageFromContentful?.title ?? ''
  }
}
