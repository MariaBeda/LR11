
import React, {Component} from 'react';
import './Card.scss'
import {Button} from "react-bootstrap";


class Card extends Component {
    render() {
        const inputClasses = ['Card'];
        this.props.status === 1 ? inputClasses.push('active') : inputClasses.push('danger');

        return (
            <div className='card'>
                <div className="card-body">
                    <div className={`indicator ${inputClasses.join(' ')}`}>
                    </div>
                    <div className="text">
                        <p>Id: {this.props.id}</p>
                        <p>Имя: {this.props.name}</p>
                    </div>
                    <Button variant="danger" onClick={this.props.deleteCard}>Удалить</Button>
                </div>
            </div>
        );
    }
}

export default Card;