(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[192],{2092:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(51),s=a(13),r=a(14),o=a(16),c=a(15),i=a(0),l=a.n(i),u=a(1093),d=a(1094),f=a(1091),p=a(1092),m=a(1095),b=a(173),h=a(1098),g=a(799),v=a(798),O=a(795),y=a(118),j=(a(27),a(807)),E=a.n(j),N=a(56),z=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),y.a.post("admin/add_aboutus",r.state).then((function(e){console.log(e.data),E()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/pagesetup/aboutus/aboutUsList")})).catch((function(e){console.log(e)}))},r.state={desc:""},r}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.a,{sm:"12"},l.a.createElement("div",null,l.a.createElement(f.a,{listTag:"div"},l.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),l.a.createElement(p.a,{href:"/app/pagesetup/aboutus/aboutUsList",tag:"a"},"About Us List"),l.a.createElement(p.a,{active:!0},"Add About Us"))))),l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"m-2"},l.a.createElement(d.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add About Us")),l.a.createElement(d.a,null,l.a.createElement(N.b,{render:function(e){var t=e.history;return l.a.createElement(b.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/app/pagesetup/aboutus/aboutUsList")}},"Back")}}))),l.a.createElement(h.a,null,l.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(u.a,null,l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(v.a,null,"Description"),l.a.createElement(O.a,{required:!0,type:"text",name:"desc",placeholder:"",value:this.state.desc,onChange:this.changeHandler}))),l.a.createElement(u.a,null,l.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(i.Component)},795:function(e,t,a){"use strict";var n=a(5),s=a(9),r=a(11),o=a(12),c=a(0),i=a.n(c),l=a(1),u=a.n(l),d=a(4),f=a.n(d),p=a(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,o=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,m),v=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=d?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var E=Object(p.mapToCssModules)(f()(t,l&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,j),a);return("input"===y||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":l}))},t}(i.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},798:function(e,t,a){"use strict";var n=a(5),s=a(9),r=a(0),o=a.n(r),c=a(1),i=a.n(c),l=a(4),u=a.n(l),d=a(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.hidden,c=e.widths,i=e.tag,l=e.check,p=e.size,m=e.for,b=Object(s.a)(e,f),h=[];c.forEach((function(t,n){var s=e[t];if(delete b[t],s||""===s){var r,o=!n;if(Object(d.isObject)(s)){var c,i=o?"-":"-"+t+"-";r=g(o,t,s.size),h.push(Object(d.mapToCssModules)(u()(((c={})[r]=s.size||""===s.size,c["order"+i+s.order]=s.order||0===s.order,c["offset"+i+s.offset]=s.offset||0===s.offset,c))),a)}else r=g(o,t,s),h.push(r)}}));var v=Object(d.mapToCssModules)(u()(t,!!r&&"sr-only",!!l&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return o.a.createElement(i,Object(n.a)({htmlFor:m},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},799:function(e,t,a){"use strict";var n=a(5),s=a(9),r=a(11),o=a(12),c=a(0),i=a.n(c),l=a(1),u=a.n(l),d=a(4),f=a.n(d),p=a(3),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,o=e.tag,c=e.innerRef,l=Object(s.a)(e,m),u=Object(p.mapToCssModules)(f()(t,!!r&&"form-inline"),a);return i.a.createElement(o,Object(n.a)({},l,{ref:c,className:u}))},t}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=192.79721a80.chunk.js.map