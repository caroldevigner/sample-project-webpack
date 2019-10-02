/*! For license information please see app.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([ [ "app" ], {
    "./scripts/app.js": function(e, i, l) {
        l.r(i), (function(e) {
            var i = l("../node_modules/@material/ripple/index.js"), n = l("../node_modules/@material/textfield/index.js");
            new i.MDCRipple(document.querySelector(".foo-button")), [].map.call(document.querySelectorAll(".mdc-text-field"), (function(i) {
                if (e(i).hasClass("field--is-invalid")) {
                    var l = new n.MDCTextField(i);
                    return l.useNativeValidation = !1, l.valid = !1, l;
                }
                var o = new n.MDCTextField(i);
                return o.useNativeValidation = !1, o;
            }));
            console.log("hello world");
        }).call(this, l("../node_modules/jquery/dist/jquery.js"));
    }
}, [ [ "./scripts/app.js", "runtime", "vendors" ] ] ]);
//# sourceMappingURL=app.js.map