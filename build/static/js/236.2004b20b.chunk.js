(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[236],{2097:function(e,t,a){"use strict";a.r(t);var n=a(13),o=a(14),r=a(16),i=a(15),s=a(0),c=a.n(s),l=a(1095),d=a(1093),m=a(1094),u=a(173),p=a(1098),h=a(799),b=a(798),E=(a(800),a(824)),f=a(823),g=a(806),C=a.n(g),v=(a(812),a(803),a(118)),w=a(27),S=a(807),k=a.n(S),D=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var o=new FormData;o.append("image",e),n.send(o),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},o.onEditorStateChange=function(e){o.setState({editorState:e,desc:C()(Object(E.convertToRaw)(e.getCurrentContent()))})},o.submitHandler=function(e){e.preventDefault(),v.a.post("/admin/add_term_cond",o.state).then((function(e){console.log(e),o.props.history.push("/app/pagesetup/termscondition/termConditionList"),k()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},o.state={desc:"",editorState:E.EditorState.createEmpty()},o}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(l.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Term And Condition")),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return w.a.push("/app/pagesetup/termscondition/termConditionList")}},"Back"))),c.a.createElement(p.a,null,c.a.createElement(h.a,{onSubmit:this.submitHandler},c.a.createElement(m.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(b.a,null," Description"),c.a.createElement("br",null),c.a.createElement(f.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}})),c.a.createElement(u.a,{color:"primary"}," Submit"))))}}]),a}(c.a.Component);t.default=D},803:function(e,t,a){}}]);
//# sourceMappingURL=236.2004b20b.chunk.js.map