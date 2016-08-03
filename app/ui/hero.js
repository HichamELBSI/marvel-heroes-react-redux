import React from 'react';
import HeroComp from './hero-component';
import { connect } from 'react-redux';
import { getHero } from 'api/heroes';

const Hero = React.createClass({

	componentWillMount: function() {
        console.log(this.props.params.id);
        getHero(this.props.params.id)
    },

    render: function() {
        return (
            <HeroComp {...this.props} />
        )
    }
});

const stateToProps = function(state) {
    return {
        hero: state.heroRed.hero
    }
}

const dispatchToProps = function(dispatch) {
    return {
        onClick: () => {console.log('hero was clicked')}
    }
}

export default connect(stateToProps, dispatchToProps)(Hero)