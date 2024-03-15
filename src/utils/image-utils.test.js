import {
  checkIfExtensionImageIsAllowed,
  createProcessedImageContentfulData
} from './image-utils'

describe('Test for checkIfExtensionImageIsAllowed function', () => {
  test('should return false when srcImg is an empty string', () => {
    const srcImg = ''
    const isAllowedExtensionImageCover = checkIfExtensionImageIsAllowed(srcImg)
    expect(isAllowedExtensionImageCover).toBeFalsy()
  })

  test('should return false when srcImg is a jpg image', () => {
    const srcImg =
      '//images.ctfassets.net/y3qdch79qxiw/760O6dUVGbiNmhIC4U3mZs/02078364f49065ebe490d05af7ca93a2/IMG-actdatos.jpg?w=800&q=50'
    const isAllowedExtensionImageCover = checkIfExtensionImageIsAllowed(srcImg)
    expect(isAllowedExtensionImageCover).toBeTruthy()
  })

  test('should return false when srcImg is a svg image', () => {
    const srcImg =
      '//images.ctfassets.net/y3qdch79qxiw/26WzOYAifmieWBxJwyWVkr/7632b8319e80495580ba8bc816567c22/Protecci__n_Activo.svg'
    const isAllowedExtensionImageCover = checkIfExtensionImageIsAllowed(srcImg)
    expect(isAllowedExtensionImageCover).toBeFalsy()
  })

  test('should return false when srcImg is a svg image in base64', () => {
    const srcImg =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iM='
    const isAllowedExtensionImageCover = checkIfExtensionImageIsAllowed(srcImg)
    expect(isAllowedExtensionImageCover).toBeFalsy()
  })

  test('should return false when srcImg is an image not permitted', () => {
    const srcImg =
      '//images.ctfassets.net/y3qdch79qxiw/26WzOYAifmieWBxJwyWVkr/7632b8319e80495580ba8bc816567c22/Protecci__n_Activo.gif'
    const isAllowedExtensionImageCover = checkIfExtensionImageIsAllowed(srcImg)
    expect(isAllowedExtensionImageCover).toBeFalsy()
  })

  test('should return false when srcImg is undefined', () => {
    const isAllowedExtensionImageCover = checkIfExtensionImageIsAllowed(
      undefined
    )
    expect(isAllowedExtensionImageCover).toBeFalsy()
  })

  test('should return object with its values empty when is undefined image from contentful', () => {
    const objectImg = createProcessedImageContentfulData()
    expect(objectImg).toEqual({
      imagen: '',
      nameImage: '',
      title: ''
    })
  })

  test('should return object with its values from contentful data', () => {
    const imageContentful = {
      file: {
        url:
          '//images.ctfassets.net/y3qdch79qxiw/26WzOYAifmieWBxJwyWVkr/7632b8319e80495580ba8bc816567c22/Protecci__n_Activo.gif'
      },
      description: 'Personas',
      title: 'Personas'
    }
    const objectImg = createProcessedImageContentfulData(imageContentful)
    expect(objectImg).toEqual({
      imagen: imageContentful.file.url,
      nameImage: imageContentful.description,
      title: imageContentful.title
    })
  })
})
