(this["webpackJsonpibm-cic_virtual_whiteboard"]=this["webpackJsonpibm-cic_virtual_whiteboard"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={Post:"Post_Post__1_bi-",IMGPost:"Post_IMGPost__1VPpM",IMG:"Post_IMG__3xRhS",IMGText:"Post_IMGText__2IjLG",IMGName:"Post_IMGName__3-58H",RegText:"Post_RegText__2cGaC",RegName:"Post_RegName__2KXEW",close:"Post_close__SoSkC"}},,,function(e,t,a){e.exports={modal:"NewPost_modal__3iJyP",modal_content:"NewPost_modal_content__3Gv-Q",close:"NewPost_close__B3qsp"}},function(e,t,a){e.exports={Board:"Board_Board__2Sj7_",NewPostBtn:"Board_NewPostBtn__2qFSB"}},function(e,t,a){e.exports={modal:"Login_modal__3EQhA",modal_content:"Login_modal_content__qB7bB",close:"Login_close__1BGXj"}},,,function(e,t,a){e.exports=a.p+"static/media/cute-kitten.658bc24a.jpg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(12),r=a.n(o),l=(a(19),a(20),a(6)),c=a(7),u=a(1),i=a(2),m=a(4),p=a(3),g=a(5),h=a.n(g),d=function(e){var t=null,a=null,n=null;return e.hasIMG?(t=h.a.IMGPost,a=h.a.IMGText,n=h.a.IMGName):t=h.a.Post,s.a.createElement("div",{className:t},s.a.createElement("span",{className:h.a.close,onClick:e.click}," x "),e.hasIMG?s.a.createElement("img",{className:h.a.IMG,alt:"Here is maybe a beautiful kitten?",src:e.image}):null,s.a.createElement("p",{className:a},e.msg),s.a.createElement("p",{className:n},"- ",e.name))},_=a(8),b=a.n(_),I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(){e.props.toggle()},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:b.a.modal},s.a.createElement("div",{className:b.a.modal_content},s.a.createElement("span",{className:b.a.close,onClick:this.handleClick}," X "),s.a.createElement("form",{onSubmit:this.props.submit},s.a.createElement("p",null," Let's make a new post! "),s.a.createElement("label",null,"Message:"),s.a.createElement("input",{name:"message",onChange:this.props.change}),s.a.createElement("label",null,"Name:"),s.a.createElement("input",{name:"name",onChange:this.props.change}),s.a.createElement("label",null,"Image:"),s.a.createElement("input",{type:"file",name:"img",onChange:this.props.change}),s.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),a}(n.Component),w=a(13),v=a.n(w),f=a(9),P=a.n(f),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={posts:[{postID:1,usrID:2,usrName:"Mikkel",msg:"Oh wow! So many messages!",hasIMG:!1,imgURL:null},{postID:2,usrID:1,usrName:"Egil",msg:"This is another message",hasIMG:!0,imgURL:v.a},{postID:3,usrID:3,usrName:"Henrik",msg:"Here is a message as well, you know!",hasIMG:!1,imgURL:null}],newPostPopup:!1,newPost:{postID:0,usrName:"",msg:"",hasIMG:!1,imgURL:null},lastPostID:3,currentUserID:e.props.currentUser},e.deletePost=function(t){var a=Object(l.a)(e.state.posts);a.splice(t,1),e.setState({posts:a})},e.newPostToggle=function(){e.setState({newPostPopup:!e.state.newPostPopup})},e.postInputHandler=function(t){var a=Object(c.a)({},e.state.newPost);"name"===t.target.name?a.usrName=t.target.value:"message"===t.target.name?a.msg=t.target.value:"img"===t.target.name&&(a.imgURL=URL.createObjectURL(t.target.files[0]),a.hasIMG=!0),console.log(a),e.setState({newPost:a})},e.postSubmitHandler=function(t){var a=Object(c.a)({},e.state.newPost),n=Object(l.a)(e.state.posts);a.postID=e.state.lastPostID,a.postID++,n.push(a),e.setState({posts:n}),console.log(e.state.newPost),console.log(e.state.posts),e.setState({lastPostID:a.postID}),e.setState({newPost:{postID:0,usrName:"",msg:"",hasIMG:!1,imgURL:null}}),t.preventDefault()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:P.a.Board},this.state.posts.map((function(t,a){return s.a.createElement(d,{click:function(){return e.deletePost(a)},name:t.usrName,msg:t.msg,hasIMG:t.hasIMG,image:t.imgURL,key:t.postID})})),s.a.createElement("div",{className:P.a.NewPostBtn,onClick:this.newPostToggle},"Add Post"),this.state.newPostPopup?s.a.createElement(I,{submit:this.postSubmitHandler,change:this.postInputHandler,toggle:this.newPostToggle}):null)}}]),a}(n.Component),N=a(10),j=a.n(N),G=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:j.a.modal},s.a.createElement("div",{className:j.a.modal_content},s.a.createElement("form",{onSubmit:this.props.submit},s.a.createElement("p",null," Welcome to the Whiteboard! Login below: "),s.a.createElement("label",null,"Username:"),s.a.createElement("input",{type:"text",name:"username",onChange:this.props.change}),s.a.createElement("label",null,"Password:"),s.a.createElement("input",{type:"password",name:"password",onChange:this.props.change}),s.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),a}(n.Component),M=(a(21),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={users:[{usrID:1,usrName:"Guest",password:"Guest",email:"guest@guest.ok",role:"user"}],userInput:{username:"",password:""},activeUsrID:0,showLogin:!0},e.postInputHandler=function(t){var a=Object(c.a)({},e.state.userInput);"username"===t.target.name?a.username=t.target.value:"password"===t.target.name&&(a.password=t.target.value),e.setState({userInput:a})},e.postSubmitHandler=function(t){var a=Object(l.a)(e.state.users),n=Object(c.a)({},e.state.userInput);a.forEach((function(t,a){n.username===t.usrName&&n.password===t.password?(e.state.activeUsrID=t.usrID,e.setState({showLogin:!1})):alert("Stop right there!\nThats the wrong username or password, pal")})),t.preventDefault()},e.currentUser=function(){var t=Object(l.a)(e.state.users),a={};return t.forEach((function(t,n){e.state.activeUsrID===t.usrID&&(a=t)})),a},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,this.state.showLogin?s.a.createElement(G,{submit:this.postSubmitHandler,change:this.postInputHandler}):null,s.a.createElement(E,{currentUser:this.currentUser}))}}]),a}(n.Component));var O=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.38c539b2.chunk.js.map