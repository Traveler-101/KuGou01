import{C,a as N,g as E,b as R,c as k,d as D,e as z,G as A,A as _,s as d,r as a,f as Q,j as t,h as i,i as T,R as G,u as I,L as O,k as j,l as B}from"./index.a4d05a01.js";const W=e=>({type:D,data:e}),F=e=>({type:z,data:e}),b=e=>({type:C,data:e}),P=e=>({type:A,data:e}),Y=e=>({type:_,data:e}),q=()=>({type:N}),M=e=>r=>{r(Y(e)),E(e).then(n=>{let o=n.data.result.songs;r(F(o)),r(b(!1))}).catch(()=>{console.log("\u641C\u7D22\u7ED3\u679C\u51FA\u73B0\u9519\u8BEF")})},U=()=>e=>{R().then(r=>{e(W(r.result.hots)),e(P(k()))}).catch(()=>{console.log("\u70ED\u95E8\u641C\u7D22\u51FA\u9519")})},$=d.div`
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    /* padding-bottom: 6rem; */
    background-color: white;
    &.fly-enter,&.fly-appear {
        /* 初始状态 */
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        /* 进入之后的状态 */
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.25rem 0.5rem;
        border-bottom: 1px solid #e5e5e5;
        background-color: white;
        z-index: 200;
        span {
            line-height: 1.5rem;
            font-size: 1rem;
        }
        .title {
            flex: 1;
            text-align: center;
            line-height: 1.5rem;
            color: black;
            font-size: 1rem;
            padding-right: 0.8rem;
        }
    }
`,x=d.div`
    position: absolute;
    top: 5rem;
    bottom: 0;
    width: 100%;
    display: ${e=>e.show?"":"none"};
`,J=d.div`
    padding: 0 20px;
    margin-bottom: 1rem;
    .history {
        width: 100%;
        height: 100%;
    }
    .title {
        color: black;
        font-size: 16px;
        font-weight: 700;
        /* margin-bottom: 0.5rem; */
        i {
            float: right;
        }
    }
    .content {
        width: 100%;
        height: 2rem;
        display: inline-block;
        span {
            height: 30px;
            min-width: 60px;
            font-size: 14px;
            margin-left: 8px;
            margin-top: 6px;
            padding: 0 6px;
            line-height: 30px;
            text-align: center;
            display: inline-block;
            border: 1px solid #e5e5e5;
            border-radius: 15px;
        }
    }
`,K=d.div`
    .title {
        font-size: 18px;
        font-weight: bold;
        padding-left: 1.2rem;
        margin-bottom: 0.8rem;
    }
    li:first-child {
        color: #f84824;
    }
    li:nth-child(2) {
        color: #f47f1b;
    }
    li:nth-child(3) {
        color: #ffb11f;
    }
    .hotword {
        height: 2rem;
        width: 100%;
        padding: 0.5rem 1.2rem;
        font-size: 16px;
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        color: #a1a4b3;
    }
    .top {
        width: 1rem;
        text-align: center;
        font-size: 16px;
        line-height: 1rem;
        margin-right: 1.2rem;
        font-weight: bold;
    }
    .name {
        color: black;
    }
`,V=d.ul`
    padding-left: 1.5rem;
    z-index: 112;
    background-color: white;
   >li {
    display: flex;
    height: 3rem;
    align-items: center;
    .info {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        height: 100%;
        padding: 0.5rem 0;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #e5e5e5;
        >span:first-child{
            font-size: 16px;
            color: #333;
        }
        >span:last-child{
            margin-top: 0.2rem;
            font-size: 12px;
            color: #bba8a8;
        }
    }
   }
    
`,X=d.div`
  margin-top: 2rem;
  .search-box {
    padding: 0.5rem;
    background: #fbfbfb;
    position: absolute;
    width: 100%;
    .fa-search {
        position: absolute;
        left: 1.5rem;
        top: 1.1rem;
    }
    .fa-close {
        position: absolute;
        top: 1.1rem;
        left: 16rem;
    }
    input {
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        border: 1px solid #e5e5e5;
        width: 100%;
    }
  }
  
`,Z=e=>{const r=a.exports.useRef(null),[n,o]=a.exports.useState(""),{newQuery:l}=e,{handleQuery:h}=e;let p=a.exports.useMemo(()=>Q(h,500),[h]);return a.exports.useEffect(()=>{r.current.focus()},[]),a.exports.useEffect(()=>{p(n)},[n]),a.exports.useEffect(()=>{let c=n;l!==n&&(c=l,r.current.value=l),o(c)},[l]),t(X,{children:i("div",{className:"search-box",children:[t("i",{className:"fa fa-search"}),t("input",{ref:r,placeholder:"\u97F3\u4E50/\u6B4C\u624B/\u62FC\u97F3",onChange:c=>{let u=c.target.value;o(u)}}),t("i",{className:"fa fa-close",style:n?{display:"block"}:{display:"none"},onClick:()=>{o(""),r.current.value="",r.current.focus()}})]})})},ee=e=>{const[r,n]=a.exports.useState(""),{hotList:o,songsList:l,searchHistory:h,enterLoading:p}=e,{getHotListDispatch:f,getResultSongsListDispatch:m,changeEnterLoadingDispatch:y,deleteAllSearchHistory:c}=e,u=I();a.exports.useEffect(()=>{o.length||f()},[]);const S=s=>{n(s),!!s&&r.trim()&&(m(s),y(!0))},H=()=>{c(),B([])},L=()=>h.length?i("div",{className:"history",children:[i("div",{className:"title",children:[t("span",{children:"\u641C\u7D22\u8BB0\u5F55"}),t("i",{className:"fa fa-trash",onClick:()=>H()})]}),t("div",{className:"content",children:h.map((s,g)=>t("span",{onClick:()=>n(s),children:s},s+g))})]}):null,v=()=>t("ul",{children:o.map((s,g)=>i("li",{className:"hotword",onClick:()=>n(s.first),children:[t("div",{className:"top",children:g+1}),t("div",{className:"name",children:s.first})]},s.first))}),w=()=>t(V,{children:l.map(s=>t("li",{children:i("div",{className:"info",children:[t("span",{children:s.name}),i("span",{children:[j(s.artists)," - ",s.album.name]})]})},s.id))});return i($,{children:[i("div",{className:"header",children:[t("span",{children:t("i",{className:"fa fa-chevron-left",onClick:()=>u(-1)})}),t("div",{className:"title",children:"\u641C\u7D22"})]}),t(Z,{newQuery:r,handleQuery:S}),i(x,{show:!r&&r=="",children:[t(J,{children:L()}),i(K,{children:[t("div",{className:"title",children:"\u70ED\u95E8\u641C\u7D22"}),v()]})]}),t(x,{show:r,children:w()}),p?t(O,{}):null]})},te=e=>({hotList:e.search.hotList,songsList:e.search.songsList,searchHistory:e.search.searchHistory,enterLoading:e.search.enterLoading}),re=e=>({getHotListDispatch(){e(U())},getResultSongsListDispatch(r){e(M(r))},changeEnterLoadingDispatch(r){e(b(r))},deleteAllSearchHistory(){e(q())}});var ne=T(te,re)(G.memo(ee));export{ne as default};
