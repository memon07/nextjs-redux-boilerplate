import Immutable from 'immutable';
import * as ActionType from '../actionTypes/user';

export const initialState = Immutable.fromJS(null)

export default function (state = initialState,action) {
    switch(action.type) {
        case ActionType.POST_USER:
            return {...state, user: action.user}

        default:
            return state
    }
}