import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div className="app">
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
});
