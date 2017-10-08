/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = exports.View = function () {
    function View(elemento) {
        _classCallCheck(this, View);

        this._elemento = elemento;
    }

    _createClass(View, [{
        key: 'template',
        value: function template() {

            throw new Error('O método template deve ser implementado');
        }
    }, {
        key: 'update',
        value: function update(model) {
            this._elemento.innerHTML = this.template(model);
        }
    }]);

    return View;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(2);

var btn = document.querySelector("#btn-save");
var form = document.querySelector("#form-modelos");

btn.addEventListener('click', function (e) {
    e.preventDefault;
    var modelo = new _index.ControllerModelos();
    modelo.addModelo();
    form.reset();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ControllerModelos = __webpack_require__(3);

Object.keys(_ControllerModelos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ControllerModelos[key];
    }
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ControllerModelos = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(4);

var _index2 = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllerModelos = exports.ControllerModelos = function () {
    function ControllerModelos() {
        _classCallCheck(this, ControllerModelos);

        this._$ = document.querySelector.bind(document);
        this._nome = this._$('#nome');
        this._idade = this._$('#idade');

        this._descricao = this._$('#descricao');
        this._servicos = document.querySelectorAll('input[name=servicos]:checked');
        console.log(this._servicos);
        this._lista = new _index.ListaModelos();

        this._view = new _index2.ModelosView(this._$('#view'));
        this._view.update(this._lista);
    }

    _createClass(ControllerModelos, [{
        key: 'servicos',
        value: function servicos() {
            var listaServicos = [];

            this._servicos.forEach(function (e, i) {
                listaServicos.push({
                    "nome": e.value,
                    "valor": i
                });
            });

            return listaServicos;
        }
    }, {
        key: '_getImage',
        value: function _getImage() {
            var foto = this._$('#foto');

            if (foto.files && foto.files[0]) {

                var FR = new FileReader();

                FR.addEventListener("load", function (e) {
                    setTimeout(function () {
                        console.log(e.target.result);
                        return e.target.result;
                    }, 2000);
                });

                FR.readAsDataURL(foto.files[0]);

                return foto.files[0];
            }
        }
    }, {
        key: 'addModelo',
        value: function addModelo() {
            this._lista.adiciona(this._criarModelo());
            this._view.update(this._lista);
        }
    }, {
        key: '_criarModelo',
        value: function _criarModelo() {
            var m = new _index.ModelModelos(this._nome.value, this._idade.value, this._descricao.value, this._getImage(), this.servicos());

            console.log(m);
            return m;
        }
    }, {
        key: 'getList',
        value: function getList() {
            return this._lista.getModelos;
        }
    }]);

    return ControllerModelos;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListaModelos = __webpack_require__(5);

Object.keys(_ListaModelos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ListaModelos[key];
    }
  });
});

var _ModelModelos = __webpack_require__(6);

Object.keys(_ModelModelos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModelModelos[key];
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaModelos = exports.ListaModelos = function () {
    function ListaModelos() {
        _classCallCheck(this, ListaModelos);

        this.modelos = [];
    }

    _createClass(ListaModelos, [{
        key: "adiciona",
        value: function adiciona(modelo) {
            this.modelos.push(modelo);
        }
    }, {
        key: "getModelos",
        get: function get() {
            return [].concat(this.modelos);
        }
    }]);

    return ListaModelos;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModelModelos = exports.ModelModelos = function () {
    function ModelModelos(nome, idade, descricao, foto, listaServicos) {
        _classCallCheck(this, ModelModelos);

        this._nome = nome;
        this._idade = idade;
        this._foto = foto;
        this._descricao = descricao;
        this._servicos = listaServicos;
    }

    _createClass(ModelModelos, [{
        key: "getNome",
        get: function get() {
            return this._nome;
        }
    }, {
        key: "getIdade",
        get: function get() {
            return this._idade;
        }
    }, {
        key: "getFoto",
        get: function get() {
            return this._foto;
        }
    }, {
        key: "getDescricao",
        get: function get() {
            return this._descricao;
        }
    }, {
        key: "getServicos",
        get: function get() {
            return [].concat(this._servicos);
        }
    }, {
        key: "setNome",


        /****************************/

        set: function set(nome) {
            this._nome = nome;
        }
    }, {
        key: "setIdade",
        set: function set(idade) {
            this._idade = idade;
        }
    }, {
        key: "setFoto",
        set: function set(foto) {
            this._foto = foto;
        }
    }, {
        key: "setDescricao",
        set: function set(descricao) {
            this._descricao = descricao;
        }
    }, {
        key: "setServicos",
        set: function set(listaServicos) {
            this._servicos.push(listaServicos);
        }
    }]);

    return ModelModelos;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModelosView = __webpack_require__(8);

Object.keys(_ModelosView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModelosView[key];
    }
  });
});

var _View = __webpack_require__(0);

Object.keys(_View).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _View[key];
    }
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModelosView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _View2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelosView = exports.ModelosView = function (_View) {
    _inherits(ModelosView, _View);

    function ModelosView(elemento) {
        _classCallCheck(this, ModelosView);

        return _possibleConstructorReturn(this, (ModelosView.__proto__ || Object.getPrototypeOf(ModelosView)).call(this, elemento));
    }

    _createClass(ModelosView, [{
        key: 'template',
        value: function template(model) {
            /*
            gambiarra para verificar se model.modelos não é 'undefined', 
            se model.modelos for 'undefined' model.modelos recebe um array vazio
            */
            //model.modelos = (typeof model.modelos !== 'undefined') ? model.modelos : []; 
            // if (typeof model.modelos === 'undefined') {
            //     model.modelos = [];

            // } else {

            //     model.modelos = model.modelos;
            // }

            var template = '\n\n            ' + model.modelos.map(function (modelo) {
                return '\n                <div class="card card-cascade">\n                    <!--Card image-->\n                    <div class="view overlay hm-white-slight">\n                        <img src="' + modelo.getFoto + '" class="img-fluid" alt="">\n                        <a>\n                            <div class="mask waves-effect waves-light"></div>\n                        </a>\n                    </div>\n                    <!--/.Card image-->\n    \n                    <!--Card content-->\n                    <div class="card-body text-center">\n                        <!--Title-->\n                        <h4 class="card-title"><strong>' + modelo.getNome + '</strong></h4>\n                        <h5>Data: ' + modelo.getIdade + '</h5>\n    \n                        <p class="card-text">' + modelo.getDescricao + '</p>\n                        \n                        <!--Facebook-->\n                        <a type="button" class="btn-floating btn-small btn-fb waves-effect waves-light"><i class="fa fa-facebook"></i></a>\n                        <!--Twitter-->\n                        <a type="button" class="btn-floating btn-small btn-tw waves-effect waves-light"><i class="fa fa-twitter"></i></a>\n                        <!--Google +-->\n                        <a type="button" class="btn-floating btn-small btn-dribbble waves-effect waves-light"><i class="fa fa-dribbble"></i></a>\n\n                        <ul>\n                            ' + modelo.getServicos.map(function (servico) {
                    return '\n                                <li>\n                                    <span class="label">' + servico.nome + '</span>\n                                    <span class="label label-default">' + servico.valor + '</span>\n                                </li>\n                            ';
                }).join('') + '\n                        </ul>\n                    </div>\n                    <!--/.Card content-->\n                </div>\n            ';
            }).join('');

            return template;
        }
    }]);

    return ModelosView;
}(_View2.View);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map