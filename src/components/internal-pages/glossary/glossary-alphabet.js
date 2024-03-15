import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { ALPHABET } from '../../../const/dictionary/general-const'
import { LETTERS_GLOSSARY_DEFAULT } from '../../../const/dictionary/glossary-const'
import Letter from '../../atoms/letter/letter'
import './glossary-alphabet.scss'

const GlossaryAlphabet = ({
  letterSelected,
  handleClickLetter = () => {},
  words = []
}) => {
  const [letters, setLetters] = useState([])

  useEffect(() => {
    const lettersGlossary = ALPHABET.map(letter => {
      const hasWords = words.some(word => {
        return word.letra.toLowerCase() === letter.toLowerCase()
      })
      return {
        letter,
        hasWords
      }
    })
    setLetters(lettersGlossary)
  }, [words])

  const handleOnClickLetter = letter => {
    handleClickLetter(letter)
  }

  return (
    <section
      id="glossary-alphabet-container"
      className="glossary-alphabet-container"
    >
      {letters.length > 0 && (
        <Letter
          key={LETTERS_GLOSSARY_DEFAULT}
          id={LETTERS_GLOSSARY_DEFAULT}
          character={LETTERS_GLOSSARY_DEFAULT}
          onClick={handleOnClickLetter}
        />
      )}
      {letters.length > 0 && (
        <span className="glossary-alphabet-container__separator" />
      )}
      {letters.map(letter => {
        return (
          <Letter
            key={letter.letter}
            id={letter.letter}
            character={letter.letter}
            isSelected={
              letter.letter.toLowerCase() === letterSelected.toLowerCase()
            }
            isDisabled={!letter.hasWords}
            onClick={handleOnClickLetter}
          />
        )
      })}
    </section>
  )
}

GlossaryAlphabet.propTypes = {
  letterSelected: PropTypes.string,
  handleClickLetter: PropTypes.func,
  words: PropTypes.arrayOf(PropTypes.object)
}

export default GlossaryAlphabet
