;
(function () {
  var checkElements = function () {
    var args = Array.prototype.slice.call(arguments);
    var errors = [];

    var check = args.reduce(function (flag, el, i, arr) {
      var elExist = Boolean(el);

      if (!elExist) {
        errors.push(i + 1);
      }

      return flag && elExist;
    }, true);

    // if (!check) {
    //   console.log('На странице нет элементов ' + errors.join(', '));
    // }

    return check;
  }


  window.utils = {
    checkElements: checkElements,
  }

})();

;
(function () {
  var getStringDate = function (dateObj) {
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var date = dateObj.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (date < 10) {
      date = '0' + date;
    }


    return year + '-' + month + '-' + date;
  }


  var getStringTime = function (dateObj) {
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
  }


  var calculateEndTime = function () {
    var date = new Date;
    var hours = parseInt(this.value.substr(0, 2), 10);
    var minutes = parseInt(this.value.substr(3, 2), 10);
    date.setHours(hours);
    date.setMinutes(minutes + TIME_STEP);

    endTimeInput.value = time.getStringTime(date);
  }


  var getNumberTime = function (value) {
    return {
      hours: parseInt(value.substr(0, 2), 10),
      minutes: parseInt(value.substr(3, 2), 10),
    }
  }


  var getDateFromString = function (date, time) {

    if (time) {
      var dateTime = date + 'T' + time;
    }

    return (new Date(Date.parse(dateTime || date)));
  }


  window.time = {
    getStringDate: getStringDate,
    getStringTime: getStringTime,
    getNumberTime: getNumberTime,
    getDateFromString: getDateFromString,
  }

})();
;
(function () {
  var body = document.querySelector('.body');
  var select = document.querySelector('.fonts');


  var onPageLoad = function () {
    var storageValue = storage.get('fontFamily');


    if (storageValue) {
      body.style.fontFamily = storageValue;
      select.value = storageValue;
    }
  };


  var onSelectChange = function () {
    body.style.fontFamily = select.value;
    storage.set('fontFamily', select.value);
  };

  var resetFont = function () {
    body.style.fontFamily = '';
    select.options[0].selected = true;
  }


  document.addEventListener("DOMContentLoaded", onPageLoad);

  select.addEventListener('change', onSelectChange);


  window.font = {
    reset: resetFont,
  }

})();

;
(function () {
  var notice = document.querySelector('.notice');

  var showNotice = function (message) {
    notice.textContent = message;
    notice.classList.toggle('notice--active', true);

    setTimeout(function () {
      notice.classList.toggle('notice--active', false);
    }, 1500);

  }

  notice.addEventListener('click', function () {
    notice.classList.toggle('notice--active', false);
  });

  window.notice = {
    show: showNotice,
  };
})();

;
(function () {
  var setToStorage = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }


  var getFromStorage = function (key) {
    return JSON.parse(localStorage.getItem(key));
  }


  var removeFromStorage = function (key) {
    localStorage.removeItem(key);
  }


  var clearStorage = function () {
    if (arguments) {
      var args = Array.prototype.slice.call(arguments);

      var exceptionsValues = args.map(function (item) {
        return localStorage.getItem(item);
      });
    }

    localStorage.clear();

    if (exceptionsValues) {
      args.forEach(function (key, i) {
        localStorage.setItem(key, exceptionsValues[i]);
      });
    }
  }


  window.storage = {
    set: setToStorage,
    get: getFromStorage,
    remove: removeFromStorage,
    clear: clearStorage
  }
})();

