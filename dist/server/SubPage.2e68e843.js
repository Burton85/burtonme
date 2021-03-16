"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var entryServer = require("./entry-server.js");
var HomeItem = require("./HomeItem.0bee77eb.js");
var script = {
  name: "SubPage",
  components: {
    HomeItem: HomeItem.script
  },
  computed: {
    contentList() {
      let data;
      let type = this.$route.path.slice(1);
      switch (type) {
        case "project":
          data = this.getProjectList;
          break;
        case "note":
          data = this.getNoteList;
          break;
        case "photo":
          data = this.getPhotoList;
          break;
        default:
          data = this.getProfileList;
          break;
      }
      if (data && data[0].checkItems[0].name == "nodata") {
        this.$store.dispatch("getTrelloJson", {
          name: type
        });
        return data;
      } else {
        return data;
      }
    },
    ...entryServer.mapGetters(["getProjectList", "getNoteList", "getPhotoList", "getProfileList"])
  }
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeItem = vue.resolveComponent("HomeItem");
  _push(`<section${renderer.ssrRenderAttrs(vue.mergeProps({class: "sub-page"}, _attrs))}><h2 class="home-title"><i class="${renderer.ssrRenderClass("ico ico-" + _ctx.$route.path.slice(1))}"></i> ${renderer.ssrInterpolate(_ctx.$route.path.slice(1).toUpperCase())}</h2><ul class="home-list"><!--[-->`);
  renderer.ssrRenderList($options.contentList, (item, index) => {
    _push(renderer.ssrRenderComponent(_component_HomeItem, {
      type: _ctx.$route.path.slice(1),
      homeItemList: item,
      key: index,
      index
    }, null, _parent));
  });
  _push(`<!--]--></ul></section>`);
}
script.ssrRender = ssrRender;
script.__file = "src/views/SubPage.vue";
exports.default = script;
