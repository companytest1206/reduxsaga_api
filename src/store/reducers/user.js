import { REQUEST, REQUEST_REMOVE, REQUEST_SUCCESS } from './../action/types';

const initialState = {
    idDrink: '....',
    strDrink: '.....',
    error: '....',
    loading: '....',
    success: '....'
};

const user = (state = initialState, action) => {
    // const { idDrink, strDrink, error, loading, success } = action.payload;
    switch (action.type) {
        case REQUEST:
          return { 
            ...state,
            error: 'Work in progress..',
            loading: 'YES',
            success: 'Work in progress..'
          };
        case REQUEST_REMOVE:
        return { 
            ...state,
            error: 'YES',
            loading: 'NO',
            success: 'NO',
          };
        case REQUEST_SUCCESS:
        return {
            error: 'NO',
            loading: 'NO',
            success: 'YES',
            idDrink: action.payload.idDrink,
            strDrink: action.payload.strDrink,
          };
    }
    return state;
}

 export default user;
