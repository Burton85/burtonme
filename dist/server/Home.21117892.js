"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var renderer = require("@vue/server-renderer");
var entryServer = require("./entry-server.js");
var HomeItem = require("./HomeItem.0bee77eb.js");
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
    HomeItem: HomeItem.script
  },
  computed: {
    ...entryServer.mapGetters(["getProjectList", "getNoteList", "getPhotoList", "getProfileList"]),
    contentList() {
      switch (this.homeSecList.name) {
        case "Recently Projects":
          return this.getProjectList;
        case "Learning Notes":
          return this.getNoteList;
        case "Photos Albums":
          return this.getPhotoList;
        case "My Profiles":
          return this.getProfileList;
      }
    }
  },
  data() {
    return {
      isMounted: false,
      isExpand: true
    };
  },
  mounted() {
    this.isMounted = true;
  },
  created() {
    switch (this.homeSecList.name) {
      case "Recently Projects":
        this.$store.dispatch("getTrelloJson", {
          name: "project"
        });
        break;
      case "Learning Notes":
        this.$store.dispatch("getTrelloJson", {
          name: "note"
        });
        break;
      case "Photos Albums":
        this.$store.dispatch("getTrelloJson", {
          name: "photo"
        });
        break;
      default:
        this.$store.dispatch("getTrelloJson", {
          name: "profile"
        });
        break;
    }
  },
  methods: {
    expandList() {
      this.isExpand = !this.isExpand;
    }
  }
};
function ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeItem = vue.resolveComponent("HomeItem");
  _push(`<section${renderer.ssrRenderAttrs(vue.mergeProps({
    class: $data.isMounted ? "home-section home-section__action" : "home-section"
  }, _attrs))}><h2 class="home-title"><i class="${renderer.ssrRenderClass("ico ico-" + $props.homeSecList.icon)}"></i> ${renderer.ssrInterpolate($props.homeSecList.name)} <i class="${renderer.ssrRenderClass($data.isExpand ? "ico ico-expand ico-expand__expand" : "ico ico-expand")}"></i></h2>`);
  if ($data.isExpand) {
    _push(`<ul class="home-list"><!--[-->`);
    renderer.ssrRenderList($options.contentList, (item, index) => {
      _push(renderer.ssrRenderComponent(_component_HomeItem, {
        homeItemList: item,
        index: index + "",
        key: index,
        type: $props.homeSecList.icon
      }, null, _parent));
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
script$2.ssrRender = ssrRender$2;
script$2.__file = "src/components/HomeSec.vue";
function ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<footer${renderer.ssrRenderAttrs(vue.mergeProps({class: "home-footer"}, _attrs))}><span>Burton Hou</span> | <span>Copy Right\xA92021</span></footer>`);
}
const script$3 = {};
script$3.ssrRender = ssrRender$3;
script$3.__file = "src/components/Footer.vue";
var script$4 = {
  name: "Homepage",
  components: {
    Banner: script,
    Contact: script$1,
    HomeSec: script$2,
    Footer: script$3
  },
  data() {
    return {
      secList: [
        {
          name: "My Profiles",
          icon: "profile"
        },
        {
          name: "Recently Projects",
          icon: "project"
        },
        {
          name: "Learning Notes",
          icon: "note"
        },
        {
          name: "Photos Albums",
          icon: "photo"
        }
      ]
    };
  }
};
function ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Banner = vue.resolveComponent("Banner");
  const _component_Contact = vue.resolveComponent("Contact");
  const _component_home_sec = vue.resolveComponent("home-sec");
  const _component_Footer = vue.resolveComponent("Footer");
  _push(`<!--[-->`);
  _push(renderer.ssrRenderComponent(_component_Banner, null, null, _parent));
  _push(renderer.ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`<!--[-->`);
  renderer.ssrRenderList($data.secList, (item, index) => {
    _push(renderer.ssrRenderComponent(_component_home_sec, {
      homeSecList: item,
      key: index
    }, null, _parent));
  });
  _push(`<!--]--><div class="hr"></div>`);
  _push(renderer.ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
script$4.ssrRender = ssrRender$4;
script$4.__file = "src/views/Home.vue";
exports.default = script$4;
