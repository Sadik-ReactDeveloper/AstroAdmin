(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[127],{2081:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),s=t(16),r=t(15),c=t(0),i=t.n(c),m=t(1093),o=t(1094),d=t(1091),u=t(1092),E=t(1095),f=t(173),v=t(1098),h=(t(27),t(56)),N=(t(822),t(796),t(117)),p=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log("first",a),N.a.get("/admin/getoneAstro/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(u.a,{href:"/app/userride/userRideList",tag:"a"},"User List"),i.a.createElement(u.a,{active:!0},"View User"))))),i.a.createElement(E.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Astrologer")),i.a.createElement(o.a,null,i.a.createElement(h.b,{render:function(e){var a=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/astrology/astrologerList")}},"Back")}}))),i.a.createElement(v.a,{className:"pb-0"},i.a.createElement(m.a,{className:"ml-4"},i.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Name"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.fullname))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.email))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.mobile))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.status))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"All Skills"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.all_skills))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Primary Skills"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.primary_skills))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Call Charge"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.callCharge))))))))))}}]),t}(i.a.Component);a.default=p},796:function(e,a,t){},822:function(e,a,t){}}]);
//# sourceMappingURL=127.b8b35263.chunk.js.map