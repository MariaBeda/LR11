import React, {Component} from 'react';
import './styles.scss';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './Components/Card/Card';

class App extends Component {
    state = {
        cards: [
            {
                id: 1,
                name: 'User',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 2,
                name: 'User1',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 3,
                name: 'User2',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 4,
                name: 'User3',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 5,
                name: 'User4',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 6,
                name: 'User5',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 7,
                name: 'User6',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 8,
                name: 'User7',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 9,
                name: 'User8',
                status: Math.floor(Math.random() * 2)
            },
            {
                id: 10,
                name: 'User9',
                status: Math.floor(Math.random() * 2)
            }
        ],
        value: ''
    };

    onInput = (event) => {
        const newName = event.target.value;
        this.setState({
            value: newName
        })
    };


    addNew = (event) => {
      event.preventDefault();
        const random = Math.floor(Math.random() * 2);
        this.setState(prevState =>({
            cards: [...prevState.cards, {id: (prevState.cards.length !== 0 ? prevState.cards[prevState.cards.length - 1].id + 1 : 0), name: prevState.value, status: random}],
            value: ''
        }))
    };

    deleteCard = (deleteIndex) => {
        const cards = this.state.cards.filter(card => card.id !== deleteIndex);
        this.setState({
            cards
        })

    };

    render() {
        return (
            <div className="App">
                <Container fluid>
                    
                    <Row>
                            {  this.state.cards.map((card, index) => {
                                return(
                                    <Col key={index} lg={3} md={6} xs={12}>
                                        <Card
                                            id={card.id}
                                            name={card.name}
                                            status={card.status}
                                            deleteCard={() => this.deleteCard(card.id)}
                                        />
                                    </Col>
                                )
                            }) }

                            <Form>
                            <Form.Group controlId="newCard">
                                <Form.Label>Введите имя новой карточки</Form.Label>
                                <Form.Control type="text"  onChange={this.onInput} value={this.state.value}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.addNew}>
                                Добавить
                            </Button>
                            </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;