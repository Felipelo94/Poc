import { getIdDiv } from './redirect-bread-crumb'

describe('Tests for redirect-bread-crumb util', () => {
  test('getIdDiv must return the given string without accents', () => {
    const stringWithAccents =
      'w͢͢͝h͡o͢͡ ̸͢k̵͟n̴͘ǫw̸̛s͘ ̀́w͘͢ḩ̵at ̧̕h́o̵r͏̵rors̡ ̶͡͠lį̶e͟͟ ̶͝in͢ ͏t̕h̷̡͟e ͟͟d̛a͜r̕͡k̢̨ ͡h̴e͏a̷̢̡rt́͏ ̴̷͠ò̵̶f̸ u̧͘ní̛͜c͢͏o̷͏d̸͢e̡͝?'
    const expectedStringWithoutAccents =
      'who knows what horrors lie in the dark heart of unicode?'

    const stringWithoutAccents = getIdDiv(stringWithAccents)
    expect(stringWithoutAccents).toBe(expectedStringWithoutAccents)
  })

  test('getIdDiv must return empty string for empty input', () => {
    const stringWithoutAccents = getIdDiv()
    expect(stringWithoutAccents).toBe('')
  })
})
