import { combineReducers } from 'redux'
import { reducer as homeReducer } from '../pages/Home/store'
import { reducer as rankReducer } from '../pages/Rank/store'
import { reducer as playReducer } from '../components/Player/store'
import { reducer as searchReducer } from '../pages/Search/store'

export default combineReducers({
    home: homeReducer,
    rank: rankReducer,
    play: playReducer,
    search: searchReducer
})