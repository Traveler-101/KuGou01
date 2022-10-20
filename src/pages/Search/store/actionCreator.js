import * as actionTypes from './constants'
import { getSearchHistory_local } from '@/api/utils'
import { 
    getResultSongsListRequest,
    getHotListRequest
} from '@/api/request'

export const changeHotList = (data) => ({
    type: actionTypes.CHANGE_HOTLIST,
    data
})

export const changeResultSong = (data) => ({
    type: actionTypes.CHANGE_SONGSLIST,
    data
}) 

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_LOADING,
    data
})
// 获取历史搜索记录(存在localStorage中)
export const getSearchHistory = (data) => ({
    type: actionTypes.GET_SEARCH_HISTORY,
    data
})
// 增加搜索记录
export const addSearchHistory = (data) => ({
    type: actionTypes.ADD_SEARCH_HISTORY,
    data
})
// 清空历史记录
export const clearSearchHistory = () => ({
    type: actionTypes.CLEAR_SEARCH_HISTORY,
})

// 异步操作
export const getResultSongsList = (query) => {
    return dispatch => {
        dispatch(addSearchHistory(query))
        getResultSongsListRequest(query)
            .then(data => {
                let res = data.data.result.songs
                dispatch(changeResultSong(res))
                dispatch(changeEnterLoading(false))
            })
            .catch(() => {
                console.log('搜索结果出现错误')
            })
        
    }
}
export const getHotList = () => {
    return dispatch => {
        getHotListRequest()
            .then(data => {
                dispatch(changeHotList(data.result.hots))
                dispatch(getSearchHistory(getSearchHistory_local()))
            }).catch(() => {
                console.log("热门搜索出错")
            })
    }
}