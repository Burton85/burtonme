"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var script = {};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${renderer.ssrRenderAttrs(vue.mergeProps({class: "sub-page profile"}, _attrs))}>PROFILE</div>`);
}
script.ssrRender = ssrRender;
script.__file = "src/views/ProfileDetail.vue";
exports.default = script;
