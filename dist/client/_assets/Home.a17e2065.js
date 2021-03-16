import{c as t,a as e,F as s,o as n,b as o,t as a,d as c,m as i,e as l,r,f as m}from"./entry-client.53038bcc.js";var h={name:"Banner",data:()=>({isMounted:!1}),mounted(){this.isMounted=!0}};const u=e("img",{src:"/_assets/gh_black.c89f13cd.png",alt:"gh_black",class:"gh gh_black"},null,-1),g=e("img",{src:"/_assets/gh_main.800e63c1.png",alt:"gh_main",class:"gh gh_main"},null,-1),b=e("img",{src:"/_assets/gh_left.f06024ca.png",alt:"gh_left",class:"gh gh_left"},null,-1),d=e("img",{src:"/_assets/gh_right.d815f156.png",alt:"gh_right",class:"gh gh_right"},null,-1);h.render=function(o,a,c,i,l,r){return n(),t(s,null,[e("section",{class:l.isMounted?"banner banner__action":"banner"},[e("h1",{class:l.isMounted?"page-title page-title__action":"page-title"},"Burton Hou",2),u,g,b,d],2),e("div",{class:l.isMounted?"hr hr__action":"hr"},null,2)],64)},h.__file="src/components/Banner.vue";var f={name:"Contact",data:()=>({isMounted:!1}),mounted(){this.isMounted=!0}};const p=o('<button class="btn"><i class="ico ico-instagram"></i><a href="https://www.instagram.com/streetsshoter/?hl=zh-tw" target="_blank">instagram</a></button><button class="btn"><i class="ico ico-facebook"></i><a href="https://www.facebook.com/profile.php?id=100007820299073" target="_blank">facebook</a></button><button class="btn"><i class="ico ico-telegram"></i> <a href="https://t.me/burton15" target="_blank">telegram</a></button><button class="btn"><i class="ico ico-gmail"></i> <a href="mailto:burton00tw@gmail.com" target="_blank">gmail</a></button><button class="btn"><i class="ico ico-github"></i> <a href="https://github.com/Burton85" target="_blank">github</a></button>',5);f.render=function(e,s,o,a,c,i){return n(),t("section",{class:c.isMounted?"contact contact__action":"contact"},[p],2)},f.__file="src/components/Contact.vue";var _={props:{homeItemList:{type:Object,default:{name:"nodata",checkItems:[{name:"nodata"},{name:"nodata"},{name:"nodata"}]}}}};const L={class:"home-item"},k={class:"home-item-title"};_.render=function(s,o,i,l,r,m){return n(),t("li",L,[e("h3",k,a(i.homeItemList.name),1),c(" <h4 class=\"home-item-subtitle\">{{ homeItemList.checkItems ? homeItemList.checkItems[0].name : '' }}</h4> "),e("img",{src:i.homeItemList.checkItems?i.homeItemList.checkItems[0].name:"",alt:""},null,8,["src"])])},_.__file="src/components/HomeItem.vue";var I={name:"HomeSec",props:{homeSecList:{type:Object,default:{name:"None",icon:"website",contentRef:""}}},components:{HomeItem:_},computed:{...i(["getProjectList","getNoteList","getPhotoList"]),contentList(){switch(this.homeSecList.name){case"Recently Projects":return this.getProjectList;case"Learning Notes":return this.getNoteList;case"Photos Albums":return this.getPhotoList;default:return[{name:"This is my profile"}]}}},data:()=>({isMounted:!1}),mounted(){this.isMounted=!0},created(){switch(this.homeSecList.name){case"Recently Projects":this.$store.dispatch("getTrelloJson",{name:"project",url:this.homeSecList.contentRef});break;case"Learning Notes":this.$store.dispatch("getTrelloJson",{name:"note",url:this.homeSecList.contentRef});break;case"Photos Albums":this.$store.dispatch("getTrelloJson",{name:"photo",url:this.homeSecList.contentRef})}}};const w={class:"home-title"},v={class:"home-list"};I.render=function(o,c,i,h,u,g){const b=m("HomeItem");return n(),t("section",{class:u.isMounted?"home-section home-section__action":"home-section"},[e("h2",w,[e("i",{class:"ico ico-"+i.homeSecList.icon},null,2),l(" "+a(i.homeSecList.name),1)]),e("ul",v,[(n(!0),t(s,null,r(g.contentList,((e,s)=>(n(),t(b,{homeItemList:e,key:s},null,8,["homeItemList"])))),128))])],2)},I.__file="src/components/HomeSec.vue";var M={name:"Homepage",components:{Banner:h,Contact:f,HomeSec:I},data:()=>({secList:[{name:"My Profiles",icon:"profile",contentRef:"My Profiles"},{name:"Recently Projects",icon:"website",contentRef:"https://trello.com/card/6039ba08a42519571404ac57/works.json"},{name:"Learning Notes",icon:"pencil",contentRef:"https://trello.com/card/604c450e91d264252a292a53/learning-note.json"},{name:"Photos Albums",icon:"camera",contentRef:"https://trello.com/card/604cdbf30e33fd4ce668d982/photos.json"}]})};const S=e("div",{class:"hr"},null,-1),j=e("footer",{class:"home-footer"},[e("span",null,"Burton Hou"),l(" | "),e("span",null,"Copy Right©2021")],-1);M.render=function(o,a,c,i,l,h){const u=m("banner"),g=m("contact"),b=m("home-sec");return n(),t(s,null,[e(u),e(g),(n(!0),t(s,null,r(l.secList,((e,s)=>(n(),t(b,{homeSecList:e,key:s},null,8,["homeSecList"])))),128)),S,j],64)},M.__file="src/views/Home.vue";export default M;
