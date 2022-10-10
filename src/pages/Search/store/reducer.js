import * as actionTypes from './constants'
import { setSearchHistory_local } from '@/api/utils'

const defaultState = {
    hotList: [],
    songsList: [],
    searchHistory: [],
    enterLoading: false
}
const addHistory = (list, add) => {
    if (list.length >= 8) {
        list.pop()
    }
    // 新增搜索记录添加到数组头部
        list.unshift(add)
    // 去重
    list = Array.from(new Set(list))
    // 存入LocalStorage中，数据持久化
    setSearchHistory_local(list)
    // console.log(list)
    return Array.from(list) 
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOTLIST:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.CHANGE_SONGSLIST:
            return {
                ...state,
                songsList: action.data
            }
        case actionTypes.GET_SEARCH_HISTORY:
            return Object.assign([], state, { searchHistory: action.data })
            
        case actionTypes.ADD_SEARCH_HISTORY:
            return {
                ...state,
                searchHistory: addHistory(Object.assign([], state.searchHistory), action.data)
            }
        case actionTypes.CLEAR_SEARCH_HISTORY:
            return {
                ...state,
                searchHistory: []
            }
        case actionTypes.CHANGE_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}