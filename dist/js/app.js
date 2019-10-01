/*! For license information please see app.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([ [ "app" ], {
    "./scripts/app.js": function(e, o, l) {
        l.r(o);
        var n = l("../node_modules/@material/ripple/index.js"), t = l("../node_modules/@material/textfield/index.js");
        new n.MDCRipple(document.querySelector(".foo-button")), [].map.call(document.querySelectorAll(".mdc-text-field"), (function(e) {
            var o = new t.MDCTextField(e);
            return o.useNativeValidation = !1, o.valid = !1, o;
        }));
        console.log("hello world");
    }
}, [ [ "./scripts/app.js", "runtime", "vendors" ] ] ]);
//# sourceMappingURL=app.js.map