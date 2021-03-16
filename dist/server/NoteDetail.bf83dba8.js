"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var entryServer = require("./entry-server.js");
var script = {
  computed: {
    ...entryServer.mapGetters(["getNoteList"]),
    itemList() {
      return this.getNoteList;
    },
    id() {
      return this.$route.query.id;
    }
  },
  filters: {}
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${renderer.ssrRenderAttrs(vue.mergeProps({class: "sub-page note"}, _attrs))}><h2 class="home-title"><i class="${renderer.ssrRenderClass("ico ico-note")}"></i> ${renderer.ssrInterpolate($options.itemList[$options.id].name)}</h2><ul><!--[-->`);
  renderer.ssrRenderList($options.itemList[$options.id].checkItems, (item, index) => {
    _push(`<li${renderer.ssrRenderAttr("key", index)}><p class="${renderer.ssrRenderClass(/^[0-9]/.test(item.name) ? "noteUl" : "noteOl")}">${renderer.ssrInterpolate(item.name)}</p></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
script.ssrRender = ssrRender;
script.__file = "src/views/NoteDetail.vue";
exports.default = script;
