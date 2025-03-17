import React, { Component } from 'react';
import './RatableItem.css';

class RatableItem extends Component {
    constructor () {
        super ();
        this.state = {
            likes: 0,
            dislikes: 0,
            totalRatings: 0,
            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalRatings: prevState.totalRatings + 1
                }));
            },
            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    totalRatings: prevState.totalRatings + 1
                }));
            }
        }
    }
    render() {
        return (
            <div className="itemToRate">
                <p className="itemContent">
                    Pineapple on Pizza
                </p>
                <div className="itemRatingButtons" onClick={this.state.handleLike}>
                    <button className="like-button">
                        Like ({this.state.likes})
                    </button>
                   <button className="dislike-button" onClick={this.state.handleDislike}>
                        Dislike ({this.state.dislikes})
                   </button>
                </div>
                <p className="itemTotalRatings">
                    Total Ratings: {this.state.totalRatings}
                </p>
            </div>
        );
    }
}

export default RatableItem;