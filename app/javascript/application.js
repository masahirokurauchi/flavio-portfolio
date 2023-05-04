// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import $ from 'jquery'
// window.$ = $

// import  "jquery";

// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;


// // jquery does not export 'default' but defines window.$ and
// // window.jQuery when loaded:
// // - import 'jquery'; will not work
// // - namespace does not matter here (jq)
// // - no need to redefine it again w/ window.$ = jq.$
// import * as jq from "jquery";

// // Define a variable to check in inlined HTML script
// window.importmapScriptsLoaded = true;


// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;


// import "jquery";

import jquery from "jquery"
window.jQuery = jquery;
window.$ = jquery;