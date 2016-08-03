import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div className="heroes-page">
                    {this.props.heroes.map((hero) => {
                        return (
                            <div className="card">
                                <div className="card-thumbnail">
                                    <img src={hero.thumbnail.path} width="100"/>
                                </div>
                                <p><Link to={`/hero/${hero.id}`}>{hero.name}</Link></p>
                            </div>
                        );
                    })}
            </div>
        )
    }
});