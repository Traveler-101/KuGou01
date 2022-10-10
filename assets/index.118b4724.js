import{C as E,a as R,g as k,b,c as D,d as z,e as A,G as Q,A as _,s as h,r as o,f as T,j as r,h as i,i as G,R as I,u as O,L as j,k as B}from"./index.ee6c4e62.js";const W=e=>({type:z,data:e}),F=e=>({type:A,data:e}),S=e=>({type:E,data:e}),H=e=>({type:Q,data:e}),P=e=>({type:_,data:e}),Y=()=>({type:R}),q=e=>t=>{t(P(e)),k(e).then(s=>{let a=s.data.result.songs;t(F(a)),t(S(!1)),t(H(b()))}).catch(()=>{console.log("\u641C\u7D22\u7ED3\u679C\u51FA\u73B0\u9519\u8BEF")})},M=()=>e=>{D().then(t=>{e(W(t.result.hots)),e(H(b()))}).catch(()=>{console.log("\u70ED\u95E8\u641C\u7D22\u51FA\u9519")})},U=h.div`
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
`,x=h.div`
    position: absolute;
    top: 5rem;
    bottom: 0;
    width: 100%;
    display: ${e=>e.show?"":"none"};
`,$=h.div`
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
`,J=h.div`
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
`,K=h.ul`
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
    
`,V=h.div`
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
  
`,X=e=>{const t=o.exports.useRef(null),[s,a]=o.exports.useState(""),{newQuery:l}=e,{handleQuery:c}=e;let p=o.exports.useMemo(()=>T(c,500),[c]);return o.exports.useEffect(()=>{t.current.focus()},[]),o.exports.useEffect(()=>{p(s)},[s]),o.exports.useEffect(()=>{let d=s;l!==s&&(d=l,t.current.value=l),a(d)},[l]),r(V,{children:i("div",{className:"search-box",children:[r("i",{className:"fa fa-search"}),r("input",{ref:t,placeholder:"\u97F3\u4E50/\u6B4C\u624B/\u62FC\u97F3",onChange:d=>{let u=d.target.value;a(u)}}),r("i",{className:"fa fa-close",style:s?{display:"block"}:{display:"none"},onClick:()=>{a(""),t.current.value="",t.current.focus()}})]})})},Z=e=>{const[t,s]=o.exports.useState(""),{hotList:a,songsList:l,searchHistory:c,enterLoading:p}=e,{getHotListDispatch:f,getResultSongsListDispatch:m,changeEnterLoadingDispatch:y,deleteAllSearchHistory:d}=e,u=O();o.exports.useEffect(()=>{f()},[]);const L=n=>{s(n),!!n&&t.trim()&&(m(n),y(!0))},v=()=>{c.length&&d()},w=()=>c.length?i("div",{className:"history",children:[i("div",{className:"title",children:[r("span",{children:"\u641C\u7D22\u8BB0\u5F55"}),r("i",{className:"fa fa-trash",onClick:()=>v()})]}),r("div",{className:"content",children:c.map((n,g)=>r("span",{onClick:()=>s(n),children:n},n+g))})]}):null,C=()=>r("ul",{children:a.map((n,g)=>i("li",{className:"hotword",onClick:()=>s(n.first),children:[r("div",{className:"top",children:g+1}),r("div",{className:"name",children:n.first})]},n.first))}),N=()=>r(K,{children:l.map(n=>r("li",{children:i("div",{className:"info",children:[r("span",{children:n.name}),i("span",{children:[B(n.artists)," - ",n.album.name]})]})},n.id))});return i(U,{children:[i("div",{className:"header",children:[r("span",{children:r("i",{className:"fa fa-chevron-left",onClick:()=>u(-1)})}),r("div",{className:"title",children:"\u641C\u7D22"})]}),r(X,{newQuery:t,handleQuery:L}),i(x,{show:!t&&t=="",children:[r($,{children:w()}),i(J,{children:[r("div",{className:"title",children:"\u70ED\u95E8\u641C\u7D22"}),C()]})]}),r(x,{show:t,children:N()}),p?r(j,{}):null]})},ee=e=>({hotList:e.search.hotList,songsList:e.search.songsList,searchHistory:e.search.searchHistory,enterLoading:e.search.enterLoading}),te=e=>({getHotListDispatch(){e(M())},getResultSongsListDispatch(t){e(q(t))},changeEnterLoadingDispatch(t){e(S(t))},deleteAllSearchHistory(){e(Y())}});var ne=G(ee,te)(I.memo(Z));export{ne as default};
