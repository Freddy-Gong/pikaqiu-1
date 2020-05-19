// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n.html *{margin: 0;padding: 0;box-sizing: border-box;}\n.html *::after,.html *::before{margin: 0;padding: 0;box-sizing: border-box;}\nbody{\n    background: rgb(255, 229, 0);\n    position: relative;\n}\n.nose{\n    width: 20px;\n    height: 20px;\n    position: fixed;\n    top: 250px;\n    left: 50%;\n    transform: translateX(-10px);\n    border-radius: 50%;\n    overflow: hidden;\n}\n.nose::after{\n    content: '';\n    display: block;\n    width: 10px;\n    height: 10px;\n    background: black;\n    transform-origin: 100% 100%;\n    transform: rotate(45deg);\n}\n.eyes{\n    position: fixed;\n    width: 80px;\n    height: 80px;\n    border: 3px solid black;\n    background: rgb(48, 48, 49);\n    border-radius: 50%;\n    top: 200px;\n    left: 50%;\n    margin-left: -40px;\n}\n.eyes.left{\n    transform: translateX(-100px);\n}\n.eyes.right{\n    transform: translateX(100px);\n}\n.eyes.left::after{\n    content: '';\n    display: block;/*\u8FD9\u4E24\u6B65\u662F\u4F7F\u7528\u4F2A\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u6B65\u9AA4*/\n    width: 40px;\n    height: 40px;\n    border: 3px solid black;\n    background: white;\n    border-radius: 50%;\n    margin-left: 7px;\n    margin-top: 3px;\n}\n.eyes.right::after{\n    content: '';\n    display: block;\n    width: 40px;\n    height: 40px;\n    border: 3px solid black;\n    background: white;\n    border-radius: 50%;\n    margin-left: 7px;\n    margin-top: 3px;\n}\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: fixed;\n    left: 50%;\n    top:300px;\n    margin-left: -100px;\n}\n.mouth > .lip{\n    position: relative;\n    top: -15px;\n}\n.mouth > .lip >.left{\n    z-index: 1;\n    background: rgb(255, 229, 0);\n    position: relative;\n    border: 3px solid black;\n    width: 100px;\n    height: 30px;\n    border-radius: 0  0 0 50px;\n    border-top: transparent;\n    border-right: transparent;\n    transform: rotate(-15deg);\n}\n.mouth > .lip >.right{\n    z-index: 1;\n    background: rgb(255, 229, 0);\n    border: 3px solid black;\n    width: 100px;\n    height: 30px;\n    position: absolute;\n    left: 50%;\n    border-radius: 0  0 50px 0;\n    border-top: transparent;\n    border-left: transparent;\n    transform: rotate(15deg);\n    top:0;\n}\n.down{   \n    width: 100%;\n    height: 230px;\n    position: absolute;\n    top: 0;\n    overflow: hidden;\n}\n.down > .tongue{\n    border: 3px solid black;\n    width: 180px;\n    height: 800px;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    margin-left: -90px;\n    border-radius: 90px/300px;\n    overflow: hidden;\n    background:rgb(155, 0, 10);\n}\n.tongue::after{\n    content: '';\n    display: block;\n    width: 160px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -80px;\n    bottom: 0;\n    border-radius: 300px/250px;\n    background: rgb(255, 71, 96);\n}\n.face{\n    border: 2px solid black;\n    height: 120px;\n    width: 120px;\n    background: rgb(235, 1, 3);\n    border-radius: 50%;\n    position: fixed;\n    top: 300px;\n    left: 50%;\n    margin-left: -60px;\n}\n.face.left{\n    transform: translateX(-200px);\n}\n.face.right{\n    transform: translateX(200px);\n}\n";
var player = {
  id: undefined,
  time: 100,
  n: 1,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerHTML = string.substr(0, player.n);
    player.ui.demo2.innerText = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        /*可以这样简写*/
        var value = player.events[key];
        /*这个值其实是字符串*/

        document.querySelector(key).onclick = player[value];
        /*用字符串去取元素的方法*/
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerHTML = string.substring(0, player.n);
    player.ui.demo2.innerText = string.substr(0, player.n);
    player.ui.demo2.scrollTop = demo2.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
    /*这里的run等价于()=>{run()},简化的时候不能加括号，函数后面加了括号就等于了这个函数的返回值了。*/
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49480" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map