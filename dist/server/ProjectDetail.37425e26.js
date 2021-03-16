"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var entryServer = require("./entry-server.js");
var script = {
  computed: {
    ...entryServer.mapGetters(["getProjectList"]),
    itemList() {
      return this.getProjectList;
    },
    id() {
      return this.$route.query.id;
    }
  },
  filters: {}
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${renderer.ssrRenderAttrs(vue.mergeProps({class: "sub-page project"}, _attrs))}><h2 class="home-title"><i class="${renderer.ssrRenderClass("ico ico-note")}"></i> ${renderer.ssrInterpolate($options.itemList[$options.id].name)}</h2><a class="project-link"${renderer.ssrRenderAttr("href", $options.itemList[$options.id].checkItems[1].name)} target="_blank"><img class="project-img"${renderer.ssrRenderAttr("src", $options.itemList[$options.id].checkItems[0].name)}${renderer.ssrRenderAttr("alt", $options.itemList[$options.id].name)}></a><a class="project-link"${renderer.ssrRenderAttr("href", $options.itemList[$options.id].checkItems[1].name)} target="_blank">${renderer.ssrInterpolate($options.itemList[$options.id].checkItems[1].name)}</a><p class="project-text">${$options.itemList[$options.id].checkItems[2].name}</p></div>`);
}
script.ssrRender = ssrRender;
script.__file = "src/views/ProjectDetail.vue";
exports.default = script;
