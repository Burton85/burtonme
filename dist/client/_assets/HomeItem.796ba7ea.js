import{c as e,a as t,t as s,e as a,o as m}from"./entry-client.6a6b1311.js";var n={props:{homeItemList:{type:Object,default:{name:"nodata",checkItems:[{name:"nodata"},{name:"nodata"},{name:"nodata"}]}},index:{type:String,default:"0"},type:{type:String,default:"note"}},methods:{goNext(){this.$router.push({path:"/"+this.type+"detail",query:{id:this.index}})}}};const o={class:"home-item-title"};n.render=function(n,i,c,h,r,l){return m(),e("li",{class:"home-item",onClick:i[1]||(i[1]=e=>l.goNext())},[t("h3",o,s(c.homeItemList.name),1),c.homeItemList.checkItems&&c.homeItemList.checkItems[0].name.includes("https")?(m(),e("img",{key:0,src:c.homeItemList.checkItems[0].name,alt:""},null,8,["src"])):a("v-if",!0)])},n.__file="src/components/HomeItem.vue";export{n as s};
