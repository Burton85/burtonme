"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var entryServer = require("./entry-server.js");
var gh_black = void 0;
var gh_main = void 0;
var gh_left = void 0;
var gh_right = void 0;
var script = {
  name: "Banner",
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    document.getElementById("gh_black").src = gh_black;
    document.getElementById("gh_main").src = gh_main;
    document.getElementById("gh_left").src = gh_left;
    document.getElementById("gh_right").src = gh_right;
    console.log(gh_black);
    this.isMounted = true;
  }
};
function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><section class="${renderer.ssrRenderClass($data.isMounted ? "banner banner__action" : "banner")}"><h1 class="${renderer.ssrRenderClass($data.isMounted ? "page-title page-title__action" : "page-title")}">Burton Hou</h1><img id="gh_black" alt="gh_black" class="gh gh_black"><img id="gh_main" alt="gh_main" class="gh gh_main"><img id="gh_left" alt="gh_left" class="gh gh_left"><img id="gh_right" alt="gh_right" class="gh gh_right"></section><div class="${renderer.ssrRenderClass($data.isMounted ? "hr hr__action" : "hr")}"></div><!--]-->`);
}
script.ssrRender = ssrRender;
script.__file = "src/components/Banner.vue";
var script$1 = {
  name: "Contact",
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
function ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${renderer.ssrRenderAttrs(vue.mergeProps({
    class: $data.isMounted ? "contact contact__action" : "contact"
  }, _attrs))}><button class="btn"><i class="ico ico-instagram"></i><a href="https://www.instagram.com/streetsshoter/?hl=zh-tw" target="_blank">instagram</a></button><button class="btn"><i class="ico ico-facebook"></i><a href="https://www.facebook.com/profile.php?id=100007820299073" target="_blank">facebook</a></button><button class="btn"><i class="ico ico-telegram"></i> <a href="https://t.me/burton15" target="_blank">telegram</a></button><button class="btn"><i class="ico ico-gmail"></i> <a href="mailto:burton00tw@gmail.com" target="_blank">gmail</a></button><button class="btn"><i class="ico ico-github"></i> <a href="https://github.com/Burton85" target="_blank">github</a></button></section>`);
}
script$1.ssrRender = ssrRender$1;
script$1.__file = "src/components/Contact.vue";
var script$2 = {
  props: {
    homeItemList: {
      type: Object,
      default: {name: "nodata", checkItems: [{name: "nodata"}, {name: "nodata"}, {name: "nodata"}]}
    }
  }
};
function ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${renderer.ssrRenderAttrs(vue.mergeProps({class: "home-item"}, _attrs))}><h3 class="home-item-title">${renderer.ssrInterpolate($props.homeItemList.name)}</h3><!-- <h4 class="home-item-subtitle">{{ homeItemList.checkItems ? homeItemList.checkItems[0].name : '' }}</h4> --><img${renderer.ssrRenderAttr("src", $props.homeItemList.checkItems ? $props.homeItemList.checkItems[0].name : "")} alt=""></li>`);
}
script$2.ssrRender = ssrRender$2;
script$2.__file = "src/components/HomeItem.vue";
var script$3 = {
  name: "HomeSec",
  props: {
    homeSecList: {
      type: Object,
      default: {
        name: "None",
        icon: "website",
        contentRef: ""
      }
    }
  },
  components: {
    HomeItem: script$2
  },
  computed: {
    ...entryServer.mapGetters(["getProjectList", "getNoteList", "getPhotoList"]),
    contentList() {
      switch (this.homeSecList.name) {
        case "Recently Projects":
          return this.getProjectList;
        case "Learning Notes":
          return this.getNoteList;
        case "Photos Albums":
          return this.getPhotoList;
        default:
          return [{name: "This is my profile"}];
      }
    }
  },
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  created() {
    switch (this.homeSecList.name) {
      case "Recently Projects":
        this.$store.dispatch("getTrelloJson", {
          name: "project",
          url: this.homeSecList.contentRef
        });
        break;
      case "Learning Notes":
        this.$store.dispatch("getTrelloJson", {
          name: "note",
          url: this.homeSecList.contentRef
        });
        break;
      case "Photos Albums":
        this.$store.dispatch("getTrelloJson", {
          name: "photo",
          url: this.homeSecList.contentRef
        });
        break;
    }
  }
};
function ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeItem = vue.resolveComponent("HomeItem");
  _push(`<section${renderer.ssrRenderAttrs(vue.mergeProps({
    class: $data.isMounted ? "home-section home-section__action" : "home-section"
  }, _attrs))}><h2 class="home-title"><i class="${renderer.ssrRenderClass("ico ico-" + $props.homeSecList.icon)}"></i> ${renderer.ssrInterpolate($props.homeSecList.name)}</h2><ul class="home-list"><!--[-->`);
  renderer.ssrRenderList($options.contentList, (item, index) => {
    _push(renderer.ssrRenderComponent(_component_HomeItem, {
      homeItemList: item,
      key: index
    }, null, _parent));
  });
  _push(`<!--]--></ul></section>`);
}
script$3.ssrRender = ssrRender$3;
script$3.__file = "src/components/HomeSec.vue";
var script$4 = {
  name: "Homepage",
  components: {
    Banner: script,
    Contact: script$1,
    HomeSec: script$3
  },
  data() {
    return {
      secList: [
        {
          name: "My Profiles",
          icon: "profile",
          contentRef: "My Profiles"
        },
        {
          name: "Recently Projects",
          icon: "website",
          contentRef: "https://trello.com/card/6039ba08a42519571404ac57/works.json"
        },
        {
          name: "Learning Notes",
          icon: "pencil",
          contentRef: "https://trello.com/card/604c450e91d264252a292a53/learning-note.json"
        },
        {
          name: "Photos Albums",
          icon: "camera",
          contentRef: "https://trello.com/card/604cdbf30e33fd4ce668d982/photos.json"
        }
      ]
    };
  }
};
function ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_banner = vue.resolveComponent("banner");
  const _component_contact = vue.resolveComponent("contact");
  const _component_home_sec = vue.resolveComponent("home-sec");
  _push(`<!--[-->`);
  _push(renderer.ssrRenderComponent(_component_banner, null, null, _parent));
  _push(renderer.ssrRenderComponent(_component_contact, null, null, _parent));
  _push(`<!--[-->`);
  renderer.ssrRenderList($data.secList, (item, index) => {
    _push(renderer.ssrRenderComponent(_component_home_sec, {
      homeSecList: item,
      key: index
    }, null, _parent));
  });
  _push(`<!--]--><div class="hr"></div><footer class="home-footer"><span>Burton Hou</span> | <span>Copy Right\xA92021</span></footer><!--]-->`);
}
script$4.ssrRender = ssrRender$4;
script$4.__file = "src/views/Home.vue";
exports.default = script$4;
