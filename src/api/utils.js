
export const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        clearTimeout(timer);
      }, delay);
    };
  };

export const filterIndex = rankList => {
    for (let i = 0; i < rankList.length; i++) {
        if (rankList[i].tracks.length && !rankList[i+1].tracks.length) {
            return i + 1
        }
    }
}

export const findIndex = (song, list) => {
  return list.findIndex(item => {
    return song.id === item.id;
  });
};

//处理歌手列表拼接歌手名字
export const getName = list => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

export const isPathPartlyExisted = (path) => {
  const arr = ['/home', '/watch', '/sing', '/me'];
  // 任何情况 结果数组第二项都是arr里匹配的单项
  let pathRes = path.split('/')
  if (pathRes[1] && arr.indexOf('/' + pathRes[1]) != -1) return false;
  return true
}

/**
* 将搜索记录存入LocalStorage
* @param historyList 
*/
export const setSearchHistory_local = (historyList) => {
  window.localStorage.setItem("search_history",
    JSON.stringify(historyList)) || "[]";
  }

/**
 * 从localStorage中得到历史记录
 * @returns 
 */
export const getSearchHistory_local = () => {
  return JSON.parse(window.localStorage.getItem("search_history")) || [];
}