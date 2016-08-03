import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div className="hero-page">
            <Link to='/' className="back">Heroes list</Link>
                    {this.props.hero.map((heroD) => {
                        return (
                        <div className="container">
                            <div className="hero-thumbnail">
                                <img src={heroD.thumbnail.path} width="150" />
                            </div>
                            <div className="hero-desc">
                                <div className="hero-title">
                                    <h3 className="">{heroD.name}</h3>
                                    <p className="">{heroD.description}</p>
                                </div>
                                <div className="hero-details">
                                    <h4>Comics</h4>
                                    <hr className="hr"/>
                                    {heroD.comics.items.map((item) => {
                                        return (
                                            <div>
                                                <p className="item-name">{item.name}</p>
                                                <hr className="hr"/>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="hero-details">
                                    <h4>Series</h4>
                                    <hr className="hr"/>
                                    {heroD.series.items.map((item) => {
                                        return (
                                            <div>
                                                <p className="item-name">{item.name}</p>
                                                <hr className="hr"/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        );
                    })}
            </div>
        )
    }
});