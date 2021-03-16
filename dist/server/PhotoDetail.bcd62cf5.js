"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var entryServer = require("./entry-server.js");
var script = {
  computed: {
    ...entryServer.mapGetters(["getPhotoList"]),
    itemList() {
      return this.getPhotoList;
    },
    id() {
      return this.$route.query.id;
    }
  }
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${renderer.ssrRenderAttrs(vue.mergeProps({class: "sub-page photo"}, _attrs))}><h2 class="home-title"><i class="${renderer.ssrRenderClass("ico ico-photo")}"></i> ${renderer.ssrInterpolate($options.itemList[$options.id].name)}</h2><ul><!--[-->`);
  renderer.ssrRenderList($options.itemList[$options.id].checkItems, (item, index) => {
    _push(`<li${renderer.ssrRenderAttr("key", index)}><img${renderer.ssrRenderAttr("src", item.name)}${renderer.ssrRenderAttr("alt", item.name)}></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
script.ssrRender = ssrRender;
script.__file = "src/views/PhotoDetail.vue";
exports.default = script;
