import { defineComponent as x, ref as l, onMounted as g, onBeforeUnmount as k, openBlock as i, createElementBlock as u, normalizeStyle as m, Fragment as b, renderList as C, normalizeClass as B, createElementVNode as h, toDisplayString as E } from "vue";
const I = ["onClick"], M = x({
  name: "WuCard"
}), r = /* @__PURE__ */ Object.assign(M, {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    auto: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = n, t = l(0), y = l(null), c = l(null), d = l(0);
    f(), g(() => {
      d.value = 300 + (e.options.length - 1) * 105 + "px";
    });
    function w(v) {
      t.value = v;
    }
    function f() {
      e.auto == !0 && (c.value = setInterval(() => {
        t.value++, t.value > e.options.length - 1 && (t.value = 0);
      }, 2e3));
    }
    function p() {
      e.auto == !0 && clearInterval(c.value);
    }
    return k(() => {
      p();
    }), (v, o) => (i(), u("div", {
      class: "card_box",
      ref_key: "cardbox",
      ref: y,
      onMouseenter: o[0] || (o[0] = (s) => p()),
      onMouseleave: o[1] || (o[1] = (s) => f()),
      style: m({ width: d.value })
    }, [
      (i(!0), u(b, null, C(n.options, (s, a) => (i(), u("div", {
        class: B(["card_item", a == t.value ? "card_active" : "card_actives"]),
        key: a,
        style: m({ backgroundImage: "url(" + s + ")" }),
        onClick: (V) => w(a)
      }, [
        h("div", null, E(a + 1), 1)
      ], 14, I))), 128))
    ], 36));
  }
});
r.install = function(n) {
  n.component(r.name, r);
};
const S = [r], _ = function(n) {
  S.forEach((e) => {
    n.component(e.name, e);
  });
};
typeof window < "u" && window.Vue && _(window.Vue);
const z = {
  install: _
};
export {
  r as Card,
  z as default
};
