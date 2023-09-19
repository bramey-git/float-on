import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog } from '@fortawesome/free-solid-svg-icons'

const smog = <FontAwesomeIcon icon={faSmog} fade/>

/* TODO: Read and print numbers */

const Puzzle = ({ puzzle, correctGuesses }) => {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/

  return (
    <Container>
      <Row className='puzzle-box'>
        <Col xs lg='2'></Col>
        <Col lg='8'>
          <div className='puzzle'>
            <p>
              {puzzle.name.split('').map( (letter, i) => {
                if (letter === ' ') {
                  return (
                    <strong className='letter space' key={i}>
                      {letter}
                    </strong>
                  )
                } else if (specialChars.test(letter)) {
                  return (
                    <strong className='letter space' key={i}>
                      {letter}
                    </strong>
                  )
                }
                else {
                  return (
                    <strong className='letter' key={i}>
                      {correctGuesses.includes(letter.toLowerCase()) ? letter : smog}
                    </strong>
                  )
                }
              })}
            </p>
          </div>
          <div className='hint'>
            <p>{puzzle.hint}</p>
          </div>
        </Col>
        <Col xs lg='2'></Col>
      </Row>
    </Container>
  )
}

export default Puzzle