(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={currentTime:(new Date).toUTCString().slice(-12,-4)},e.timer=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=window.setInterval((function(){var t=(new Date).toUTCString().slice(-12,-4);e.setState({currentTime:t}),console.info(t)}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.currentTime})]})}}]),n}(u.a.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=void 0,e.handleContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleMouseClick=function(){e.state.hasClock||e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:d()})}),3300),document.addEventListener("contextmenu",this.handleContextMenu),document.addEventListener("click",this.handleMouseClick)}},{key:"componentDidUpdate",value:function(e,t){this.state.hasClock&&this.state.clockName!==t.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleContextMenu),document.removeEventListener("click",this.handleMouseClick)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(h,{name:this.state.clockName})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.38f368fb.chunk.js.map