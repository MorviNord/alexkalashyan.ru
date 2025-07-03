import { a as e } from "./chunk-BHJUU36L.js";
import { g as c, h as n } from "./chunk-LTY4SK3X.js";
var o = (t, a) => {
  let [l, s] = c("");
  return n(() => {
    let p = sessionStorage.getItem("typewriter"), r = 0;
    if (p) {
      s(t);
      return;
    }
    let i = setInterval(() => {
      r < t.length
        ? (s(t.slice(0, r + 1)), r++)
        : (clearInterval(i), sessionStorage.setItem("typewriter", "true"));
    }, a);
    return () => clearInterval(i);
  }, [t, a]),
    l;
};
function u() {
  let t = o(
    "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041A\u0430\u043B\u0430\u0448\u044F\u043D,",
    190,
  );
  return e("header", {
    class: "flex flex-col items-center pt-14",
    children: [
      e("picture", {
        class: "transition-opacity duration-300",
        children: [
          e("source", { srcset: "/ava/ava.jxl", type: "image/jxl" }),
          e("source", { srcset: "/ava/ava.webp", type: "image/webp" }),
          e("img", {
            class: "rounded-2xl",
            src: "/ava/ava.jpg",
            alt: "avatar",
            width: "136",
            height: "136",
            style: "aspect-ratio: 1/1 width: 100%; height: auto;",
          }),
        ],
      }),
      e("h1", {
        class: "max-w-2xs text-3xl mt-5 text-white",
        children: [
          t,
          " ",
          e("span", { class: "text-blue", children: "Project manager" }),
        ],
      }),
    ],
  });
}
export { u as default };
