(this.webpackJsonpreels=this.webpackJsonpreels||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),c=n.n(i),s=(n(122),n(76)),o=n(108),l=(n.p,n(123),n(44)),d=n(19),u=n(13),m=n(60);n(124),n(151),n(149);m.a.initializeApp({apiKey:"AIzaSyAeAA7-NzhHfMx_MdevadAC9koUJhi6oks",authDomain:"reels-ac84d.firebaseapp.com",projectId:"reels-ac84d",storageBucket:"reels-ac84d.appspot.com",messagingSenderId:"256019488611",appId:"1:256019488611:web:ac0c2b2fc05a7fb19bfd56",measurementId:"G-WTDLLSHSRW"});var j=m.a.auth(),p=m.a.firestore(),b={users:p.collection("users"),posts:p.collection("posts"),comments:p.collection("comments"),getUserTimeStamp:m.a.firestore.FieldValue.serverTimestamp},f=m.a.storage(),h=n(3),g=r.a.createContext();function x(e){var t=e.children,n=Object(a.useState)(),r=Object(u.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(!0),o=Object(u.a)(s,2),l=o[0],d=o[1];Object(a.useEffect)((function(){return j.onAuthStateChanged((function(e){c(e),d(!1)}))}),[]);var m={currentUser:i,signout:function(){return j.signOut()},login:function(e,t){return j.signInWithEmailAndPassword(e,t)},signup:function(e,t){return j.createUserWithEmailAndPassword(e,t)}};return Object(h.jsx)(g.Provider,{value:m,children:!l&&t})}var O=n(12),v=n.n(O),y=n(18),w=n(91),k=n(186),C=n(199),S=n(187),I=n(188),N=n(189),L=n(198),B=n(190),U=n(191),D=n(93),z=n.n(D);function A(e){var t=Object(w.a)({mainContainer:{height:"100vh",width:"80vw",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}})(),n=Object(a.useState)(""),r=Object(u.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),l=o[0],d=o[1],m=Object(a.useState)(!1),j=Object(u.a)(m,2),p=(j[0],j[1]),b=Object(a.useState)(!1),f=Object(u.a)(b,2),x=f[0],O=f[1],D=Object(a.useContext)(g).login,A=function(){var t=Object(y.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,O(!0),t.next=5,D(i,l);case 5:O(!1),e.history.push("/"),t.next=15;break;case 9:t.prev=9,t.t0=t.catch(1),O(!1),p(!0),c(""),d("");case 15:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsxs)(k.a,{container:!0,className:t.mainContainer,spacing:4,children:[Object(h.jsx)(C.a,{xsDown:!0,smDown:!0,mdDown:!0,children:Object(h.jsx)(k.a,{item:!0,xs:6,sm:6,md:6,lg:7,children:Object(h.jsx)("div",{style:{position:"relative"},children:Object(h.jsx)(S.a,{image:"https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png",style:{backgroundSize:"contain",height:"86vh",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)("div",{style:{height:"26rem",width:"15rem",marginLeft:"5.5rem"},children:Object(h.jsxs)(z.a,{animation:"fade",indicators:!1,swipe:!1,navButtonsAlwaysInvisible:!0,autoPlay:!0,interval:"5000",children:[Object(h.jsx)("img",{src:"https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"}),Object(h.jsx)("img",{src:"https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"}),Object(h.jsx)("img",{src:"https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"}),Object(h.jsx)("img",{src:"https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"})]})})})})})}),Object(h.jsxs)(k.a,{item:!0,xs:11,sm:8,md:6,lg:5,children:[x?Object(h.jsx)(I.a,{color:"secondary"}):null,Object(h.jsxs)(N.a,{variant:"outlined",style:{padding:"1rem"},children:[Object(h.jsx)(S.a,{image:"https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg",style:{backgroundSize:"contain",height:"8rem"}}),Object(h.jsxs)(k.a,{container:!0,spacing:1,children:[Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(L.a,{id:"outlined-email-input",label:"Email",type:"email",variant:"outlined",value:i,fullWidth:!0,size:"small",onChange:function(e){c(e.target.value)}})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(L.a,{id:"outlined-password-input",label:"Password",type:"password",variant:"outlined",value:l,fullWidth:!0,size:"small",onChange:function(e){d(e.target.value)}})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(B.a,{style:{textAlign:"center"},variant:"body1",gutterBottom:!0,children:Object(h.jsx)(T,{content:"Forgot Password?",routeLink:"/signup"})})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(U.a,{variant:"contained",disabled:x,fullWidth:!0,size:"medium",style:{backgroundColor:"#2e86de",color:"#ffffff"},onClick:A,children:"Login"})})]})]}),Object(h.jsx)(N.a,{variant:"outlined",style:{marginTop:"2rem"},children:Object(h.jsxs)(B.a,{style:{textAlign:"center",padding:"0.5rem"},variant:"body1",gutterBottom:!0,children:["Don't have an account? ",Object(h.jsx)(T,{content:"Sign up",routeLink:"/signup"})]})})]})]})})}function T(e){var t=e.content,n=e.routeLink;return Object(h.jsx)(l.b,{style:{textDecoration:"none",color:"#2e86de"},to:n,children:t})}var R=n(30),P=n(98),W=n.n(P);function E(e){var t,n=Object(w.a)({mainContainer:{height:"100vh",width:"75vw",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}})(),r=Object(a.useState)(""),i=Object(u.a)(r,2),c=i[0],s=i[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),d=l[0],m=l[1],j=Object(a.useState)(""),p=Object(u.a)(j,2),x=p[0],O=p[1],C=Object(a.useState)(""),D=Object(u.a)(C,2),z=D[0],A=D[1],T=Object(a.useState)(!1),P=Object(u.a)(T,2),E=P[0],H=P[1],V=Object(a.useState)(""),M=Object(u.a)(V,2),_=(M[0],M[1]),G=Object(a.useState)(null),J=Object(u.a)(G,2),Q=J[0],q=J[1],K=Object(a.useContext)(g).signup,Y=function(){var t=Object(y.a)(v.a.mark((function t(n){var a,r,i,s,o,l;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,a=function(e){e.bytesTransferred,e.totalBytes},r=function(e){_(e),H(!1)},i=function(){var t=Object(y.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.snapshot.ref.getDownloadURL();case 2:n=t.sent,b.users.doc(o).set({email:d,userId:o,username:c,createdAt:b.getUserTimeStamp(),profileImageURL:n,postIds:[],userBio:z}),H(!1),e.history.push("/");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),H(!0),t.next=8,K(d,x);case 8:s=t.sent,o=s.user.uid,(l=f.ref("/users/".concat(o)).put(Q)).on("state_changed",a,r,i),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),_(t.t0),H(!1);case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(k.a,{container:!0,className:n.mainContainer,spacing:3,children:Object(h.jsxs)(k.a,{item:!0,xs:12,sm:9,md:7,lg:5,children:[E?Object(h.jsx)(I.a,{color:"secondary"}):null,Object(h.jsxs)(N.a,{variant:"outlined",style:{padding:"1rem"},children:[Object(h.jsx)(S.a,{image:"https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg",style:{backgroundSize:"contain",height:"10rem"}}),Object(h.jsxs)(k.a,{container:!0,spacing:1,children:[Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(B.a,(t={style:{textAlign:"center"},variant:"h6",gutterBottom:!0,size:"small"},Object(R.a)(t,"style",{color:"#8395a7",textAlign:"center"}),Object(R.a)(t,"children","Sign up to see photos and videos from your friends."),t))}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(L.a,{id:"outlined-email-input",label:"Email",type:"email",variant:"outlined",value:d,fullWidth:!0,size:"small",onChange:function(e){m(e.target.value)}})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(L.a,{id:"outlined-password-input",label:"Password",type:"password",variant:"outlined",value:x,fullWidth:!0,size:"small",onChange:function(e){O(e.target.value)}})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(L.a,{id:"outlined-username-input",label:"Username",type:"text",variant:"outlined",value:c,fullWidth:!0,size:"small",onChange:function(e){s(e.target.value)}})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(L.a,{id:"outlined-username-input",label:"Bio",type:"text",variant:"outlined",value:z,fullWidth:!0,size:"small",onChange:function(e){A(e.target.value)}})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsxs)(U.a,{variant:"outlined",color:"secondary",fullWidth:!0,size:"medium",onChange:function(e){!function(e){var t,n=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files[0];n&&q(n)}(e)},startIcon:Object(h.jsx)(W.a,{}),children:["UPLOAD PROFILE IMAGE",Object(h.jsx)(L.a,{type:"file",style:{opacity:"0",position:"absolute",width:"100%",height:"100%"}})]})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(U.a,{variant:"contained",fullWidth:!0,style:{backgroundColor:"#2e86de",color:"#ffffff"},size:"medium",disabled:E,onClick:Y,children:"SIGN UP"})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:12,children:Object(h.jsx)(B.a,{style:{textAlign:"center"},variant:"body2",gutterBottom:!0,size:"small",children:"By signing up, you agree to our Terms, Data Policy and Cookies Policy."})})]})]}),Object(h.jsx)(N.a,{variant:"outlined",style:{marginTop:"2rem"},children:Object(h.jsxs)(B.a,{style:{textAlign:"center",padding:"0.5rem"},variant:"body1",gutterBottom:!0,children:["Have an account? ",Object(h.jsx)(F,{content:"Log In",routeLink:"/login"})]})})]})})})}function F(e){var t=e.content,n=e.routeLink;return Object(h.jsx)(l.b,{style:{textDecoration:"none",color:"#2e86de"},to:n,children:t})}var H=n(195),V=n(194),M=n(201),_=n(196),G=n(100),J=n.n(G),Q=n(192),q=n(193),K=n(90),Y=n(107),X=n(81),Z=n(202),$=n(99),ee=n.n($);function te(e){var t=e.loading,n=e.setLoading,i=e.user,c=Object(w.a)((function(e){return{appBar:{height:"4rem",display:"flex",backgroundColor:"white"},toolBar:{display:"flex",justifyContent:"space-between",width:"80vw",margin:"auto",padding:"0"},iconContainer:{width:"12rem",marginLeft:"0",marginRight:"0"},iconButton:{color:"black"}}}))(),s=Object(a.useContext)(g).signout,o=r.a.useState(null),d=Object(u.a)(o,2),m=d[0],j=d[1],p=Boolean(m),b=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,s();case 4:n(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),n(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsxs)(Q.a,{className:c.appBar,position:"fixed",children:[t?Object(h.jsx)(I.a,{color:"secondary"}):null,Object(h.jsxs)(q.a,{className:c.toolBar,variant:"dense",children:[Object(h.jsx)("img",{height:"100%",width:"250vw",src:"http://gunksclimbers.org/wp-content/uploads/2016/11/reel-rock-11-logo-e1479957179399.png"}),Object(h.jsxs)(V.a,{className:c.iconContainer,children:[Object(h.jsx)(K.a,{className:c.iconButton,children:Object(h.jsx)(l.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:Object(h.jsx)(ee.a,{onClick:function(){window.scrollTo(0,0)}})})}),Object(h.jsx)(K.a,{onClick:function(e){return j(e.currentTarget)},children:Object(h.jsx)(M.a,{alt:"Profile",style:{height:"1.5rem",width:"1.5rem"},src:null===i||void 0===i?void 0:i.profileImageURL})}),Object(h.jsxs)(Y.a,{id:"fade-menu",anchorEl:m,keepMounted:!0,open:p,onClose:function(){return j(null)},TransitionComponent:X.a,children:[Object(h.jsx)(Z.a,{children:Object(h.jsx)(l.b,{style:{textDecoration:"none",color:"inherit",padding:"0"},to:"/profile",children:"Profile"})}),Object(h.jsx)(Z.a,{onClick:b,children:"Logout"})]})]})]})]})})}function ne(e){return Object(h.jsx)("video",{id:e.id,loop:!0,width:"250",muted:!0,autoPlay:!0,style:{minHeight:"100%"},src:e.src})}function ae(e){e.currentTarget.previousSibling.muted=!e.currentTarget.previousSibling.muted}var re=function(){var e=Object(w.a)({imageSection:{display:"flex",justifyContent:"center",alignItems:"center"},userImageIcon:{boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",height:"8rem",width:"8rem"},userName:{fontFamily:"Quicksand, sans-serif",fontSize:"xx-large",color:"#485460"},userDescription:{lineHeight:"2",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},videoSection:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"2rem",gap:"2rem"},videoContainer:{position:"relative"},overlayContainer:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",fontWeight:"lighter",fontFamily:"Roboto, sans-serif",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",backgroundColor:"#211e1e8c",opacity:"0",zIndex:"2"}})(),t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(!0),s=Object(u.a)(c,2),o=s[0],l=s[1],d=Object(a.useState)(!1),m=Object(u.a)(d,2),j=m[0],p=m[1],f=Object(a.useState)([]),x=Object(u.a)(f,2),O=x[0],C=x[1],S=Object(a.useContext)(g).currentUser;return Object(a.useEffect)(Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.users.doc(S.uid).get();case 2:t=e.sent,i(t.data()),l(!1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,b.posts.onSnapshot(function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,i,c,s,o,l,d,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.docs.map((function(e){return e.data()})),a=[],r=0;case 3:if(!(r<n.length)){e.next=14;break}return i=n[r],c=i.url,s=i.auid,o=i.likes,i.videoDescription,l=t.docs[r].id,e.next=8,b.users.doc(s).get();case 8:d=e.sent,u=d.data(),u.profileImageURL,u.username,s===S.uid&&a.push({videoUrl:c,puid:l,likesCount:o.length});case 11:r++,e.next=3;break;case 14:p(!1),C(a);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.sent;case 4:case"end":return e.stop()}}),e)}))),[]),1==o?Object(h.jsx)(H.a,{color:"secondary",className:e.circularLoader}):Object(h.jsxs)(V.a,{style:{backgroundColor:"",width:"60vw",marginTop:"5rem"},children:[Object(h.jsx)(te,{loading:j,setLoading:p,user:r}),Object(h.jsxs)(k.a,{container:!0,style:{minHeight:"30vh",marginBottom:"3rem"},children:[Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:5,lg:5,className:e.imageSection,children:Object(h.jsx)(M.a,{alt:"Profile",className:e.userImageIcon,src:null===r||void 0===r?void 0:r.profileImageURL})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:7,lg:7,className:e.userDescription,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:e.userName,children:r.username}),Object(h.jsxs)("div",{style:{color:"#485460"},children:[Object(h.jsx)("span",{style:{fontWeight:"500",color:"#3d3d3d",fontSize:"large"},children:r.postIds.length})," posts"]}),Object(h.jsx)("div",{style:{color:"#485460"},children:r.userBio})]})})]}),Object(h.jsx)(_.a,{}),Object(h.jsx)("div",{className:e.videoSection,children:O.map((function(t){return Object(h.jsxs)("div",{className:e.videoContainer,children:[Object(h.jsx)(ne,{src:t.videoUrl,id:t.puid},t.puid),Object(h.jsxs)("div",{className:e.overlayContainer,onMouseOver:function(e){return e.currentTarget.style.opacity="1"},onMouseOut:function(e){return e.currentTarget.style.opacity="0"},onClick:ae,children:[Object(h.jsx)(J.a,{}),"\xa0",t.likesCount," ",1===t.likesCount?"like":"likes"]})]})}))})]})},ie=n(65),ce=n(200),se=n(197),oe=n(104),le=n.n(oe),de=n(105),ue=n.n(de),me=n(106),je=n.n(me);function pe(e){var t=e.commentObj,n=Object(w.a)({commentBox:{display:"flex"},avatarIcon:{marginLeft:"1rem",height:"1.5rem",width:"1.5rem"},commentContent:{marginLeft:"1rem"},commentText:{fontFamily:"Nuntino Sans, sans-serif",color:"#4b4b4b",letterSpacing:"0.8px"}})(),r=Object(a.useState)(""),i=Object(u.a)(r,2);i[0],i[1];return Object(h.jsxs)("div",{className:n.commentBox,children:[Object(h.jsx)(M.a,{alt:"Remy Sharp",className:n.avatarIcon,src:t.profileImageURL}),Object(h.jsxs)("div",{className:n.commentContent,children:[Object(h.jsx)(B.a,{variant:"subtitle2",className:n.profile,children:t.username}),Object(h.jsx)(B.a,{variant:"body2",className:n.commentText,children:t.description})]})]})}var be=n(101),fe=n.n(be);function he(e){var t=e.commentVideoObj,n=e.setLoading,r=Object(w.a)({commentSectionWriter:{height:"4rem",width:"100%",display:"flex",borderWidth:"1px 0 0 0",borderStyle:"solid",borderColor:"#f1f2f6"},commentEditor:{width:"85%",height:"100%",border:"none",resize:"none",outline:"none",paddingLeft:"1.5rem",paddingTop:"1.2rem",fontFamily:"Heebo, sans-serif",fontSize:"0.9rem","&::-webkit-scrollbar":{width:"0"}},sendIcon:{width:"15%",fontFamily:"Roboto, sans-serif",fontSize:"small",color:"#a5b1c2"}})(),i=Object(a.useState)(""),c=Object(u.a)(i,2),s=c[0],o=c[1],l=function(){var e=Object(y.a)(v.a.mark((function e(){var a,r,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={puid:t.puid,profileImageURL:t.userProfileImageURL,username:t.username,description:s,createdAt:b.getUserTimeStamp()},n(!0),e.next=4,b.comments.add(a);case 4:return r=e.sent,e.next=7,b.posts.doc(t.puid).get();case 7:return i=e.sent,c=i.data(),e.next=11,b.posts.doc(t.puid).update({comments:[].concat(Object(ie.a)(c.comments),[r.id])});case 11:n(!1),o("");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:r.commentSectionWriter,children:[Object(h.jsx)("textarea",{placeholder:"Add a comment...",className:r.commentEditor,value:s,onChange:function(e){o(e.target.value)}}),Object(h.jsx)(K.a,{onClick:function(){l()},className:r.sendIcon,children:Object(h.jsx)(fe.a,{})})]})}function ge(e){var t=e.commentVideoObj;return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",position:"relative"},children:Object(h.jsx)("video",{width:"1000",height:"500",autoPlay:!0,loop:!0,muted:!0,src:t.videoUrl,style:{minHeight:"100%"}})})}var xe=n(102),Oe=n.n(xe);function ve(e){var t,n=e.commentVideoObj,a=e.postComments,r=e.setCommentVideoObj,i=e.setLoading,c=Object(w.a)({mainContainer:{backgroundColor:"white",position:"fixed",height:"32rem",top:"calc( ( 100vh - 30rem ) / 2 )",left:"0rem",display:"flex",justifyContent:"center",boxSizing:"border-box"},videoSection:{},commentSection:{width:"25vw",borderWidth:"1px 1px 1px 1px",borderStyle:"solid",borderColor:"#ced6e0"},commentSectionHeader:{height:"5rem",display:"flex",borderWidth:"0 0 1px 0",borderStyle:"solid",borderColor:"#f1f2f6"},avatarSection:{width:"85%",heigth:"100%",display:"flex",alignItems:"center"},profileName:{fontFamily:"Heebo, sans-serif",marginLeft:"1rem"},avatarIcon:{marginLeft:"1rem",height:"2rem",width:"2rem"},optionsSection:{width:"15%",display:"flex",justifyContent:"center",alignItems:"center"},optionsIcon:{fontSize:"x-large",color:"#576574"},commentSectionBody:{height:"calc( 32rem - 5rem - 4rem )",display:"flex",flexDirection:"column",gap:"1rem",overflow:"auto",paddingTop:"0.5rem","&::-webkit-scrollbar":{width:"0"}}})();return n?Object(h.jsxs)(k.a,{container:!0,className:c.mainContainer,children:[Object(h.jsx)(C.a,{xsDown:!0,smDown:!0,children:Object(h.jsx)(k.a,(t={item:!0,xs:"hide"},Object(R.a)(t,"xs",1),Object(R.a)(t,"sm",4),Object(R.a)(t,"md",4),Object(R.a)(t,"lg",3),Object(R.a)(t,"className",c.videoSection),Object(R.a)(t,"children",Object(h.jsx)(ge,{commentVideoObj:n})),t))}),Object(h.jsxs)(k.a,{item:!0,xs:10,sm:8,md:4,lg:3,className:c.commentSection,children:[Object(h.jsxs)("div",{className:c.commentSectionHeader,children:[Object(h.jsxs)("div",{className:c.avatarSection,children:[Object(h.jsx)(M.a,{alt:"Remy Sharp",src:n.userProfileImageURL,className:c.avatarIcon}),Object(h.jsx)(B.a,{variant:"subtitle1",className:c.profileName,children:"Rupesh_Sharma"})]}),Object(h.jsx)("div",{className:c.optionsSection,children:Object(h.jsx)(K.a,{onClick:function(){r(null)},children:Object(h.jsx)(Oe.a,{className:c.optionsIcon})})})]}),Object(h.jsx)("div",{className:c.commentSectionBody,children:a.map((function(e){return Object(h.jsx)(pe,{commentObj:e},e.cuid)}))}),Object(h.jsx)(he,{commentVideoObj:n,setLoading:i})]})]}):null}var ye=n(103),we=n.n(ye);function ke(){var e,t,n=Object(w.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),paddingLeft:"7%"}},input:{display:"none"},feedContainer:{width:"100vw",marginTop:"5rem"},reelsContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"3rem",gap:"7rem"},likeIcon:{fontSize:"x-large"},commentIcon:{fontSize:"x-large"},liked:{color:"#ff5252"},unliked:{color:"#f1f2f6"},videoContainer:{height:"25rem",position:"relative",display:"flex"},circularLoader:{position:"absolute",top:"calc( 100% / 2 )"},videoActionsIconsContainer:{display:"flex",width:"7rem",justifyContent:"space-around"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"30vw",height:"35vh",borderRadius:"10px",textAlign:"center",outline:"none"},videoDescriptionSection:{position:"absolute",bottom:"1rem",left:"0.5rem",minHeight:"5rem",display:"flex",flexDirection:"column",justifyContent:"space-around"}}}))(),r=Object(a.useState)(!1),i=Object(u.a)(r,2),c=i[0],s=i[1],o=Object(a.useState)(null),l=Object(u.a)(o,2),d=l[0],m=l[1],j=Object(a.useState)(),p=Object(u.a)(j,2),x=p[0],O=p[1],k=Object(a.useState)(!0),C=Object(u.a)(k,2),S=C[0],I=C[1],N=Object(a.useState)(!1),B=Object(u.a)(N,2),D=(B[0],B[1]),z=Object(a.useState)([]),A=Object(u.a)(z,2),T=A[0],R=A[1],P=Object(a.useState)(null),W=Object(u.a)(P,2),E=W[0],F=W[1],_=Object(a.useState)([]),G=Object(u.a)(_,2),J=G[0],Q=G[1],q=Object(a.useState)(),K=Object(u.a)(q,2),Y=K[0],Z=K[1],$=Object(a.useContext)(g).currentUser,ee=Object(a.useState)(!1),ne=Object(u.a)(ee,2),ae=ne[0],re=ne[1],oe=Object(a.useState)(""),de=Object(u.a)(oe,2),me=de[0],pe=de[1],be=function(){re(!1),fe()},fe=function(){var e=f.ref("/posts/".concat(we()())).put(d);s(!0),e.on("state_changed",(function(e){e.bytesTransferred,e.totalBytes}),(function(){return console.log("Some error occured while video uploading..."),s(!1),void pe("")}),(function(){e.snapshot.ref.getDownloadURL().then(function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={comments:[],likes:[],url:t,auid:$.uid,createdAt:b.getUserTimeStamp(),videoDescription:me},e.next=3,b.posts.add(n);case 3:return a=e.sent,(r=x.postIds).push(a.id),e.next=8,b.users.doc($.uid).update({postIds:r});case 8:s(!1),pe("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))};function he(){return(he=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,b.posts.onSnapshot(function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,i,c,o,l,d,u,m,j,p,f;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.docs.length){e.next=4;break}return Z(null),s(!1),e.abrupt("return");case 4:n=t.docs.map((function(e){return e.data()})),Z(t.docs[t.docs.length-1]),a=[],r=0;case 8:if(!(r<n.length)){e.next=19;break}return i=n[r],c=i.url,o=i.auid,l=i.likes,d=i.videoDescription,u=t.docs[r].id,e.next=13,b.users.doc(o).get();case 13:m=e.sent,j=m.data(),p=j.profileImageURL,f=j.username,a.push({videoUrl:c,userProfileImageURL:p,username:f,puid:u,liked:l.includes($.uid),videoDescription:d});case 16:r++,e.next=8;break;case 19:s(!1),R([].concat(Object(ie.a)(T),a));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)(Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.users.doc($.uid).get();case 2:t=e.sent,O(t.data()),I(!1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,b.posts.orderBy("createdAt","desc").limit(3).onSnapshot(function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,i,c,o,l,d,u,m,j,p,f;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y){e.next=2;break}return e.abrupt("return");case 2:n=t.docs.map((function(e){return e.data()})),Z(t.docs[t.docs.length-1]),a=[],r=0;case 6:if(!(r<n.length)){e.next=17;break}return i=n[r],c=i.url,o=i.auid,l=i.likes,d=i.videoDescription,u=t.docs[r].id,e.next=11,b.users.doc(o).get();case 11:m=e.sent,j=m.data(),p=j.profileImageURL,f=j.username,a.push({videoUrl:c,userProfileImageURL:p,username:f,puid:u,liked:l.includes($.uid),videoDescription:d});case 14:r++,e.next=6;break;case 17:s(!1),R(a);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)((function(){var n=document.querySelectorAll("video");e&&e.disconnect(),t&&t.disonnect(),e=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;t.play().then((function(){!1===e.isIntersecting&&t.pause()}))})),e.forEach((function(e){var t=e.target;if(e.isIntersecting){var n=t.getBoundingClientRect();window.scrollBy({top:n.top,left:n.left,behavior:"smooth"})}}))}),{root:null,rootMargin:"0px",threshold:"1.0"}),t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(!function(){he.apply(this,arguments)}(),t.unobserve(e.target))}))}),{root:null,rootMargin:"0px",threshold:"1.0"}),n.forEach((function(a,r){e.observe(a),r===n.length-1&&t.observe(a)}))}),[T]);var ge=function(){var e=Object(y.a)(v.a.mark((function e(t,n){var a,r,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.posts.doc(t).get();case 2:a=e.sent,r=a.data(),0==n?(i=r.likes,b.posts.doc(t).update({likes:[].concat(Object(ie.a)(i),[$.uid])}),D(!0)):(c=r.likes.filter((function(e){return e!==$.uid})),b.posts.doc(t).update({likes:c}),D(!1));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),xe=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(t),e.next=3,b.comments.orderBy("createdAt","desc").onSnapshot(function(){var e=Object(y.a)(v.a.mark((function e(n){var a,r,i,c,s,o,l,d,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=n.docs.map((function(e){return e.data()})),r=[],i=0;i<a.length;i++)c=a[i],s=c.profileImageURL,o=c.description,l=c.username,d=c.puid,u=n.docs[i].id,r.push({profileImageURL:s,description:o,username:l,puid:d,cuid:u});r=r.filter((function(e){return e.puid===(t?t.puid:"")})),Q(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 1==S?Object(h.jsx)(H.a,{color:"secondary",className:n.circularLoader}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(te,{loading:c,setLoading:s,user:x}),Object(h.jsx)(ce.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:ae,onClose:be,closeAfterTransition:!0,BackdropComponent:se.a,BackdropProps:{timeout:500},children:Object(h.jsx)(X.a,{in:ae,children:Object(h.jsxs)("div",{className:n.paper,children:[Object(h.jsx)("h2",{style:{fontFamily:"Quicksand, sans-serif"},children:"Bio-Description"}),Object(h.jsx)("div",{children:Object(h.jsx)(L.a,{id:"outlined-basic",label:"Put on that Bio..",variant:"outlined",type:"text",fullWidth:!0,color:"secondary",style:{marginBottom:"2rem"},value:me,onChange:function(e){return pe(e.target.value)}})}),Object(h.jsx)(U.a,{id:"smash_btn",variant:"outlined",color:"secondary",onClick:be,children:"Smash"})]})})}),Object(h.jsxs)(V.a,{className:n.feedContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"uploadImage",children:Object(h.jsxs)("div",{className:n.root,children:[Object(h.jsx)("input",{accept:"file",className:n.input,id:"icon-button-file",type:"file",onChange:function(e){var t;e.preventDefault();var n=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files[0];if(n){if(n.size/1048576>20)return alert("Your file size is too large"),void m(null);m(n),re(!0)}else m(null)}}),Object(h.jsx)("label",{style:{paddingLeft:"0"},htmlFor:"icon-button-file",children:Object(h.jsx)(U.a,{variant:"outlined",color:"secondary",component:"span",disabled:c,endIcon:Object(h.jsx)(le.a,{}),children:"Upload"})})]})})}),Object(h.jsx)("div",{className:n.reelsContainer,children:T.map((function(e){return Object(h.jsxs)("div",{className:n.videoContainer,children:[Object(h.jsx)(Ce,{src:e.videoUrl,id:e.puid,userName:e.username}),Object(h.jsxs)("div",{className:n.videoDescriptionSection,children:[Object(h.jsxs)("div",{style:{padding:"0.5rem",color:"#ffffff",fontFamily:"Quicksand, sans-serif"},children:[Object(h.jsx)("span",{style:{color:"#26de81",backgroundColor:"#4b4b4b",padding:"4px 8px",borderRadius:"5px",fontWeight:"bold",fontSize:"small"},children:Object(h.jsxs)("s",{children:["@",e.username]})}),"\u2003",e.videoDescription]}),Object(h.jsxs)("div",{className:n.videoActionsIconsContainer,children:[Object(h.jsx)(M.a,{alt:"Profile",style:{height:"1.5rem",width:"1.5rem"},src:e.userProfileImageURL}),Object(h.jsx)(ue.a,{className:[n.likeIcon,e.liked?n.liked:n.unliked],onClick:function(){return ge(e.puid,e.liked)}}),Object(h.jsx)(je.a,{className:[n.commentIcon,n.unliked],onClick:function(){xe(e)}})]})]})]},e.puid)}))})]}),Object(h.jsx)(ve,{commentVideoObj:E,postComments:J,setCommentVideoObj:F,setLoading:s})]})}function Ce(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("video",{onClick:Se,muted:!0,id:e.id,src:e.src,onEnded:Ie})})}function Se(e){e.target.muted=!e.target.muted}function Ie(e){}var Ne=["privateComponent"];function Le(e){var t=e.privateComponent,n=Object(o.a)(e,Ne),r=Object(a.useContext)(g).currentUser;return Object(h.jsx)(d.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){return null!==r?Object(h.jsx)(t,Object(s.a)({},e)):Object(h.jsx)(d.a,{to:"/login"})}}))}var Be=function(){return Object(h.jsx)(x,{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{path:"/login",component:A}),Object(h.jsx)(d.b,{path:"/signup",component:E}),Object(h.jsx)(Le,{path:"/profile",privateComponent:re}),Object(h.jsx)(Le,{path:"/",privateComponent:ke})]})})})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(h.jsx)(Be,{}),document.getElementById("root")),Ue()}},[[147,1,2]]]);
//# sourceMappingURL=main.2e1116d3.chunk.js.map