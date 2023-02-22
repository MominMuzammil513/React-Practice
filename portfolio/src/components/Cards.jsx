import { NavLink } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const Cards = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgess} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.detail}
                    </Card.Text>

                    <Link to={props.link}>
                        <Button variant="primary">GitHub</Button>
                    </Link>

                </Card.Body>
            </Card>


        </>
    )
}
export default Cards;