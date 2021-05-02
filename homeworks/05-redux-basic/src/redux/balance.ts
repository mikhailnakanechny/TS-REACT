import { createStore, compose } from 'redux';

//Devtools config
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// balance function and store 
export type IBalanceAction = {type: string, payload: number}

const actionTypeManager = (state: number = 0, action: IBalanceAction) => {
    switch (action.type) {
        case 'UPDATE_BALANCE':
            return action.payload;
        case 'SET_BALANCE_WITH_TAX':
            return state - state * action.payload / 100;
        case 'CREDIT':
            return state - action.payload;
        case 'DEBIT':
            return state + action.payload;
        default:
            return state;
    }
};

export const balance = createStore(actionTypeManager, composeEnhancers());