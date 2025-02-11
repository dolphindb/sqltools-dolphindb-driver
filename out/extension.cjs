/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./i18n/index.ts":
/*!***********************!*\
  !*** ./i18n/index.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i18n: () => (/* binding */ i18n),
/* harmony export */   language: () => (/* binding */ language),
/* harmony export */   r: () => (/* binding */ r),
/* harmony export */   t: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! process */ "process");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xshell_i18n_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xshell/i18n/index.js */ "./node_modules/.pnpm/xshell@1.2.8_react-dom@19.0.0_react@19.0.0_/node_modules/xshell/i18n/index.js");
/* harmony import */ var _dict_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dict.json */ "./i18n/dict.json");



// LOCAL
// const i18n = new I18N(_dict, 'en')
const i18n = new xshell_i18n_index_js__WEBPACK_IMPORTED_MODULE_1__.I18N(_dict_json__WEBPACK_IMPORTED_MODULE_2__, (process__WEBPACK_IMPORTED_MODULE_0___default())?.env?.VSCODE_NLS_CONFIG ?
    JSON.parse((process__WEBPACK_IMPORTED_MODULE_0___default().env).VSCODE_NLS_CONFIG || '{ "locale": "zh" }').locale.slice(0, 2)
    :
        undefined);
const { t, r, language } = i18n;



