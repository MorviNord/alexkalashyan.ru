import { a as i, b as c } from "./chunk-GUT75QGG.js";
import { a as t } from "./chunk-PU7LOK2X.js";
import "./chunk-AYVXV32C.js";
var l = (s, r) => {
  let [n, u] = i("");
  return c(() => {
    let a = sessionStorage.getItem("typewriter"), e = 0;
    if (a) {
      u(s);
      return;
    }
    let o = setInterval(() => {
      e < s.length
        ? (u(s.slice(0, e + 1)), e++)
        : (clearInterval(o), sessionStorage.setItem("typewriter", "true"));
    }, r);
    return () => clearInterval(o);
  }, [s, r]),
    n;
};
function m() {
  let [s, r] = i(0),
    n = l(
      "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041A\u0430\u043B\u0430\u0448\u044F\u043D,",
      190,
    );
  c(() => {
    let e = setTimeout(() => r(1), 700), o = setTimeout(() => r(2), 2700);
    return () => {
      clearTimeout(e), clearTimeout(o);
    };
  }, []);
  let a = (() => {
    let e = s === 1 ? "2" : "";
    return {
      jxl: `/ava/ava${e}.jxl`,
      webp: `/ava/ava${e}.webp`,
      jpg: `/ava/ava${e}.jpg`,
    };
  })();
  return t("header", {
    class: "flex flex-col items-center pt-14",
    children: [
      t("picture", {
        class: "transition-opacity duration-300",
        children: [
          t("source", { srcset: a.jxl, type: "image/jxl" }),
          t("source", { srcset: a.webp, type: "image/webp" }),
          t("img", {
            class: "rounded-2xl",
            src: a.jpg,
            alt: "avatar",
            width: "128",
            height: "128",
            style: "aspect-ratio: 1/1 width: 100%; height: auto;",
          }),
        ],
      }),
      t("h1", {
        class: "max-w-2xs text-3xl mt-5 text-white",
        children: [
          n,
          " ",
          t("span", { class: "text-blue", children: "Project manager" }),
        ],
      }),
    ],
  });
}
export { m as default };
