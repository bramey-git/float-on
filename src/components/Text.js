import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { faSmog } from '@fortawesome/free-solid-svg-icons'

const skull = <FontAwesomeIcon icon={faSkullCrossbones} pulse/>
const smog = <FontAwesomeIcon icon={faSmog} fade/>

const Text = ({ puzzle, wrongGuesses }) => {
  const hits = wrongGuesses.length
  const count = [...Array(hits).keys()]

  return (
    <Container>
      <Row>
        <Col xs lg='1'></Col>
        <Col lg='10'>
          {puzzle.name && <h3 className='puzzle-head'>
            Guess the letters to clear the clouds and Float On to paradise!<br />
            Wrong Guesses:
            {count.map((item) => (
              <span className={'hit-count m-1'} key={item}>{skull}</span>
            ))} ({hits})/8
          </h3>}
          {!puzzle.name && <h3 className='puzzle-head'>
            A correct guess will clear the clouds away and help you to solve the
            puzzle!<br />But an incorrect guess may cause a part of your ship to be lost
            at sea...<br /> If the puzzle is not solved in eight (8) guesses or less,
            your ship will sink, and you will not float on to paradise <br />
            {smog} {skull} {smog} {skull} {smog}
          </h3>}
        </Col>
        <Col xs lg='1'></Col>
      </Row>
    </Container>
  )
}

export default Text