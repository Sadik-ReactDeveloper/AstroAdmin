(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[143],{2080:function(t,e,a){"use strict";a.r(e),a.d(e,"EditCategory",(function(){return N}));var n=a(830),r=a(51),o=a(13),c=a(14),s=a(16),l=a(15),i=a(0),u=a.n(i),d=a(1095),h=a(1093),f=a(1094),m=a(173),p=a(1098),g=a(799),y=a(798),v=a(795),E=a(783),O=a(117),C=a(824),b=(a(812),a(825)),I=a(806),S=a.n(I),R=(a(803),a(800),a(56)),T=a(794),N=(a(899),function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(t=e.call.apply(e,[this].concat(s))).state={name:"",img:"",desc:"",status:"",selectedFile:void 0,selectedName:"",editorState:b.EditorState.createEmpty()},t.uploadImageCallBack=function(t){return new Promise((function(e,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",t),n.send(r),n.addEventListener("load",(function(){var t=JSON.parse(n.responseText);e(t)})),n.addEventListener("error",(function(){var t=JSON.parse(n.responseText);a(t)}))}))},t.onEditorStateChange=function(e){t.setState({editorState:e,desc:S()(Object(b.convertToRaw)(e.getCurrentContent()))})},t.onChangeHandler=function(e){t.setState({selectedFile:e.target.files[0]}),t.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},t.onChangeHandler=function(e){t.setState({selectedFile:e.target.files}),t.setState({selectedName:e.target.files.name}),console.log(e.target.files)},t.changeHandler1=function(e){t.setState({status:e.target.value})},t.changeHandler=function(e){t.setState(Object(r.a)({},e.target.name,e.target.value))},t.submitHandler=function(e){e.preventDefault(),console.log(t.props.match.params,t.state);var a=new FormData;a.append("name",t.state.name),a.append("desc",t.state.desc),a.append("status",t.state.status),null!==t.state.selectedFile&&a.append("img",t.state.selectedFile,t.state.selectedName);var r,o=Object(n.a)(a.values());try{for(o.s();!(r=o.n()).done;){var c=r.value;console.log(c)}}catch(d){o.e(d)}finally{o.f()}var s,l=Object(n.a)(a.keys());try{for(l.s();!(s=l.n()).done;){var i=s.value;console.log(i)}}catch(d){l.e(d)}finally{l.f()}var u=t.props.match.params.id;O.a.post("/admin/editProductCategory/".concat(u),a).then((function(e){console.log(e),t.props.history.push("/app/productmanager/category/categoryList")})).catch((function(t){console.log(t)}))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;O.a.get("/admin/viewonePdctCategory/".concat(e)).then((function(e){console.log(e),t.setState({name:e.data.data.name,img:e.data.data.img,desc:e.data.data.desc,status:e.data.data.status})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return u.a.createElement("div",null,u.a.createElement(T.a,{breadCrumbTitle:"Edit Category",breadCrumbParent:" Product Management",breadCrumbActive:"Edit Category"}),u.a.createElement(d.a,null,u.a.createElement(h.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Category")),u.a.createElement(f.a,null,u.a.createElement(R.b,{render:function(t){var e=t.history;return u.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return e.push("/app/productmanager/category/categoryList")}},"Back")}}))),u.a.createElement(p.a,null,u.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(h.a,null,u.a.createElement(f.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(y.a,null,"Category Name"),u.a.createElement(v.a,{required:!0,type:"text",name:"name",placeholder:"Enter Category Name",value:this.state.name,onChange:this.changeHandler})),u.a.createElement(f.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},u.a.createElement(y.a,null,"Thumnail image"),u.a.createElement(y.a,null,"Image"),u.a.createElement(E.a,{type:"file",multiple:!0,onChange:this.onChangeHandler})),u.a.createElement(f.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},u.a.createElement(y.a,null," Description"),u.a.createElement("br",null),u.a.createElement(C.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),u.a.createElement(h.a,null,u.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),a}(i.Component));e.default=N},803:function(t,e,a){},806:function(t,e,a){t.exports=function(){"use strict";function t(t,e){if(t)for(var a in t)({}).hasOwnProperty.call(t,a)&&e(a,t[a])}var e={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function a(t){return t&&e[t]}function n(e){var a="";return t(e,(function(t,e){e&&(a+="".concat(t,":").concat(e,";"))})),a}function r(t,e){var a={};return t.COLOR[e]&&(a.COLOR=t.COLOR[e]),t.BGCOLOR[e]&&(a.BGCOLOR=t.BGCOLOR[e]),t.FONTSIZE[e]&&(a.FONTSIZE=t.FONTSIZE[e]),t.FONTFAMILY[e]&&(a.FONTFAMILY=t.FONTFAMILY[e]),t.UNDERLINE[e]&&(a.UNDERLINE=!0),t.ITALIC[e]&&(a.ITALIC=!0),t.BOLD[e]&&(a.BOLD=!0),t.STRIKETHROUGH[e]&&(a.STRIKETHROUGH=!0),t.CODE[e]&&(a.CODE=!0),t.SUBSCRIPT[e]&&(a.SUBSCRIPT=!0),t.SUPERSCRIPT[e]&&(a.SUPERSCRIPT=!0),a}function o(t,e,a){var n=!0;return a>0&&a<t.length?e.forEach((function(e){n=n&&t[e][a]===t[e][a-1]})):n=!1,n}function c(t,e,a,n){var r=t[e];if("function"===typeof n){var o=n(r,a);if(o)return o}if("MENTION"===r.type)return'<a href="'.concat(r.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(r.data.value,'">').concat(a,"</a>");if("LINK"===r.type){var c=r.data.targetOption||"_self";return'<a href="'.concat(r.data.url,'" target="').concat(c,'">').concat(a,"</a>")}if("IMAGE"===r.type){var s=r.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/></div>'):'<img src="'.concat(r.data.src,'" alt="').concat(r.data.alt,'" style="height: ').concat(r.data.height,";width: ").concat(r.data.width,'"/>')}return"EMBEDDED_LINK"===r.type?'<iframe width="'.concat(r.data.width,'" height="').concat(r.data.height,'" src="').concat(r.data.src,'" frameBorder="0"></iframe>'):a}function s(t,e,a,n){var c=[],s=Array.from(t.text);if(s.length>0)for(var l,i=function(t){var e=t.text,a=t.inlineStyleRanges,n={BOLD:new Array(e.length),ITALIC:new Array(e.length),UNDERLINE:new Array(e.length),STRIKETHROUGH:new Array(e.length),CODE:new Array(e.length),SUPERSCRIPT:new Array(e.length),SUBSCRIPT:new Array(e.length),COLOR:new Array(e.length),BGCOLOR:new Array(e.length),FONTSIZE:new Array(e.length),FONTFAMILY:new Array(e.length),length:e.length};return a&&a.length>0&&a.forEach((function(t){for(var e=t.offset,a=e+t.length,r=e;r<a;r+=1)0===t.style.indexOf("color-")?n.COLOR[r]=t.style.substring(6):0===t.style.indexOf("bgcolor-")?n.BGCOLOR[r]=t.style.substring(8):0===t.style.indexOf("fontsize-")?n.FONTSIZE[r]=t.style.substring(9):0===t.style.indexOf("fontfamily-")?n.FONTFAMILY[r]=t.style.substring(11):n[t.style]&&(n[t.style][r]=!0)})),n}(t),u=a;u<n;u+=1)u!==a&&o(i,e,u)?(l.text.push(s[u]),l.end=u+1):(l={styles:r(i,u),text:[s[u]],start:u,end:u+1},c.push(l));return c}function l(e,a){var n=s(e,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],a.start,a.end),r="";return n.forEach((function(e){r+=function(e){var a=e.styles,n=function(t){return t&&t.length>0?t.map((function(t){switch(t){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return t}})).join(""):""}(e.text);return t(a,(function(t,e){n=function(t,e){return"BOLD"===t?"<strong>".concat(e,"</strong>"):"ITALIC"===t?"<em>".concat(e,"</em>"):"UNDERLINE"===t?"<ins>".concat(e,"</ins>"):"STRIKETHROUGH"===t?"<del>".concat(e,"</del>"):"CODE"===t?"<code>".concat(e,"</code>"):"SUPERSCRIPT"===t?"<sup>".concat(e,"</sup>"):"SUBSCRIPT"===t?"<sub>".concat(e,"</sub>"):e}(t,n)})),n}(e)})),r=function(t,e){if(t&&(t.COLOR||t.BGCOLOR||t.FONTSIZE||t.FONTFAMILY)){var a='style="';return t.COLOR&&(a+="color: ".concat(t.COLOR,";")),t.BGCOLOR&&(a+="background-color: ".concat(t.BGCOLOR,";")),t.FONTSIZE&&(a+="font-size: ".concat(t.FONTSIZE).concat(/^\d+$/.test(t.FONTSIZE)?"px":"",";")),t.FONTFAMILY&&(a+="font-family: ".concat(t.FONTFAMILY,";")),"<span ".concat(a+='"',">").concat(e,"</span>")}return e}(a.styles,r)}function i(t,e,a,n){var r=[],o=function(t,e){var a=[],n=0,r=t.entityRanges.map((function(t){return{offset:t.offset,length:t.length,key:t.key,type:"ENTITY"}}));return(r=(r=r.concat(function(t,e){var a=[];if(e)for(var n=0,r=0,o=t,c=e.trigger||"#",s=e.separator||" ";o.length>0&&r>=0;)if(o[0]===c?(r=0,n=0,o=o.substr(c.length)):(r=o.indexOf(s+c))>=0&&(o=o.substr(r+(s+c).length),n+=r+s.length),r>=0){var l=o.indexOf(s)>=0?o.indexOf(s):o.length,i=o.substr(0,l);i&&i.length>0&&a.push({offset:n,length:i.length+c.length,type:"HASHTAG"}),n+=c.length}return a}(t.text,e))).sort((function(t,e){return t.offset-e.offset}))).forEach((function(t){t.offset>n&&a.push({start:n,end:t.offset}),a.push({start:t.offset,end:t.offset+t.length,entityKey:t.key,type:t.type}),n=t.offset+t.length})),n<t.text.length&&a.push({start:n,end:t.text.length}),a}(t,a);return o.forEach((function(a,i){var u=function(t,e,a,n){var r=[];s(t,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],a.start,a.end).forEach((function(e){r.push(l(t,e))}));var o=r.join("");return"ENTITY"===a.type?void 0!==a.entityKey&&null!==a.entityKey&&(o=c(e,a.entityKey,o,n)):"HASHTAG"===a.type&&(o='<a href="'.concat(o,'" class="wysiwyg-hashtag">').concat(o,"</a>")),o}(t,e,a,n);0===i&&(u=function(t){if(t){for(var e=t,a=0;a<e.length&&" "===t[a];a+=1)e=e.replace(" ","&nbsp;");return e}return t}(u)),i===o.length-1&&(u=function(t){if(t){for(var e=t,a=e.length-1;a>=0&&" "===e[a];a-=1)e="".concat(e.substring(0,a),"&nbsp;").concat(e.substring(a+1));return e}return t}(u)),r.push(u)})),r.join("")}function u(t,e,r,o,c){var s,l=[],d=[];return t.forEach((function(t){var h=!1;if(s?s.type!==t.type?(l.push("</".concat(a(s.type),">\n")),l.push("<".concat(a(t.type),">\n"))):s.depth===t.depth?d&&d.length>0&&(l.push(u(d,e,r,o,c)),d=[]):(h=!0,d.push(t)):l.push("<".concat(a(t.type),">\n")),!h){l.push("<li");var f=n(t.data);f&&l.push(' style="'.concat(f,'"')),o&&l.push(' dir = "auto"'),l.push(">"),l.push(i(t,e,r,c)),l.push("</li>\n"),s=t}})),d&&d.length>0&&l.push(u(d,e,r,o,c)),l.push("</".concat(a(s.type),">\n")),l.join("")}return function(t,e,r,o){var s=[];if(t){var l=t.blocks,d=t.entityMap;if(l&&l.length>0){var h=[];if(l.forEach((function(t){if("unordered-list-item"===(m=t.type)||"ordered-list-item"===m)h.push(t);else{if(h.length>0){var l=u(h,d,e,o);s.push(l),h=[]}var f=function(t,e,r,o,s){var l=[];if(function(t){return t.entityRanges.length>0&&(void 0===(e=t.text)||null===e||0===e.length||0===e.trim().length||"atomic"===t.type);var e}(t))l.push(c(e,t.entityRanges[0].key,void 0,s));else{var u=a(t.type);if(u){l.push("<".concat(u));var d=n(t.data);d&&l.push(' style="'.concat(d,'"')),o&&l.push(' dir = "auto"'),l.push(">"),l.push(i(t,e,r,s)),l.push("</".concat(u,">"))}}return l.push("\n"),l.join("")}(t,d,e,r,o);s.push(f)}var m})),h.length>0){var f=u(h,d,e,r,o);s.push(f),h=[]}}}return s.join("")}}()},830:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(91);function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(n.a)(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}}}]);
//# sourceMappingURL=143.e721faa7.chunk.js.map