import React from 'react';
import Heroes from './heroes';
import { connect } from 'react-redux';
import { getHeroes } from 'api/heroes';

const Home = React.createClass({

	componentWillMount: function() {
        getHeroes()
    },

    render: function() {
        return (
            <Heroes {...this.props} />
        )
    }
});

const stateToProps = function(state) {
    return {
        heroes: state.heroReducer.heroes
    }
}

const dispatchToProps = function(dispatch) {
    return {
        onClick: () => {console.log('hero was clicked')}
    }
}

export default connect(stateToProps, dispatchToProps)(Home)