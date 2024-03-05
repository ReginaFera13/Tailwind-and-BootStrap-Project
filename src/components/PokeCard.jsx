import Card  from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PokeCard({key, abilityA, abilityB, exp, name, sprite, hp, attack, defense, specialAttack, specialDefense, speed, typeA, typeB}) {
  let types = [typeA]
  let abilities = [abilityA, abilityB]
  if (typeB != false) {
    types.push(typeB)
  }

  return (
    <>
      <Card id={key} style={{ width: '18rem' }}>
        <Card.Img variant='top' src={sprite} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Container>
            <Row>
              <Col>Type(s)</Col>
              <Col>{types.join(' / ')}</Col>
            </Row>
            <Row>
              <Col>Abilities</Col>
              <Col>{abilities.join(' / ')}</Col>
            </Row>
            <Row>
              <Col>EXP</Col>
              <Col>{exp}</Col>
            </Row>
            <Row>
              <Col>HP</Col>
              <Col>{hp}</Col>
            </Row>
            <Row>
              <Col>Attack</Col>
              <Col>{attack}</Col>
            </Row>
            <Row>
              <Col>Defense</Col>
              <Col>{defense}</Col>
            </Row>
            <Row>
              <Col>Special Attack</Col>
              <Col>{specialAttack}</Col>
            </Row>
            <Row>
              <Col>Special Defense</Col>
              <Col>{specialDefense}</Col>
            </Row>
            <Row>
              <Col>Speed</Col>
              <Col>{speed}</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  )
}
  
  export default PokeCard