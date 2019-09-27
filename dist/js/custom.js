/*! For license information please see custom.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([ [ "custom" ], {
    "./scripts/custom.js": function(s, o, c) {
        (function(s) {
            s(document).ready(() => {
                console.log("Ready!"), c("./scripts/demo.js");
            });
        }).call(this, c("../node_modules/jquery/dist/jquery.js"));
    },
    "./scripts/demo.js": function(s, o, c) {
        console.log(1);
    }
}, [ [ "./scripts/custom.js", "runtime", "vendors" ] ] ]);
//# sourceMappingURL=custom.js.map