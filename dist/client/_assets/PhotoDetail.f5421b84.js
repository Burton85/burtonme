import{m as t,c as e,a as s,d as i,t as a,F as o,r as l,o as r}from"./entry-client.6a6b1311.js";var n={computed:{...t(["getPhotoList"]),itemList(){return this.getPhotoList},id(){return this.$route.query.id}}};const c={class:"sub-page photo"},u={class:"home-title"},m=s("i",{class:"ico ico-photo"},null,-1);n.render=function(t,n,h,d,p,L){return r(),e("div",c,[s("h2",u,[m,i(" "+a(L.itemList[L.id].name),1)]),s("ul",null,[(r(!0),e(o,null,l(L.itemList[L.id].checkItems,((t,i)=>(r(),e("li",{key:i},[s("img",{src:t.name,alt:t.name},null,8,["src","alt"])])))),128))])])},n.__file="src/views/PhotoDetail.vue";export default n;
