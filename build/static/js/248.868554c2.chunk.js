(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[248],{1502:function(e,a,t){},1997:function(e,a,t){"use strict";t.r(a);var s=t(13),l=t(14),n=t(16),m=t(15),c=t(0),r=t.n(c),i=t(1095),o=t(1097),u=t(1098),d=t(1093),E=t(1094),N=t(117),v=(t(1502),t(192)),h=t(193),g=t(196),p=t(330),f=t(269),b=t(201),A=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={Allplans:"",adminearning:"",rechargelist:"",packageoffer:"",completecall:"",failed:"",Rejected:"",userCount:"",AstroCount:"",OfflineAstroCount:"",busyAstroCount:"",ActiveUser:"",InActiveUser:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/user/userCount").then((function(a){var t;e.setState({userCount:null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.count})})),N.a.get("/user/onlineAstroCount").then((function(a){var t;e.setState({AstroCount:null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.count})})),N.a.get("/user/offlineAstroCount").then((function(a){var t;e.setState({OfflineAstroCount:null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.count})})),N.a.get("/user/busyAstroCount").then((function(a){var t;e.setState({busyAstroCount:null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.count})})),N.a.get("/user/inActiveUserCount").then((function(a){var t;e.setState({InActiveUser:null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.count})})),N.a.get("/user/activeUserCount").then((function(a){var t;e.setState({ActiveUser:null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.count})})),N.a.get("/admin/adminCallHistory").then((function(a){var t=a.data.data,s=t.filter((function(e){return"completed"===(null===e||void 0===e?void 0:e.Status)})),l=t.filter((function(e){return"failed"===(null===e||void 0===e?void 0:e.Status)})),n=t.filter((function(e){return"rejected"===(null===e||void 0===e?void 0:e.Status)}));e.setState({completecall:null===s||void 0===s?void 0:s.length}),e.setState({failed:null===l||void 0===l?void 0:l.length}),e.setState({Rejected:null===n||void 0===n?void 0:n.length})})),N.a.get("/admin/allplans").then((function(a){var t,s,l=null===(t=a.data)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.length;e.setState({Allplans:l})})),N.a.get("/user/recharge_list").then((function(a){var t,s,l=null===(t=a.data)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.length;e.setState({rechargelist:l})})),N.a.get("/admin/getPackage").then((function(a){var t,s,l=null===(t=a.data)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.length;e.setState({packageoffer:l})})),N.a.get("/admin/getAdminEarnings").then((function(a){var t,s=null===(t=a.data.data)||void 0===t?void 0:t.total;e.setState({adminearning:s})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{className:"ast-3"},"Users"),r.a.createElement("hr",null),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"match-height"},r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-t"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(v.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Total Users",r.a.createElement("span",{className:"ast-4"},this.state.userCount)))),r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-s"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(v.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Active Users",r.a.createElement("span",{className:"ast-4"},this.state.ActiveUser)))),r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-p"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(v.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Inactive Users",r.a.createElement("span",{className:"ast-4"},this.state.InActiveUser))))))),r.a.createElement(i.a,null,r.a.createElement(o.a,{className:"ast-3"},"Astrologer"),r.a.createElement("hr",null),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"match-height"},r.a.createElement(E.a,{md:"3",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-t"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(h.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Total",r.a.createElement("span",{className:"ast-4"},this.state.AstroCount+this.state.busyAstroCount+this.state.OfflineAstroCount)))),r.a.createElement(E.a,{md:"3",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-s"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(h.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Online",r.a.createElement("span",{className:"ast-4"},this.state.AstroCount)))),r.a.createElement(E.a,{md:"3",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-u"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(h.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Busy",r.a.createElement("span",{className:"ast-4"},this.state.busyAstroCount)))),r.a.createElement(E.a,{md:"3",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-p"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(h.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Offline",r.a.createElement("span",{className:"ast-4"},this.state.OfflineAstroCount))))))),r.a.createElement(i.a,null,r.a.createElement(o.a,{className:"ast-3"},"Call Management"),r.a.createElement("hr",null),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"match-height"},r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-s"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(g.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Complete Call",r.a.createElement("span",{className:"ast-4"},this.state.completecall)))),r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-p"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(g.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"failed Call",r.a.createElement("span",{className:"ast-4"},this.state.failed)))),r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-u"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(g.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Rejected Call",r.a.createElement("span",{className:"ast-4"},this.state.Rejected))))))),r.a.createElement(i.a,null,r.a.createElement(o.a,{className:"ast-3"},"Earning"),r.a.createElement("hr",null),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"match-height"},r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-s"},r.a.createElement("span",{style:{fontSize:"25px"},className:"ast-1 mt-1"},r.a.createElement("b",null,"Rs")),r.a.createElement("h2",{className:"ast-2"},"Admin Earning",r.a.createElement("span",{className:"ast-4"},this.state.adminearning))))))),r.a.createElement(i.a,null,r.a.createElement(o.a,{className:"ast-3"},"Package"),r.a.createElement("hr",null),r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"match-height"},r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-s"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(p.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Total Offer",r.a.createElement("span",{className:"ast-4"},this.state.packageoffer)))),r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-p"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(f.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Total Recharge",r.a.createElement("span",{className:"ast-4"},this.state.rechargelist)))),r.a.createElement(E.a,{md:"4",className:"mt-1 mb-1"},r.a.createElement("div",{className:"bg-u"},r.a.createElement("span",{className:"ast-1"},r.a.createElement(b.a,{size:40,className:"mr-50"})),r.a.createElement("h2",{className:"ast-2"},"Total Package",r.a.createElement("span",{className:"ast-4"},this.state.Allplans))))))))}}]),t}(r.a.Component);a.default=A}}]);
//# sourceMappingURL=248.868554c2.chunk.js.map