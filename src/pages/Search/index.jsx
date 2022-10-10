import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, ShortcutWrapper, HotWrapper, SongsWrapper, HistoryWrapper } from "./style";
import SearchBox from "@/components/search-box";
import Loading from "@/components/loading";
import { changeEnterLoading, clearSearchHistory, getHotList, getResultSongsList } from './store/actionCreator'
import { getName } from "@/api/utils";

const Search = (props) => {
    const [query, setQuery] = useState('');
    // console.log(query)
    const {
        hotList,
        songsList,
        searchHistory,
        enterLoading
    } = props
    const {
        getHotListDispatch,
        getResultSongsListDispatch,
        changeEnterLoadingDispatch,
        deleteAllSearchHistory
    } = props

    const navigate = useNavigate()
    useEffect(() => {
        
            getHotListDispatch()
        
    }, [])

    const handleQuery = (q) => {
        setQuery(q)
        if (!q) return;
        if (query.trim()) {
            getResultSongsListDispatch(q);
            changeEnterLoadingDispatch(true);
        }    
    }
    const deleteAllHistory = () => {
        if (searchHistory.length) {
            deleteAllSearchHistory()
        }
    }
    const renderHistory = () => {
        return searchHistory.length ?
            <div className="history">
                <div className="title">
                    <span>搜索记录</span>
                    <i className="fa fa-trash" onClick={() => deleteAllHistory()}></i>
                </div>
                <div className="content">
                    {searchHistory.map((item, index) =>
                        <span key={item + index} onClick={() => setQuery(item)}>
                            {item}
                        </span>)}
                </div>
            </div> : null
    }
    const renderHotList = () => {
        return (
            <ul>
                {
                    hotList.map((item, index) => {
                        return (
                            <li
                                className="hotword"
                                key={item.first}
                                onClick={() => setQuery(item.first)}
                            >
                                <div className="top">{index + 1}</div>
                                <div className="name">{item.first}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    const renderSongsList = () => {
        return (
            <SongsWrapper>
                {
                    songsList.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="info">
                                    <span>{item.name}</span>
                                    <span>
                                        {getName(item.artists)} - {item.album.name}
                                    </span>
                                </div>

                            </li>
                        )
                    })
                }
            </SongsWrapper>
        )
    }
    return (
        <Container>
            <div className="header">
                <span>
                    <i
                        className="fa fa-chevron-left"
                        onClick={() => navigate(-1)}
                    ></i>
                </span>
                <div className="title">搜索</div>
            </div>
            <SearchBox newQuery={query} handleQuery={handleQuery} />
            <ShortcutWrapper show={!query && query == ""}>
                <HistoryWrapper>
                    {renderHistory()}
                </HistoryWrapper>
                <HotWrapper >
                    <div className="title">热门搜索</div>
                    {renderHotList()}
                </HotWrapper>
            </ShortcutWrapper>
            <ShortcutWrapper show={query}>
                {renderSongsList()}
            </ShortcutWrapper>
            {enterLoading ? <Loading /> : null}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        hotList: state.search.hotList,
        songsList: state.search.songsList,
        searchHistory: state.search.searchHistory,
        enterLoading: state.search.enterLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHotListDispatch() {
            dispatch(getHotList())
        },
        getResultSongsListDispatch(data) {
            dispatch(getResultSongsList(data))
        },
        changeEnterLoadingDispatch(data) {
            dispatch(changeEnterLoading(data))
        },
        deleteAllSearchHistory() {
            dispatch(clearSearchHistory())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))