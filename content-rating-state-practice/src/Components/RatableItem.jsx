import React, { Component } from 'react';
import './RatableItem.css';

class RatableItem extends Component {
    constructor () {
        super ();
        this.state = {
            likes: 0,
            dislikes: 0
        }
    }
    render() {
        return (
            <div>
            <h1>Item to Rate</h1>
            </div>
        );
    }
}