(this["webpackJsonpwide-wide-world-fe"]=this["webpackJsonpwide-wide-world-fe"]||[]).push([[0],{123:function(t,e,n){},205:function(t,e,n){},232:function(t,e,n){"use strict";n.r(e);var o=n(2),s=n(0),r=n(16),c=n.n(r),i=n(45),a=(n(205),n(12)),u=n(13),h=n(15),p=n(14),l=n(17),d=function(t){return{type:"CURRENT_USER",user:t}},j=n(36),f=n(20),b=n(178),O=n.n(b),m=n(28),y="http://localhost:3000",x="".concat(y,"/posts"),g=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.featuredPosts()}},{key:"render",value:function(){function t(t){var e="".concat(y).concat(t.item.image);return Object(o.jsxs)(m.c,{children:[Object(o.jsx)("img",{width:500,src:e,alt:t.item.caption}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{style:{fontFamily:"Playfair"},children:t.item.location})]})}return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"},children:Object(o.jsx)(O.a,{children:this.props.posts.map((function(e,n){return Object(o.jsx)(t,{item:e},n)}))})})}}]),n}(s.Component),v=Object(f.b)((function(t){return{posts:t.posts}}),{featuredPosts:function(){return function(t){fetch(x).then((function(t){return t.json()})).then((function(e){return t({type:"FEATURED",posts:e.sort((function(t,e){return t.likes-e.likes})).slice(0,5)})}))}}})(g),S=n(108),C=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={username:"",password:"",error:null},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.login=function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.state)};fetch("".concat(y,"/auth"),n).then((function(t){return t.json()})).then((function(e){e.error?t.setState({error:e.error}):(t.props.login_success(e),localStorage.setItem("my_app_token",e.token),t.props.history.push("/home"))}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{style:{justifyContent:"center",justifyItems:"center"},children:[Object(o.jsx)("h1",{style:{fontFamily:"Major Mono Display, monospace"},children:"Wide Wide World"}),this.state.error?Object(o.jsx)("h4",{style:{color:"red"},children:this.state.error}):null,Object(o.jsxs)(S.Flex,{flexWrap:"wrap",justifyContent:"center",children:[Object(o.jsx)(S.Box,{width:1,style:{border:"1px solid black",backgroundColor:"#ffbb33",display:"flex",justifyContent:"center",justifyItems:"center"},children:Object(o.jsxs)("form",{onSubmit:this.login,children:[Object(o.jsx)("h2",{style:{justifyContent:"center",fontFamily:"Playfair"},children:"Share and Explore"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"username",type:"text",placeholder:"Username",value:this.state.username}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"password",type:"password",placeholder:"Password",value:this.state.password}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(m.b,{style:{padding:10,margin:10,color:"black"},type:"submit",children:"Enter"}),Object(o.jsx)(i.b,{to:"/signup",style:{fontFamily:"Playfair",textDecoration:"underline",color:"black"},children:"Create Account"})]})}),Object(o.jsx)(v,{})]})]})}}]),n}(s.Component),w={login_success:function(t){return{type:"LOGIN_SUCCESS",user:t}}},E=Object(f.b)(null,w)(C),_=(n(123),function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={username:"",password:"",error:null},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.signup=function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.state)};fetch("".concat(y,"/users"),n).then((function(t){return t.json()})).then((function(e){e.error?t.setState({error:e.error}):(t.props.signup_success(e),localStorage.setItem("my_app_token",e.token),t.props.history.push("/home"))}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"sign-up",children:Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"center",justifyItems:"center"},children:[this.state.error?Object(o.jsx)("h4",{style:{color:"red"},children:this.state.error}):null,Object(o.jsx)(S.Flex,{flexWrap:"wrap",children:Object(o.jsx)(S.Box,{style:{marginTop:"30vh",border:"1px solid black",backgroundColor:"#ffbb33",padding:"20px"},children:Object(o.jsxs)("form",{onSubmit:this.signup,style:{justifyContent:"center",justifyItems:"center"},children:[Object(o.jsx)("h2",{style:{fontFamily:"Playfair"},children:"Adventure Awaits..."}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"username",type:"text",placeholder:"Username",value:this.state.username}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"password",type:"password",placeholder:"Password",value:this.state.password}),Object(o.jsx)("br",{}),Object(o.jsx)(m.b,{style:{padding:10,margin:10,color:"black"},type:"submit",children:"Sign Up"})]})})})]})})}}]),n}(s.Component)),k={signup_success:function(t){return{type:"SIGNUP_SUCCESS",user:t}}},T=Object(f.b)(null,k)(_);function P(t){var e=t.comments;return Object(o.jsx)(o.Fragment,{children:e.map((function(t,e){return Object(o.jsxs)("li",{style:{listStyle:"none"},children:[t.content,Object(o.jsx)("hr",{})]},e)}))})}function F(t){var e=t.likes;return Object(o.jsx)("div",{children:Object(o.jsxs)("span",{children:[" ",e.length," likes "]})})}var D="".concat(y,"/posts"),U=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).handleChange=function(t){o.setState(Object(j.a)({},t.target.name,t.target.value))},o.handleSubmit=function(t){t.preventDefault(),o.props.updatePost(o.state),o.props.revert(o.state),o.setState({location:"",caption:""}),o.props.showEditForm()},o.state={location:"",caption:""},o}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.props.post_to_edit&&""===e.location&&this.setState({location:this.props.post_to_edit.location,caption:this.props.post_to_edit.caption})}},{key:"render",value:function(){return Object(o.jsx)("div",{style:{padding:50,align:"center"},children:Object(o.jsx)(m.a,{style:{display:"flex",justifyContent:"center",justifyItems:"center"},children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:["Location: ",Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"location",type:"text",placeholder:"Location",value:this.state.location}),Object(o.jsx)("br",{}),"Caption: ",Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"caption",type:"text",placeholder:"Caption",value:this.state.caption}),Object(o.jsx)("br",{}),Object(o.jsx)(m.b,{style:{padding:10,margin:10,color:"black"},type:"submit",children:"Save"})]})})})}}]),n}(s.Component),I=Object(f.b)((function(t){return{post_to_edit:t.post_to_edit}}),{updatePost:function(t){return function(e,n){var o=new FormData;Object.keys(t).forEach((function(e,n){o.append(e,t[e])}));var s={method:"PATCH",body:o};fetch("".concat(x,"/").concat(n().post_to_edit.id),s).then((function(t){return t.json()})).then((function(t){return e({type:"UPDATED_POST",updatedPost:t})}))}},revert:function(t){return{type:"REVERT",post:t}}})(U),A="".concat(y,"/comments"),L="".concat(y,"/likes"),R=n(240),N=n(82),M=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={content:"",showEditForm:!1},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.addComment=function(e){e.preventDefault();var n={user_id:t.props.auth.user.id,post_id:t.props.post.id,content:t.state.content};t.props.addComment(n),t.setState({content:""})},t.handleEdit=function(e){t.showEditForm(),t.props.postToEdit(e)},t.showEditForm=function(){!1===t.state.showEditForm?t.setState({showEditForm:!0}):t.setState({showEditForm:!1})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchLikes(),this.props.fetchComments()}},{key:"render",value:function(){var t=this,e="".concat(y).concat(this.props.post.image);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(m.a,{style:{border:"solid lightGrey 1px",padding:"20px",margin:"20px"},children:["/home"===this.props.location.pathname||"/saved"===this.props.location.pathname?Object(o.jsx)("div",{children:Object(o.jsxs)(m.d,{style:{fontWeight:"bold"},children:[this.props.post.user?this.props.post.user.username:this.props.auth.user.username,Object(o.jsx)(R.a,{style:{float:"right"},compact:!0,onClick:function(){return t.props.addLikes(t.props.post)},children:Object(o.jsx)(N.a,{name:"heart outline"})}),Object(o.jsx)(R.a,{style:{float:"right"},compact:!0,onClick:function(){return t.props.addToSaved(t.props.post)},children:Object(o.jsx)(N.a,{name:"bookmark outline"})})]})}):Object(o.jsxs)("div",{children:[Object(o.jsx)(R.a,{style:{float:"right"},compact:!0,onClick:function(){return t.props.deletePost(t.props.post.id)},children:"delete"}),Object(o.jsx)(R.a,{style:{float:"right"},compact:!0,onClick:function(){return t.handleEdit(t.props.post)},children:"edit"})]}),Object(o.jsx)("img",{width:300,maxHeight:600,src:e,alt:this.props.post.caption}),Object(o.jsx)("br",{}),!0===this.state.showEditForm?Object(o.jsx)(I,{showEditForm:this.showEditForm}):null,Object(o.jsx)("span",{children:this.props.post.caption}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{style:{fontFamily:"Playfair"},children:this.props.post.location}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(F,{likes:this.props.likes.filter((function(e){return e.post_id===t.props.post.id}))},this.props.post.id)]}),Object(o.jsxs)("form",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"15px"},onSubmit:this.addComment,children:[Object(o.jsx)("input",{style:{padding:"5px"},onChange:this.handleChange,type:"text",name:"content",value:this.state.content}),Object(o.jsx)(R.a,{compact:!0,type:"submit",children:"comment"})]}),Object(o.jsx)("div",{style:{justifyContent:"center",height:"110px",width:"350px",overflow:"auto"},children:Object(o.jsx)(P,{comments:this.props.comments.filter((function(e){return e.post_id===t.props.post.id}))},this.props.post.id)})]})})}}]),n}(s.Component),H=Object(f.b)((function(t){return{comments:t.comments,likes:t.likes,auth:t.auth,user:t.user}}),{addComment:function(t){return function(e){var n={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)};fetch(A,n).then((function(t){return t.json()})).then((function(t){return e({type:"ADD_COMMENT",comment:t})}))}},fetchLikes:function(){return function(t){fetch(L).then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_LIKES",likes:e})}))}},fetchComments:function(){return function(t){fetch(A).then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_COMMENTS",comments:e})}))}},deletePost:function(t){return function(e){fetch("".concat(x,"/").concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return e({type:"DELETE_POST",post:t})}))}},postToEdit:function(t){return function(e){fetch("".concat(D,"/").concat(t.id)).then((function(t){return t.json()})).then((function(t){return e({type:"POST_TO_EDIT",post:t})}))}}})(Object(l.f)(M)),W=n(261),G=n(264),J=n(262),V=n(263),B=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={search:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.search=function(e){"Enter"===e.key&&t.props.searchPosts(e.target.value)},t.backHome=function(){t.props.history.push("/home")},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{ref:this.contextRef,children:Object(o.jsx)(W.a,{context:this.contextRef,children:Object(o.jsxs)(G.a,{attached:"top",style:{backgroundColor:"#ffbb33",paddingTop:"1em",fontFamily:"Playfair"},children:[Object(o.jsxs)(G.a.Item,{position:"left",onClick:this.backHome,children:[" ",Object(o.jsx)("h2",{style:{fontFamily:"Major Mono Display, monospace"},children:"Wide Wide World"})," "]}),Object(o.jsx)(G.a.Item,{position:"right",children:Object(o.jsx)(J.a,{onKeyDown:this.search,onChange:this.handleChange,name:"search",placeholder:"Search...",value:this.state.search})}),Object(o.jsxs)(V.a.Menu,{children:["/home"===this.props.location.pathname?Object(o.jsx)(V.a.Item,{onClick:this.props.showProfile,children:"My Posts"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(V.a.Item,{onClick:this.props.showFeed,children:"Back to Feed"}),"/saved"===this.props.location.pathname?Object(o.jsx)(V.a.Item,{onClick:this.props.showProfile,children:"My Posts"}):Object(o.jsx)(V.a.Item,{onClick:this.props.showSaved,children:"Show Saved"})]}),Object(o.jsx)(V.a.Item,{onClick:this.props.showPostForm,children:"New Post"}),Object(o.jsx)(V.a.Item,{onClick:this.props.logout,children:"Log Out"})]})]})})})}}]),n}(s.Component),K=Object(f.b)(null,{searchPosts:function(t){return function(e){fetch(x).then((function(t){return t.json()})).then((function(n){return e({type:"SEARCH",posts:n.filter((function(e){return e.location.toLowerCase().includes(t.toLowerCase())||e.caption.toLowerCase().includes(t.toLowerCase())}))})}))}}})(Object(l.f)(B)),z=n(127),X=n(181),q=n.n(X),Q=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).handleChange=function(t){o.setState(Object(j.a)({},t.target.name,t.target.value))},o.handleSubmit=function(t){t.preventDefault(),o.props.new_post_success(o.state),o.setState({image:"",location:"",caption:""}),o.props.showPostForm()},o.state={user:o.props.auth.user,user_id:o.props.auth.user.id,image:"",location:"",caption:""},o.onDrop=o.onDrop.bind(Object(z.a)(o)),o}return Object(u.a)(n,[{key:"onDrop",value:function(t,e){this.setState({image:t[0]})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[this.state.error?Object(o.jsx)("h4",{style:{color:"red"},children:this.state.error}):null,Object(o.jsx)(m.a,{style:{border:"1px solid black",display:"flex",justifyContent:"center",justifyItems:"center"},children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)(q.a,{withIcon:!0,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif",".jpeg"],maxFileSize:5242880}),Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"location",type:"text",placeholder:"Location",value:this.state.location}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{style:{padding:5},onChange:this.handleChange,name:"caption",type:"text",placeholder:"Caption",value:this.state.caption}),Object(o.jsx)("br",{}),Object(o.jsx)(m.b,{style:{padding:10,margin:10,color:"black"},type:"submit",children:"Submit!"})]})})]})}}]),n}(s.Component),Y=Object(f.b)((function(t){return{posts:t.posts,auth:t.auth}}),{new_post_success:function(t){return function(e){var n=new FormData;Object.keys(t).forEach((function(e,o){n.append(e,t[e])})),fetch(x,{method:"POST",body:n}).then((function(t){return t.json()})).then((function(t){return e({type:"NEW_POST_SUCCESS",newPost:t})}))}}})(Q),Z="".concat(y,"/saveds"),$="".concat(y,"/users"),tt=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={showForm:!1},t.logout=function(){localStorage.removeItem("my_app_token"),t.props.logoutUser(),t.props.history.push("/")},t.showPostForm=function(){!1===t.state.showForm?t.setState({showForm:!0}):t.setState({showForm:!1})},t.showProfile=function(){t.props.history.push("/profile")},t.showFeed=function(){t.props.history.push("/home")},t.showSaved=function(){t.props.history.push("/saved")},t.heading=function(){if("home"===window.location.href.split("/")[3])return Object(o.jsx)("span",{children:"\u201cNOT ALL THOSE WHO WANDER ARE LOST\u201d ~ J.R.R. TOLKIEN"})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("my_app_token");if(e){var n={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};fetch("".concat(y,"/current_user"),n).then((function(t){return t.json()})).then((function(e){t.props.currentUser(e)})),"profile"===window.location.href.split("/")[3]?this.props.userPosts():"saved"===window.location.href.split("/")[3]?this.props.savedPosts():(this.props.fetchPosts(),this.props.findUser())}else this.props.history.push("/")}},{key:"render",value:function(){var t=this;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(K,{logout:this.logout,showPostForm:this.showPostForm,showProfile:this.showProfile,showSaved:this.showSaved,showFeed:this.showFeed}),!0===this.state.showForm?Object(o.jsx)(Y,{showPostForm:this.showPostForm}):null]}),Object(o.jsx)("div",{style:{margin:"30px",textAlign:"center"},children:this.heading()}),Object(o.jsx)("div",{className:"masonry",justifyContent:"center",justifyItems:"center",children:this.props.posts.map((function(e){return Object(o.jsx)(H,{post:e,user:e.user,addLikes:t.props.addLikes,addToSaved:t.props.addToSaved},e.id)}))})]})}}]),n}(s.Component),et=Object(f.b)((function(t){return{posts:t.posts,auth:t.auth}}),{addToSaved:function(t){return function(e){var n={user_id:t.user.id,post_id:t.id},o={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)};fetch(Z,o).then((function(t){return t.json()})).then((function(t){return e({type:"ADD_TO_SAVED",saved:t})}))}},addLikes:function(t){return function(e){var n={user_id:t.user.id,post_id:t.id},o={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)};fetch(L,o).then((function(t){return t.json()})).then((function(t){return e({type:"ADD_LIKE",like:t})}))}},fetchPosts:function(){return function(t){fetch(x).then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_POSTS",posts:e})}))}},userPosts:function(){return function(t,e){fetch(x).then((function(t){return t.json()})).then((function(n){return t({type:"USER_POSTS",posts:n.filter((function(t){return t.user.id===e().auth.user.id}))})}))}},currentUser:d,logoutUser:function(){return{type:"LOGOUT_USER"}},savedPosts:function(){return function(t,e){fetch(x).then((function(t){return t.json()})).then((function(n){return t({type:"SAVED_POSTS",posts:n.filter((function(t){return t.saveds.some((function(t){return t.user_id===e().auth.user.id}))}))})}))}},findUser:function(){return function(t,e){fetch($).then((function(t){return t.json()})).then((function(n){return t({type:"USER",user:n.find((function(t){return t.id===e().auth.user.id}))})}))}}})(Object(l.f)(tt)),nt=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(et,{})})}}]),n}(s.Component),ot=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(et,{})})}}]),n}(s.Component),st=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("my_app_token");if(e){var n={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};fetch("http://localhost:3000/current_user",n).then((function(t){return t.json()})).then((function(e){t.props.currentUser(e)}))}else this.props.history.push("/")}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(o.jsx)(l.a,{exact:!0,path:"/signup",component:T}),Object(o.jsx)(l.a,{exact:!0,path:"/home",component:et}),Object(o.jsx)(l.a,{exact:!0,path:"/profile",component:nt}),Object(o.jsx)(l.a,{exact:!0,path:"/saved",component:ot})]})})})}}]),n}(s.Component),rt=Object(f.b)(null,{currentUser:d})(Object(l.f)(st)),ct=n(69),it=n(100);var at=Object(ct.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_POSTS":return e.posts.sort((function(){return Math.random()-.5}));case"USER_POSTS":return e.posts;case"DELETE_POST":return t.filter((function(t){return t.id!==e.post.id}));case"SEARCH":case"SAVED_POSTS":return e.posts;case"NEW_POST_SUCCESS":return[].concat(Object(it.a)(t),[e.newPost]);case"UPDATED_POST":return t.map((function(t){return t.id===e.updatedPost.id?e.updatedPost:t}));case"FEATURED":return e.posts;default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN_SUCCESS":case"CURRENT_USER":return e.user;case"LOGOUT_USER":return null;case"SIGNUP_SUCCESS":return e.user;default:return t}},likes:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_LIKES":return e.likes;case"ADD_LIKE":return[].concat(Object(it.a)(t),[e.like]);default:return t}},saved:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_SAVED":return e.saved;default:return t}},comments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_COMMENTS":return e.comments;case"ADD_COMMENT":return[].concat(Object(it.a)(t),[e.comment]);default:return t}},post_to_edit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"POST_TO_EDIT":return e.post;case"REVERT":return null;default:return t}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"USER":return e.user;default:return t}}}),ut=n(182),ht=(n(231),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ct.d),pt=Object(ct.e)(at,ht(Object(ct.a)(ut.a)));c.a.render(Object(o.jsx)(f.a,{store:pt,children:Object(o.jsx)(i.a,{children:Object(o.jsx)(rt,{})})}),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.c514fbbc.chunk.js.map