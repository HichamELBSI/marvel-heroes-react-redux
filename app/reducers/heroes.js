var heroInitialState = {
    heroes: []
};

export default function(state = heroInitialState, action) {
    switch(action.type) {
        
        case 'GET_HEROES':

            var newState = Object.assign({}, state)
            newState.heroes = action.heroes;
            return newState;

        default:
            return state;
            
    }
}