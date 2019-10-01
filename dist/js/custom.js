/*! For license information please see custom.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([ [ "custom" ], {
    "./scripts/custom.js": function(s, o, n) {
        (function(s) {
            s(document).ready((function() {
                console.log("Ready!"), n("./scripts/demo.js");
            }));
        }).call(this, n("../node_modules/jquery/dist/jquery.js"));
    },
    "./scripts/demo.js": function(s, o, n) {
        console.log(1);
    }
}, [ [ "./scripts/custom.js", "runtime", "vendors" ] ] ]);
//# sourceMappingURL=custom.js.map