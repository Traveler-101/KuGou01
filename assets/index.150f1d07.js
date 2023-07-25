import{s as w,m as M,n as j,o as G,R as v,p as b,q as A,r as U,i as z,_ as L,u as X,j as u,h as S,L as H,t as V,v as W}from"./index.98aea6de.js";function _(n,i){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},_(n,i)}const q=w.div`
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 6rem;
    background-color: white;
    &.show-enter,&.show-appear {
        /* 初始状态 */
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.show-enter-active, &.show-apply-active {
        /* 进入之后的状态 */
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.show-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.show-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .suggest {
        width: 100%;
        padding-top: 2.5rem;
        padding-left: 0.5rem;
        font-weight: 700;
        font-size: 0.9rem;
        color: #333;
    }
    .hot {
        width: 100%;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        font-weight: 700;
        font-size: 0.9rem;
        color: #333;
    }
    .header {
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        background-color: white;
        padding: 0.25rem 0.5rem;
        z-index: 99;
        & > span {
            line-height: 1.5rem;
            color: black;
            font-size: 1rem;
            &.i {
                font-size: 25px;
            }
        }
    }
`,F=w.ul`
    width: 100%;
    margin-top: 0.5rem;
    padding: 0 0.25rem;
    display: ${n=>n.suggestRank?"flex":""};
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
    width: 100%;
`,K=w.li`
    background: rgb(98 119 192 / 4%);
    display: ${n=>n.tracks.length?"flex":""};
    margin: 0.5rem 0;
    /* border-bottom: 1px solid #666; */
    .img_wrapper {
        width: ${n=>n.tracks.length?"27vw":"28vw"};
        height: ${n=>n.tracks.length?"27vw":"28vw"};
        position: relative;
        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }
`,B=w.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem 0.5rem;
    