/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "./node_modules/.pnpm/i18next@24.2.1_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/i18next@24.2.1_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLanguage: () => (/* binding */ changeLanguage),
/* harmony export */   createInstance: () => (/* binding */ createInstance),
/* harmony export */   "default": () => (/* binding */ instance),
/* harmony export */   dir: () => (/* binding */ dir),
/* harmony export */   exists: () => (/* binding */ exists),
/* harmony export */   getFixedT: () => (/* binding */ getFixedT),
/* harmony export */   hasLoadedNamespace: () => (/* binding */ hasLoadedNamespace),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   loadLanguages: () => (/* binding */ loadLanguages),
/* harmony export */   loadNamespaces: () => (/* binding */ loadNamespaces),
/* harmony export */   loadResources: () => (/* binding */ loadResources),
/* harmony export */   reloadResources: () => (/* binding */ reloadResources),
/* harmony export */   setDefaultNamespace: () => (/* binding */ setDefaultNamespace),
/* harmony export */   t: () => (/* binding */ t),
/* harmony export */   use: () => (/* binding */ use)
/* harmony export */ });
const isString = obj => typeof obj === 'string';
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = object => {
  if (object == null) return '';
  return '' + object;
};
const copy = (a, s, t) => {
  a.forEach(m => {
    if (s[m]) t[m] = s[m];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = key => key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
const canNotTraverseDeeper = object => !object || isString(object);
const getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split('.');
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== undefined || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === undefined && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
      last.obj = undefined;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
const pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
const getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return undefined;
  if (!Object.prototype.hasOwnProperty.call(obj, k)) return undefined;
  return obj[k];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== undefined) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
const escape = data => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, s => _entityMap[s]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== undefined) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [' ', ',', '?', '!', ';'];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  const possibleChars = chars.filter(c => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map(c => c === '?' ? '\\?' : c).join('|')})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = function (obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path)) return undefined;
    return obj[path];
  }
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length;) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    let next;
    let nextPath = '';
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== undefined) {
        if (['string', 'number', 'boolean'].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
const getCleanedCode = code => code?.replace('_', '-');

const consoleLogger = {
  type: 'logger',
  log(args) {
    this.output('log', args);
  },
  warn(args) {
    this.output('warn', args);
  },
  error(args) {
    this.output('error', args);
  },
  output(type, args) {
    console?.[type]?.apply?.(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, 'log', '', true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, 'warn', '', true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, 'error', '');
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();

class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(' ').forEach(event => {
      if (!this.observers[event]) this.observers[event] = new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(_ref => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers['*']) {
      const cloned = Array.from(this.observers['*'].entries());
      cloned.forEach(_ref2 => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}

class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    if (this.options.ignoreJSONStructure === undefined) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf('.') > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join('.');
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit('added', lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit('added', lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit('removed', lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find(v => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}

var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach(processor => {
      value = this.processors[processor]?.process(value, key, options, translator) ?? value;
    });
    return value;
  }
};

const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, this);
    this.options = options;
    if (this.options.keySeparator === undefined) {
      this.options.keySeparator = '.';
    }
    this.logger = baseLogger.create('translator');
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    if (key == null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved?.res !== undefined;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== 'object' && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === 'object') options = {
      ...options
    };
    if (!options) options = {};
    if (keys == null) return '';
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng?.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved?.res;
    const resUsedKey = resolved?.usedKey || key;
    const resExactUsedKey = resolved?.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    const joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = !isString(res) && typeof res !== 'boolean' && typeof res !== 'number';
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(res);
        const copy = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy[m] === deepKey) copy[m] = res[m];
          }
        }
        res = copy;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== undefined && !isString(options.count);
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : '';
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0;
      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector?.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit('missingKey', l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(language => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach(suffix => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : undefined);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat?.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = isString(res) && (options?.interpolation?.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && !isString(options.replace) ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey?.[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res != null && postProcessorNames?.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach(k => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== undefined && !isString(options.count);
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0;
      const needsContextHandling = options.context !== undefined && (isString(options.context) || typeof options.context === 'number') && options.context !== '';
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach(ns => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        }
        codes.forEach(code => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat?.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const optionsKeys = ['defaultValue', 'ordinal', 'context', 'replace', 'lng', 'lngs', 'fallbackLng', 'ns', 'keySeparator', 'nsSeparator', 'returnObjects', 'returnDetails', 'joinArrays', 'postProcess', 'interpolation'];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== 'undefined') {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = 'defaultValue';
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
        return true;
      }
    }
    return false;
  }
}

class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return null;
    const p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === 'x') return null;
    return this.formatLanguageCode(p.join('-'));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf('-') < 0) return code;
    const p = code.split('-');
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf('-') > -1) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e) {}
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode) return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach(code => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach(code => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find(supportedLng => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
          if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = c => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach(fc => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}

const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const dummyRule = {
  select: count => count === 1 ? 'one' : 'other',
  resolvedOptions: () => ({
    pluralCategories: ['one', 'other']
  })
};
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const cleanedCode = getCleanedCode(code === 'dev' ? 'en' : code);
    const type = options.ordinal ? 'ordinal' : 'cardinal';
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (!Intl) {
        this.logger.error('No Intl support, please use an Intl polyfill!');
        return dummyRule;
      }
      if (!code.match(/-|_/)) return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule('dev', options);
    return rule?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.getSuffixes(code, options).map(suffix => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule('dev', options);
    if (!rule) return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map(pluralCategory => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return this.getSuffix('dev', count, options);
  }
}

const deepFindWithDefaults = function (data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === undefined) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
const regexSafe = val => val.replace(/\$/g, '$$$$');
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('interpolator');
    this.options = options;
    this.format = options?.interpolation?.format || (value => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== undefined ? escape$1 : escape;
    this.escapeValue = escapeValue !== undefined ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
    this.formatSeparator = formatSeparator || ',';
    this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
    this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
    this.maxReplaces = maxReplaces || 1000;
    this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp?.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, 'g');
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = key => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, undefined, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options?.interpolation?.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: val => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: val => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach(todo => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : '';
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = '';
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = '';
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map(elem => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = '';
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}

const parseFormatStr = formatStr => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf('(') > -1) {
    const p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(';');
      opts.forEach(opt => {
        if (opt) {
          const [key, ...rest] = opt.split(':');
          const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === 'false') formatOptions[trimmedKey] = false;
          if (val === 'true') formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = fn => {
  const cache = {};
  return (val, lng, options) => {
    let optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [options.interpolationkey]: undefined
      };
    }
    const key = lng + JSON.stringify(optForCache);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: 'currency'
        });
        return val => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return val => formatter.format(val, opt.range || 'day');
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return val => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = options.interpolation.formatSeparator || ',';
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf('(') > 1 && formats[0].indexOf(')') < 0 && formats.find(f => f.indexOf(')') > -1)) {
      const lastIndex = formats.findIndex(f => f.indexOf(')') > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options?.formatParams?.[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}

const removePending = (q, name) => {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create('backendConnector');
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    this.backend?.init?.(services, options.backend, options);
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach(lng => {
      let hasAllNamespaces = true;
      namespaces.forEach(ns => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ; else if (this.state[name] === 1) {
          if (pending[name] === undefined) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === undefined) pending[name] = true;
          if (toLoad[name] === undefined) toLoad[name] = true;
          if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit('failedLoading', lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach(q => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach(l => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach(n => {
              if (loaded[l][n] === undefined) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit('loaded', loaded);
    this.queue = this.queue.filter(q => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : undefined;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === 'function') {
          r.then(data => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : undefined;
    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach(name => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    const s = name.split('|');
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, 'read', undefined, undefined, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : () => {};
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
      return;
    }
    if (key === undefined || key === null || key === '') return;
    if (this.backend?.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === 'function') {
            r.then(data => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}

const get = () => ({
  debug: false,
  initAsync: true,
  ns: ['translation'],
  defaultNS: ['translation'],
  fallbackLng: ['dev'],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: 'all',
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: '.',
  nsSeparator: ':',
  pluralSeparator: '_',
  contextSeparator: '_',
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: 'fallback',
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: args => {
    let ret = {};
    if (typeof args[1] === 'object') ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === 'object' || typeof args[3] === 'object') {
      const options = args[3] || args[2];
      Object.keys(options).forEach(key => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: value => value,
    prefix: '{{',
    suffix: '}}',
    formatSeparator: ',',
    unescapePrefix: '-',
    nestingPrefix: '$t(',
    nestingSuffix: ')',
    nestingOptionsSeparator: ',',
    maxReplaces: 1000,
    skipOnVariables: true
  }
});
const transformOptions = options => {
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs?.indexOf?.('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }
  if (typeof options.initImmediate === 'boolean') options.initAsync = options.initImmediate;
  return options;
};

const noop = () => {};
const bindMemberFunctions = inst => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(mem => {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initAsync) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    this.isInitializing = true;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (options.defaultNS == null && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf('translation') < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    this.options.interpolation = {
      ...defOpts.interpolation,
      ...this.options.interpolation
    };
    if (options.keySeparator !== undefined) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== undefined) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = ClassOrObject => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on('*', function (event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach(m => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn('init: no languageDetector is used and no lng is defined');
    }
    const storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(fcName => {
      this[fcName] = function () {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
    storeApiChained.forEach(fcName => {
      this[fcName] = function () {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log('initialized', this.options);
        this.emit('initialized', this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === 'function') usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng?.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = lng => {
        if (!lng) return;
        if (lng === 'cimode') return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(l => {
          if (l === 'cimode') return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(l => append(l));
      } else {
        append(usedLng);
      }
      this.options.preload?.forEach?.(l => append(l));
      this.services.backendConnector.load(toLoad, this.options.ns, e => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === 'function') {
      callback = lngs;
      lngs = undefined;
    }
    if (typeof ns === 'function') {
      callback = ns;
      ns = undefined;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, err => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    if (module.type === 'backend') {
      this.modules.backend = module;
    }
    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }
    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }
    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === 'formatter') {
      this.modules.formatter = module;
    }
    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (['cimode', 'dev'].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit('languageChanging', lng);
    const setLngProps = l => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = undefined;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = undefined;
        this.emit('languageChanged', l);
        this.logger.log('languageChanged', l);
      } else {
        this.isLanguageChangingTo = undefined;
      }
      deferred.resolve(function () {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function () {
        return _this2.t(...arguments);
      });
    };
    const setLng = lngs => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l = isString(lngs) ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        this.services.languageDetector?.cacheUserLanguage?.(l);
      }
      this.loadResources(l, err => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function (key, opts) {
      let options;
      if (typeof opts !== 'object') {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== '') options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || '.';
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map(k => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.translator?.translate(...args);
  }
  exists() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return this.translator?.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === 'cimode') return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== undefined) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach(n => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter(lng => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(err => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
    if (!lng) return 'rtl';
    const rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
    const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== undefined || options.prefix !== undefined) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(m => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
        prev[l] = {
          ...this.store.data[l]
        };
        return Object.keys(prev[l]).reduce((acc, n) => {
          acc[n] = {
            ...prev[l][n]
          };
          return acc;
        }, {});
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on('*', function (event) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

const createInstance = instance.createInstance;
const dir = instance.dir;
const init = instance.init;
const loadResources = instance.loadResources;
const reloadResources = instance.reloadResources;
const use = instance.use;
const changeLanguage = instance.changeLanguage;
const getFixedT = instance.getFixedT;
const t = instance.t;
const exists = instance.exists;
const setDefaultNamespace = instance.setDefaultNamespace;
const hasLoadedNamespace = instance.hasLoadedNamespace;
const loadNamespaces = instance.loadNamespaces;
const loadLanguages = instance.loadLanguages;




/***/ }),

/***/ "./node_modules/.pnpm/xshell@1.2.8_react-dom@19.0.0_react@19.0.0_/node_modules/xshell/i18n/dict.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/xshell@1.2.8_react-dom@19.0.0_react@19.0.0_/node_modules/xshell/i18n/dict.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dict: () => (/* binding */ Dict)
/* harmony export */ });
class Dict {
    _dict;
    constructor(_dict = {}) {
        this._dict = _dict;
    }
    get(key, language) {
        if (!key)
            return '';
        const item = this._dict[key];
        if (language)
            return item ?
                item[language] || ''
                :
                    '';
        return item;
    }
    to_resources() {
        return Object.entries(this._dict).reduce((acc, [key, item]) => {
            Object.entries(item).forEach(([language, translation]) => {
                if (!translation || !acc[language])
                    return;
                acc[language].translation[key] = translation;
            });
            return acc;
        }, {
            zh: { translation: {} },
            en: { translation: {} },
            ja: { translation: {} },
            ko: { translation: {} },
        });
    }
}
//# sourceMappingURL=dict.js.map

/***/ }),

/***/ "./node_modules/.pnpm/xshell@1.2.8_react-dom@19.0.0_react@19.0.0_/node_modules/xshell/i18n/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/xshell@1.2.8_react-dom@19.0.0_react@19.0.0_/node_modules/xshell/i18n/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18N: () => (/* binding */ I18N),
/* harmony export */   LANGUAGES: () => (/* binding */ LANGUAGES)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/.pnpm/i18next@24.2.1_typescript@5.7.3/node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _dict_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dict.js */ "./node_modules/.pnpm/xshell@1.2.8_react-dom@19.0.0_react@19.0.0_/node_modules/xshell/i18n/dict.js");


const LANGUAGES = ['zh', 'en', 'ja', 'ko'];
/**
    提供翻译文本功能，自动解析当前语言
    @see https://github.com/ShenHongFei/xshell/tree/master/i18n
*/
class I18N {
    static LANGUAGE_REGEXP = /^(zh|en|ja|ko)$/;
    /** (ISO 639-1 标准语言代码) 可能取 zh, en, ja, ko */
    language;
    /** hostname shortcuts */
    hosts;
    /** url prefix shortcuts */
    roots;
    /** 标记静态文本，以便扫描词条，并在运行时根据当前语言获取翻译 */
    t;
    /** render: 翻译配置字段 */
    r;
    i18next;
    /** react-i18next <Trans/> 组件 */
    Trans = ({ children }) => children;
    /** ```ts
        import dict from './dict.json'  // { "添加": { "en": "Add", "ja": "追加", "ko": "추가" } }
        
        const i18n = new I18N(dict, 'zh')  // 创建实例，传入词典 dict 并指定语言（NodeJS 环境），
        const i18n = new I18N(dict)        // 创建实例，传入词典 dict 并自动判断当前语言（浏览器环境），
        const i18n = new I18N({ })         // 创建实例，传入空词典
        ```
        @see https://github.com/ShenHongFei/xshell/tree/master/i18n
    */
    constructor(_dict, language) {
        const is_browser = typeof window !== 'undefined' && typeof location !== 'undefined';
        const dict = new _dict_js__WEBPACK_IMPORTED_MODULE_1__.Dict(_dict);
        if (!language && is_browser)
            language = (new URLSearchParams(location.search).get('language') ||
                window.language);
        if (!language)
            language = Intl.DateTimeFormat().resolvedOptions().locale.slice(0, 2);
        if (!I18N.LANGUAGE_REGEXP.test(language)) {
            if (language)
                console.error('invalid language:', language);
            language = 'zh';
        }
        // console.log('language:', language)
        this.language = language;
        this.t = (text, options) => {
            options = options || {};
            const language = options.language || this.language;
            return this.i18next.t(text, { ...options, lng: language, defaultValue: text });
        };
        this.r = (field, language = this.language) => field ?
            field[language] || field.zh || field.en || field || ''
            :
                field || '';
        // --- init i18next
        this.i18next = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].createInstance();
        if (is_browser)
            try {
                // 在无 React 的浏览器环境下避免 react-i18next 中执行 React.createContext() 报错
                // const React = require('react') as typeof import('react')
                const { initReactI18next, Trans: I18NextTrans } = require('react-i18next');
                this.i18next.use(initReactI18next);
                const _i18next = this.i18next;
                // 绑定 Trans 组件的 i18n 到 this.i18next, 解决多个 i18next 冲突的问题
                // react-i18next/context.js 中 i18n 实例只在模块级别维护，多次 this.i18next.use(initReactI18next) 会覆盖前面的 i18n，导致 Trans 无法翻译
                // https://github.com/i18next/react-i18next/issues/726
                this.Trans = function Trans({ i18n = _i18next, ...others }) {
                    // 简单转发，性能更好
                    return I18NextTrans({ i18n, ...others });
                    // return React.createElement(I18NextTrans, { i18n, ...others } as any, children)
                    // return <I18NextTrans {...{ i18n, ...others } }>{children}</I18NextTrans>
                };
            }
            catch { }
        this.i18next.init({
            lng: this.language,
            // LOCAL
            // debug: true,
            debug: false,
            fallbackLng: {
                en: ['zh'],
                ja: ['en', 'zh'],
                ko: ['en', 'zh']
            },
            // 禁用 : 和 . 作为 seperator
            keySeparator: false,
            nsSeparator: false,
            resources: dict.to_resources(),
            interpolation: {
                escapeValue: false
            },
            react: {
                transKeepBasicHtmlNodesFor: []
            },
        });
        if (typeof window !== 'undefined' && window && !('i18n' in window))
            window.i18n = this;
    }
    /** 加载词典文件 (需要将这两行单独放一个文件里，以保证在 import 其他文件之前执行)
        
        @example
        import dict from './dict.json'  // { "添加": { "en": "Add", "ja": "追加", "ko": "추가" } }
        i18n.init(dict)
    */
    init(dict) {
        const resources = new _dict_js__WEBPACK_IMPORTED_MODULE_1__.Dict(dict).to_resources();
        for (const language in resources)
            this.i18next.addResources(language, 'translation', resources[language].translation);
    }
    toJSON() {
        return {
            language: this.language,
        };
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./i18n/dict.json":
/*!************************!*\
  !*** ./i18n/dict.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"DolphinDB 插件已初始化":{"en":"DolphinDB extension initialized"},"成功连接到 DolphinDB":{"en":"Connected to DolphinDB"},"共享变量":{"en":"Shared Variables"},"本地变量":{"en":"Local Variables"},"DolphinDB 执行状态":{"en":"DolphinDB Execution Status"},"取消作业":{"en":"Cancel Job"},"执行中":{"en":"Executing"},"空闲中":{"en":"Idle"},"DolphinDB 小数显示位数":{"en":"DolphinDB decimal places:"},"设置 DolphinDB 小数显示位数":{"en":"Set DolphinDB decimal places:"},"小数位数:":{"en":"Decimals:"},"设置小数点后显示的位数 (可取 0 ~ 20) (置空时重置为实际数据的位数)":{"en":"Set the number of digits displayed after the decimal point (can be 0 ~ 20) (Leave it empty to display the actual number of digits)"},"实际数据的位数":{"en":"the actual number of digits (default)"},"小数位数应为空或介于 0 - 20":{"en":"Number of decimal places should be empty or between 0 - 20"},"dolphindb.decimals 配置被修改":{"en":"dolphindb.decimals configuration modified"},"webview 已订阅 repl":{"en":"webview is subscribed to repl"},"webview 的 repl 订阅被关闭，因为 dataview 被关闭":{"en":"The repl subscription of the webview is closed because the dataview is closed"},"webview 已订阅 inspection":{"en":"webview has subscribed inspection"},"webview 的 inspection 订阅被关闭，因为 dataview 被关闭":{"en":"The inspection subscription of the webview is closed because the dataview is closed"},"dolphindb 终端被关闭":{"en":"dolphindb terminal is closed"},"是否取消执行中的任务？":{"en":"Cancel the task in progress?"},"是":{"en":"Yes"},"否":{"en":"No"},"断开 dolphindb 连接:":{"en":"Disconnect dolphindb:"},"查看 dolphindb 变量:":{"en":"Inspect the dolphindb variable:"},"查看 dolphindb 表结构:":{"en":"Inspect the dolphindb table schema:"},"在新窗口查看变量:":{"en":"View variables in new window:"},"上传到服务器端的路径":{"en":"The path to upload to the server side"},"文件上传成功":{"en":"File uploaded successfully"},"文件上传路径不能为空":{"en":"File upload path cannot be empty"},"切换连接:":{"en":"Change connection:"},"连接成功:":{"en":"Connection succeeded:"},"page 已订阅 repl":{"en":"page subscribed to repl"},"page 的 repl 订阅被关闭，因为 websocket 连接被关闭":{"en":"The page\'s repl subscription was closed because the websocket connection was closed"},"page 已订阅 inspection":{"en":"page Subscribed inspection"},"page 的 inspection 订阅被关闭，因为 websocket 连接被关闭":{"en":"The page\'s inspection subscription was closed because the websocket connection was closed"},"实际":{"en":"Actual"},"设置小数位数为:":{"en":"Set the number of decimal places to:"},"是否取消执行中的作业？":{"en":"Cancel this running job?"},"不要取消":{"en":"Do Not Cancel"},"已连接":{"en":"Connected"},"词典":{"en":"dict"},"个键":{"en":"keys"},"集合":{"en":"set"},"向量":{"en":"vector"},"个元素":{"en":"items"},"在新窗口中打开":{"en":"Open in new window"},"表格":{"en":"table"},"行":{"en":"rows"},"列":{"en":"columns"},"流表":{"en":"streaming table"},"窗口":{"en":"window"},"偏移量":{"en":"offset"},"继续显示流表更新":{"en":"continue to show flow table updates"},"暂停显示流表更新":{"en":"pause showing flow table updates"},"实时":{"en":"real time"},"this.streaming.data 中的元素应该是 vector":{"en":"Elements in this.streaming.data should be vector"},"矩阵":{"en":"matrix"},"成交量":{"en":"vol"},"开盘价":{"en":"open"},"收盘价":{"en":"close"},"最高价":{"en":"high"},"最低价":{"en":"low"},"用户已取消设置小数位数":{"en":"User has abandoned decimal places settings"},"DolphinDB 终端":{"en":"DolphinDB Terminal"},"如:":{"en":"e.g."},"DolphinDB 插件初始化成功":{"en":"DolphinDB plugin initialized successfully"},"DolphinDB 插件的 http 服务器启动成功，正在监听:":{"en":"The http server of the DolphinDB plugin started successfully and is listening:"},"的词典":{"en":" dict"},"的 {{type}} 集合":{"en":" {{type}} set"},"的 {{type}} 向量":{"en":"{{type}} vector"},"的表格":{"en":" table"},"的流表":{"en":" streaming table"},"的矩阵":{"en":" matrix"},"函数文档 {{fname}} 已加载":{"en":"function documentation {{fname}} loaded"},"dolphindb 插件运行在{{mode}}模式下":{"en":"The dolphindb plugin runs in {{mode}} mode"},"开发":{"en":"development"},"生产":{"en":"production"},"先尝试用浏览器访问对应的 server 地址，如: http://192.168.1.111:8848\\n":{"en":"First try to access the corresponding server address with a browser, e.g. http://192.168.1.111:8848\\n"},"如果可以打开网页且正常使用，再检查:\\n":{"en":"If you can open the web page and use it normally, check again:\\n"},"- 执行 `version()` 函数，返回的 DolphinDB Server 版本应不低于 `1.30.16` 或 `2.00.4`\\n":{"en":"- Execute the `version()` function, the returned version of DolphinDB Server should not be lower than `1.30.16` or `2.00.4`\\n"},"- 如果有配置系统代理，则代理软件以及代理服务器需要支持 WebSocket 连接，否则请在系统中关闭代理，或者将 DolphinDB Server IP 添加到排除列表，然后重启 VSCode\\n":{"en":"- If there is a configured system proxy, the proxy software and proxy server need to support WebSocket connections, otherwise please turn off the proxy in the system, or add the DolphinDB Server IP to the exclusion list, and then restart VSCode\\n"},"调用栈:\\n":{"en":"call stack:\\n"},"连接数据库失败，当前连接的一部分配置如下:\\n":{"en":"Failed to connect to the database. Part of the current connection configuration is as follows:\\n"},"如果可以打开网页且正常登录使用，再检查:\\n":{"en":"If you can open the webpage and log in normally, check:\\n"},"编辑配置":{"en":"Edit Settings"},"确认":{"en":"Confirm"},"dataview 已准备就绪":{"en":"dataview is ready"},"page 已准备就绪":{"en":"page is ready"},"标量":{"en":"scalar"},"张量":{"en":"tensor"},"数对":{"en":"pair"},"绘图":{"en":"chart"},"对象":{"en":"object"},"找不到 rpc handler":{"en":"rpc handler not found"},"重连连接:":{"en":"reconnect:"},"正在连接中，请稍等":{"en":"Connecting, please wait"},"连接:":{"en":"connect:"},"数据库连接被断开，请检查网络是否稳定、网络转发节点是否会自动关闭 websocket 长连接、server 日志\\n":{"en":"The database connection is disconnected, please check whether the network is stable, whether the network forwarding node will automatically close the websocket long connection, server log\\n"},"重连":{"en":"Reconnect"},"本地找不到文件 {{fp_main}}，请先将这个文件下载到本地再启动调试\\n":{"en":"The file {{fp_main}} cannot be found locally, please download this file to the local and then start debugging\\n"},"文件 {{fp_src}} 中设置了断点，但在本次调试会话的中不会被使用到，将自动忽略\\n":{"en":"A breakpoint is set in the file {{fp_src}}, but it will not be used in this debugging session and will be ignored\\n"},"本地文件 {{fp_src}} 与服务器文件不一致，在本地文件中设置的断点可能导致未知错误，建议先同步文件\\n":{"en":"The local file {{fp_src}} is inconsistent with the server file. Breakpoints set in the local file may cause unknown errors. It is recommended to synchronize the file first\\n"},"调试服务器连接失败\\n":{"en":"Failed to connect to debug server\\n"},"已有作业正在执行中，完成后才能执行下个作业":{"en":"An existing job is in progress, and the next job can only be executed after it is completed"},"正在执行":{"en":"Executing"},"是否取消执行中的作业？点击取消作业后，会发送指令并等待当前正在执行的子任务完成后停止":{"en":"Cancel this running job? After clicking to cancel the job, it will send an instruction and wait for the currently executing subtask to complete before stopping"},"断开连接":{"en":"Disconnect"},"正在连接":{"en":"Connecting"},"dolphindb 连接配置中的 url 非法: url 应该非空，类型是字符串，且以 ws:// 或 wss:// 开头":{"en":"Illegal url in dolphindb connection configuration: url should be non-empty, of type string, and start with ws:// or wss://"},"当前连接 ({{connection}}) 正在执行作业，请等待\\r\\n":{"en":"The current connection ({{connection}}) is running a job, please wait\\r\\n"},"先尝试用浏览器访问对应的 server 地址，如: {{url}}\\n":{"en":"First try to access the corresponding server address with a browser, such as: {{url}}\\n"},"共享":{"en":"shared"},"第 {{iline}} 行":{"en":"line {{iline}}"},"··· 共 {{total_lines}} 行 ···":{"en":"··· {{total_lines}} lines in total ···"},"调试服务器已启动，等待 VSCode 调试器连接端口 {{port}}":{"en":"The debug server has started, waiting for the VSCode debugger to connect to port {{port}}"},"与 VSCode 调试器建立了连接":{"en":"Connected with VSCode debugger"},"与 VSCode 调试器的连接已断开":{"en":"The connection to the VSCode debugger has been lost"},"调试当前 DolphinDB 脚本文件":{"en":"Debug the current DolphinDB script file"},"调试配置 program 字段为空，请指定为待调试的脚本路径":{"en":"The debug configuration program field is empty, please specify the script path to be debugged"},"DolphinDB License 已过期，请联系管理人员立即更新，避免数据库关闭":{"en":"DolphinDB License has expired, please contact the administrator to update immediately to avoid database shutdown"},"DolphinDB License 将在两周内过期，请提醒管理人员及时更新，避免数据库过期后自动关闭":{"en":"The DolphinDB License will expire within two weeks, please remind the administrators to update it in time to avoid automatic shutdown of the database after expiration"},"接收到消息:":{"en":"received message:"}," 调试服务器连接失败，请确保 DolphinDB Server 版本不低于 2.00.10 或 1.30.22\\n":{"en":" Debug server connection failed, please make sure DolphinDB Server version is not lower than 2.00.10 or 1.30.22\\n"},"发送消息:":{"en":"send message:"},"发送消息错误:":{"en":"send message errored:"},"文件成功上传到: ":{"en":"The file was successfully uploaded to: "},"模块成功上传到: ":{"en":"The module was successfully uploaded to: "},"配置文件中的 dolphindb.mappings 中存在路径类型错误映射项（\\"文件夹\\" 路径错误映射到 \\"文件\\" 路径或 \\"文件\\" 路径错误映射到 \\"文件夹\\" 路径），请检查后修改。":{"en":"There is a wrong path mapping item in dolphindb.mappings in the configuration file (the \\"folder\\" path is incorrectly mapped to the \\"file\\" path or the \\"file\\" path is incorrectly mapped to the \\"folder\\" path), please check and modify. "},"您未配置 dolphindb.mappings，是否现在配置？":{"en":"You have not configured dolphindb.mappings, would you like to do so now?"},"不再提醒":{"en":"No More Reminders"},"配置文件中的 dolphindb.mappings 中存在路径类型错误映射项（1. \\"文件夹\\" 路径错误映射到 \\"文件\\" 路径；2. \\"文件\\" 路径错误映射到 \\"文件夹\\" 路径；3. \\"default\\" 没有映射到 \\"文件夹\\" 路径。）请检查后修改。":{"en":"There is a wrong path type mapping item in dolphindb.mappings in the configuration file (1. \\"folder\\" path is incorrectly mapped to \\"file\\" path; 2. \\"file\\" path is incorrectly mapped to \\"folder\\" path; 3. \\"default\\" is not mapped to \\"folder\\" path.) Please check and modify."},"是否上传后加密模块？\\n若加密，服务器端只保存加密后的 .dom 文件，无法查看源码\\n若不加密，服务器端将保存原始文件":{"en":"Do you want to encrypt the module after uploading? \\nIf it is encrypted, the server will only save the encrypted .dom file, and the source code cannot be viewed\\nIf it is not encrypted, the server will save the original file"},"当前连接未配置路径映射关系，文件会默认上传至 {getHomeDir()}/uploads/ 文件夹下。建议在 dolphindb.connections 的每个连接配置对象中添加 mappings 属性，将本地路径关联到远程路径，后续上传会根据 mappings 进行路径匹配。是否现在配置？":{"en":"The current connection has no path mapping configured, and files will be uploaded to the {getHomeDir()}/uploads/ folder by default. It is recommended to add the mappings attribute to each connection configuration object of dolphindb.connections to associate the local path with the remote path. Subsequent uploads will perform path matching based on mappings. Do you want to configure it now?"},"当前连接配置中的 mappings 中存在路径类型错误映射项（1. \\"文件夹\\" 路径错误映射到 \\"文件\\" 路径；2. \\"文件\\" 路径错误映射到 \\"文件夹\\" 路径；3. \\"default\\" 没有映射到 \\"文件夹\\" 路径。）请检查后修改。":{"en":"There is a path type error mapping item in the mappings in the current connection configuration (1. \\"folder\\" path is incorrectly mapped to \\"file\\" path; 2. \\"file\\" path is incorrectly mapped to \\"folder\\" path; 3. \\"default\\" is not mapped to \\"folder\\" path.) Please check and modify."},"连接到:":{"en":"connect to:"},"已连接到 server":{"en":"connected to server"},"连接错误:":{"en":"connection error:"},"偏移":{"en":"offset"}," 调试服务器连接失败，请确保 DolphinDB Server 版本不低于 2.00.10.1 或 1.30.22.1\\n":{"en":" Debug server connection failed, please make sure DolphinDB Server version is not lower than 2.00.10.1 or 1.30.22.1\\n"},"uploadModule 返回值类型应该为 string":{"en":"uploadModule return value type should be string"},"当前连接未配置路径映射关系，文件会默认上传至 <getHomeDir()>/uploads 文件夹下。建议在 dolphindb.connections 的每个连接配置对象中添加 mappings 属性，将本地路径关联到远程路径，后续上传会根据 mappings 进行路径匹配。是否现在配置？":{"en":"The current connection has no path mapping configured, and files will be uploaded to the <getHomeDir()>/uploads folder by default. It is recommended to add the mappings attribute to each connection configuration object of dolphindb.connections to associate the local path with the remote path. Subsequent uploads will perform path matching based on mappings. Do you want to configure it now?"},"查看文档":{"en":"View Document"},"请确认是否将选中的 {{file_num}} 个文件/文件夹上传至 {{fp_remote}} {{notice}}（目前版本暂不支持上传二进制文件，二进制文件会被自动忽略）":{"en":"Please confirm whether to upload the selected {{file_num}} file(s)/folder(s) to {{fp_remote}} {{notice}} (the current version does not support uploading binary files, and binary files will be automatically ignored)"},"\\n··· 等，共 {{num}} 个路径":{"en":"... and so on, a total of {{num}} paths"},"导出文件":{"en":"Export File"},"确定":{"en":"Confirm"},"文件已成功导出到 {{path}}":{"en":"File exported successfully to {{path}}"},"仅支持导出表格":{"en":"Only supports exporting tables"},"server 版本低于 2.00.11，请升级后再使用此功能":{"en":"The server version is lower than 2.00.11, please upgrade before using this function."},"当前变量所属连接非选中连接，无法导出":{"en":"The connection to which the current variable belongs is not a selected connection and cannot be exported."},"当前没有可导出的表格":{"en":"There are currently no tables available for export"},"请将 server 版本升级至 2.00.11.2 及以上再使用此功能":{"en":"Please upgrade the server version to 2.00.11.2 and above before using this function"},"总是加密":{"en":"Always"},"总是不加密":{"en":"Never"},"正在导出 ···":{"en":"Exporting ···"},"查看 dolphindb 表格:":{"en":"Inspect the dolphindb table:"},"数据库路径应该以 dfs:// 开头":{"en":"The database path should start with dfs://"},"前 100 行":{"en":"Top 100 rows of table"},"导出表格":{"en":"Export Table"},"文件成功导出到 {{path}}":{"en":"File successfully exported to {{path}}"},"查看 dolphindb 数据库结构:":{"en":"Inspect the dolphindb database schema:"},"当前使用的语言为:":{"en":"The language currently used is:"},"当前有 debug 进程进行中，无法切换连接":{"en":"There is currently a debug process in progress and the connection cannot be switched."},"python parser 暂不支持调试功能":{"en":"Python parser does not support debugging function."},"请选择连接并登录后查看":{"en":"Please select a connection and log in to view"},"当前集群无数据节点和计算节点存活，且当前节点不为单机节点":{"en":"There are no data nodes or computing nodes alive in the current cluster, and the current node is not a stand-alone node"},"错误行:":{"en":"Error Line:"},"dolphindb 插件运行在{{mode}}模式下，版本为 {{version}}":{"en":"The dolphindb plugin is running in {{mode}} mode and the version is {{version}}"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/extension.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activate: () => (/* binding */ activate),
/* harmony export */   driver_aliases: () => (/* binding */ driver_aliases),
/* harmony export */   extension_id: () => (/* binding */ extension_id),
/* harmony export */   extension_name: () => (/* binding */ extension_name)
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @i18n/index.ts */ "./i18n/index.ts");


const driver_aliases = [
    { displayName: 'DolphinDB', value: 'dolphindb' },
];
const extension_id = 'dolphindb.dolphindb-vscode';
const extension_name = 'DolphinDB SQLTools Driver';
async function activate(ctx) {
    const sqltools = vscode__WEBPACK_IMPORTED_MODULE_0__.extensions.getExtension('mtxr.sqltools');
    if (!sqltools)
        throw new Error((0,_i18n_index_ts__WEBPACK_IMPORTED_MODULE_1__.t)('SQLTools 插件未安装'));
    await sqltools.activate();
    sqltools.exports.registerPlugin({
        extensionId: extension_id,
        name: extension_name,
        type: 'driver',
        async register(extension) {
            const map = extension.resourcesMap();
            map.set(`driver/${driver_aliases[0].value}/icons`, {
                active: ctx.asAbsolutePath('icons/active.png'),
                default: ctx.asAbsolutePath('icons/default.png'),
                inactive: ctx.asAbsolutePath('icons/inactive.png')
            });
            driver_aliases.forEach(({ value }) => {
                map.set(`driver/${value}/extension-id`, extension_id);
                map.set(`driver/${value}/connection-schema`, ctx.asAbsolutePath('../connection.schema.json'));
                map.set(`driver/${value}/ui-schema`, ctx.asAbsolutePath('../ui.schema.json'));
            });
            await extension.client.sendRequest('ls/RegisterPlugin', { path: ctx.asAbsolutePath('ls/plugin.cjs') });
        }
    });
    return {
        driverName: extension_name,
        driverAliases: driver_aliases,
        parseBeforeSaveConnection: ({ connInfo: info }) => {
            // This hook is called before saving the connection using the assistant
            // so you can do any transformations before saving it to disk.active
            // EG: relative file path transformation, string manipulation etc
            // Below is the exmaple for SQLite, where we save the DB path relative to workspace
            // and later we transform it back to absolute before editing
            // if (path.isAbsolute(connInfo.database)) {
            //   const databaseUri = Uri.file(connInfo.database);
            //   const dbWorkspace = workspace.getWorkspaceFolder(databaseUri);
            //   if (dbWorkspace) {
            //     connInfo.database = `\$\{workspaceFolder:${dbWorkspace.name}\}/${workspace.asRelativePath(connInfo.database, false)}`;
            //   }
            // }
            console.log('ddb.sqltools.parseBeforeSaveConnection:', info);
            return info;
        },
        parseBeforeEditConnection: ({ connInfo: info }) => {
            // This hook is called before editing the connection using the assistant
            // so you can do any transformations before editing it.
            // EG: absolute file path transformation, string manipulation etc
            // Below is the exmaple for SQLite, where we use relative path to save,
            // but we transform to asolute before editing
            // if (!path.isAbsolute(connInfo.database) && /\$\{workspaceFolder:(.+)}/g.test(connInfo.database)) {
            //   const workspaceName = connInfo.database.match(/\$\{workspaceFolder:(.+)}/)[1];
            //   const dbWorkspace = workspace.workspaceFolders.find(w => w.name === workspaceName);
            //   if (dbWorkspace)
            //     connInfo.database = path.resolve(dbWorkspace.uri.fsPath, connInfo.database.replace(/\$\{workspaceFolder:(.+)}/g, './'));
            // }
            console.log('ddb.sqltools.parseBeforeEditConnection:', info);
            return info;
        }
    };
}

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.cjs.map