var heroInitialState = {
    hero: []
};

export default function(state = heroInitialState, action) {
    switch(action.type) {
        
        case 'GET_HERO':

            var newState = Object.assign({}, state)
            newState.hero = action.hero;
            return newState;

        default:
            return state;
            
    }
}