;
(function () {
  var UTC = '+03:00';
  var TIMEZONE = 'Europe/Moscow';


  var CalendarEvent = function (formData) {
    this.summary = formData.get('summary');

    this.start = {};
    this.end = {};

    if (!form.allDay) {
      this.start.dateTime = time.getDateFromString(formData.get('start-date'), formData.get('start-time')).toISOString();
      this.end.dateTime = time.getDateFromString(formData.get('end-date'), formData.get('end-time')).toISOString();
    } else {
      this.start.date = formData.get('start-date');
      this.end.date = formData.get('end-date');
    }

    this.start.timeZone = TIMEZONE;
    this.end.timeZone = TIMEZONE;

    this.location = formData.get('location') || '';
    this.description = formData.get('description') || '';

    this.extendedProperties = {
      private: {
        startDate: formData.get('start-date'),
        startTime: formData.get('start-time'),
        endDate: formData.get('end-date'),
        endTime: formData.get('end-time'),
      }
    }
  }

  window.CalendarEvent = CalendarEvent;
})();
var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var g = this || self,
    h = function (a) {
      return a
    };
  /*
   gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  var m = window,
    n = document,
    aa = m.location,
    ba = function () {},
    ca = /\[native code\]/,
    q = function (a, b, c) {
      return a[b] = a[b] || c
    },
    da = function (a) {
      a = a.sort();
      for (var b = [], c = void 0, d = 0; d < a.length; d++) {
        var e = a[d];
        e != c && b.push(e);
        c = e
      }
      return b
    },
    v = function () {
      var a;
      if ((a = Object.create) && ca.test(a)) a = a(null);
      else {
        a = {};
        for (var b in a) a[b] = void 0
      }
      return a
    },
    x = q(m, "gapi", {});
  var C;
  C = q(m, "___jsl", v());
  q(C, "I", 0);
  q(C, "hel", 10);
  var D = function () {
      var a = aa.href;
      if (C.dpo) var b = C.h;
      else {
        b = C.h;
        var c = /([#].*&|[#])jsh=([^&#]*)/g,
          d = /([?#].*&|[?#])jsh=([^&#]*)/g;
        if (a = a && (c.exec(a) || d.exec(a))) try {
          b = decodeURIComponent(a[2])
        } catch (e) {}
      }
      return b
    },
    fa = function (a) {
      var b = q(C, "PQ", []);
      C.PQ = [];
      var c = b.length;
      if (0 === c) a();
      else
        for (var d = 0, e = function () {
            ++d === c && a()
          }, f = 0; f < c; f++) b[f](e)
    },
    E = function (a) {
      return q(q(C, "H", v()), a, v())
    };
  var F = q(C, "perf", v()),
    G = q(F, "g", v()),
    ha = q(F, "i", v());
  q(F, "r", []);
  v();
  v();
  var H = function (a, b, c) {
      var d = F.r;
      "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    },
    L = function (a, b, c) {
      b && 0 < b.length && (b = K(b), c && 0 < c.length && (b += "___" + K(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = q(ha, "_p", v()), q(b, c, v())[a] = (new Date).getTime(), H(a, "_p", c))
    },
    K = function (a) {
      return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
    };
  var M = v(),
    N = [],
    Q = function (a) {
      throw Error("Bad hint" + (a ? ": " + a : ""));
    };
  N.push(["jsl", function (a) {
    for (var b in a)
      if (Object.prototype.hasOwnProperty.call(a, b)) {
        var c = a[b];
        "object" == typeof c ? C[b] = q(C, b, []).concat(c) : q(C, b, c)
      } if (b = a.u) a = q(C, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
  }]);
  var ia = /^(\/[a-zA-Z0-9_\-]+)+$/,
    R = [/\/amp\//, /\/amp$/, /^\/amp$/],
    ja = /^[a-zA-Z0-9\-_\.,!]+$/,
    ka = /^gapi\.loaded_[0-9]+$/,
    la = /^[a-zA-Z0-9,._-]+$/,
    pa = function (a, b, c, d) {
      var e = a.split(";"),
        f = e.shift(),
        l = M[f],
        k = null;
      l ? k = l(e, b, c, d) : Q("no hint processor for: " + f);
      k || Q("failed to generate load url");
      b = k;
      c = b.match(ma);
      (d = b.match(na)) && 1 === d.length && oa.test(b) && c && 1 === c.length || Q("failed sanity: " + a);
      return k
    },
    ra = function (a, b, c, d) {
      a = qa(a);
      ka.test(c) || Q("invalid_callback");
      b = S(b);
      d = d && d.length ? S(d) : null;
      var e =
        function (f) {
          return encodeURIComponent(f).replace(/%2C/g, ",")
        };
      return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.a ? "/am=" + e(a.a) : "", a.c ? "/rs=" + e(a.c) : "", a.f ? "/t=" + e(a.f) : "", "/cb=", e(c)].join("")
    },
    qa = function (a) {
      "/" !== a.charAt(0) && Q("relative path");
      for (var b = a.substring(1).split("/"), c = []; b.length;) {
        a = b.shift();
        if (!a.length || 0 == a.indexOf(".")) Q("empty/relative directory");
        else if (0 < a.indexOf("=")) {
          b.unshift(a);
          break
        }
        c.push(a)
      }
      a = {};
      for (var d = 0, e = b.length; d < e; ++d) {
        var f = b[d].split("="),
          l = decodeURIComponent(f[0]),
          k = decodeURIComponent(f[1]);
        2 == f.length && l && k && (a[l] = a[l] || k)
      }
      b = "/" + c.join("/");
      ia.test(b) || Q("invalid_prefix");
      c = 0;
      for (d = R.length; c < d; ++c) R[c].test(b) && Q("invalid_prefix");
      c = T(a, "k", !0);
      d = T(a, "am");
      e = T(a, "rs");
      a = T(a, "t");
      return {
        pathPrefix: b,
        version: c,
        a: d,
        c: e,
        f: a
      }
    },
    S = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; ++c) {
        var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
        la.test(e) && b.push(e)
      }
      return b.join(",")
    },
    T = function (a, b, c) {
      a = a[b];
      !a && c && Q("missing: " + b);
      if (a) {
        if (ja.test(a)) return a;
        Q("invalid: " + b)
      }
      return null
    },
    oa = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
    na = /\/cb=/g,
    ma = /\/\//g,
    sa = function () {
      var a = D();
      if (!a) throw Error("Bad hint");
      return a
    };
  M.m = function (a, b, c, d) {
    (a = a[0]) || Q("missing_hint");
    return "https://apis.google.com" + ra(a, b, c, d)
  };
  var U = decodeURI("%73cript"),
    V = /^[-+_0-9\/A-Za-z]+={0,2}$/,
    W = function (a, b) {
      for (var c = [], d = 0; d < a.length; ++d) {
        var e = a[d],
          f;
        if (f = e) {
          a: {
            for (f = 0; f < b.length; f++)
              if (b[f] === e) break a;f = -1
          }
          f = 0 > f
        }
        f && c.push(e)
      }
      return c
    },
    X = function () {
      var a = C.nonce;
      return void 0 !== a ? a && a === String(a) && a.match(V) ? a : C.nonce = null : n.querySelector ? (a = n.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(V) ? C.nonce = a : C.nonce = null) : null : null
    },
    ua = function (a) {
      if ("loading" != n.readyState) ta(a);
      else {
        var b = X(),
          c = "";
        null !== b && (c = ' nonce="' + b + '"');
        a = "<" + U + ' src="' + encodeURI(a) + '"' + c + "></" + U + ">";
        n.write(Y ? Y.createHTML(a) : a)
      }
    },
    ta = function (a) {
      var b = n.createElement(U);
      b.setAttribute("src", Y ? Y.createScriptURL(a) : a);
      a = X();
      null !== a && b.setAttribute("nonce", a);
      b.async = "true";
      (a = n.getElementsByTagName(U)[0]) ? a.parentNode.insertBefore(b, a): (n.head || n.body || n.documentElement).appendChild(b)
    },
    va = function (a, b) {
      var c = b && b._c;
      if (c)
        for (var d = 0; d < N.length; d++) {
          var e = N[d][0],
            f = N[d][1];
          f && Object.prototype.hasOwnProperty.call(c,
            e) && f(c[e], a, b)
        }
    },
    xa = function (a, b, c) {
      wa(function () {
        var d = b === D() ? q(x, "_", v()) : v();
        d = q(E(b), "_", d);
        a(d)
      }, c)
    },
    za = function (a, b) {
      var c = b || {};
      "function" == typeof b && (c = {}, c.callback = b);
      va(a, c);
      b = a ? a.split(":") : [];
      var d = c.h || sa(),
        e = q(C, "ah", v());
      if (e["::"] && b.length) {
        a = [];
        for (var f = null; f = b.shift();) {
          var l = f.split(".");
          l = e[f] || e[l[1] && "ns:" + l[0] || ""] || d;
          var k = a.length && a[a.length - 1] || null,
            w = k;
          k && k.hint == l || (w = {
            hint: l,
            b: []
          }, a.push(w));
          w.b.push(f)
        }
        var y = a.length;
        if (1 < y) {
          var z = c.callback;
          z && (c.callback = function () {
            0 ==
              --y && z()
          })
        }
        for (; b = a.shift();) ya(b.b, c, b.hint)
      } else ya(b || [], c, d)
    },
    ya = function (a, b, c) {
      a = da(a) || [];
      var d = b.callback,
        e = b.config,
        f = b.timeout,
        l = b.ontimeout,
        k = b.onerror,
        w = void 0;
      "function" == typeof k && (w = k);
      var y = null,
        z = !1;
      if (f && !l || !f && l) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
      k = q(E(c), "r", []).sort();
      var O = q(E(c), "L", []).sort(),
        I = [].concat(k),
        ea = function (u, A) {
          if (z) return 0;
          m.clearTimeout(y);
          O.push.apply(O, p);
          var B = ((x || {}).config || {}).update;
          B ? B(e) : e && q(C, "cu",
            []).push(e);
          if (A) {
            L("me0", u, I);
            try {
              xa(A, c, w)
            } finally {
              L("me1", u, I)
            }
          }
          return 1
        };
      0 < f && (y = m.setTimeout(function () {
        z = !0;
        l()
      }, f));
      var p = W(a, O);
      if (p.length) {
        p = W(a, k);
        var r = q(C, "CP", []),
          t = r.length;
        r[t] = function (u) {
          if (!u) return 0;
          L("ml1", p, I);
          var A = function (J) {
              r[t] = null;
              ea(p, u) && fa(function () {
                d && d();
                J()
              })
            },
            B = function () {
              var J = r[t + 1];
              J && J()
            };
          0 < t && r[t - 1] ? r[t] = function () {
            A(B)
          } : A(B)
        };
        if (p.length) {
          var P = "loaded_" + C.I++;
          x[P] = function (u) {
            r[t](u);
            x[P] = null
          };
          a = pa(c, p, "gapi." + P, k);
          k.push.apply(k, p);
          L("ml0", p, I);
          b.sync ||
            m.___gapisync ? ua(a) : ta(a)
        } else r[t](ba)
      } else ea(p) && d && d()
    },
    Aa;
  var Ba = null,
    Z = g.trustedTypes;
  if (Z && Z.createPolicy) try {
    Ba = Z.createPolicy("gapi#gapi", {
      createHTML: h,
      createScript: h,
      createScriptURL: h
    })
  } catch (a) {
    g.console && g.console.error(a.message)
  }
  Aa = Ba;
  var Y = Aa;
  var wa = function (a, b) {
    if (C.hee && 0 < C.hel) try {
      return a()
    } catch (c) {
      b && b(c), C.hel--, za("debug_error", function () {
        try {
          window.___jsl.hefn(c)
        } catch (d) {
          throw c;
        }
      })
    } else try {
      return a()
    } catch (c) {
      throw b && b(c), c;
    }
  };
  x.load = function (a, b) {
    return wa(function () {
      return za(a, b)
    })
  };
  G.bs0 = window.gapi._bs || (new Date).getTime();
  H("bs0");
  G.bs1 = (new Date).getTime();
  H("bs1");
  delete window.gapi._bs;
}).call(this);
gapi.load("", {
  callback: window["gapi_onload"],
  _c: {
    "jsl": {
      "ci": {
        "deviceType": "mobile",
        "oauth-flow": {
          "authUrl": "https://accounts.google.com/o/oauth2/auth",
          "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
          "disableOpt": true,
          "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
          "usegapi": false
        },
        "debug": {
          "reportExceptionRate": 0.05,
          "forceIm": false,
          "rethrowException": false,
          "host": "https://apis.google.com"
        },
        "enableMultilogin": true,
        "googleapis.config": {
          "auth": {
            "useFirstPartyAuthV2": true
          }
        },
        "isPlusUser": false,
        "inline": {
          "css": 1
        },
        "disableRealtimeCallback": false,
        "drive_share": {
          "skipInitCommand": true
        },
        "csi": {
          "rate": 0.01
        },
        "client": {
          "cors": false
        },
        "isLoggedIn": true,
        "signInDeprecation": {
          "rate": 0.0
        },
        "include_granted_scopes": true,
        "llang": "ru",
        "iframes": {
          "youtube": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
            "methods": ["scroll", "openwindow"]
          },
          "ytsubscribe": {
            "url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"
          },
          "plus_circle": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
          },
          "plus_share": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
          },
          "rbr_s": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
          },
          ":source:": "3p",
          "playemm": {
            "url": "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"
          },
          "savetoandroidpay": {
            "url": "https://pay.google.com/gp/v/widget/save"
          },
          "blogger": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
            "methods": ["scroll", "openwindow"]
          },
          "evwidget": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
          },
          "partnersbadge": {
            "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"
          },
          "dataconnector": {
            "url": "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"
          },
          "surveyoptin": {
            "url": "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"
          },
          ":socialhost:": "https://apis.google.com",
          "shortlists": {
            "url": ""
          },
          "hangout": {
            "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
          },
          "plus_followers": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
          },
          "post": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
          },
          ":gplus_url:": "https://plus.google.com",
          "signin": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
            "methods": ["onauth"]
          },
          "rbr_i": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
          },
          "share": {
            "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"
          },
          "plusone": {
            "params": {
              "count": "",
              "size": "",
              "url": ""
            },
            "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
          },
          "comments": {
            "params": {
              "location": ["search", "hash"]
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
            "methods": ["scroll", "openwindow"]
          },
          ":im_socialhost:": "https://plus.googleapis.com",
          "backdrop": {
            "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"
          },
          "visibility": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
          },
          "autocomplete": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
          },
          "additnow": {
            "url": "https://apis.google.com/marketplace/button?usegapi\u003d1",
            "methods": ["launchurl"]
          },
          ":signuphost:": "https://plus.google.com",
          "ratingbadge": {
            "url": "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"
          },
          "appcirclepicker": {
            "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
          },
          "follow": {
            "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"
          },
          "community": {
            "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"
          },
          "sharetoclassroom": {
            "url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"
          },
          "ytshare": {
            "params": {
              "url": ""
            },
            "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
          },
          "plus": {
            "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"
          },
          "family_creation": {
            "params": {
              "url": ""
            },
            "url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"
          },
          "commentcount": {
            "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"
          },
          "configurator": {
            "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"
          },
          "zoomableimage": {
            "url": "https://ssl.gstatic.com/microscope/embed/"
          },
          "appfinder": {
            "url": "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"
          },
          "savetowallet": {
            "url": "https://pay.google.com/gp/v/widget/save"
          },
          "person": {
            "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"
          },
          "savetodrive": {
            "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
            "methods": ["save"]
          },
          "page": {
            "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"
          },
          "card": {
            "url": ":socialhost:/:session_prefix:_/hovercard/card"
          }
        }
      },
      "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.ru.bUeeCwQBnSs.O/am\u003dwQE/d\u003d1/ct\u003dzgms/rs\u003dAGLTcCN3OgtCqv3yH2CsRpixf2GBGKb06Q/m\u003d__features__",
      "u": "https://apis.google.com/js/api.js",
      "hee": true,
      "fp": "8a45d50662317d0fcf3bf2df0618d210a4955da8",
      "dpo": false
    },
    "fp": "8a45d50662317d0fcf3bf2df0618d210a4955da8",
    "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
    "bimodal": ["signin", "share"]
  }
});

;
(function () {
  var closeModalOnEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeModal.call(this);
    }
  }

  var onModalEscPress;


  var openModal = function () {
    var modal = this;
    modal.element.classList.toggle('d-none', false);

    setTimeout(function () {
      modal.element.classList.toggle('modal--active', true);
    }, 10)

    var openEvent = new CustomEvent("modalOpened", {
      cancelable: true,
      bubbles: true,
    });

    modal.element.dispatchEvent(openEvent);

    onModalEscPress = closeModalOnEscPress.bind(modal);
    document.addEventListener('keydown', onModalEscPress);
  }


  var closeModal = function () {
    var modal = this;
    modal.element.classList.toggle('modal--active', false);

    setTimeout(function () {
      modal.element.classList.toggle('d-none', true);
    }, 250)

    var closeEvent = new CustomEvent("modalClosed", {
      cancelable: true,
      bubbles: true,
    });

    modal.element.dispatchEvent(closeEvent);
    document.removeEventListener('keydown', onModalEscPress);
  }


  var Modal = function (modalClassName) {
    var modal = this;
    this.element = document.querySelector(modalClassName);
    var closeButtons = this.element.querySelectorAll('.modal__close');

    if (closeButtons.length > 0) {
      closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function (evt) {
          evt.preventDefault();
          closeModal.call(modal);
        });
      });
    }
  }


  Modal.prototype = {
    open: openModal,
    close: closeModal,
  }


  window.Modal = Modal;

})();

;
(function () {
  var editor = new Modal('.editor');

  window.editor = editor;

})();

;
(function () {
  var template = document.querySelector('#template');
  var itemTemplate = template.content.querySelector('.item');
  var itemsList = document.querySelector('.list');


  var createItem = function (event) {
    var newItem = itemTemplate.cloneNode('true');
    var summary = newItem.querySelector('.item__summary');
    var time = newItem.querySelector('.item__time');
    var startTime = newItem.querySelector('.item__start-time');
    var endTime = newItem.querySelector('.item__end-time');
    var doneButton = newItem.querySelector('.item__done');
    var doneInput = newItem.querySelector('.item__done-input');
    var updateButton = newItem.querySelector('.item__update');
    var deleteButton = newItem.querySelector('.item__delete');
    var location = newItem.querySelector('.item__location');
    var description = newItem.querySelector('.item__description');


    summary.textContent = event.summary;

    if (event.start.dateTime && event.end.dateTime) {
      time.classList.add('item__time--show');
      startTime.textContent = event.extendedProperties.private.startTime;
      endTime.textContent = event.extendedProperties.private.endTime;
    }

    if (event.location) {
      location.classList.add('item__location--show');
      location.textContent = event.location;
    }

    if (event.description) {
      description.classList.add('item__description--show');
      description.textContent = event.description;
    }


    doneInput.addEventListener('change', function (evt) {
      if (doneInput.checked) {
        doneButton.classList.add('item__done--checked')
        event.extendedProperties.private.done = true;
        storage.set(event.id, event);
      } else {
        doneButton.classList.remove('item__done--checked')
        event.extendedProperties.private.done = false;
        storage.set(event.id, event);
      }
    });


    updateButton.addEventListener('click', function (evt) {
      evt.preventDefault();

      form.fill(event.id);
      form.current.element = newItem;
      form.current.id = event.id
      editor.open();
    });


    deleteButton.addEventListener('click', function (evt) {
      evt.preventDefault();

      removeItem(newItem);
      storage.remove(event.id);
      removeEvent(event.id);
    });


    return newItem;
  };


  var updateItem = function (item, event) {
    var summary = item.querySelector('.item__summary');
    var time = item.querySelector('.item__time');
    var startTime = item.querySelector('.item__start-time');
    var endTime = item.querySelector('.item__end-time');
    var location = item.querySelector('.item__location');
    var description = item.querySelector('.item__description');

    summary.textContent = event.summary;

    if (event.start.dateTime && event.end.dateTime) {
      time.classList.add('item__time--show');
      startTime.textContent = event.extendedProperties.private.startTime;
      endTime.textContent = event.extendedProperties.private.endTime;
    } else {
      time.classList.remove('item__time--show');
      startTime.textContent = '';
      endTime.textContent = '';
    }

    if (event.location) {
      console.log(event.location)
      location.classList.add('item__location--show');
      location.textContent = event.location;
    } else {
      location.classList.remove('item__location--show');
      location.textContent = '';
    }

    if (event.description) {
      console.log(event.description)
      description.classList.add('item__description--show');
      description.textContent = event.description;
    } else {
      description.classList.remove('item__description--show');
      description.textContent = '';
    }
  }


  var addItem = function (event) {
    var newItem = createItem(event);
    itemsList.prepend(newItem);
  }


  var renderItems = function (events) {
    var fragment = document.createDocumentFragment();

    events.forEach(function (event) {
      fragment.appendChild(createItem(event));
      storage.set(event.id, event);
    });

    itemsList.appendChild(fragment);
  }

  var removeItem = function (item) {
    itemsList.removeChild(item);
  }

  var clearItems = function () {
    while (itemsList.firstChild) {
      itemsList.removeChild(itemsList.firstChild);
    }
  }


  window.items = {
    add: addItem,
    render: renderItems,
    remove: removeItem,
    clear: clearItems,
    update: updateItem,
  }

})();

;
(function () {
  var addButton = document.querySelector('.add-button');

  addButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    editor.open();
    form.setDefaultDateTime();
  });


  var createEvent = function (formData) {
    console.log('created');


    var event = new CalendarEvent(formData);

    var request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });

    request.execute(function (event) {
      if (event.id) {
        items.add(event);
        storage.set(event.id, event);
        editor.close();
        form.reset();
        notice.show('Успешно сохранено');
      } else {
        notice.show('Произошла ошибка. Проверьте, правильно ли вы ввели данные.');
      }
    });
  }


  window.createEvent = createEvent;

})();

;
(function () {})();

var updateEvent = function (element, id, formData) {
  console.log('updated');
  var event = new CalendarEvent(formData);
  // console.log(event.description)
  items.update(element, event);
  storage.set(id, event);

  return gapi.client.calendar.events.update({
      'calendarId': 'primary',
      'eventId': id,
      'resource': event,
    })
    .then(function (response) {
        // console.log(response)
        editor.close();
        form.reset();
        notice.show('Успешно обновлено');
      },
      function (err) {
        notice.show('Произошла ошибка. Проверьте, правильно ли вы ввели данные.');
      });
}


window.updateEvent = updateEvent;

;
(function () {
  var authPopup = new Modal('.auth');

  // Client ID and API key from the Developer Console
  var CLIENT_ID = '275521875892-icq30gfodvskd45gmn0gkaebeuqko36d.apps.googleusercontent.com';
  var API_KEY = 'AIzaSyAMYDRrik_DUzxORRSm5BJFUuzjiJkZlO8';

  // Array of API discovery doc URLs for APIs used by the quickstart
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  var SCOPES = "https://www.googleapis.com/auth/calendar";

  var authorizeButton = document.getElementById('auth-button');
  var signoutButton = document.getElementById('signout-button');

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  function onClientLoad() {
    gapi.load('client:auth2', initClient);
  }


  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  function initClient() {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = onAuthClick;
      signoutButton.onclick = onSignoutClick;
    }, function (error) {
      console.log(JSON.stringify(error, null, 2));
    });
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      list.setDefaultDate();
      list.update(new Date);
      authPopup.close();
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function onAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  function onSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
    list.resetDefaultDate();
    items.clear();
    storage.clear();
    authPopup.open();
    font.reset();
  }


  document.addEventListener("DOMContentLoaded", function () {
    onClientLoad();
  });

})();

;
(function () {
  var formElement = document.querySelector('.form');
  var closeButton = document.querySelector('.modal__close');
  var typeButtons = formElement.elements.type;
  var typeEvent = formElement.querySelector('.form__type-input--event');
  var typeTask = formElement.querySelector('.form__type-input--task');
  var currentType = 'event';
  var allDayInput = formElement.querySelector('.form__all-day-input');
  var dates = formElement.querySelectorAll('.form__date');
  var startDateInput = formElement.querySelector('.form__date--start');
  var endDateInput = formElement.querySelector('.form__date--end');
  var times = formElement.querySelectorAll('.form__time');
  var startTimeInput = formElement.querySelector('.form__time--start');
  var endTimeInput = formElement.querySelector('.form__time--end');


  var setDefaultDate = function () {
    var currentDate = time.getStringDate(new Date);

    dates.forEach(function (input) {
      input.value = currentDate;
    });
  }

  var setDefaultDateTime = function () {
    setDefaultDate();
    setDefaultTime();
  }


  editor.element.addEventListener('modalOpened', function () {
    formElement.elements.summary.focus();
  });


  typeButtons.forEach(function (button) {
    button.addEventListener('change', function () {
      if (this.checked) {
        formElement.classList.remove('form--' + currentType);
        currentType = this.value;
        formElement.classList.add('form--' + currentType);
      }

      if (currentType === 'event') {
        startDateInput.required = true;
      }

      if (currentType === 'task') {
        startDateInput.required = false;
      }

    });
  });



  startDateInput.addEventListener('change', function () {
    endDateInput.value = this.value;
  });


  allDayInput.addEventListener('change', function () {
    formElement.classList.toggle('form--all-day');
    form.allDay = allDayInput.checked;

    times.forEach(function (item) {
      if (allDayInput.checked) {
        item.required = false;
      } else {
        item.required = true;
        setDefaultTime();
      }
    });

  });



  var TIME_STEP = 30;

  var setDefaultTime = function () {
    var date = new Date();
    var minutes = date.getMinutes();

    if (minutes < TIME_STEP) {
      date.setMinutes(TIME_STEP);
    } else {
      date.setHours(date.getHours() + 1);
      date.setMinutes(0);
    }

    startTimeInput.value = time.getStringTime(date);

    date.setMinutes(date.getMinutes() + TIME_STEP);


    endTimeInput.value = time.getStringTime(date);
  }



  var calculateEndTime = function () {
    var date = new Date;
    var hours = time.getNumberTime(this.value).hours;
    var minutes = time.getNumberTime(this.value).minutes;
    date.setHours(hours);
    date.setMinutes(minutes + TIME_STEP);

    endTimeInput.value = time.getStringTime(date);
  }

  startTimeInput.addEventListener('change', function () {
    calculateEndTime.call(this);
  });


  var increaseEndDate = function () {
    var startHours = time.getNumberTime(startTimeInput.value).hours;
    var startMinutes = time.getNumberTime(startTimeInput.value).minutes;
    var endHours = time.getNumberTime(endTimeInput.value).hours;
    var endMinutes = time.getNumberTime(endTimeInput.value).minutes;

    if ((startHours > endHours) || (startHours === endHours && startMinutes > endMinutes)) {
      var date = getDateFromString(endDateInput.value);
      date.setDate(date.getDate() + 1);
      endDateInput.value = time.getStringDate(date);
    }
  }


  endTimeInput.addEventListener('change', function () {
    increaseEndDate();
  });


  var fillForm = function (eventId) {
    var event = storage.get(eventId);

    formElement.elements['summary'].value = event['summary'];



    if (event['start']['dateTime'] && event['end']['dateTime']) {
      formElement.elements['start-date'].value = event['start']['dateTime'].substr(0, 10);
      formElement.elements['end-date'].value = event['end']['dateTime'].substr(0, 10);
      formElement.elements['start-time'].value = event['start']['dateTime'].substr(11, 5);
      formElement.elements['end-time'].value = event['end']['dateTime'].substr(11, 5);
    } else {
      formElement.classList.toggle('form--all-day', true);
      allDayInput.checked = true;
      form.allDay = true;
      formElement.elements['start-date'].value = event['start']['date'];
      formElement.elements['end-date'].value = event['end']['date'];
    }

    if (event['start']['dateTime'] && event['end']['dateTime'] && (event['start']['dateTime'] === event['end']['dateTime'])) {
      typeEvent.checked = false;
      typeTask.checked = true;
      formElement.classList.toggle('form--event', false);
      formElement.classList.toggle('form--task', true);
    } else {
      typeEvent.checked = true;
      typeTask.checked = false;
      formElement.classList.toggle('form--event', true);
      formElement.classList.toggle('form--task', false);
    }

    if (event['location']) {
      formElement.elements['location'].value = event['location'];
    }

    if (event['description']) {
      formElement.elements['description'].value = event['description'];
    }
  }


  var onFormSubmit = function (evt) {
    evt.preventDefault();
    var formData = new FormData(formElement);

    if (form.current.element && form.current.id) {
      updateEvent(form.current.element, form.current.id, formData);
      form.current.element = null;
      form.current.id = null;
    } else {
      createEvent(formData);
    }
  }


  formElement.addEventListener('submit', onFormSubmit);


  var resetForm = function () {
    formElement.reset();
    formElement.className = 'form form--event';
  }


  closeButton.addEventListener('click', function () {
    resetForm();
  });


  window.form = {
    element: formElement,
    setDefaultDateTime: setDefaultDateTime,
    allDay: false,
    fill: fillForm,
    reset: resetForm,
    current: {
      element: null,
      id: null,
    }
  };

})();

;
(function () {
  var currentDate = document.querySelector('.header__current-date');


  var setDefaultDate = function () {
    var date = time.getStringDate(new Date());
    currentDate.value = date;
  }

  var resetDefaultDate = function () {
    currentDate.value = null;
  }


  var getTimeRange = {
    min: function (dateObj) {
      dateObj.setHours(0, 0, 0);
      return dateObj;
    },
    max: function (dateObj) {
      dateObj.setHours(23, 59, 59);
      return dateObj;
    },
  }


  var ListSettings = function (dateObj) {
    this.calendarId = 'primary';
    this.timeMin = getTimeRange.min(dateObj).toISOString();
    this.timeMax = getTimeRange.max(dateObj).toISOString();
    this.singleEvents = true;
    this.orderBy = 'startTime';
  }


  var listEvents = function (dateObj) {
    gapi.client.calendar.events.list(new ListSettings(dateObj))
      .then(function (response) {
        var events = response.result.items;
        items.clear();
        storage.clear('fontFamily');
        if (events.length > 0) {
          items.render(events);
        } else {
          notice.show('События не найдены');
        }
      });
  }


  var onListDateChange = function () {
    var date = new Date(this.value);
    listEvents(date);
  }


  currentDate.addEventListener('change', onListDateChange);


  window.list = {
    setDefaultDate: setDefaultDate,
    resetDefaultDate: resetDefaultDate,
    update: listEvents,
  }

})();

;
(function () {
  var RemoveSettings = function (id) {
    this.calendarId = 'primary';
    this.eventId = id;
  }


  var removeEvent = function (id) {
    return gapi.client.calendar.events.delete(new RemoveSettings(id))
      .then(function () {
          notice.show('Успешно удалено');
        },
        function () {
          notice.show('Не удалось удалить');
        });
  }


  window.removeEvent = removeEvent;
})();
