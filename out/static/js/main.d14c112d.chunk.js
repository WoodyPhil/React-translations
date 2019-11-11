(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{330:function(e,a,t){e.exports=t(432)},336:function(e,a,t){},432:function(e,a,t){"use strict";t.r(a);var n=t(17),r=t(87),o=t(268),i=t(267),l=t(0),c=t.n(l),s=t(451),u=t(21),g=t.n(u),m=t(239),p=t(266),d=t(19),b="#FFFFFF",f={black:"#000000",white:b,primary:{contrastText:b,main:"#c02124"},secondary:{contrastText:b,dark:d.a.red[900],main:d.a.red[600],light:d.a.red[100]},success:{contrastText:b,dark:d.a.green[900],main:d.a.green[600],light:d.a.green[400]},info:{contrastText:b,dark:d.a.blue[900],main:d.a.blue[600],light:d.a.blue[400]},warning:{contrastText:b,dark:d.a.orange[900],main:d.a.orange[600],light:d.a.orange[400]},error:{contrastText:b,dark:d.a.red[900],main:d.a.red[600],light:d.a.red[400]},text:{primary:d.a.blueGrey[900],secondary:d.a.blueGrey[600],link:d.a.blue[600]},background:{default:"#F4F6F8",paper:b},icon:d.a.blueGrey[600],divider:d.a.grey[200]},y={h1:{color:f.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:f.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:f.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:f.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:f.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:f.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:f.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:f.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:f.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:f.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:f.text.primary,fontSize:"14px"},caption:{color:f.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:f.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},h={root:{color:f.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},v=t(94);function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var E={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:h,MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(t,!0).forEach(function(a){Object(v.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},y.body1,{borderBottom:"1px solid ".concat(f.divider)})},MuiTableHead:{root:{backgroundColor:d.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}},O=Object(p.a)({palette:f,typography:y,overrides:E,zIndex:{appBar:1200,drawer:1100}}),j=(t(335),t(336),t(53)),w=t(450),S=t(439),k=t(440),N=t(265),T=t.n(N),z=t(3),F=t(156),C=t(66);function D(){return Object(l.useContext)(C.e)}var I=t(452),R=t(445),K=t(446),A=t(81),M=t(441),H=t(146),L=t(218),P=Object(S.a)(function(e){return Object(k.a)({root:{}})}),B=function(e){var a=e.className,t=Object(A.a)(e,["className"]),n=P();return c.a.createElement("div",Object.assign({},t,{className:Object(z.a)(n.root,a)}),c.a.createElement(M.a,{container:!0,direction:"row",spacing:3,justify:"space-between",alignItems:"flex-end"},c.a.createElement(M.a,{item:!0},c.a.createElement(H.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Master Settings"),c.a.createElement(H.a,{component:"h1",variant:"h3"},"Languages")),c.a.createElement(M.a,{item:!0},c.a.createElement(L.a,{color:"primary",variant:"contained"},"Add language"))))},$=t(118),W=t(249),U=t(220),q=t(264),G=t.n(q),_=t(98),J=t.n(_),X=t(447),Q=t(448),V=t(119),Y=t(120),Z=t.n(Y),ee=(t(68),t(121),t(47));function ae(){var e=Object(V.a)(["\n    query Translations($languageKey: ID!) {\n  translations(languageKey: $languageKey) {\n    key\n    value\n  }\n}\n    "]);return ae=function(){return e},e}function te(){var e=Object(V.a)(["\n    mutation TranslationResetAll($languageKey: ID!) {\n  translationResetAll(languageKey: $languageKey)\n}\n    "]);return te=function(){return e},e}function ne(){var e=Object(V.a)(["\n    mutation TranslationReset($languageKey: ID!, $key: ID!) {\n  translationReset(languageKey: $languageKey, key: $key) {\n    key\n    value\n  }\n}\n    "]);return ne=function(){return e},e}function re(){var e=Object(V.a)(["\n    mutation TranslationUpdate($languageKey: ID!, $translation: TranslationInput!) {\n  translationUpdate(languageKey: $languageKey, translation: $translation) {\n    key\n    value\n  }\n}\n    "]);return re=function(){return e},e}function oe(){var e=Object(V.a)(["\n    query Languages {\n  languages {\n    id\n    name\n    key\n    isActive\n    isDefault\n  }\n}\n    "]);return oe=function(){return e},e}var ie=Z()(oe());var le=Z()(re());var ce=Z()(ne());var se=Z()(te());var ue=Z()(ae());var ge=t(263),me=Object(S.a)(function(e){return Object(k.a)({root:{},flagIcon:{fontSize:"42px",marginRight:e.spacing(2),"& img":{margin:"0px !important"}}})}),pe=function(e){var a=e.languageKey,t=e.className,n=Object(A.a)(e,["languageKey","className"]),r=me();return c.a.createElement(ge.Emojione,Object.assign({onlyEmojiClassName:Object(z.a)(t,r.flagIcon),text:":".concat({en:"flag-gb",de:"flag-de",es:"flag-mx"}[a],":")},n))},de=Object(S.a)(function(e){return Object(k.a)({root:{},chip:{margin:e.spacing(.25)},nameContainer:{display:"flex",alignItems:"center"},avatar:{marginRight:e.spacing(2)},progress:{width:"56px",height:"56px"},progressContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginBottom:e.spacing(1)},progressLabel:{whiteSpace:"nowrap",marginRight:e.spacing(1)},actionButton:{display:"block"},break:{flexBasis:"100%",height:"0"}})}),be=function(e){e.className;var a,t=de(),n=ee.c(ie,a),r=n.loading,o=n.error,i=n.data,s=Object(l.useState)(),u=Object(j.a)(s,2),g=u[0],m=u[1];Object(l.useEffect)(function(){!r&&i&&m(i.languages),o&&m([])},[i,o,r]);var p=function(e){return ee.b(se,e)}(),b=Object(j.a)(p,1)[0],f={en:"EN",de:"DE",es:"MX"};return c.a.createElement("div",{className:t.root},c.a.createElement(J.a,{title:c.a.createElement(H.a,{variant:"h5",component:"span"},"All Languages"),columns:[{title:"Name",field:"name",render:function(e){return c.a.createElement("div",{className:t.nameContainer},c.a.createElement(pe,{languageKey:e.key}),c.a.createElement(H.a,{variant:"body1"},e.name))}},{title:"Locale",field:"key",render:function(e){return"".concat(e.key,"-").concat(f[e.key])}},{title:"Status",field:"isActive",sorting:!1,render:function(e){return c.a.createElement("div",null,c.a.createElement(W.a,{size:"small",color:e.isActive?"secondary":"default",variant:"outlined",label:"Active",className:t.chip}),e.isDefault&&c.a.createElement(W.a,{size:"small",color:e.isDefault?"secondary":"default",variant:"default",clickable:!1,label:"Default",className:t.chip,deleteIcon:c.a.createElement(G.a,null),onDelete:function(){return null}}))}},{field:"isDefault",hidden:!0},{title:"Translations",headerStyle:{textAlign:"right"},sorting:!1,render:function(e){return c.a.createElement(M.a,{container:!0,className:t.progressContainer,spacing:2},c.a.createElement(M.a,{item:!0,className:t.progressLabel},c.a.createElement(H.a,{variant:"h6",align:"right"},"es"===e.key?"92%":"100%"),c.a.createElement(H.a,{variant:"body1",align:"right"},"Translation Rate")),c.a.createElement(U.a,{className:t.progress,variant:"static",color:"secondary",value:"es"===e.key?92:100}),c.a.createElement(M.a,{item:!0},c.a.createElement(L.a,{color:"primary",component:F.b,size:"small",to:"/translations/".concat(e.key),variant:"outlined"},"Edit Translations")))}}],isLoading:r,data:g,editable:{onRowDelete:function(e){return new Promise(function(a){b({update:function(t,n){var r=Object($.a)(g),o=n.data;o&&o&&(r[g.indexOf(e)]=e,m(r),a())},variables:{languageKey:e.key}})})}},actions:[{icon:"more_vert",tooltip:"More actions",isFreeAction:!0,onClick:function(e){return alert("More...")}}],components:{Toolbar:function(e){return c.a.createElement("div",null,c.a.createElement(_.MTableToolbar,e),c.a.createElement(K.a,null))}},icons:{Add:Object(l.forwardRef)(function(e,a){return c.a.createElement(X.a,Object.assign({},e,{ref:a}))}),Delete:Object(l.forwardRef)(function(e,a){return c.a.createElement(Q.a,Object.assign({},e,{ref:a}))})},localization:{header:{actions:"Reset"},body:{addTooltip:"Add",deleteTooltip:"Reset",editTooltip:"Edit",editRow:{deleteText:"Are you sure you want to reset the default translations?"},emptyDataSourceMessage:"No translations to display"}},options:{search:!1,showTitle:!0,actionsColumnIndex:-1,pageSize:5,pageSizeOptions:[5,10,30],headerStyle:{backgroundColor:d.a.grey[50]}}}))},fe=t(237),ye=t(247),he=t(248),ve=Object(S.a)(function(e){return Object(k.a)({root:{"& .MuiTableSortLabel-icon":{fontSize:"1rem",width:"1em",height:"1em"}},formControl:{margin:e.spacing(1),minWidth:140,alignItems:"center"},selectEmpty:{width:"280px","& .selectLanguage":{position:"absolute",marginTop:"1em"},"& .MuiSelect-selectMenu":{height:"3em"}},selectFlag:{lineHeight:"1.3 !important"},editField:{width:"100%"}})}),xe=function(e){e.className,Object(A.a)(e,["className"]);var a,t=ve(),n=D(),r=n.match.params.id,o=Object(l.useState)(r||""),i=Object(j.a)(o,2),s=i[0],u=i[1],g=Object(l.useState)(),m=Object(j.a)(g,2),p=m[0],b=m[1],f=Object(l.useState)(),y=Object(j.a)(f,2),h=y[0],v=y[1],x=(a={variables:{languageKey:s}},ee.c(ue,a)),E=x.loading,O=x.error,w=x.data;Object(l.useEffect)(function(){E&&v(E),w&&(v(E),b(w.translations)),O&&b([])},[w,O,E]);var S=function(e){return ee.b(le,e)}(),k=Object(j.a)(S,1)[0],N=function(e){return ee.b(ce,e)}(),T=Object(j.a)(N,1)[0],z=c.a.useCallback(function(e){n.history.push("/translations/".concat(e.target.value)),u(e.target.value)},[n.history]);return c.a.createElement("div",{className:t.root},c.a.createElement(J.a,{title:c.a.createElement(fe.a,{className:t.formControl},c.a.createElement(ye.a,{value:s,onChange:z,displayEmpty:!0,name:"language",className:t.selectEmpty},c.a.createElement(he.a,{value:""},c.a.createElement(H.a,{variant:"subtitle1",className:"selectLanguage"},"Select a language")),c.a.createElement(he.a,{value:"de"},c.a.createElement(pe,{languageKey:"de",className:t.selectFlag}),c.a.createElement("span",{className:"selectLanguage"},"Deutsch")),c.a.createElement(he.a,{value:"en"},c.a.createElement(pe,{languageKey:"en",className:t.selectFlag}),c.a.createElement("span",{className:"selectLanguage"},"English")),c.a.createElement(he.a,{value:"es"},c.a.createElement(pe,{languageKey:"es",className:t.selectFlag}),c.a.createElement("span",{className:"selectLanguage"},"Espa\xf1ol")))),columns:[{title:"Field",field:"key",editable:"onAdd"},{title:"Translation",field:"value"}],isLoading:h,data:p,editable:{onRowAdd:function(e){return new Promise(function(a){k({update:function(t,n){var r=Object($.a)(p),o=n.data;o&&o.translationUpdate&&(r[p.indexOf(e)]=o.translationUpdate,a())},variables:{languageKey:s,translation:{key:e.key,value:e.value}}})})},onRowDelete:function(e){return new Promise(function(a){T({update:function(t,n){var r=Object($.a)(p),o=n.data;o&&(r[p.indexOf(e)]=o.translationReset,b(r),a())},variables:{languageKey:s,key:e.key}})})},onRowUpdate:function(e,a){return new Promise(function(t){k({update:function(e,n){var r=Object($.a)(p),o=n.data;o&&o.translationUpdate&&(r[p.indexOf(a)]=o.translationUpdate,b(r),t())},variables:{languageKey:s,translation:{key:e.key,value:e.value}}})})}},components:{Toolbar:function(e){return c.a.createElement("div",null,c.a.createElement(_.MTableToolbar,e),c.a.createElement(K.a,null))},EditField:function(e){return c.a.createElement(_.MTableEditField,Object.assign({className:t.editField},e))}},icons:{Add:Object(l.forwardRef)(function(e,a){return c.a.createElement(X.a,Object.assign({},e,{ref:a}))}),Delete:Object(l.forwardRef)(function(e,a){return c.a.createElement(Q.a,Object.assign({},e,{ref:a}))})},localization:{body:{addTooltip:"Add",deleteTooltip:"Reset",editTooltip:"Edit",editRow:{deleteText:"Are you sure reset this translation?"},emptyDataSourceMessage:"No translations to display"}},options:{search:!0,showTitle:!0,actionsColumnIndex:-1,pageSize:p&&p.length?10:5,pageSizeOptions:[5,10,20,50],headerStyle:{backgroundColor:d.a.grey[50]},searchFieldStyle:{height:"3.9em"},addRowPosition:"first"}}))},Ee=Object(S.a)(function(e){return{root:{padding:e.spacing(3)},tabs:{marginTop:e.spacing(3)},divider:{backgroundColor:d.a.grey[300]},content:{marginTop:e.spacing(3)}}}),Oe=function(){var e=Ee(),a=D(),t=a.match.params.tab;return c.a.createElement("div",{className:e.root},c.a.createElement(B,null),c.a.createElement(I.a,{className:e.tabs,onChange:function(e,t){a.history.push("/".concat(t))},scrollButtons:"auto",value:t,variant:"scrollable"},[{value:"overview",label:"Overview"},{value:"translations",label:"Translations"}].map(function(e){return c.a.createElement(R.a,{key:e.value,label:e.label,value:e.value})})),c.a.createElement(K.a,{className:e.divider}),c.a.createElement("div",{className:e.content},"overview"===t&&c.a.createElement(be,null),"translations"===t&&c.a.createElement(xe,null)))},je=t(449),we=t(221),Se=Object(S.a)(function(e){return Object(k.a)({root:{padding:e.spacing(4)},icon:{fontSize:"12px",lineHeight:"17px"}})}),ke=function(e){var a=e.className,t=Object(A.a)(e,["className"]),n=Se();return c.a.createElement("div",Object.assign({},t,{className:Object(z.a)(n.root,a)}),c.a.createElement(H.a,{variant:"body1"},"\xa9"," ",c.a.createElement(je.a,{component:"a",href:"http://oxidforge.org",target:"_blank"},"Oxid eSales - Oxid Projects")," 2019"),c.a.createElement(H.a,{variant:"caption"},"Module Translations was ",c.a.createElement(we.a,{className:n.icon},"code")," with ",c.a.createElement(we.a,{className:n.icon},"favorite")," by developers who ",c.a.createElement(we.a,{className:n.icon},"thumb_up")," to work together with OXID!"))},Ne=Object(S.a)(function(e){return Object(k.a)({root:Object(v.a)({paddingTop:0,height:"100%"},e.breakpoints.up("sm"),{paddingTop:8}),content:{height:"100%"},fab:{position:"fixed",bottom:24,right:24,zIndex:e.zIndex.appBar+2},menuItem:{justifyContent:"space-between"},openInNewIcon:{marginLeft:e.spacing(2)}})}),Te=function(){var e=Ne(),a=Object(l.useRef)(null),t=Object(l.useState)(!1),n=Object(j.a)(t,2),r=(n[0],n[1]);return c.a.createElement("div",{className:Object(z.a)(Object(v.a)({},e.root,!0))},c.a.createElement("main",{className:e.content},c.a.createElement(F.a,{basename:"/languages"},c.a.createElement(w.a,{color:"primary","aria-label":"add",className:e.fab,onClick:function(){r(!0)},ref:a},c.a.createElement(T.a,null)),c.a.createElement(C.d,null,c.a.createElement(C.a,{exact:!0,from:"/",to:"/overview"}),c.a.createElement(C.b,{component:Oe,exact:!0,path:"/:tab"}),c.a.createElement(C.b,{component:Oe,exact:!0,path:"/:tab/:id"})),c.a.createElement(ke,null))))},ze=function(){return c.a.createElement(m.a,{theme:O},c.a.createElement(Te,null))};console.log("");var Fe=Object(o.a)({uri:"https://oxideshop.local/graphql/",headers:{Authorization:"Bearer ".concat(window.token)}}),Ce=new r.a({cache:new i.a,link:Fe});g.a.render(c.a.createElement(n.b,{client:Ce},c.a.createElement(s.a,{client:Ce},c.a.createElement(ze,null))),document.getElementById("root"))}},[[330,1,2]]]);
//# sourceMappingURL=main.d14c112d.chunk.js.map