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
            <div className="itemToRate">
                <p className="itemContent">
                    Pineapple on Pizza
                </p>
                <div className="itemRatingButtons">
                    <button className="like-button">
                        Like ({this.state.likes})
                    </button>
                   <button className="dislike-button">
                        Dislike ({this.state.dislikes})
                   </button>
                </div>
            </div>
        );
    }
}

export default RatableItem;