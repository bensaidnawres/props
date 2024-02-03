import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player({el}) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
       {el.team}
        </Card.Text>
     
      </Card.Body>
    </Card>
  );
}

export default Player;