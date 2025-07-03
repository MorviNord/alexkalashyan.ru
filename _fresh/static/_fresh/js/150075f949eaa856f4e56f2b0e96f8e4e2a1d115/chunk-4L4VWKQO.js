import { c as k } from "./chunk-GUT75QGG.js";
import { a as b, b as F, e as O } from "./chunk-AYVXV32C.js";
var H = Symbol.for("preact-signals");
function w() {
  if (c > 1) c--;
  else {
    for (var t, i = !1; m !== void 0;) {
      var n = m;
      for (m = void 0, A++; n !== void 0;) {
        var r = n.o;
        if (n.o = void 0, n.f &= -3, !(8 & n.f) && j(n)) {
          try {
            n.c();
          } catch (u) {
            i || (t = u, i = !0);
          }
        }
        n = r;
      }
    }
    if (A = 0, c--, i) throw t;
  }
}
function N(t) {
  if (c > 0) return t();
  c++;
  try {
    return t();
  } finally {
    w();
  }
}
var o = void 0;
var m = void 0, c = 0, A = 0, g = 0;
function T(t) {
  if (o !== void 0) {
    var i = t.n;
    if (i === void 0 || i.t !== o) {
      return i = {
        i: 0,
        S: t,
        p: o.s,
        n: void 0,
        t: o,
        e: void 0,
        x: void 0,
        r: i,
      },
        o.s !== void 0 && (o.s.n = i),
        o.s = i,
        t.n = i,
        32 & o.f && t.S(i),
        i;
    }
    if (i.i === -1) {
      return i.i = 0,
        i.n !== void 0 &&
        (i.n.p = i.p,
          i.p !== void 0 && (i.p.n = i.n),
          i.p = o.s,
          i.n = void 0,
          o.s.n = i,
          o.s = i),
        i;
    }
  }
}
function s(t) {
  this.v = t, this.i = 0, this.n = void 0, this.t = void 0;
}
s.prototype.brand = H;
s.prototype.h = function () {
  return !0;
};
s.prototype.S = function (t) {
  this.t !== t && t.e === void 0 &&
    (t.x = this.t, this.t !== void 0 && (this.t.e = t), this.t = t);
};
s.prototype.U = function (t) {
  if (this.t !== void 0) {
    var i = t.e, n = t.x;
    i !== void 0 && (i.x = n, t.e = void 0),
      n !== void 0 && (n.e = i, t.x = void 0),
      t === this.t && (this.t = n);
  }
};
s.prototype.subscribe = function (t) {
  var i = this;
  return d(function () {
    var n = i.value, r = o;
    o = void 0;
    try {
      t(n);
    } finally {
      o = r;
    }
  });
};
s.prototype.valueOf = function () {
  return this.value;
};
s.prototype.toString = function () {
  return this.value + "";
};
s.prototype.toJSON = function () {
  return this.value;
};
s.prototype.peek = function () {
  var t = o;
  o = void 0;
  try {
    return this.value;
  } finally {
    o = t;
  }
};
Object.defineProperty(s.prototype, "value", {
  get: function () {
    var t = T(this);
    return t !== void 0 && (t.i = this.i), this.v;
  },
  set: function (t) {
    if (t !== this.v) {
      if (A > 100) throw new Error("Cycle detected");
      this.v = t, this.i++, g++, c++;
      try {
        for (var i = this.t; i !== void 0; i = i.x) i.t.N();
      } finally {
        w();
      }
    }
  },
});
function $(t) {
  return new s(t);
}
function j(t) {
  for (var i = t.s; i !== void 0; i = i.n) {
    if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !0;
  }
  return !1;
}
function M(t) {
  for (var i = t.s; i !== void 0; i = i.n) {
    var n = i.S.n;
    if (n !== void 0 && (i.r = n), i.S.n = i, i.i = -1, i.n === void 0) {
      t.s = i;
      break;
    }
  }
}
function P(t) {
  for (var i = t.s, n = void 0; i !== void 0;) {
    var r = i.p;
    i.i === -1
      ? (i.S.U(i), r !== void 0 && (r.n = i.n), i.n !== void 0 && (i.n.p = r))
      : n = i,
      i.S.n = i.r,
      i.r !== void 0 && (i.r = void 0),
      i = r;
  }
  t.s = n;
}
function p(t) {
  s.call(this, void 0), this.x = t, this.s = void 0, this.g = g - 1, this.f = 4;
}
(p.prototype = new s()).h = function () {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === g)) return !0;
  if (this.g = g, this.f |= 1, this.i > 0 && !j(this)) return this.f &= -2, !0;
  var t = o;
  try {
    M(this), o = this;
    var i = this.x();
    (16 & this.f || this.v !== i || this.i === 0) &&
      (this.v = i, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return o = t, P(this), this.f &= -2, !0;
};
p.prototype.S = function (t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var i = this.s; i !== void 0; i = i.n) i.S.S(i);
  }
  s.prototype.S.call(this, t);
};
p.prototype.U = function (t) {
  if (this.t !== void 0 && (s.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -33;
    for (var i = this.s; i !== void 0; i = i.n) i.S.U(i);
  }
};
p.prototype.N = function () {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var t = this.t; t !== void 0; t = t.x) t.t.N();
  }
};
Object.defineProperty(p.prototype, "value", {
  get: function () {
    if (1 & this.f) throw new Error("Cycle detected");
    var t = T(this);
    if (this.h(), t !== void 0 && (t.i = this.i), 16 & this.f) throw this.v;
    return this.v;
  },
});
function x(t) {
  return new p(t);
}
function V(t) {
  var i = t.u;
  if (t.u = void 0, typeof i == "function") {
    c++;
    var n = o;
    o = void 0;
    try {
      i();
    } catch (r) {
      throw t.f &= -2, t.f |= 8, E(t), r;
    } finally {
      o = n, w();
    }
  }
}
function E(t) {
  for (var i = t.s; i !== void 0; i = i.n) i.S.U(i);
  t.x = void 0, t.s = void 0, V(t);
}
function I(t) {
  if (o !== this) throw new Error("Out-of-order effect");
  P(this), o = t, this.f &= -2, 8 & this.f && E(this), w();
}
function S(t) {
  this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
S.prototype.c = function () {
  var t = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    t();
  }
};
S.prototype.S = function () {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, V(this), M(this), c++;
  var t = o;
  return o = this, I.bind(this, t);
};
S.prototype.N = function () {
  2 & this.f || (this.f |= 2, this.o = m, m = this);
};
S.prototype.d = function () {
  this.f |= 8, 1 & this.f || E(this);
};
function d(t) {
  var i = new S(t);
  try {
    i.c();
  } catch (n) {
    throw i.d(), n;
  }
  return i.d.bind(i);
}
var G, C, q;
var J = [];
d(function () {
  G = this.N;
})();
function l(t, i) {
  b[t] = i.bind(null, b[t] || function () {});
}
function U(t) {
  q && q(), q = t && t.S();
}
function R(t) {
  var i = this, n = t.data, r = L(n);
  r.value = n;
  var u = k(function () {
      for (var v = i, a = i.__v; a = a.__;) {
        if (a.__c) {
          a.__c.__$f |= 4;
          break;
        }
      }
      var h = x(function () {
          var y = r.value.value;
          return y === 0 ? 0 : y === !0 ? "" : y || "";
        }),
        _ = x(function () {
          return !Array.isArray(h.value) && !F(h.value);
        }),
        B = d(function () {
          if (this.N = z, _.value) {
            var y = h.value;
            v.__v && v.__v.__e && v.__v.__e.nodeType === 3 &&
              (v.__v.__e.data = y);
          }
        }),
        D = i.__$u.d;
      return i.__$u.d = function () {
        B(), D.call(this);
      },
        [_, h];
    }, []),
    f = u[0],
    e = u[1];
  return f.value ? e.peek() : e.value;
}
R.displayName = "_st";
Object.defineProperties(s.prototype, {
  constructor: { configurable: !0, value: void 0 },
  type: { configurable: !0, value: R },
  props: {
    configurable: !0,
    get: function () {
      return { data: this };
    },
  },
  __b: { configurable: !0, value: 1 },
});
l("__b", function (t, i) {
  if (typeof i.type == "string") {
    var n, r = i.props;
    for (var u in r) {
      if (u !== "children") {
        var f = r[u];
        f instanceof s && (n || (i.__np = n = {}), n[u] = f, r[u] = f.peek());
      }
    }
  }
  t(i);
});
l("__r", function (t, i) {
  U();
  var n, r = i.__c;
  r && (r.__$f &= -2,
    (n = r.__$u) === void 0 && (r.__$u = n = function (u) {
      var f;
      return d(function () {
        f = this;
      }),
        f.c = function () {
          r.__$f |= 1, r.setState({});
        },
        f;
    }())),
    C = r,
    U(n),
    t(i);
});
l("__e", function (t, i, n, r) {
  U(), C = void 0, t(i, n, r);
});
l("diffed", function (t, i) {
  U(), C = void 0;
  var n;
  if (typeof i.type == "string" && (n = i.__e)) {
    var r = i.__np, u = i.props;
    if (r) {
      var f = n.U;
      if (f) {
        for (var e in f) {
          var v = f[e];
          v !== void 0 && !(e in r) && (v.d(), f[e] = void 0);
        }
      } else f = {}, n.U = f;
      for (var a in r) {
        var h = f[a], _ = r[a];
        h === void 0 ? (h = K(n, a, _, u), f[a] = h) : h.o(_, u);
      }
    }
  }
  t(i);
});
function K(t, i, n, r) {
  var u = i in t && t.ownerSVGElement === void 0, f = $(n);
  return {
    o: function (e, v) {
      f.value = e, r = v;
    },
    d: d(function () {
      this.N = z;
      var e = f.value.value;
      r[i] !== e &&
        (r[i] = e,
          u ? t[i] = e : e ? t.setAttribute(i, e) : t.removeAttribute(i));
    }),
  };
}
l("unmount", function (t, i) {
  if (typeof i.type == "string") {
    var n = i.__e;
    if (n) {
      var r = n.U;
      if (r) {
        n.U = void 0;
        for (var u in r) {
          var f = r[u];
          f && f.d();
        }
      }
    }
  } else {
    var e = i.__c;
    if (e) {
      var v = e.__$u;
      v && (e.__$u = void 0, v.d());
    }
  }
  t(i);
});
l("__h", function (t, i, n, r) {
  (r < 3 || r === 9) && (i.__$f |= 2), t(i, n, r);
});
O.prototype.shouldComponentUpdate = function (t, i) {
  var n = this.__$u, r = n && n.s !== void 0;
  for (var u in i) return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    var f = 2 & this.__$f;
    if (!(r || f || 4 & this.__$f) || 1 & this.__$f) return !0;
  } else if (!(r || 4 & this.__$f) || 3 & this.__$f) return !0;
  for (var e in t) if (e !== "__source" && t[e] !== this.props[e]) return !0;
  for (var v in this.props) if (!(v in t)) return !0;
  return !1;
};
function L(t) {
  return k(function () {
    return $(t);
  }, []);
}
var Q = function (t) {
  queueMicrotask(function () {
    queueMicrotask(t);
  });
};
function W() {
  N(function () {
    for (var t; t = J.shift();) G.call(t);
  });
}
function z() {
  J.push(this) === 1 && (b.requestAnimationFrame || Q)(W);
}
export { $ as a, L as b };
