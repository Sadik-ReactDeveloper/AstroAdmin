(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[271],{2066:function(e,t,a){"use strict";a.r(t),a.d(t,"EditHoroscopeCategory",(function(){return D}));var n=a(51),r=a(13),o=a(14),c=a(16),l=a(15),s=a(0),i=a.n(s),m=a(1095),d=a(1093),u=a(1094),p=a(173),h=a(1098),g=a(799),E=a(798),b=a(795),f=a(118),C=(a(800),a(56)),v=a(794),y=a(823),S=(a(812),a(824)),w=a(806),N=a.n(w),H=a(807),k=a.n(H),D=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},o.onEditorStateChange=function(e){o.setState({editorState:e,desc:N()(Object(S.convertToRaw)(e.getCurrentContent()))})},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault();var t=o.props.match.params.id;f.a.post("/admin/editCategory/".concat(t),o.state).then((function(e){console.log(e),k()("Success!","Submitted SuccessFull!","success"),o.props.history.push("/app/horoscopecategory/horoscopeCategoryList")})).catch((function(e){console.log(e)}))},o.state={title:"",desc:"",editorState:S.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;f.a.get("/admin/getoneCategory/".concat(t)).then((function(t){console.log(t),e.setState({title:t.data.data.title,desc:t.data.data.desc})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v.a,{breadCrumbTitle:"Edit Horoscope Category",breadCrumbParent:" home",breadCrumbActive:"Edit Horoscope Category"}),i.a.createElement(m.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(u.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Horoscope Category")),i.a.createElement(u.a,null,i.a.createElement(C.b,{render:function(e){var t=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/horoscopecategory/horoscopeCategoryList")}},"Back")}}))),i.a.createElement(h.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},i.a.createElement(E.a,null,"Title"),i.a.createElement(b.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(E.a,null," Description"),i.a.createElement("br",null),i.a.createElement(y.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),i.a.createElement(d.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(s.Component);t.default=D}}]);
//# sourceMappingURL=271.1c774ec6.chunk.js.map