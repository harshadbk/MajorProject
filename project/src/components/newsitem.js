import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        const { title, description, imgurl, newsurl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imgurl ? "https://www.denverpost.com/wp-content/uploads/2024/07/Guardians_MLB_Draft_32983_9a038c.jpg?w=1024&h=683" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}
