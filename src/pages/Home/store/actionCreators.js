import {
    getBannerRequest,
    getRecommendRequest
} from '@/api/request'
import * as actionTypes from './constants'

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER_LIST,
    data
})

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
})

export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                dispatch(changeBannerList(data.banners))
            })
            .catch(() => {
                console.log('轮播图数据传输错误')
            })
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendRequest()
            .then(data => {
                dispatch(changeRecommendList(data))
                dispatch(changeEnterLoading(false))
            })
            .catch(() => {
                console.log('推荐歌单数据传输错误')
            })
    }
}