`,J=n=>({type:j,data:n}),Q=n=>({type:G,data:n}),Y=()=>n=>{M().then(i=>{let p=i&&i.list;n(J(p)),n(Q(!1))})};function $(n,i){n.prototype=Object.create(i.prototype),n.prototype.constructor=n,_(n,i)}function Z(n,i){return n.classList?!!i&&n.classList.contains(i):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+i+" ")!==-1}function tt(n,i){n.classList?n.classList.add(i):Z(n,i)||(typeof n.className=="string"?n.className=n.className+" "+i:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+i))}function D(n,i){return n.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function et(n,i){n.classList?n.classList.remove(i):typeof n.className=="string"?n.className=D(n.className,i):n.setAttribute("class",D(n.className&&n.className.baseVal||"",i))}var y={disabled:!1},I=v.createContext(null),P=function(i){return i.scrollTop},k="unmounted",E="exited",g="entering",N="entered",O="exiting",h=function(n){$(i,n);function i(t,a){var e;e=n.call(this,t,a)||this;var r=a,s=r&&!r.isMounting?t.enter:t.appear,o;return e.appearStatus=null,t.in?s?(o=E,e.appearStatus=g):o=N:t.unmountOnExit||t.mountOnEnter?o=k:o=E,e.state={status:o},e.nextCallback=null,e}i.getDerivedStateFromProps=function(a,e){var r=a.in;return r&&e.status===k?{status:E}:null};var p=i.prototype;return p.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},p.componentDidUpdate=function(a){var e=null;if(a!==this.props){var r=this.state.status;this.props.in?r!==g&&r!==N&&(e=g):(r===g||r===N)&&(e=O)}this.updateStatus(!1,e)},p.componentWillUnmount=function(){this.cancelNextCallback()},p.getTimeouts=function(){var a=this.props.timeout,e,r,s;return e=r=s=a,a!=null&&typeof a!="number"&&(e=a.exit,r=a.enter,s=a.appear!==void 0?a.appear:r),{exit:e,enter:r,appear:s}},p.updateStatus=function(a,e){if(a===void 0&&(a=!1),e!==null)if(this.cancelNextCallback(),e===g){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this);r&&P(r)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:k})},p.performEnter=function(a){var e=this,r=this.props.enter,s=this.context?this.context.isMounting:a,o=this.props.nodeRef?[s]:[b.findDOMNode(this),s],l=o[0],c=o[1],d=this.getTimeouts(),f=s?d.appear:d.enter;if(!a&&!r||y.disabled){this.safeSetState({status:N},function(){e.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:g},function(){e.props.onEntering(l,c),e.onTransitionEnd(f,function(){e.safeSetState({status:N},function(){e.props.onEntered(l,c)})})})},p.performExit=function(){var a=this,e=this.props.exit,r=this.getTimeouts(),s=this.props.nodeRef?void 0:b.findDOMNode(this);if(!e||y.disabled){this.safeSetState({status:E},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:O},function(){a.props.onExiting(s),a.onTransitionEnd(r.exit,function(){a.safeSetState({status:E},function(){a.props.onExited(s)})})})},p.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},p.safeSetState=function(a,e){e=this.setNextCallback(e),this.setState(a,e)},p.setNextCallback=function(a){var e=this,r=!0;return this.nextCallback=function(s){r&&(r=!1,e.nextCallback=null,a(s))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},p.onTransitionEnd=function(a,e){this.setNextCallback(e);var r=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!r||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],l=o[0],c=o[1];this.props.addEndListener(l,c)}a!=null&&setTimeout(this.nextCallback,a)},p.render=function(){var a=this.state.status;if(a===k)return null;var e=this.props,r=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var s=A(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return v.createElement(I.Provider,{value:null},typeof r=="function"?r(a,s):v.cloneElement(v.Children.only(r),s))},i}(v.Component);h.contextType=I;h.propTypes={};function C(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};h.UNMOUNTED=k;h.EXITED=E;h.ENTERING=g;h.ENTERED=N;h.EXITING=O;var nt=h,st=function(i,p){return i&&p&&p.split(" ").forEach(function(t){return tt(i,t)})},T=function(i,p){return i&&p&&p.split(" ").forEach(function(t){return et(i,t)})},R=function(n){$(i,n);function i(){for(var t,a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return t=n.call.apply(n,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(s,o){var l=t.resolveArguments(s,o),c=l[0],d=l[1];t.removeClasses(c,"exit"),t.addClass(c,d?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(s,o)},t.onEntering=function(s,o){var l=t.resolveArguments(s,o),c=l[0],d=l[1],f=d?"appear":"enter";t.addClass(c,f,"active"),t.props.onEntering&&t.props.onEntering(s,o)},t.onEntered=function(s,o){var l=t.resolveArguments(s,o),c=l[0],d=l[1],f=d?"appear":"enter";t.removeClasses(c,f),t.addClass(c,f,"done"),t.props.onEntered&&t.props.onEntered(s,o)},t.onExit=function(s){var o=t.resolveArguments(s),l=o[0];t.removeClasses(l,"appear"),t.removeClasses(l,"enter"),t.addClass(l,"exit","base"),t.props.onExit&&t.props.onExit(s)},t.onExiting=function(s){var o=t.resolveArguments(s),l=o[0];t.addClass(l,"exit","active"),t.props.onExiting&&t.props.onExiting(s)},t.onExited=function(s){var o=t.resolveArguments(s),l=o[0];t.removeClasses(l,"exit"),t.addClass(l,"exit","done"),t.props.onExited&&t.props.onExited(s)},t.resolveArguments=function(s,o){return t.props.nodeRef?[t.props.nodeRef.current,s]:[s,o]},t.getClassNames=function(s){var o=t.props.classNames,l=typeof o=="string",c=l&&o?o+"-":"",d=l?""+c+s:o[s],f=l?d+"-active":o[s+"Active"],x=l?d+"-done":o[s+"Done"];return{baseClassName:d,activeClassName:f,doneClassName:x}},t}var p=i.prototype;return p.addClass=function(a,e,r){var s=this.getClassNames(e)[r+"ClassName"],o=this.getClassNames("enter"),l=o.doneClassName;e==="appear"&&r==="done"&&l&&(s+=" "+l),r==="active"&&a&&P(a),s&&(this.appliedClasses[e][r]=s,st(a,s))},p.removeClasses=function(a,e){var r=this.appliedClasses[e],s=r.base,o=r.active,l=r.done;this.appliedClasses[e]={},s&&T(a,s),o&&T(a,o),l&&T(a,l)},p.render=function(){var a=this.props;a.classNames;var e=A(a,["classNames"]);return v.createElement(nt,U({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(v.Component);R.defaultProps={classNames:""};R.propTypes={};var at=R;function rt(n){const{rankList:i,enterLoading:p}=n,{getRankListDispatch:t}=n,[a,e]=L.exports.useState(!1),r=X();L.exports.useEffect(()=>{t()},[]),L.exports.useEffect(()=>{e(!0)},[]);const s=()=>{e(!1)};let o=i.slice(0,3),l=i.slice(3);const c=(f,x)=>u(F,{suggestRank:x,children:f.map(m=>S(K,{tracks:m.tracks,children:[u("div",{className:"img_wrapper",children:u(V,{placeholder:u("img",{width:"100%",height:"100%",src:W,alt:"music"}),children:u("img",{src:m.coverImgUrl,alt:""})})}),d(m.tracks)]},m.id))}),d=f=>f.length?u(B,{children:f.map((x,m)=>S("li",{children:[m+1,". ",x.first," - ",x.second]},m))}):null;return u(at,{in:a,timeout:300,appear:!0,classNames:"show",unmountOnExit:!0,onExited:()=>r(-1),children:S(q,{children:[S("div",{className:"header",children:[u("span",{children:u("i",{className:"fa fa-chevron-left",onClick:()=>s()})}),u("span",{className:"title",children:"\u6392\u884C\u699C"}),u("span",{onClick:()=>r("/search"),children:u("i",{className:"fa fa-search"})})]}),u("h1",{className:"suggest",children:"\u63A8\u8350"}),c(o),u("h1",{className:"hot",children:"\u70ED\u95E8"}),c(l,!0),p?u(H,{}):null]})})}const it=n=>({rankList:n.rank.rankList,enterLoading:n.rank.enterLoading}),ot=n=>({getRankListDispatch(){n(Y())}});var pt=z(it,ot)(v.memo(rt));export{pt as default};
