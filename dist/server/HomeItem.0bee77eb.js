"use strict";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var script = {
  props: {
    homeItemList: {
      type: Object,
      default: {name: "nodata", checkItems: [{name: "nodata"}, {name: "nodata"}, {name: "nodata"}]}
    },
    index: {
      type: String,
      default: "0"
    },
    type: {
      type: String,
      default: "note"
    }
  },
  methods: {
    goNext() {
      this.$router.push({path: "/" + this.type + "detail", query: {id: this.index}});
    }
  }
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${renderer.ssrRenderAttrs(vue.mergeProps({class: "home-item"}, _attrs))}><h3 class="home-item-title">${renderer.ssrInterpolate($props.homeItemList.name)}</h3>`);
  if ($props.homeItemList.checkItems && $props.homeItemList.checkItems[0].name.includes("https")) {
    _push(`<img${renderer.ssrRenderAttr("src", $props.homeItemList.checkItems[0].name)} alt="">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
script.ssrRender = ssrRender;
script.__file = "src/components/HomeItem.vue";
exports.script = script;
