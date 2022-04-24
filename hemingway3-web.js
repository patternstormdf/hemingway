'use strict';
!function(modules) {
    /**
     * @param {number} moduleId
     * @return {?}
     */
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            exports : {},
            id : moduleId,
            loaded : false
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = true, module.exports;
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0);
}([function(canCreateDiscussions, gen34_options, __webpack_require__) {
    (function(exports) {
        /**
         * @param {!Object} obj
         * @return {?}
         */
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default : obj
            };
        }
        var _deepAssign = __webpack_require__(1);
        var _deepAssign2 = _interopRequireDefault(_deepAssign);
        var _prepareStyleProperties = __webpack_require__(77);
        var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
        var _redux = __webpack_require__(11);
        var _reactRedux = __webpack_require__(3);
        var _AboutPage = __webpack_require__(6);
        var _aliapp2 = _interopRequireDefault(_AboutPage);
        var _normalizeDataUri = __webpack_require__(40);
        var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
        var _UiIcon = __webpack_require__(47);
        var _UiIcon2 = _interopRequireDefault(_UiIcon);
        exports.Draft = _aliapp2.default;
        exports.hemingwayStore = (0, _redux.createStore)(_UiIcon2.default);
        _prepareStyleProperties2.default.render(_deepAssign2.default.createElement(_reactRedux.Provider, {
            store : exports.hemingwayStore
        }, _deepAssign2.default.createElement(_normalizeDataUri2.default, null)), document.getElementById("hemingway"));
        /**
         * @return {?}
         */
        window.onbeforeunload = function() {
            return "Navigating away will lose the changes you've made your text.";
        };
    }).call(gen34_options, function() {
        return this;
    }());
}, function(module, canCreateDiscussions) {
    module.exports = React;
}, function(options, canCreateDiscussions) {
    options.exports = {
        readability : {
            normal : "normalReadability",
            hard : "hardReadability",
            veryHard : "veryHardReadability"
        },
        tokens : {
            adverb : "adverb",
            complexWord : "complexWord",
            passiveVoice : "passiveVoice",
            qualifier : "qualifier",
            vaguePhrase : "vaguePhrase",
            buzzword : "buzzword",
            cliche : "cliche"
        }
    };
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /** @type {boolean} */
    exports.__esModule = true;
    exports.connect = exports.Provider = void 0;
    var _Provider = __webpack_require__(66);
    var _Provider2 = _interopRequireDefault(_Provider);
    var _connect = __webpack_require__(67);
    var _connect2 = _interopRequireDefault(_connect);
    exports.Provider = _Provider2.default;
    exports.connect = _connect2.default;
}, function(module, canCreateDiscussions) {
    module.exports = R;
}, function(canCreateDiscussions, self, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!Array} state
     * @return {?}
     */
    function handleKeyCommand(state) {
        var key = find(state);
        var last = action(state).getBlockForKey(key);
        var startIndex = last.getDepth();
        if (0 === startIndex) {
            return _draftJs.RichUtils.toggleBlockType(state, "unstyled");
        }
        var s = action(state).getBlockMap();
        var resultsSubject = s.setIn([key, "depth"], startIndex - 1);
        var contentState = _draftJs.ContentState.createFromBlockArray(resultsSubject.toArray());
        var head = state.getDecorator();
        var result = _draftJs.EditorState.createWithContent(contentState, head);
        var plainAgain2 = _draftJs.SelectionState.createEmpty(key);
        return _draftJs.EditorState.forceSelection(result, plainAgain2);
    }
    /**
     * @param {!Array} name
     * @param {!Object} value
     * @return {?}
     */
    function i(name, value) {
        return _draftJs.RichUtils.handleKeyCommand(name, value);
    }
    /**
     * @param {undefined} value
     * @param {!Array} event
     * @return {?}
     */
    function onKeyDown(value, event) {
        return _draftJs.RichUtils.onTab(event, value, 4);
    }
    /**
     * @param {!Window} editorState
     * @return {?}
     */
    function handleReturn(editorState) {
        var selection = editorState.getSelection();
        var n = selection.isCollapsed();
        if (n) {
            var selectionKey = selection.getFocusKey();
            var initialBlock = editorState.getCurrentContent().getBlockForKey(selectionKey);
            var i = initialBlock.getLength();
            var self = initialBlock.getType();
            if (0 === i && self.match("ordered-list")) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {!Window} editor
     * @param {?} template
     * @param {?} stylesheet
     * @return {?}
     */
    function render(editor, template, stylesheet) {
        var fn = _draftJs.DefaultDraftBlockRenderMap.set("p", {
            element : "p"
        });
        var fragmentArray = (0, _draftJs.convertFromHTML)(stylesheet, _draftJs.getSafeBodyFromHTML, fn).map(function(p) {
            return "p" === p.get("type") ? p.set("type", "unstyled") : p;
        });
        fragmentArray = fragmentArray.reduce(function(sortPipeline, assetsOfThisType, n, inRevIdx) {
            if (n !== inRevIdx.length - 1) {
                var matchPipeline = new _draftJs.ContentBlock({
                    key : Math.floor(Math.random() * Math.pow(2, 24)).toString(32),
                    type : "unstyled"
                });
                return sortPipeline.concat(assetsOfThisType, matchPipeline);
            }
            return sortPipeline.concat(assetsOfThisType);
        }, []);
        var selector = editor.getCurrentContent();
        var browserifyConfig = editor.getSelection();
        var fragment = _draftJs.BlockMapBuilder.createFromArray(fragmentArray);
        var scripts = _draftJs.Modifier.replaceWithFragment(selector, browserifyConfig, fragment);
        return _draftJs.EditorState.push(editor, scripts, "insert-fragment");
    }
    /**
     * @param {!Array} type
     * @param {!Object} event
     * @return {?}
     */
    function init(type, event) {
        var selected = event.blockKey;
        var index = event.startIndex;
        var section = event.oldText;
        var value = event.newText;
        var raw = event.trailingSpace;
        var selection = _draftJs.SelectionState.createEmpty(selected);
        /** @type {number} */
        var n = raw && "" === value ? 1 : 0;
        var context = selection.merge({
            anchorOffset : index,
            focusOffset : index + section.length + n
        });
        var key = action(type);
        var match = _draftJs.Modifier.replaceText(key, context, value);
        return _draftJs.EditorState.push(type, match, "insert-fragment");
    }
    /**
     * @param {!Window} editorState
     * @param {?} type
     * @return {?}
     */
    function addMention(editorState, type) {
        var selection = editorState.getSelection().merge(type);
        return _draftJs.EditorState.forceSelection(editorState, selection);
    }
    /**
     * @param {!Array} name
     * @param {!Object} type
     * @return {?}
     */
    function addNewLinkName(name, type) {
        return _draftJs.RichUtils.toggleBlockType(name, type);
    }
    /**
     * @param {!Array} key
     * @param {!Object} name
     * @return {?}
     */
    function d(key, name) {
        return _draftJs.RichUtils.toggleInlineStyle(key, name);
    }
    /**
     * @param {!Object} target
     * @param {!Object} e
     * @return {?}
     */
    function confirmLink(target, e) {
        var matches = _draftJs.Entity.create("LINK", "MUTABLE", {
            href : e
        });
        return _draftJs.RichUtils.toggleLink(target, target.getSelection(), matches);
    }
    /**
     * @param {?} options
     * @param {?} cb0
     * @return {undefined}
     */
    function callback(options, cb0) {
        if ("split-block" === options.getLastChangeType()) {
            var res = action(options);
            var req = find(options);
            var userAgent = res.getBlockBefore(req);
            var userAgentName = _prepareStyleProperties2.default.pipe(_prepareStyleProperties2.default.invoker(0, "getText"), _deepAssign2.default.run, _prepareStyleProperties2.default.prop("stats"))(userAgent);
            cb0(userAgent.getKey(), userAgentName);
        }
    }
    Object.defineProperty(self, "__esModule", {
        value : true
    });
    self.getText = self.createEmptyEditorState = self.createEditorState = void 0;
    /** @type {function(!Array): ?} */
    self.decreaseIndent = handleKeyCommand;
    /** @type {function(!Array, !Object): ?} */
    self.handleKeyCommand = i;
    /** @type {function(undefined, !Array): ?} */
    self.handleTab = onKeyDown;
    /** @type {function(!Window): ?} */
    self.isOnEmptyListItem = handleReturn;
    /** @type {function(!Window, ?, ?): ?} */
    self.overridePaste = render;
    /** @type {function(!Array, !Object): ?} */
    self.replaceString = init;
    /** @type {function(!Window, ?): ?} */
    self.setSelection = addMention;
    /** @type {function(!Array, !Object): ?} */
    self.toggleBlockType = addNewLinkName;
    /** @type {function(!Array, !Object): ?} */
    self.toggleInlineStyle = d;
    /** @type {function(!Object, !Object): ?} */
    self.toggleLink = confirmLink;
    /** @type {function(?, ?): undefined} */
    self.trackLastBlockAfterSplit = callback;
    var _draftJs = __webpack_require__(6);
    var _prepareStyleProperties = __webpack_require__(4);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _deepAssign = __webpack_require__(15);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var req = _prepareStyleProperties2.default.invoker(0, "getSelection");
    var find = _prepareStyleProperties2.default.pipe(req, _prepareStyleProperties2.default.invoker(0, "getFocusKey"));
    var action = _prepareStyleProperties2.default.invoker(0, "getCurrentContent");
    self.createEditorState = _prepareStyleProperties2.default.pipe(_draftJs.ContentState.createFromText, _draftJs.EditorState.createWithContent);
    self.createEmptyEditorState = _draftJs.EditorState.createEmpty;
    self.getText = _prepareStyleProperties2.default.pipe(action, _prepareStyleProperties2.default.invoker(0, "getPlainText"));
}, function(exports, canCreateDiscussions) {
    exports.exports = Draft;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _createClass = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    var DefaultLink = function(_EventEmitter) {
        /**
         * @param {?} data
         * @return {?}
         */
        function Agent(data) {
            _classCallCheck(this, Agent);
            var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
            return _this.onToggle = function(value) {
                value.preventDefault();
                _this.props.onToggle(_this.props.styleName);
            }, _this;
        }
        return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
            key : "render",
            value : function() {
                var valueClassName = "hemingway-richtext-style-button hemingway-richtext-" + this.props.styleName.toLowerCase();
                return this.props.active && (valueClassName = valueClassName + " hemingway-richtext-active-button"), _react2.default.createElement("button", {
                    className : valueClassName,
                    onClick : this.onToggle
                }, this.props.label);
            }
        }]), Agent;
    }(_react2.default.Component);
    DefaultLink.propTypes = {
        onToggle : _react2.default.PropTypes.func.isRequired,
        styleName : _react2.default.PropTypes.string.isRequired,
        label : _react2.default.PropTypes.string.isRequired,
        active : _react2.default.PropTypes.bool.isRequired
    };
    exports.default = DefaultLink;
}, function(canCreateDiscussions, t, dselect) {
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var a = dselect(4);
    var m = (0, a.prop)("items");
    /**
     * @param {?} n
     * @param {?} string
     * @return {?}
     */
    var i = function(n, string) {
        return (0, a.concat)(n, m(string));
    };
    var groupElem = (0, a.reduce)(i, []);
    var orig_onKeyDown = (0, a.pipe)(m, groupElem);
    var offsetFromCenter = {
        getSentences : orig_onKeyDown,
        iterateOverSentences : function(e, skipFrames) {
            return (0, a.forEach)(skipFrames, orig_onKeyDown(e));
        }
    };
    t.default = offsetFromCenter;
}, function(canCreateDiscussions, exports) {
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    /**
     * @param {string} sz
     * @return {?}
     */
    exports.capitalize = function(sz) {
        return sz.substring(0, 1).toUpperCase() + sz.substring(1);
    };
    /**
     * @param {string} name
     * @return {?}
     */
    exports.pluralize = function(name) {
        return "reading time" === name ? name : name + "s";
    };
}, function(pkg, canCreateDiscussions, require) {
    /**
     * @param {?} value
     * @return {?}
     */
    function index(value) {
        if (!isArray(value) || toString.call(value) != objectTag || color(value)) {
            return false;
        }
        var proto = resolve(value);
        if (null === proto) {
            return true;
        }
        var data = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return "function" == typeof data && data instanceof data && type.call(data) == d;
    }
    var resolve = require(62);
    var color = require(63);
    var isArray = require(65);
    /** @type {string} */
    var objectTag = "[object Object]";
    var ObjProto = Object.prototype;
    /** @type {function(this:!Function): string} */
    var type = Function.prototype.toString;
    /** @type {function(this:Object, *): boolean} */
    var hasOwnProperty = ObjProto.hasOwnProperty;
    /** @type {string} */
    var d = type.call(Object);
    /** @type {function(this:*): string} */
    var toString = ObjProto.toString;
    /** @type {function(?): ?} */
    pkg.exports = index;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /** @type {boolean} */
    exports.__esModule = true;
    exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
    var _UiIcon = __webpack_require__(21);
    var _aliapp2 = _interopRequireDefault(_UiIcon);
    var _browser = __webpack_require__(72);
    var _browser2 = _interopRequireDefault(_browser);
    var _classlist = __webpack_require__(71);
    var _thirdapp2 = _interopRequireDefault(_classlist);
    var _params = __webpack_require__(70);
    var _params2 = _interopRequireDefault(_params);
    var _prepareStyleProperties = __webpack_require__(20);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(22);
    _interopRequireDefault(_normalizeDataUri);
    exports.createStore = _aliapp2.default;
    exports.combineReducers = _browser2.default;
    exports.bindActionCreators = _thirdapp2.default;
    exports.applyMiddleware = _params2.default;
    exports.compose = _prepareStyleProperties2.default;
}, function(canCreateDiscussions, BeautifulProperties, saveNotifs) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
        value : true
    });
    BeautifulProperties.turnOnURLInputAction = BeautifulProperties.turnOffURLInputAction = BeautifulProperties.toggleLinkAction = BeautifulProperties.toggleInlineStyleAction = BeautifulProperties.toggleBlockTypeAction = void 0;
    var RichUtils = saveNotifs(5);
    /**
     * @param {!Array} state
     * @param {!Object} props
     * @return {?}
     */
    BeautifulProperties.toggleBlockTypeAction = function(state, props) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : (0, RichUtils.toggleBlockType)(state, props)
        };
    };
    /**
     * @param {!Array} state
     * @param {!Object} props
     * @return {?}
     */
    BeautifulProperties.toggleInlineStyleAction = function(state, props) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : (0, RichUtils.toggleInlineStyle)(state, props)
        };
    };
    /**
     * @param {!Array} state
     * @param {!Object} props
     * @return {?}
     */
    BeautifulProperties.toggleLinkAction = function(state, props) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE_AND_HIDE_URL",
            editorState : (0, RichUtils.toggleLink)(state, props)
        };
    };
    /**
     * @return {?}
     */
    BeautifulProperties.turnOffURLInputAction = function() {
        return {
            type : "HIDE_URL_INPUT"
        };
    };
    /**
     * @return {?}
     */
    BeautifulProperties.turnOnURLInputAction = function() {
        return {
            type : "SHOW_URL_INPUT"
        };
    };
}, function(canCreateDiscussions, BeautifulProperties, floor) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
        value : true
    });
    BeautifulProperties.replaceStringAction = BeautifulProperties.hideTooltipAction = BeautifulProperties.showTooltipAction = void 0;
    var startYNew = floor(5);
    /**
     * @param {!Array} key
     * @return {?}
     */
    BeautifulProperties.showTooltipAction = function(key) {
        return {
            type : "SHOW_TOOLTIP",
            options : key
        };
    };
    /**
     * @return {?}
     */
    BeautifulProperties.hideTooltipAction = function() {
        return {
            type : "HIDE_TOOLTIP"
        };
    };
    /**
     * @param {!Array} state
     * @param {!Object} props
     * @return {?}
     */
    BeautifulProperties.replaceStringAction = function(state, props) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : (0, startYNew.replaceString)(state, props)
        };
    };
}, function(canCreateDiscussions, exports) {
    /**
     * @return {?}
     */
    function Tetromino() {
        return {
            type : "TOGGLE_WRITE_EDIT"
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    /** @type {function(): ?} */
    exports.default = Tetromino;
}, function(canCreateDiscussions, api, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(api, "__esModule", {
        value : true
    });
    var objStream = __webpack_require__(4);
    var _deepAssign = __webpack_require__(53);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(16);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(52);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var installTaskRun = (0, objStream.pipe)(_deepAssign2.default.parse.bind(_deepAssign2.default), _prepareStyleProperties2.default.score.bind(_prepareStyleProperties2.default), _normalizeDataUri2.default.highlight.bind(_normalizeDataUri2.default));
    var qs = {
        run : installTaskRun
    };
    api.default = qs;
}, function(canCreateDiscussions, inst, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(inst, "__esModule", {
        value : true
    });
    var _deepAssign = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(8);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var result = {
        score : function(e) {
            return this.scoreSentences(e), this.scoreWholeTree(e), this.scoreHighlightTotals(e), e;
        },
        scoreSentences : function(e) {
            var cleanLastUsed = this;
            _prepareStyleProperties2.default.iterateOverSentences(e, function(item) {
                item.stats = cleanLastUsed.getSentenceStats(item);
            });
        },
        getSentenceStats : function(references2) {
            var words = references2.items.length;
            var letters = this.countLetters(references2.items);
            var isModelValid = this.getReadingLevel(letters, words, 1);
            var readability = this.getReadabilityStyle({
                words : words,
                readingLevel : isModelValid
            });
            return {
                words : words,
                letters : letters,
                readingLevel : isModelValid,
                readability : readability
            };
        },
        countLetters : function(letter) {
            return letter.reduce(function(left, mail_object) {
                var find = mail_object.text.match(/\w/g);
                return find ? left + find.length : left;
            }, 0);
        },
        getReadingLevel : function(array, n, m) {
            if (0 === n || 0 === m) {
                return 0;
            }
            /** @type {number} */
            var r = Math.round(4.71 * (array / n) + .5 * (n / m) - 21.43);
            return r <= 0 ? 0 : r;
        },
        getReadabilityStyle : function(e) {
            var c = e.words;
            var duration = e.readingLevel;
            return c < 14 ? _deepAssign2.default.readability.normal : duration >= 10 && duration < 14 ? _deepAssign2.default.readability.hard : duration >= 14 ? _deepAssign2.default.readability.veryHard : _deepAssign2.default.readability.normal;
        },
        scoreWholeTree : function(a) {
            var object = this.countStatFromSentences(a, "letters");
            var characters = a.text.length;
            var res = this.countStatFromSentences(a, "words");
            var close = this.countSentences(a);
            var i = a.items.length;
            var promise = this.getReadingLevel(object, res, close);
            var readability = this.getReadabilityStyle({
                words : res,
                readingLevel : promise
            });
            var resTags = this.getReadingSeconds(res);
            a.stats = {
                letters : object,
                characters : characters,
                words : res,
                sentences : close,
                paragraphs : i,
                readingLevel : promise,
                readability : readability,
                readingSeconds : resTags
            };
        },
        getReadingSeconds : function(objResponse) {
            return objResponse / 250 * 60;
        },
        countSentences : function(text) {
            return _prepareStyleProperties2.default.getSentences(text).length;
        },
        countStatFromSentences : function(text, x) {
            return _prepareStyleProperties2.default.getSentences(text).reduce(function(n4, require) {
                return n4 + require.stats[x];
            }, 0);
        },
        scoreHighlightTotals : function(ast) {
            var request = this;
            var matchValue2 = {
                adverbs : 0,
                passiveVoices : 0,
                complexWords : 0,
                hardSentences : 0,
                veryHardSentences : 0
            };
            ast.stats.highlights = _prepareStyleProperties2.default.getSentences(ast).reduce(function(customDictionary, results) {
                var r = results.tokens;
                return customDictionary.adverbs += request.countTokensOfType(r, _deepAssign2.default.tokens.adverb) + request.countTokensOfType(r, _deepAssign2.default.tokens.qualifier) + request.countTokensOfType(r, _deepAssign2.default.tokens.vaguePhrase), customDictionary.passiveVoices += request.countTokensOfType(r, _deepAssign2.default.tokens.passiveVoice), customDictionary.complexWords += request.countTokensOfType(r, _deepAssign2.default.tokens.complexWord) + request.countTokensOfType(r, _deepAssign2.default.tokens.buzzword) +
                    request.countTokensOfType(r, _deepAssign2.default.tokens.cliche), results.stats.readability === _deepAssign2.default.readability.hard && (customDictionary.hardSentences += 1), results.stats.readability === _deepAssign2.default.readability.veryHard && (customDictionary.veryHardSentences += 1), customDictionary;
            }, matchValue2);
        },
        countTokensOfType : function(namespace, undefined) {
            return namespace.filter(function(uniform) {
                return uniform.type === undefined;
            }).length;
        }
    };
    inst.default = result;
}, function(mixin, canCreateDiscussions) {
    mixin.exports = {
        "a number of" : ["many", "some"],
        abundance : ["enough", "plenty"],
        "accede to" : ["allow", "agree to"],
        accelerate : ["speed up"],
        accentuate : ["stress"],
        accompany : ["go with", "with"],
        accomplish : ["do"],
        accorded : ["given"],
        accrue : ["add", "gain"],
        acquiesce : ["agree"],
        acquire : ["get"],
        additional : ["more", "extra"],
        "adjacent to" : ["next to"],
        adjustment : ["change"],
        admissible : ["allowed", "accepted"],
        advantageous : ["helpful"],
        "adversely impact" : ["hurt"],
        advise : ["tell"],
        aforementioned : ["remove"],
        aggregate : ["total", "add"],
        aircraft : ["plane"],
        "all of" : ["all"],
        alleviate : ["ease", "reduce"],
        allocate : ["divide"],
        "along the lines of" : ["like", "as in"],
        "already existing" : ["existing"],
        alternatively : ["or"],
        ameliorate : ["improve", "help"],
        anticipate : ["expect"],
        apparent : ["clear", "plain"],
        appreciable : ["many"],
        "as a means of" : ["to"],
        "as of yet" : ["yet"],
        "as to" : ["on", "about"],
        "as yet" : ["yet"],
        ascertain : ["find out", "learn"],
        assistance : ["help"],
        "at this time" : ["now"],
        attain : ["meet"],
        "attributable to" : ["because"],
        authorize : ["allow", "let"],
        "because of the fact that" : ["because"],
        belated : ["late"],
        "benefit from" : ["enjoy"],
        bestow : ["give", "award"],
        "by virtue of" : ["by", "under"],
        cease : ["stop"],
        "close proximity" : ["near"],
        commence : ["begin or start"],
        "comply with" : ["follow"],
        concerning : ["about", "on"],
        consequently : ["so"],
        consolidate : ["join", "merge"],
        constitutes : ["is", "forms", "makes up"],
        demonstrate : ["prove", "show"],
        depart : ["leave", "go"],
        designate : ["choose", "name"],
        discontinue : ["drop", "stop"],
        "due to the fact that" : ["because", "since"],
        "each and every" : ["each"],
        economical : ["cheap"],
        eliminate : ["cut", "drop", "end"],
        elucidate : ["explain"],
        employ : ["use"],
        endeavor : ["try"],
        enumerate : ["count"],
        equitable : ["fair"],
        equivalent : ["equal"],
        evaluate : ["test", "check"],
        evidenced : ["showed"],
        exclusively : ["only"],
        expedite : ["hurry"],
        expend : ["spend"],
        expiration : ["end"],
        facilitate : ["ease", "help"],
        "factual evidence" : ["facts", "evidence"],
        feasible : ["workable"],
        finalize : ["complete", "finish"],
        "first and foremost" : ["first"],
        "for the purpose of" : ["to"],
        forfeit : ["lose", "give up"],
        formulate : ["plan"],
        "honest truth" : ["truth"],
        however : ["but", "yet"],
        "if and when" : ["if", "when"],
        impacted : ["affected", "harmed", "changed"],
        implement : ["install", "put in place", "tool"],
        "in a timely manner" : ["on time"],
        "in accordance with" : ["by", "under"],
        "in addition" : ["also", "besides", "too"],
        "in all likelihood" : ["probably"],
        "in an effort to" : ["to"],
        "in between" : ["between"],
        "in excess of" : ["more than"],
        "in lieu of" : ["instead"],
        "in light of the fact that" : ["because"],
        "in many cases" : ["often"],
        "in order to" : ["to"],
        "in regard to" : ["about", "concerning", "on"],
        "in some instances " : ["sometimes"],
        "in terms of" : ["omit"],
        "in the near future" : ["soon"],
        "in the process of" : ["omit"],
        inception : ["start"],
        "incumbent upon" : ["must"],
        indicate : ["say", "state", "or show"],
        indication : ["sign"],
        initiate : ["start"],
        "is applicable to" : ["applies to"],
        "is authorized to" : ["may"],
        "is responsible for" : ["handles"],
        "it is essential" : ["must", "need to"],
        literally : ["omit"],
        magnitude : ["size"],
        maximum : ["greatest", "largest", "most"],
        methodology : ["method"],
        minimize : ["cut"],
        minimum : ["least", "smallest", "small"],
        modify : ["change"],
        monitor : ["check", "watch", "track"],
        multiple : ["many"],
        necessitate : ["cause", "need"],
        nevertheless : ["still", "besides", "even so"],
        "not certain" : ["uncertain"],
        "not many" : ["few"],
        "not often" : ["rarely"],
        "not unless" : ["only if"],
        "not unlike" : ["similar", "alike"],
        notwithstanding : ["in spite of", "still"],
        "null and void" : ["use either null or void"],
        numerous : ["many"],
        objective : ["aim", "goal"],
        obligate : ["bind", "compel"],
        obtain : ["get"],
        "on the contrary" : ["but", "so"],
        "on the other hand" : ["omit", "but", "so"],
        "one particular" : ["one"],
        optimum : ["best", "greatest", "most"],
        overall : ["omit"],
        "owing to the fact that" : ["because", "since"],
        participate : ["take part"],
        particulars : ["details"],
        "pass away" : ["die"],
        "pertaining to" : ["about", "of", "on"],
        "point in time" : ["time", "point", "moment", "now"],
        portion : ["part"],
        possess : ["have", "own"],
        preclude : ["prevent"],
        previously : ["before"],
        "prior to" : ["before"],
        prioritize : ["rank", "focus on"],
        procure : ["buy", "get"],
        proficiency : ["skill"],
        "provided that" : ["if"],
        purchase : ["buy", "sale"],
        "put simply" : ["omit"],
        "readily apparent" : ["clear"],
        "refer back" : ["refer"],
        regarding : ["about", "of", "on"],
        relocate : ["move"],
        remainder : ["rest"],
        remuneration : ["payment"],
        require : ["must", "need"],
        requirement : ["need", "rule"],
        reside : ["live"],
        residence : ["house"],
        retain : ["keep"],
        satisfy : ["meet", "please"],
        shall : ["must", "will"],
        "should you wish" : ["if you want"],
        "similar to" : ["like"],
        solicit : ["ask for", "request"],
        "span across" : ["span", "cross"],
        strategize : ["plan"],
        subsequent : ["later", "next", "after", "then"],
        substantial : ["large", "much"],
        "successfully complete" : ["complete", "pass"],
        sufficient : ["enough"],
        terminate : ["end", "stop"],
        "the month of" : ["omit"],
        therefore : ["thus", "so"],
        "this day and age" : ["today"],
        "time period" : ["time", "period"],
        "took advantage of" : ["preyed on"],
        transmit : ["send"],
        transpire : ["happen"],
        "until such time as" : ["until"],
        utilization : ["use"],
        utilize : ["use"],
        validate : ["confirm"],
        "various different" : ["various", "different"],
        "whether or not" : ["whether"],
        "with respect to" : ["on", "about"],
        "with the exception of" : ["except for"],
        witnessed : ["saw", "seen"]
    };
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /** @type {boolean} */
    exports.__esModule = true;
    var _react = __webpack_require__(1);
    exports.default = _react.PropTypes.shape({
        subscribe : _react.PropTypes.func.isRequired,
        dispatch : _react.PropTypes.func.isRequired,
        getState : _react.PropTypes.func.isRequired
    });
}, function(canCreateDiscussions, exports) {
    /**
     * @param {!Array} value
     * @return {undefined}
     */
    function getCallbackFromUserFriendlyCallbackArgument(value) {
        if ("undefined" != typeof console && "function" == typeof console.error) {
            console.error(value);
        }
        try {
            throw new Error(value);
        } catch (e) {
        }
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(!Array): undefined} */
    exports.default = getCallbackFromUserFriendlyCallbackArgument;
}, function(canCreateDiscussions, exports) {
    /**
     * @return {?}
     */
    function compose() {
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
        }
        if (0 === args.length) {
            return function(result) {
                return result;
            };
        }
        if (1 === args.length) {
            return args[0];
        }
        var r = args[args.length - 1];
        /** @type {!Array<?>} */
        var left = args.slice(0, -1);
        return function() {
            return left.reduceRight(function(e, enterEventHandler) {
                return enterEventHandler(e);
            }, r.apply(void 0, arguments));
        };
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(): ?} */
    exports.default = compose;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!Array} a
     * @param {!Object} value
     * @param {!Function} callback
     * @return {?}
     */
    function init(a, value, callback) {
        /**
         * @return {undefined}
         */
        function publish() {
            if (v === s) {
                v = s.slice();
            }
        }
        /**
         * @return {?}
         */
        function getState() {
            return ret;
        }
        /**
         * @param {!Array} value
         * @return {?}
         */
        function subscribe(value) {
            if ("function" != typeof value) {
                throw new Error("Expected listener to be a function.");
            }
            /** @type {boolean} */
            var t = true;
            return publish(), v.push(value), function() {
                if (t) {
                    /** @type {boolean} */
                    t = false;
                    publish();
                    var o = v.indexOf(value);
                    v.splice(o, 1);
                }
            };
        }
        /**
         * @param {!Object} type
         * @return {?}
         */
        function dispatch(type) {
            if (!(0, _prepareStyleProperties2.default)(type)) {
                throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            }
            if ("undefined" == typeof type.type) {
                throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            }
            if (m) {
                throw new Error("Reducers may not dispatch actions.");
            }
            try {
                /** @type {boolean} */
                m = true;
                ret = merge(ret, type);
            } finally {
                /** @type {boolean} */
                m = false;
            }
            var t = s = v;
            /** @type {number} */
            var k = 0;
            for (; k < t.length; k++) {
                t[k]();
            }
            return type;
        }
        /**
         * @param {!Function} nextReducer
         * @return {undefined}
         */
        function replaceReducer(nextReducer) {
            if ("function" != typeof nextReducer) {
                throw new Error("Expected the nextReducer to be a function.");
            }
            /** @type {!Function} */
            merge = nextReducer;
            dispatch({
                type : ActionTypes.INIT
            });
        }
        /**
         * @return {?}
         */
        function observable() {
            var _ref;
            /** @type {function(!Array): ?} */
            var outerSubscribe = subscribe;
            return _ref = {
                subscribe : function(args) {
                    /**
                     * @return {undefined}
                     */
                    function update() {
                        if (args.next) {
                            args.next(getState());
                        }
                    }
                    if ("object" != typeof args) {
                        throw new TypeError("Expected the observer to be an object.");
                    }
                    update();
                    var unsubscribe = outerSubscribe(update);
                    return {
                        unsubscribe : unsubscribe
                    };
                }
            }, _ref[_symbolObservable2.default] = function() {
                return this;
            }, _ref;
        }
        var _ref2;
        if ("function" == typeof value && "undefined" == typeof callback && (callback = value, value = void 0), "undefined" != typeof callback) {
            if ("function" != typeof callback) {
                throw new Error("Expected the enhancer to be a function.");
            }
            return callback(init)(a, value);
        }
        if ("function" != typeof a) {
            throw new Error("Expected the reducer to be a function.");
        }
        /** @type {!Array} */
        var merge = a;
        /** @type {!Object} */
        var ret = value;
        /** @type {!Array} */
        var s = [];
        var v = s;
        /** @type {boolean} */
        var m = false;
        return dispatch({
            type : ActionTypes.INIT
        }), _ref2 = {
            dispatch : dispatch,
            subscribe : subscribe,
            getState : getState,
            replaceReducer : replaceReducer
        }, _ref2[_symbolObservable2.default] = observable, _ref2;
    }
    /** @type {boolean} */
    exports.__esModule = true;
    exports.ActionTypes = void 0;
    /** @type {function(!Array, !Object, !Function): ?} */
    exports.default = init;
    var _prepareStyleProperties = __webpack_require__(10);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _symbolObservable = __webpack_require__(73);
    var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
    var ActionTypes = exports.ActionTypes = {
        INIT : "@@redux/INIT"
    };
}, function(canCreateDiscussions, exports) {
    /**
     * @param {!Array} value
     * @return {undefined}
     */
    function getCallbackFromUserFriendlyCallbackArgument(value) {
        if ("undefined" != typeof console && "function" == typeof console.error) {
            console.error(value);
        }
        try {
            throw new Error(value);
        } catch (e) {
        }
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(!Array): undefined} */
    exports.default = getCallbackFromUserFriendlyCallbackArgument;
}, function(module, canCreateDiscussions) {
    module.exports = Immutable;
}, function(canCreateDiscussions, BeautifulProperties, make) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
        value : true
    });
    BeautifulProperties.onTabAction = BeautifulProperties.onChangeAction = BeautifulProperties.overridePastedTextAction = BeautifulProperties.handleKeyCommandAction = BeautifulProperties.decreaseIndentAction = void 0;
    var out = make(5);
    /**
     * @param {!Array} state
     * @return {?}
     */
    BeautifulProperties.decreaseIndentAction = function(state) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : (0, out.decreaseIndent)(state)
        };
    };
    /**
     * @param {!Array} state
     * @param {!Object} props
     * @return {?}
     */
    BeautifulProperties.handleKeyCommandAction = function(state, props) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : (0, out.handleKeyCommand)(state, props)
        };
    };
    /**
     * @param {!Array} state
     * @param {!Object} props
     * @param {!Function} data
     * @return {?}
     */
    BeautifulProperties.overridePastedTextAction = function(state, props, data) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : (0, out.overridePaste)(state, props, data)
        };
    };
    /**
     * @param {!Array} value
     * @return {?}
     */
    BeautifulProperties.onChangeAction = function(value) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : value
        };
    };
    /**
     * @param {!Array} state
     * @param {!Object} props
     * @return {?}
     */
    BeautifulProperties.onTabAction = function(state, props) {
        return {
            type : "UPDATE_EDITOR_CONTENT_STATE",
            editorState : (0, out.handleTab)(state, props)
        };
    };
}, function(canCreateDiscussions, res) {
    Object.defineProperty(res, "__esModule", {
        value : true
    });
    /**
     * @param {!Object} type
     * @param {!Object} data
     * @return {?}
     */
    var n = function(type, data) {
        return {
            type : "STATS_TRACK_BLOCK",
            key : type,
            stats : data
        };
    };
    /** @type {function(!Object, !Object): ?} */
    res.default = n;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _createClass = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    var Store = function(_EventEmitter) {
        /**
         * @param {?} data
         * @return {?}
         */
        function Agent(data) {
            _classCallCheck(this, Agent);
            var options = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
            return options.onHover = function(event) {
                return options.props.showTooltip({
                    word : options.props.children[0].props.text,
                    blockKey : options.props.children[0].props.blockKey,
                    offsetInText : options.props.children[0].props.start,
                    type : options.props.type,
                    trailingSpace : options.props.trailingSpace,
                    event : event
                });
            }, options.blur = function() {
                return options.props.hideTooltip();
            }, options;
        }
        return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
            key : "render",
            value : function() {
                return _react2.default.createElement("span", {
                    className : this.props.type.toLowerCase(),
                    onMouseEnter : "edit" === this.props.editMode ? this.onHover : null,
                    onMouseLeave : "edit" === this.props.editMode ? this.blur : null
                }, this.props.children);
            }
        }]), Agent;
    }(_react2.default.Component);
    Store.propTypes = {
        type : _react2.default.PropTypes.string.isRequired,
        children : _react2.default.PropTypes.array.isRequired,
        trailingSpace : _react2.default.PropTypes.bool.isRequired,
        showTooltip : _react2.default.PropTypes.func.isRequired,
        hideTooltip : _react2.default.PropTypes.func.isRequired,
        editMode : _react2.default.PropTypes.string.isRequired
    };
    exports.default = Store;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    /**
     * @param {!Object} data
     * @return {?}
     */
    var Component = function(data) {
        return _react2.default.createElement("a", {
            href : data.href
        }, data.children);
    };
    Component.propTypes = {
        href : _react2.default.PropTypes.string.isRequired,
        children : _react2.default.PropTypes.any
    };
    Component.defaultProps = {
        children : ""
    };
    /** @type {function(!Object): ?} */
    exports.default = Component;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _createClass = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    var root = __webpack_require__(6);
    var _prepareStyleProperties = __webpack_require__(46);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _UiIcon = __webpack_require__(5);
    var Tabs = function(_EventEmitter) {
        /**
         * @param {?} data
         * @return {?}
         */
        function Agent(data) {
            _classCallCheck(this, Agent);
            var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
            return _this.initialEditorState = (0, _prepareStyleProperties2.default)(_this.props.trackBlock), _this.bindKeys = _this.bindKeys.bind(_this), _this.handleKeyCommand = _this.handleKeyCommand.bind(_this), _this.overridePastedText = _this.overridePastedText.bind(_this), _this.onTab = _this.onTab.bind(_this), _this.focusEditor = function() {
                var e = _this.props.editorState.getSelection().getHasFocus();
                if (!e) {
                    _this.editor.focus();
                }
            }, _this;
        }
        return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
            key : "componentDidMount",
            value : function() {
                this.props.onChange(this.initialEditorState);
                var editor = this.editor.refs.editor;
                editor.setAttribute("data-gramm", "false");
            }
        }, {
            key : "componentDidUpdate",
            value : function() {
                (0, _UiIcon.trackLastBlockAfterSplit)(this.props.editorState, this.props.trackBlock);
                if (!this.props.showURLInput) {
                    this.focusEditor();
                }
            }
        }, {
            key : "onTab",
            value : function(value) {
                return this.props.onTab(this.props.editorState, value), true;
            }
        }, {
            key : "bindKeys",
            value : function(key) {
                var _checkString = root.KeyBindingUtil.hasCommandModifier;
                var storedRecord = _checkString(key);
                return 74 === key.keyCode && storedRecord ? "write-edit" : 75 === key.keyCode && storedRecord ? "show-url-input" : 13 === key.keyCode && (0, _UiIcon.isOnEmptyListItem)(this.props.editorState) ? "decrease-indent" : (0, root.getDefaultKeyBinding)(key);
            }
        }, {
            key : "handleKeyCommand",
            value : function(value) {
                /** @type {boolean} */
                var t = "code" === value || "underline" === value;
                return !t && ("write-edit" === value ? (this.props.toggleWriteEdit(), true) : "show-url-input" === value ? (this.props.turnOnURLInput(), true) : "decrease-indent" === value ? (this.props.decreaseIndent(this.props.editorState), true) : ("bold" === value || "italic" === value) && (this.props.handleKeyCommand(this.props.editorState, value), true));
            }
        }, {
            key : "overridePastedText",
            value : function render(value, n) {
                /**
                 * @param {!Object} n
                 * @return {?}
                 */
                var s = function(n) {
                    return n.match(/^<meta charset='utf-8'><[a-z0-9]+ class="" data-block="true"/);
                };
                if (n && !s(n)) {
                    var props = this.props;
                    var key = props.editorState;
                    var e = props.overridePastedText;
                    return e(key, value, n), true;
                }
                return false;
            }
        }, {
            key : "render",
            value : function() {
                var win = this;
                var editorState = this.props.editorState ? this.props.editorState : this.initialEditorState;
                return _react2.default.createElement("div", {
                    className : "hemingway-editor-draft-container"
                }, _react2.default.createElement(root.Editor, {
                    editorState : editorState,
                    handleKeyCommand : this.handleKeyCommand,
                    handlePastedText : this.overridePastedText,
                    keyBindingFn : this.bindKeys,
                    onChange : this.props.onChange,
                    onTab : this.onTab,
                    placeholder : "Type or paste something to get started...",
                    ref : function(name) {
                        /** @type {!HTMLElement} */
                        win.editor = name;
                    },
                    spellCheck : true
                }));
            }
        }]), Agent;
    }(_react2.default.Component);
    Tabs.propTypes = {
        decreaseIndent : _react2.default.PropTypes.func.isRequired,
        editorState : _react2.default.PropTypes.object.isRequired,
        handleKeyCommand : _react2.default.PropTypes.func.isRequired,
        overridePastedText : _react2.default.PropTypes.func.isRequired,
        onChange : _react2.default.PropTypes.func.isRequired,
        onTab : _react2.default.PropTypes.func.isRequired,
        showURLInput : _react2.default.PropTypes.bool.isRequired,
        toggleWriteEdit : _react2.default.PropTypes.func.isRequired,
        trackBlock : _react2.default.PropTypes.func.isRequired,
        turnOnURLInput : _react2.default.PropTypes.func.isRequired
    };
    exports.default = Tabs;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    var _CalendarDay = __webpack_require__(39);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _CalendarEvent = __webpack_require__(42);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _prepareStyleProperties = __webpack_require__(41);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(43);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(44);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    /**
     * @param {!Array} options
     * @return {?}
     */
    var component = function(options) {
        return _react2.default.createElement("div", {
            id : "hemingway-container",
            className : "hemingway-editor-" + options.editMode
        }, _react2.default.createElement("div", {
            className : "hemingway-sidebar"
        }, _react2.default.createElement(_UiIcon2.default, null), _react2.default.createElement("img", {
            className : "hemingway-logo",
            src : "img/logo.png",
            alt : "Hemingway Logo"
        }), _react2.default.createElement(_prepareStyleProperties2.default, null)), _react2.default.createElement("div", {
            className : "hemingway-editor-container"
        }, _react2.default.createElement("div", {
            className : "hemingway-editor-components-container"
        }, _react2.default.createElement(_CalendarEvent2.default, null), _react2.default.createElement(_CalendarDay2.default, null)), _react2.default.createElement(_normalizeDataUri2.default, null)));
    };
    component.propTypes = {
        editMode : _react2.default.PropTypes.string.isRequired
    };
    /** @type {function(!Array): ?} */
    exports.default = component;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} x
     * @param {!Function} y
     * @return {undefined}
     */
    function error(x, y) {
        if (!(x instanceof y)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} fn
     * @param {string} t
     * @return {?}
     */
    function $(fn, t) {
        if (!fn) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !t || "object" != typeof t && "function" != typeof t ? fn : t;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    exports.getHighlightCommentary = exports.formatTime = exports.getCappedReadingLevel = exports.getReadabilityLabel = void 0;
    var _createClass = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    var _deepAssign = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var property = __webpack_require__(9);
    /** @type {function(?): ?} */
    var toArray = exports.getReadabilityLabel = function(diff) {
        switch(diff) {
            case _deepAssign2.default.readability.veryHard:
                return "Poor";
            case _deepAssign2.default.readability.hard:
                return "OK";
            default:
                return "Good";
        }
    };
    /** @type {function(number): ?} */
    var value = exports.getCappedReadingLevel = function(aRoundNumber) {
        return aRoundNumber > 16 ? "Post-graduate" : "Grade " + aRoundNumber;
    };
    /**
     * @param {number} fn
     * @return {?}
     */
    var prompt = function(fn) {
        return fn > 14 ? 14 : fn >= 10 ? 9 : null;
    };
    /**
     * @param {number} num
     * @return {?}
     */
    var SetBadgeText = function(num) {
        return num < 1 ? "00" : num < 10 ? "0" + num : num;
    };
    /** @type {function(): ?} */
    var indexOf = exports.formatTime = function() {
        var as_milliseconds = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        /** @type {number} */
        var DD = Math.floor(as_milliseconds / 3600) || 0;
        /** @type {number} */
        var hh = Math.floor((as_milliseconds - 3600 * DD) / 60) || 0;
        /** @type {number} */
        var mm = Math.floor(as_milliseconds - 3600 * DD - 60 * hh) || 0;
        /** @type {function(number): ?} */
        var addZeorn = SetBadgeText;
        return addZeorn(DD) + ":" + addZeorn(hh) + ":" + addZeorn(mm);
    };
    /**
     * @param {!Object} node
     * @return {?}
     */
    var fn = function(node) {
        return _react2.default.createElement("div", {
            key : node.name,
            className : "hemingway-stat"
        }, _react2.default.createElement("em", null, node.name), ": ", _react2.default.createElement("strong", null, "Reading time" === node.name ? indexOf(node.value) : node.value));
    };
    /** @type {function(!Object, number, number): ?} */
    var changeValueR = exports.getHighlightCommentary = function(x, y, theta) {
        /** @type {number} */
        var max = Math.round(theta / 3);
        /** @type {number} */
        var value = Math.round(y / 5);
        switch(x.name) {
            case "adverbs":
                return " adverb" + (1 !== x.value ? "s" : "") + (0 === x.value ? ". Well done." : (x.value <= max ? ", meeting the goal of " : ". Aim for ") + (max + " or fewer."));
            case "passiveVoices":
                return " use" + (1 === x.value ? "" : "s") + " of passive voice" + (0 === x.value ? ". Nice work." : (x.value <= value ? ", meeting the goal of " : ". Cut to ") + (value + " or fewer."));
            case "complexWords":
                return " phrase" + (1 === x.value ? " has a simpler alternative." : "s have simpler alternatives.");
            default:
                return " of " + y + " sentences " + (1 === x.value ? "is " : "are ") + ("veryHardSentences" === x.name ? "very " : "") + "hard to read.";
        }
    };
    /**
     * @param {?} val
     * @param {undefined} key
     * @return {?}
     */
    var get = function(val, key) {
        var x = toArray(val);
        var len = prompt(key);
        return _react2.default.createElement("p", null, _react2.default.createElement("strong", null, "" + x), len ? ". Aim for " + len + "." : null);
    };
    /**
     * @param {!Object} data
     * @param {undefined} key
     * @param {undefined} value
     * @return {?}
     */
    var render = function(data, key, value) {
        return Object.keys(data).map(function(region) {
            return {
                name : region,
                value : data[region]
            };
        }).map(function(item) {
            /**
             * @param {string} remainingTime
             * @return {?}
             */
            var next = function(remainingTime) {
                return "hardSentences" === remainingTime ? _deepAssign2.default.readability.hard.toLowerCase() : "veryHardSentences" === remainingTime ? _deepAssign2.default.readability.veryHard.toLowerCase() : remainingTime.substr(0, remainingTime.length - 1).toLowerCase();
            };
            return _react2.default.createElement("div", {
                key : item.name,
                className : "hemingway-highlight-item " + next(item.name)
            }, _react2.default.createElement("strong", {
                className : "hemingway-highlight-item-value"
            }, item.value), changeValueR(item, key, value));
        });
    };
    var EventCalendar = function(e) {
        /**
         * @param {?} vars
         * @return {?}
         */
        function t(vars) {
            error(this, t);
            var self = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, vars));
            return self.toggleShowMore = self.toggleShowMore.bind(self), self.state = {
                showAllStats : false
            }, self;
        }
        return _inherits(t, e), _createClass(t, [{
            key : "getStatItems",
            value : function(value) {
                var localTask = this;
                /** @type {!Array<string>} */
                var replaceArr = Object.keys(value);
                return replaceArr.filter(function(key) {
                    return !!localTask.state.showAllStats || "words" === key;
                }).filter(function(sceneUid) {
                    return ["readability", "highlights", "readingLevel"].indexOf(sceneUid) === -1;
                }).map(function(k) {
                    return {
                        value : value[k],
                        name : (0, property.capitalize)("readingSeconds" === k ? "reading time" : k)
                    };
                }).map(function(node) {
                    return fn(node);
                });
            }
        }, {
            key : "toggleShowMore",
            value : function() {
                this.setState({
                    showAllStats : !this.state.showAllStats
                });
            }
        }, {
            key : "render",
            value : function() {
                var data = this.props.stats;
                var width = data.sentences;
                var check = data.paragraphs;
                var nodes = data.highlights;
                var field = data.readability;
                var i = data.readingLevel;
                /** @type {string} */
                var characters = this.state.showAllStats ? "Less" : "More";
                return _react2.default.createElement("div", {
                    className : "hemingway-stats-container"
                }, _react2.default.createElement("hr", null), _react2.default.createElement("div", {
                    className : "hemingway-readability-label-container"
                }, _react2.default.createElement("h3", {
                    className : "hemingway-readability-title"
                }, "Readability"), _react2.default.createElement("h4", {
                    className : "hemingway-readability-" + field.toLowerCase()
                }, value(i)), _react2.default.createElement("p", {
                    className : "hemingway-readability-label-aside"
                }, get(field, i))), _react2.default.createElement("hr", null), _react2.default.createElement("div", {
                    className : "hemingway-stat-items-container"
                }, this.getStatItems(data), _react2.default.createElement("div", {
                    className : "hemingway-show-more-container"
                }, _react2.default.createElement("button", {
                    className : "hemingway-show-more-btn",
                    onClick : this.toggleShowMore
                }, "Show ", characters, _react2.default.createElement("span", {
                    className : "hemingway-arrow-" + characters.toLowerCase()
                }, " ")))), _react2.default.createElement("hr", null), _react2.default.createElement("div", {
                    className : "hemingway-highlight-items-container"
                }, render(nodes, width, check)));
            }
        }]), t;
    }(_react2.default.Component);
    EventCalendar.propTypes = {
        stats : _react2.default.PropTypes.object.isRequired
    };
    exports.default = EventCalendar;
}, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _react = require(1);
    var _react2 = _interopRequireDefault(_react);
    var _suggestItem = require(7);
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    /** @type {!Array} */
    var navLinksArr = [{
        label : "H1",
        style : "header-one"
    }, {
        label : "H2",
        style : "header-two"
    }, {
        label : "H3",
        style : "header-three"
    }, {
        label : "Quote",
        style : "blockquote"
    }, {
        label : "Bullets",
        style : "unordered-list-item"
    }, {
        label : "Numbers",
        style : "ordered-list-item"
    }];
    /**
     * @param {!Window} editorState
     * @return {?}
     */
    var getCurrentBlock = function(editorState) {
        var selection = editorState.getSelection();
        return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    };
    /**
     * @param {!Array} props
     * @return {?}
     */
    var render = function(props) {
        return _react2.default.createElement("div", {
            className : "hemingway-richtext-block-container"
        }, navLinksArr.map(function(options) {
            return _react2.default.createElement(_suggestItem2.default, {
                key : options.label,
                active : options.style === getCurrentBlock(props.editorState),
                label : options.label,
                onToggle : props.toggleBlockType,
                styleName : options.style
            });
        }));
    };
    render.propTypes = {
        toggleBlockType : _react2.default.PropTypes.func.isRequired,
        editorState : _react2.default.PropTypes.object.isRequired
    };
    /** @type {function(!Array): ?} */
    exports.default = render;
}, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _react = require(1);
    var _react2 = _interopRequireDefault(_react);
    var _suggestItem = require(7);
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    /** @type {!Array} */
    var navLinksArr = [{
        label : "Bold",
        style : "BOLD"
    }, {
        label : "Italic",
        style : "ITALIC"
    }];
    /**
     * @param {?} cesiumWidget
     * @return {?}
     */
    var _ = function(cesiumWidget) {
        return cesiumWidget.getCurrentInlineStyle();
    };
    /**
     * @param {!Array} props
     * @return {?}
     */
    var render = function(props) {
        return _react2.default.createElement("div", {
            className : "hemingway-richtext-inline-container"
        }, navLinksArr.map(function(options) {
            return _react2.default.createElement(_suggestItem2.default, {
                key : options.label,
                active : _(props.editorState).has(options.style),
                label : options.label,
                onToggle : props.toggleInlineStyle,
                styleName : options.style
            });
        }));
    };
    render.propTypes = {
        toggleInlineStyle : _react2.default.PropTypes.func.isRequired,
        editorState : _react2.default.PropTypes.object.isRequired
    };
    /** @type {function(!Array): ?} */
    exports.default = render;
}, function(canCreateDiscussions, data, require) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    Object.defineProperty(data, "__esModule", {
        value : true
    });
    var _createClass = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _react = require(1);
    var _react2 = _interopRequireDefault(_react);
    var _suggestItem = require(7);
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var res = {
        url : ""
    };
    var _this = function(_EventEmitter) {
        /**
         * @param {?} data
         * @return {?}
         */
        function Agent(data) {
            _classCallCheck(this, Agent);
            var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
            return _this.state = res, _this.onToggle = _this.onToggle.bind(_this), _this.onChange = _this.onChange.bind(_this), _this.onKeyUp = _this.onKeyUp.bind(_this), _this.saveUrl = _this.saveUrl.bind(_this), _this.cancel = _this.cancel.bind(_this), _this;
        }
        return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
            key : "componentDidUpdate",
            value : function() {
                if (this.props.showURLInput) {
                    this.focus();
                }
            }
        }, {
            key : "onChange",
            value : function(value) {
                this.setState({
                    url : value.target.value
                });
            }
        }, {
            key : "onKeyUp",
            value : function(obj) {
                if (13 === obj.keyCode) {
                    this.saveUrl();
                }
            }
        }, {
            key : "onToggle",
            value : function() {
                if (!this.props.showURLInput) {
                    this.props.turnOnURLInput();
                }
            }
        }, {
            key : "focus",
            value : function() {
                this.url.focus();
            }
        }, {
            key : "clearURL",
            value : function() {
                this.setState({
                    url : ""
                });
            }
        }, {
            key : "cancel",
            value : function() {
                this.clearURL();
                this.props.turnOffURLInput();
            }
        }, {
            key : "saveUrl",
            value : function() {
                this.props.toggleLink(this.props.editorState, this.state.url);
                this.clearURL();
            }
        }, {
            key : "render",
            value : function() {
                var formGroupScope = this;
                return _react2.default.createElement("div", null, _react2.default.createElement(_suggestItem2.default, {
                    active : false,
                    label : "Link",
                    styleName : "link",
                    onToggle : this.onToggle
                }), this.props.showURLInput ? _react2.default.createElement("div", {
                    className : "hemingway-richtext-url-input-container"
                }, _react2.default.createElement("input", {
                    type : "text",
                    onChange : this.onChange,
                    onKeyUp : this.onKeyUp,
                    placeholder : "Enter a URL to link to...",
                    ref : function(x) {
                        /** @type {string} */
                        formGroupScope.url = x;
                    }
                }), _react2.default.createElement("button", {
                    onClick : this.saveUrl
                }, "Save"), _react2.default.createElement("button", {
                    onClick : this.cancel
                }, "Cancel")) : null);
            }
        }]), Agent;
    }(_react2.default.Component);
    _this.propTypes = {
        editorState : _react2.default.PropTypes.object.isRequired,
        toggleLink : _react2.default.PropTypes.func.isRequired,
        showURLInput : _react2.default.PropTypes.bool.isRequired,
        turnOnURLInput : _react2.default.PropTypes.func.isRequired,
        turnOffURLInput : _react2.default.PropTypes.func.isRequired
    };
    data.default = _this;
}, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _createClass = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _react = require(1);
    var _react2 = _interopRequireDefault(_react);
    var _suggestItem = require(31);
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = require(32);
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _prepareStyleProperties = require(33);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var EventCalendar = function(_EventEmitter) {
        /**
         * @param {?} props
         * @return {?}
         */
        function RichEditor(props) {
            _classCallCheck(this, RichEditor);
            var _this = _possibleConstructorReturn(this, (RichEditor.__proto__ || Object.getPrototypeOf(RichEditor)).call(this, props));
            return _this.toggleBlockType = function(type) {
                return _this.props.toggleBlockType(_this.props.editorState, type);
            }, _this.toggleInlineStyle = function(value) {
                return _this.props.toggleInlineStyle(_this.props.editorState, value);
            }, _this;
        }
        return _inherits(RichEditor, _EventEmitter), _createClass(RichEditor, [{
            key : "render",
            value : function() {
                return _react2.default.createElement("div", {
                    className : "hemingway-richtext-toolbar-container"
                }, _react2.default.createElement("div", {
                    className : "hemingway-richtext-toolbar-inner-container " + (this.props.showURLInput ? "hemingway-show-url-input" : "")
                }, _react2.default.createElement(_suggestList2.default, {
                    toggleInlineStyle : this.toggleInlineStyle,
                    editorState : this.props.editorState
                }), _react2.default.createElement(_suggestItem2.default, {
                    toggleBlockType : this.toggleBlockType,
                    editorState : this.props.editorState
                }), _react2.default.createElement(_prepareStyleProperties2.default, {
                    toggleLink : this.props.toggleLink,
                    editorState : this.props.editorState,
                    showURLInput : this.props.showURLInput,
                    turnOnURLInput : this.props.turnOnURLInput,
                    turnOffURLInput : this.props.turnOffURLInput
                })));
            }
        }]), RichEditor;
    }(_react2.default.Component);
    EventCalendar.propTypes = {
        editorState : _react2.default.PropTypes.object.isRequired,
        toggleBlockType : _react2.default.PropTypes.func.isRequired,
        toggleInlineStyle : _react2.default.PropTypes.func.isRequired,
        toggleLink : _react2.default.PropTypes.func.isRequired,
        showURLInput : _react2.default.PropTypes.bool.isRequired,
        turnOnURLInput : _react2.default.PropTypes.func.isRequired,
        turnOffURLInput : _react2.default.PropTypes.func.isRequired
    };
    exports.default = EventCalendar;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} x
     * @param {!Function} y
     * @return {undefined}
     */
    function _init(x, y) {
        if (!(x instanceof y)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _createClass = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    var _deepAssign = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var defaults = {
        message : "",
        replacements : [],
        word : "",
        blockKey : "",
        offsetInText : 0,
        offsetLeft : 0,
        offsetTop : 0,
        type : "",
        showTooltip : false,
        trailingSpace : false
    };
    /**
     * @param {?} textPositions
     * @return {?}
     */
    var check = function(textPositions) {
        switch(textPositions) {
            case _deepAssign2.default.tokens.adverb:
                return "Adverb";
            case _deepAssign2.default.tokens.qualifier:
                return "Qualifier";
            case _deepAssign2.default.tokens.vaguePhrase:
                return "Vague";
            case _deepAssign2.default.tokens.passiveVoice:
                return "Passive Voice";
            case _deepAssign2.default.tokens.complexWord:
                return "Complex";
            case _deepAssign2.default.tokens.buzzword:
                return "Business jargon";
            case _deepAssign2.default.tokens.cliche:
                return "Clich\u00c3\u00a9";
            default:
                return "";
        }
    };
    var EventCalendar = function(_EventEmitter) {
        /**
         * @param {?} data
         * @return {?}
         */
        function Agent(data) {
            _init(this, Agent);
            var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
            return _this.onHover = _this.onHover.bind(_this), _this.onBlur = _this.onBlur.bind(_this), _this.replaceString = _this.replaceString.bind(_this), _this.state = defaults, _this.timer = void 0, _this;
        }
        return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
            key : "componentWillReceiveProps",
            value : function(data) {
                var that = this;
                var n = this.state.showTooltip && !data.options.showTooltip;
                var r = this.state.showTooltip && (this.state.word !== data.options.word || this.state.blockKey !== data.options.blockKey);
                if (n) {
                    this.timer = window.setTimeout(function() {
                        return that.setState(data.options);
                    }, 500);
                } else {
                    if (r) {
                        this.resetTimer();
                        this.setState(data.options);
                    } else {
                        this.setState(data.options);
                    }
                }
            }
        }, {
            key : "onHover",
            value : function() {
                this.resetTimer();
            }
        }, {
            key : "onBlur",
            value : function() {
                this.setState({
                    showTooltip : false
                });
            }
        }, {
            key : "resetTimer",
            value : function() {
                window.clearTimeout(this.timer);
            }
        }, {
            key : "replaceString",
            value : function(type) {
                this.props.replaceString(this.props.editorState, {
                    blockKey : this.state.blockKey,
                    startIndex : this.state.offsetInText,
                    oldText : this.state.word,
                    newText : "omit" === type ? "" : type,
                    trailingSpace : this.state.trailingSpace
                });
                this.onBlur();
            }
        }, {
            key : "render",
            value : function() {
                var STATIC_ENCODER = this;
                var options = this.state;
                var header = options.message;
                var replace = options.replacements;
                var id = options.type;
                var left = options.offsetCenter;
                var from = options.offsetTop;
                var bottom = options.showTooltip;
                var title = check(id);
                return bottom ? _react2.default.createElement("div", {
                    className : "hemingway-tooltip " + id.toLowerCase(),
                    style : {
                        top : from + (window.pageYOffset - 46) - (replace.length > 0 ? 22 : 0) + "px",
                        left : left + window.pageXOffset - 3.6 * (title.length + header.length) + "px"
                    },
                    onMouseEnter : this.onHover,
                    onMouseLeave : this.onBlur
                }, _react2.default.createElement("h4", null, _react2.default.createElement("em", null, title), ": ", header), _react2.default.createElement("div", {
                    className : "hemingway-tooltip-suggestions-container"
                }, replace.map(function(index) {
                    return _react2.default.createElement("button", {
                        className : "hemingway-tooltip-suggestion",
                        key : index,
                        onClick : function() {
                            return STATIC_ENCODER.replaceString(index);
                        }
                    }, index);
                }))) : null;
            }
        }]), Agent;
    }(_react2.default.Component);
    EventCalendar.propTypes = {
        replaceString : _react2.default.PropTypes.func.isRequired,
        editorState : _react2.default.PropTypes.object,
        options : _react2.default.PropTypes.object.isRequired
    };
    EventCalendar.defaultProps = {
        editorState : {}
    };
    exports.default = EventCalendar;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _react = __webpack_require__(1);
    var _react2 = _interopRequireDefault(_react);
    var property = __webpack_require__(9);
    /**
     * @param {?} format
     * @param {?} scale
     * @param {?} i
     * @return {?}
     */
    var render = function(format, scale, i) {
        /** @type {boolean} */
        var canPrev = format === i;
        /** @type {string} */
        var langClass = canPrev ? "" : "hemingway-inactive-btn";
        return _react2.default.createElement("button", {
            key : i,
            id : "hemingway-" + i + "-btn",
            className : langClass,
            onClick : canPrev ? null : function() {
                return scale(i);
            }
        }, (0, property.capitalize)(i));
    };
    /**
     * @param {!Array} options
     * @return {?}
     */
    var component = function(options) {
        return _react2.default.createElement("div", {
            className : "hemingway-edit-toggle-container"
        }, ["write", "edit"].map(function(length) {
            return render(options.editMode, options.toggleEditMode, length);
        }));
    };
    component.propTypes = {
        editMode : _react2.default.PropTypes.string.isRequired,
        toggleEditMode : _react2.default.PropTypes.func.isRequired
    };
    /** @type {function(!Array): ?} */
    exports.default = component;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @return {?}
     */
    function Tetromino() {
        return {
            readability : _deepAssign2.default.readability.normal,
            readingLevel : 0,
            readingSeconds : 0,
            letters : 0,
            characters : 0,
            words : 0,
            sentences : 0,
            paragraphs : 0,
            highlights : {
                adverbs : 0,
                passiveVoices : 0,
                complexWords : 0,
                hardSentences : 0,
                veryHardSentences : 0
            }
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    /** @type {function(): ?} */
    exports.default = Tetromino;
    var _deepAssign = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var c = __webpack_require__(3);
    var _prepareStyleProperties = __webpack_require__(1);
    var _Item = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(26));
    var _Item2 = _interopRequireDefault(_Item);
    var _bling = __webpack_require__(13);
    /**
     * @param {!Object} state
     * @return {?}
     */
    var mapStateToProps = function(state) {
        var args = state.editor;
        return {
            editMode : args.editMode
        };
    };
    var mapDispatchToProps = {
        hideTooltip : _bling.hideTooltipAction,
        showTooltip : _bling.showTooltipAction
    };
    t.default = (0, c.connect)(mapStateToProps, mapDispatchToProps)(_Item2.default);
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var _UiIcon = __webpack_require__(3);
    var _prepareStyleProperties = __webpack_require__(1);
    var _Item = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(28));
    var _Item2 = _interopRequireDefault(_Item);
    var PropTypes = __webpack_require__(24);
    var _deepAssign = __webpack_require__(25);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _classlist = __webpack_require__(12);
    var _normalizeDataUri = __webpack_require__(14);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    /**
     * @param {!Object} data
     * @return {?}
     */
    var render = function(data) {
        var editor = data.editor;
        var userSettings = data.toolbar;
        return {
            editorState : editor.editorState,
            showURLInput : userSettings.showURLInput
        };
    };
    var mapDispatchToProps = {
        decreaseIndent : PropTypes.decreaseIndentAction,
        handleKeyCommand : PropTypes.handleKeyCommandAction,
        onChange : PropTypes.onChangeAction,
        overridePastedText : PropTypes.overridePastedTextAction,
        onTab : PropTypes.onTabAction,
        trackBlock : _deepAssign2.default,
        toggleWriteEdit : _normalizeDataUri2.default,
        turnOnURLInput : _classlist.turnOnURLInputAction
    };
    t.default = (0, _UiIcon.connect)(render, mapDispatchToProps)(_Item2.default);
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var _UiIcon = __webpack_require__(3);
    var _prepareStyleProperties = __webpack_require__(29);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    /**
     * @param {!Object} state
     * @return {?}
     */
    var mapStateToProps = function(state) {
        var args = state.editor;
        return {
            editMode : args.editMode
        };
    };
    t.default = (0, _UiIcon.connect)(mapStateToProps, null)(_prepareStyleProperties2.default);
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var _prepareStyleProperties = __webpack_require__(1);
    var reverEnv = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(3));
    var _normalizeDataUri = __webpack_require__(30);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _deepAssign = __webpack_require__(54);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    /**
     * @param {!Object} self
     * @return {?}
     */
    var render = function(self) {
        var data = self.stats;
        var editor = self.editor;
        var end = data.blocks;
        var start = void 0;
        start = editor.editorState ? editor.editorState.getCurrentContent().getBlocksAsArray().map(function(ctor) {
            return ctor.getKey();
        }) : [];
        var result = _deepAssign2.default.getStats(start, end);
        return {
            stats : result
        };
    };
    t.default = (0, reverEnv.connect)(render)(_normalizeDataUri2.default);
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var c = __webpack_require__(3);
    var _prepareStyleProperties = __webpack_require__(1);
    var _Item = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(34));
    var _Item2 = _interopRequireDefault(_Item);
    var _bling = __webpack_require__(12);
    /**
     * @param {!Object} data
     * @return {?}
     */
    var render = function(data) {
        var editor = data.editor;
        var userSettings = data.toolbar;
        return {
            editorState : editor.editorState,
            showURLInput : userSettings.showURLInput
        };
    };
    var mapDispatchToProps = {
        toggleBlockType : _bling.toggleBlockTypeAction,
        toggleInlineStyle : _bling.toggleInlineStyleAction,
        toggleLink : _bling.toggleLinkAction,
        turnOnURLInput : _bling.turnOnURLInputAction,
        turnOffURLInput : _bling.turnOffURLInputAction
    };
    t.default = (0, c.connect)(render, mapDispatchToProps)(_Item2.default);
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var _UiIcon = __webpack_require__(3);
    var _prepareStyleProperties = __webpack_require__(1);
    var _Item = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(35));
    var _Item2 = _interopRequireDefault(_Item);
    var parsedParam = __webpack_require__(13);
    /**
     * @param {!Object} params
     * @return {?}
     */
    var render = function(params) {
        var options = params.tooltip;
        var props = params.editor;
        return {
            editorState : props.editorState,
            options : options
        };
    };
    var mapDispatchToProps = {
        replaceString : parsedParam.replaceStringAction
    };
    t.default = (0, _UiIcon.connect)(render, mapDispatchToProps)(_Item2.default);
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var _UiIcon = __webpack_require__(3);
    var _Item = __webpack_require__(36);
    var _Item2 = _interopRequireDefault(_Item);
    var _deepAssign = __webpack_require__(14);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    /**
     * @param {!Object} state
     * @return {?}
     */
    var mapStateToProps = function(state) {
        var args = state.editor;
        return {
            editMode : args.editMode
        };
    };
    var mapDispatchToProps = {
        toggleEditMode : _deepAssign2.default
    };
    t.default = (0, _UiIcon.connect)(mapStateToProps, mapDispatchToProps)(_Item2.default);
}, function(canCreateDiscussions, t, require) {
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var R = require(4);
    var renderAssign = require(5);
    /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    var render = function(time, params) {
        return (0, R.assoc)("editorState", (0, R.prop)("editorState", params))(time);
    };
    var fn = (0, R.over)((0, R.lensProp)("editMode"), (0, R.ifElse)((0, R.equals)("edit"), (0, R.always)("write"), (0, R.always)("edit")));
    var data = {
        editorState : (0, renderAssign.createEmptyEditorState)(),
        editMode : "edit"
    };
    /**
     * @return {?}
     */
    var csgPostProcess = function() {
        var d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : data;
        var cb = arguments[1];
        switch(cb.type) {
            case "UPDATE_EDITOR_CONTENT_STATE":
            case "UPDATE_EDITOR_CONTENT_STATE_AND_HIDE_URL":
                return render(d, cb);
            case "TOGGLE_WRITE_EDIT":
                return fn(d, cb);
            default:
                return d;
        }
    };
    /** @type {function(): ?} */
    t.default = csgPostProcess;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @return {?}
     */
    function fn() {
        var e = void 0;
        for (; void 0 === e || Object.prototype.hasOwnProperty.call(v, e) || !isNaN(+e);) {
            /** @type {string} */
            e = Math.floor(Math.random() * caveWidth).toString(32);
        }
        return v[e] = true, e;
    }
    /**
     * @return {?}
     */
    function process() {
        var navLinksArr = _deepAssign2.default.editorContent.split("\n");
        return navLinksArr.map(function(send_text, canCreateDiscussions) {
            return new _draftJs.ContentBlock({
                key : fn(),
                text : send_text,
                type : 1 === canCreateDiscussions ? "header-two" : "unstyled",
                characterList : (0, _repeat.List)((0, _repeat.Repeat)(_draftJs.CharacterMetadata.EMPTY, send_text.length))
            });
        });
    }
    /**
     * @param {?} p
     * @return {?}
     */
    function get(p) {
        var id = p.getLastBlock().getKey();
        var tmp = p.getBlockBefore(id).getKey();
        var cropVal = p.getBlockBefore(tmp).getKey();
        var selection = _draftJs.SelectionState.createEmpty(cropVal);
        var i = selection.merge({
            anchorOffset : 8,
            focusOffset : 14
        });
        var tagName = _draftJs.Modifier.applyInlineStyle(p, i, "BOLD");
        var opt = selection.merge({
            anchorOffset : 20,
            focusOffset : 24
        });
        var html = _draftJs.Modifier.applyInlineStyle(tagName, opt, "ITALIC");
        return html;
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _draftJs = __webpack_require__(6);
    var _repeat = __webpack_require__(23);
    var _deepAssign = __webpack_require__(58);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(51);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var v = {};
    /** @type {number} */
    var caveWidth = Math.pow(2, 24);
    /**
     * @param {!Array} value
     * @return {?}
     */
    var render = function(value) {
        var args = process();
        var a = _draftJs.ContentState.createFromBlockArray(args);
        var content = get(a);
        var contentz = _draftJs.EditorState.createWithContent(content, new _prepareStyleProperties2.default(value));
        return _draftJs.EditorState.moveFocusToEnd(contentz);
    };
    /** @type {function(!Array): ?} */
    exports.default = render;
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var _redux = __webpack_require__(11);
    var _deepAssign = __webpack_require__(45);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(48);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(50);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(49);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var offsetFromCenter = (0, _redux.combineReducers)({
        editor : _deepAssign2.default,
        stats : _prepareStyleProperties2.default,
        tooltip : _normalizeDataUri2.default,
        toolbar : _UiIcon2.default
    });
    t.default = offsetFromCenter;
}, function(canCreateDiscussions, exports) {
    /**
     * @param {?} v
     * @param {!Object} data
     * @return {?}
     */
    function next(v, data) {
        var id = data.key;
        var stats = data.stats;
        /** @type {!Object} */
        var result = Object.assign({}, v);
        var fObj = result.blocks.find(function(tok) {
            return tok.key === id;
        });
        return fObj ? fObj.stats = stats : result.blocks = result.blocks.concat([{
            key : id,
            stats : stats
        }]), result;
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var content = {
        blocks : []
    };
    /**
     * @return {?}
     */
    var parse = function() {
        var node = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : content;
        var category = arguments[1];
        switch(category.type) {
            case "STATS_TRACK_BLOCK":
                return next(node, category);
            default:
                return node;
        }
    };
    /** @type {function(): ?} */
    exports.default = parse;
}, function(canCreateDiscussions, exports, Resource) {
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var R = Resource(4);
    var acceptor_state_name = (0, R.lensProp)("showURLInput");
    var cb = (0, R.set)(acceptor_state_name, true);
    var actualResize = (0, R.set)(acceptor_state_name, false);
    var disp_w = {
        showURLInput : false
    };
    /**
     * @return {?}
     */
    var CepPromiseError = function() {
        var w = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : disp_w;
        var h = arguments[1];
        switch(h.type) {
            case "SHOW_URL_INPUT":
                return cb(w, h);
            case "HIDE_URL_INPUT":
            case "UPDATE_EDITOR_CONTENT_STATE_AND_HIDE_URL":
                return actualResize(w, h);
            default:
                return w;
        }
    };
    /** @type {function(): ?} */
    exports.default = CepPromiseError;
}, function(canCreateDiscussions, a, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!Event} target
     * @return {?}
     */
    function assign(target) {
        var rect = target.target.getBoundingClientRect();
        var triggerElementLeft = rect.left;
        var top = rect.top;
        var triggerElementWidth = rect.width;
        return {
            offsetTop : top,
            offsetCenter : triggerElementLeft + triggerElementWidth / 2
        };
    }
    /**
     * @param {?} schema
     * @param {!Object} options
     * @return {?}
     */
    function wrap(schema, options) {
        var opts = options.options;
        var usage = opts.word;
        var host = opts.type;
        var o = opts.event;
        /** @type {boolean} */
        var u = host === _deepAssign2.default.tokens.adverb || host === _deepAssign2.default.tokens.qualifier || host === _deepAssign2.default.tokens.vaguePhrase || host === _deepAssign2.default.tokens.passiveVoice || host === _deepAssign2.default.tokens.complexWord;
        if (u) {
            var props = assign(o);
            var opts = (0, _prepareStyleProperties2.default)(usage, host);
            /** @type {!Object} */
            var defaults = Object.assign({}, props, opts, options.options);
            return defaults.showTooltip = true, delete defaults.event, defaults;
        }
        return schema;
    }
    /**
     * @param {?} props
     * @return {?}
     */
    function next(props) {
        /** @type {!Object} */
        var defaults = Object.assign({}, props);
        return defaults.showTooltip = false, defaults;
    }
    Object.defineProperty(a, "__esModule", {
        value : true
    });
    var _deepAssign = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(55);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var bod = {
        showTooltip : false
    };
    /**
     * @return {?}
     */
    var f = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bod;
        var t = arguments[1];
        switch(t.type) {
            case "SHOW_TOOLTIP":
                return wrap(e, t);
            case "HIDE_TOOLTIP":
                return next(e, t);
            default:
                return e;
        }
    };
    /** @type {function(): ?} */
    a.default = f;
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} readableStream
     * @param {!Function} options
     * @return {undefined}
     */
    function store(readableStream, options) {
        if (!(readableStream instanceof options)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var incrementAndSave = function() {
        /**
         * @param {!Function} d
         * @param {string} props
         * @return {undefined}
         */
        function t(d, props) {
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                /** @type {boolean} */
                descriptor.configurable = true;
                if ("value" in descriptor) {
                    /** @type {boolean} */
                    descriptor.writable = true;
                }
                Object.defineProperty(d, descriptor.key, descriptor);
            }
        }
        return function(p, n, a) {
            return n && t(p.prototype, n), a && t(p, a), p;
        };
    }();
    var _list = __webpack_require__(23);
    var item = __webpack_require__(6);
    var _normalizeDataUri = __webpack_require__(1);
    var _deepAssign = (_interopRequireDefault(_normalizeDataUri), __webpack_require__(38));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(27);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _UiIcon = __webpack_require__(15);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = __webpack_require__(8);
    var _classlist2 = _interopRequireDefault(_classlist);
    var offsetFromCenter = function() {
        /**
         * @param {?} val
         * @return {undefined}
         */
        function self(val) {
            store(this, self);
            this.trackBlock = val;
        }
        return incrementAndSave(self, [{
            key : "getDecorations",
            value : function(type) {
                var fn = type.getText();
                var error = _UiIcon2.default.run(fn);
                this.trackBlock(type.getKey(), error.stats);
                var oldView = _classlist2.default.getSentences(error).reduce(function(dappId, whilstNext) {
                    return self.addHighlightsToDecorations(dappId, whilstNext);
                }, Array(fn.length).fill(null));
                var i = self.addEntitiesToDecorations(oldView, type, item.Entity);
                return (0, _list.List)(i);
            }
        }, {
            key : "getComponentForKey",
            value : function(value) {
                var idArray = value.split("-");
                var type = idArray[0];
                return "link" === type ? _prepareStyleProperties2.default : _deepAssign2.default;
            }
        }, {
            key : "getPropsForKey",
            value : function(value) {
                return self.getPropsForKeyActual(value, item.Entity);
            }
        }], [{
            key : "getPropsForKeyActual",
            value : function(s, name) {
                var arr = s.split("-");
                var type = arr[0];
                var r = arr[1];
                if ("link" === type) {
                    var i = r;
                    return {
                        href : name.get(i).getData().href
                    };
                }
                var str = r;
                return {
                    type : type,
                    trailingSpace : "true" === str
                };
            }
        }, {
            key : "addHighlightsToDecorations",
            value : function(data, value) {
                return value.highlights.forEach(function(params) {
                    var start = params.startIndex;
                    var index = params.endIndex;
                    var style = params.style;
                    var default_favicon = !!Object.prototype.hasOwnProperty.call(params, "trailingSpace") && params.trailingSpace;
                    var val = style + "-" + default_favicon.toString();
                    data.fill(val, start, index + 1);
                }), data;
            }
        }, {
            key : "addEntitiesToDecorations",
            value : function(obj, n, type) {
                /** @type {!Object} */
                var r = obj;
                var i = void 0;
                return n.findEntityRanges(function(charMetaData) {
                    return i = charMetaData.getEntity(), null !== i && "LINK" === type.get(i).getType();
                }, function(fn, module) {
                    r = r.fill("link-" + i, fn, module);
                }), r;
            }
        }]), self;
    }();
    t.default = offsetFromCenter;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _prepareStyleProperties = __webpack_require__(4);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _deepAssign = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _normalizeDataUri = __webpack_require__(8);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    /**
     * @param {!Object} criteria
     * @return {?}
     */
    var destroy = function(criteria) {
        return criteria.stats.readability === _deepAssign2.default.readability.hard;
    };
    /**
     * @param {!Object} metadata
     * @return {?}
     */
    var ResultSummary = function(metadata) {
        return metadata.stats.readability === _deepAssign2.default.readability.veryHard;
    };
    var e = _prepareStyleProperties2.default.either(destroy, ResultSummary);
    var elem = _prepareStyleProperties2.default.complement(e);
    /**
     * @param {!NodeList} t
     * @param {number} n
     * @param {?} a
     * @return {?}
     */
    var transform = function(t, n, a) {
        return t[n] = a, t;
    };
    var filter = _prepareStyleProperties2.default.curry(transform);
    var settings = {
        highlight : function(e) {
            return _normalizeDataUri2.default.iterateOverSentences(e, this.addHighlightsToSentence.bind(this)), e;
        },
        addHighlightsToSentence : function(query) {
            var self = _prepareStyleProperties2.default.ifElse(elem, this.getSimpleSentenceHighlights.bind(this), this.getComplexSentenceHighlights.bind(this));
            return _prepareStyleProperties2.default.pipe(self, filter(query, "highlights"))(query);
        },
        getSimpleSentenceHighlights : function(sec) {
            var playButtonImgFilename = this;
            return sec.tokens.map(function(pause) {
                return playButtonImgFilename.makeHighlightFromToken(pause);
            });
        },
        getComplexSentenceHighlights : function(config) {
            var assert = this;
            /** @type {!Array} */
            var toAndroid = [];
            var body = this.getTextHighlightAfterToken(config, config.startIndex, config.tokens);
            return body && toAndroid.push(body), config.tokens.reduce(function(r, tokens, slash, url) {
                var chunk = assert.makeHighlightFromToken(tokens);
                r.push(chunk);
                var body = assert.getLastIndex(tokens) + 1;
                var counter = url.slice(slash + 1);
                var n = assert.getTextHighlightAfterToken(config, body, counter);
                return n && r.push(n), r;
            }, toAndroid);
        },
        getTextHighlightAfterToken : function(value, i) {
            var object = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            if (object.length > 0) {
                var result = object[0];
                return this.makeHighlight(i, result.startIndex - 1, value.stats.readability);
            }
            var last = this.getLastIndex(value);
            /** @type {boolean} */
            var isDone = i <= last;
            return !!isDone && this.makeHighlight(i, last, value.stats.readability);
        },
        makeHighlightFromToken : function(state) {
            var start = state.startIndex;
            var index = this.getLastIndex(state);
            var facade = state.type;
            var previousAllowIn = state.trailingSpace;
            return this.makeHighlight(start, index, facade, previousAllowIn);
        },
        makeHighlight : function(start, end, color) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return {
                startIndex : start,
                endIndex : end,
                style : color,
                trailingSpace : r
            };
        },
        getLastIndex : function(state) {
            return state.startIndex + (state.text.length - 1);
        }
    };
    exports.default = settings;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    var _UiIcon = __webpack_require__(60);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = __webpack_require__(59);
    var _classlist2 = _interopRequireDefault(_classlist);
    var _deepAssign = __webpack_require__(17);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(61);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(2);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    /** @type {number} */
    var iConfig = 2e3;
    var Router = {
        parse : function() {
            var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            var registry = this.buildTreeFragment("root", text, 0);
            return this.buildTree(registry);
        },
        buildTree : function(data) {
            var that = this;
            return "word" !== data.type && (data.items = this.buildItems(data), data.items.forEach(function(data) {
                that.buildTree(data);
            }), "sentence" === data.type && (data.tokens = this.getTokens(data) || [])), data;
        },
        buildTreeFragment : function(attr, value, startIndex) {
            return {
                type : attr,
                text : value,
                startIndex : startIndex
            };
        },
        buildItems : function(data) {
            var separators = this.getItemDelimiter(data.type);
            var number_portion = this.splitString(data.text, separators);
            return this.getValidSubItems(number_portion, separators, data.type, data.startIndex);
        },
        getValidSubItems : function(recs, s, u, ml) {
            var util = this;
            var i = ml;
            /** @type {!RegExp} */
            var regex = new RegExp(s, "g");
            var options = this.getSubType(u);
            return recs.reduce(function(dataimport_handlers, stringToStrip, lists, value) {
                /** @type {string} */
                var s = stringToStrip;
                /** @type {boolean} */
                var l = !s.match(regex) && Object.prototype.hasOwnProperty.call(s, "length") && s.length > 0;
                if (l) {
                    if ("sentence" === options) {
                        s = util.fixBadSentenceSplit(s, lists, value, options);
                    }
                    var key = util.buildTreeFragment(options, s, i);
                    dataimport_handlers.push(key);
                }
                return i = i + s.length, dataimport_handlers;
            }, []);
        },
        fixBadSentenceSplit : function(source, name, params, app) {
            /** @type {string} */
            var result = source;
            /** @type {string} */
            var l = "Mr|Ms|Mrs|Dr|U\\.S|Col|Sgt|Lt|Adm|Maj|Sen|Rep|Jan|Feb|Apr|Mar|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec|Pvt|Cpl|Capt|Gen|Ave|St|inc|ft|Gov|Jr|Sr|ltd|Rev|M|Mme|Prof|Pres|Hon|etc|vs|\\.\\.|e\\.g|i\\.e|a\\.m|p\\.m|[A-Z]";
            /** @type {!RegExp} */
            var key = new RegExp("\\b(" + l + ")$");
            if (result.match(key) && params[name + 1] && params[name + 2]) {
                if (result = result + params[name + 1], params[name + 3] && params[name + 4]) {
                    var p = this.fixBadSentenceSplit(params[name + 2], name + 2, params, app);
                    result = result + p;
                } else {
                    result = result + params[name + 2];
                }
                /** @type {string} */
                params[name + 1] = "";
                /** @type {string} */
                params[name + 2] = "";
            }
            return result;
        },
        getItemDelimiter : function(type) {
            switch(type) {
                case "root":
                    return "[\n]+";
                case "paragraph":
                    return "[.?!]{1,2}[\"\u00e2\u20ac\u009d'\\)]?(?:\\s|$)";
                case "sentence":
                    return "[^\\w'-]";
                default:
                    return "";
            }
        },
        getSubType : function(name) {
            switch(name) {
                case "root":
                    return "paragraph";
                case "paragraph":
                    return "sentence";
                case "sentence":
                    return "word";
                default:
                    return "";
            }
        },
        splitString : function(string, separators) {
            /** @type {!RegExp} */
            var regexpSpecials = new RegExp("(" + separators + ")", "g");
            return string.split(regexpSpecials);
        },
        getTokens : function(name) {
            var t = this.getAdverbs(name);
            var result = this.getQualifiers(name);
            var options = this.getPassiveVoices(name);
            var parent = this.getComplexWords(name);
            return [].concat(t, result, options, parent).sort(function(api, indexPair) {
                return api.startIndex - indexPair.startIndex;
            });
        },
        getAdverbs : function(e) {
            var R = this;
            return e.items.filter(function(mail_object) {
                return mail_object.text.match(/ly$/);
            }).filter(function(indexedExport) {
                return void 0 === _UiIcon2.default[indexedExport.text.toLowerCase()];
            }).map(function(context) {
                return R.buildTreeFragment(_normalizeDataUri2.default.tokens.adverb, context.text, context.startIndex);
            }).map(function(n) {
                return R.addTrailingSpaceSetting(n, e);
            });
        },
        getQualifiers : function(e) {
            return this.findStringsInSentence(e, _prepareStyleProperties2.default, _normalizeDataUri2.default.tokens.qualifier);
        },
        getPassiveVoices : function(e) {
            var console = this;
            if (e.text.length > iConfig) {
                return [];
            }
            var eCfgEl = e.text.match(/\s(is|are|was|were|be|been|being)\s([a-z]{2,30})\b(\sby\b)?/gi);
            return eCfgEl ? eCfgEl.filter(function(textScript) {
                var aImmutable = textScript.match(/([a-z]+)\b(\sby\b)?$/i);
                if (!aImmutable) {
                    return false;
                }
                var value = aImmutable[1];
                var r = value.match(/ed$/) || void 0 !== _classlist2.default[value.toLowerCase()];
                return r;
            }).map(function(proxyValue) {
                return proxyValue.replace(/^\s/, "");
            }).map(function(random, total, value) {
                return console.buildTreeFragment(_normalizeDataUri2.default.tokens.passiveVoice, random, console.getPassiveIndex(e, random, total, value));
            }).map(function(n) {
                return console.addTrailingSpaceSetting(n, e);
            }) : [];
        },
        getPassiveIndex : function(match, i, n, s) {
            var start = match.startIndex;
            var l = match.text;
            /**
             * @param {!Array} _
             * @return {?}
             */
            var $ = function(_) {
                return _.filter(function(categoryStart) {
                    return i === categoryStart;
                });
            };
            var sa = $(s);
            /** @type {boolean} */
            var e = sa.length > 1;
            if (e) {
                var room = $(s.slice(0, n + 1));
                return room.reduce(function(firstVisibleNodeIndex, level) {
                    /** @type {number} */
                    var i = firstVisibleNodeIndex;
                    if (0 !== i) {
                        i = i + 1;
                    }
                    var rendered = l.substr(i);
                    var ind = rendered.indexOf(level);
                    return i + ind;
                }, 0) + start;
            }
            return start + l.indexOf(i);
        },
        getComplexWords : function(e) {
            return this.findStringsInSentence(e, _deepAssign2.default, _normalizeDataUri2.default.tokens.complexWord);
        },
        findStringsInSentence : function(a, item, area) {
            var t = this;
            if (a.text.length > iConfig) {
                return [];
            }
            /** @type {!Array} */
            var currentMaxTerms = [];
            /** @type {!RegExp} */
            var SLIDE_REGEXP = /\b[\w'-]+\b/gi;
            /** @type {!Array} */
            var current = [];
            var colNames = void 0;
            for (; colNames = SLIDE_REGEXP.exec(a.text);) {
                current.push({
                    text : colNames[0],
                    sentenceIndex : colNames.index
                });
            }
            return current.forEach(function(div, method) {
                var s = div.text;
                var i = div.sentenceIndex;
                /** @type {!Array} */
                var r = [s];
                if (current[method + 1] && current[method + 1].sentenceIndex === i + s.length + 1) {
                    r.push(s + " " + current[method + 1].text);
                    if (current[method + 2] && current[method + 2].sentenceIndex === i + 1 + r[1].length) {
                        r.push(r[1] + " " + current[method + 2].text);
                        if (current[method + 3] && current[method + 3].sentenceIndex === i + 1 + r[2].length) {
                            r.push(r[2] + " " + current[method + 3].text);
                        }
                    }
                }
                r.reverse().forEach(function(status) {
                    if (void 0 !== item[status.toLowerCase()]) {
                        var text = t.buildTreeFragment(area, status, a.startIndex + i);
                        var j = t.addTrailingSpaceSetting(text, a);
                        currentMaxTerms.push(j);
                    }
                });
            }), currentMaxTerms;
        },
        addTrailingSpaceSetting : function(args, match) {
            /** @type {number} */
            var level = args.startIndex + args.text.length - match.startIndex;
            var adjustedLevel = match.text.charAt(level);
            /** @type {!Object} */
            var prev = Object.assign({}, args);
            return prev.trailingSpace = " " === adjustedLevel, prev;
        }
    };
    exports.default = Router;
}, function(canCreateDiscussions, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    Object.defineProperty(t, "__esModule", {
        value : true
    });
    var _prepareStyleProperties = __webpack_require__(37);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _deepAssign = __webpack_require__(16);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var graphTracer = {
        removeOldBlocks : function(e, t) {
            return t.filter(function(n) {
                return e.indexOf(n.key) !== -1;
            });
        },
        sumStats : function(segment) {
            return segment.reduce(function(options, me) {
                var data = me.stats;
                var devices = data.letters;
                var percent = data.characters;
                var dataWords = data.words;
                var events = data.sentences;
                var dp = data.paragraphs;
                var err = data.readingSeconds;
                var highlights = me.stats.highlights;
                var len = highlights.adverbs;
                var matches = highlights.passiveVoices;
                var l = highlights.complexWords;
                var jLen = highlights.hardSentences;
                var y = highlights.veryHardSentences;
                return options.letters += devices, options.characters += percent, options.words += dataWords, options.sentences += events, options.paragraphs += dp, options.readingSeconds += err, options.readingLevel = _deepAssign2.default.getReadingLevel(options.letters, options.words, options.sentences), options.readability = _deepAssign2.default.getReadabilityStyle({
                    words : options.words,
                    readingLevel : options.readingLevel
                }), options.highlights.adverbs += len, options.highlights.passiveVoices += matches, options.highlights.complexWords += l, options.highlights.hardSentences += jLen, options.highlights.veryHardSentences += y, options;
            }, (0, _prepareStyleProperties2.default)());
        },
        getStats : function(e, i) {
            var j = graphTracer.removeOldBlocks(e, i);
            return graphTracer.sumStats(j);
        }
    };
    t.default = graphTracer;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!Object} name
     * @param {!Object} value
     * @return {?}
     */
    function filter(name, value) {
        var callback = name.substr(0, 1).match(/[A-Z]/);
        var isMatchesSelector = name.substr(0, 2).match(/[A-Z]{2}/);
        var okval = void 0;
        var func = void 0;
        switch(value) {
            case _deepAssign2.default.tokens.adverb:
                return okval = "Use a forceful verb.", {
                    message : okval,
                    replacements : ["omit"]
                };
            case _deepAssign2.default.tokens.qualifier:
                return okval = "Be bold. Don't hedge.", {
                    message : okval,
                    replacements : ["omit"]
                };
            case _deepAssign2.default.tokens.vaguePhrase:
                return okval = "Be specific.", {
                    message : okval,
                    replacements : ["omit"]
                };
            case _deepAssign2.default.tokens.passiveVoice:
                return okval = "Use active voice.", {
                    message : okval,
                    replacements : []
                };
            case _deepAssign2.default.tokens.complexWord:
                return okval = "Replace or omit.", func = _prepareStyleProperties2.default[name.toLowerCase()], callback && (func = func.map(function(e) {
                    return (0, property.capitalize)(e);
                })), isMatchesSelector && (func = func.map(function(shortMonthName) {
                    return shortMonthName.toUpperCase();
                })), {
                    message : okval,
                    replacements : func
                };
            case _deepAssign2.default.tokens.buzzword:
            case _deepAssign2.default.tokens.cliche:
                return okval = "Be original.", {
                    message : okval,
                    replacements : ["omit"]
                };
            default:
                return "Try something else";
        }
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    /** @type {function(!Object, !Object): ?} */
    exports.default = filter;
    var _prepareStyleProperties = __webpack_require__(17);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _deepAssign = __webpack_require__(2);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var property = __webpack_require__(9);
}, function(mixin, canCreateDiscussions) {
    var REACT_STATICS = {
        childContextTypes : true,
        contextTypes : true,
        defaultProps : true,
        displayName : true,
        getDefaultProps : true,
        mixins : true,
        propTypes : true,
        type : true
    };
    var KNOWN_STATICS = {
        name : true,
        length : true,
        prototype : true,
        caller : true,
        arguments : true,
        arity : true
    };
    /** @type {boolean} */
    var cb = "function" == typeof Object.getOwnPropertySymbols;
    /**
     * @param {?} e
     * @param {?} data
     * @param {?} selector
     * @return {?}
     */
    mixin.exports = function(e, data, selector) {
        if ("string" != typeof data) {
            /** @type {!Array<string>} */
            var keys = Object.getOwnPropertyNames(data);
            if (cb) {
                /** @type {!Array<?>} */
                keys = keys.concat(Object.getOwnPropertySymbols(data));
            }
            /** @type {number} */
            var i = 0;
            for (; i < keys.length; ++i) {
                if (!(REACT_STATICS[keys[i]] || KNOWN_STATICS[keys[i]] || selector && selector[keys[i]])) {
                    try {
                        e[keys[i]] = data[keys[i]];
                    } catch (e) {
                    }
                }
            }
        }
        return e;
    };
}, function(module, canCreateDiscussions, n) {
    /**
     * @param {?} condition
     * @param {?} message
     * @param {?} e
     * @param {?} d
     * @param {?} f
     * @param {?} a
     * @param {?} c
     * @param {?} b
     * @return {undefined}
     */
    var invariant = function(condition, message, e, d, f, a, c, b) {
        if (!condition) {
            var error;
            if (void 0 === message) {
                /** @type {!Error} */
                error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            } else {
                /** @type {!Array} */
                var expected = [e, d, f, a, c, b];
                /** @type {number} */
                var count = 0;
                /** @type {!Error} */
                error = new Error(message.replace(/%s/g, function() {
                    return expected[count++];
                }));
                /** @type {string} */
                error.name = "Invariant Violation";
            }
            throw error.framesToPop = 1, error;
        }
    };
    /** @type {function(?, ?, ?, ?, ?, ?, ?, ?): undefined} */
    module.exports = invariant;
}, function(mixin, canCreateDiscussions) {
    mixin.exports = {
        editorContent : "\nHemingway App makes your writing bold and clear.\n\nThe app highlights lengthy, complex sentences and common errors; if you see a yellow sentence, shorten or split it. If you see a red highlight, your sentence is so dense and complicated that your readers will get lost trying to follow its meandering, splitting logic \u00e2\u20ac\u201d try editing this sentence to remove the red.\n\nYou can utilize a shorter word in place of a purple one. Mouse over them for hints.\n\nAdverbs and weakening phrases are helpfully shown in blue. Get rid of them and pick words with force, perhaps.\n\nPhrases in green have been marked to show passive voice.\n\nYou can format your text with the toolbar.\n\nPaste in something you're working on and edit away. Or, click the Write button and compose something new."
    };
}, function(mixin, canCreateDiscussions) {
    mixin.exports = {
        awoken : "awoke",
        beaten : "beat",
        begun : "began",
        bent : "bent",
        bitten : "bit",
        bled : "bled",
        blown : "blew",
        broken : "broke",
        brought : "brought",
        built : "built",
        bought : "bought",
        caught : "caught",
        chosen : "chose",
        cut : "cut",
        dealt : "dealt",
        done : "did",
        drawn : "drew",
        driven : "drove",
        eaten : "ate",
        fed : "fed",
        felt : "felt",
        fought : "fought",
        found : "found",
        forbidden : "forbade",
        forgotten : "forgot",
        forgiven : "forgave",
        frozen : "froze",
        gotten : "got",
        given : "gave",
        ground : "ground",
        hung : "hung",
        heard : "heard",
        hidden : "hid",
        hit : "hit",
        held : "held",
        hurt : "hurt",
        kept : "kept",
        known : "knew",
        laid : "laid",
        led : "led",
        left : "left",
        let : "let",
        lost : "lost",
        made : "made",
        meant : "meant",
        met : "met",
        paid : "paid",
        proven : "proved",
        put : "put",
        read : "read",
        ridden : "rode",
        rung : "rang",
        run : "ran",
        said : "said",
        seen : "saw",
        sold : "sold",
        sent : "sent",
        shaken : "shook",
        shaved : "shaved",
        shot : "shot",
        shown : "showed",
        shut : "shut",
        sung : "sung",
        sunk : "sunk",
        slain : "slew",
        slid : "slid",
        spoken : "spoke",
        spent : "spent",
        spun : "spun",
        split : "split",
        spread : "spread",
        stolen : "stole",
        struck : "struck",
        swept : "swept",
        swung : "swung",
        taken : "took",
        taught : "taught",
        torn : "tore",
        told : "told",
        thought : "thought",
        thrown : "threw",
        undergone : "underwent",
        understood : "understood",
        upset : "upset",
        woken : "woke",
        worn : "wore",
        won : "won",
        withdrawn : "withdrew",
        written : "wrote"
    };
}, function(mixin, canCreateDiscussions) {
    mixin.exports = {
        actually : 1,
        additionally : 1,
        allegedly : 1,
        ally : 1,
        alternatively : 1,
        anomaly : 1,
        apply : 1,
        approximately : 1,
        ashely : 1,
        ashly : 1,
        assembly : 1,
        awfully : 1,
        baily : 1,
        belly : 1,
        bely : 1,
        billy : 1,
        bradly : 1,
        bristly : 1,
        bubbly : 1,
        bully : 1,
        burly : 1,
        butterfly : 1,
        carly : 1,
        charly : 1,
        chilly : 1,
        comely : 1,
        completely : 1,
        comply : 1,
        consequently : 1,
        costly : 1,
        courtly : 1,
        crinkly : 1,
        crumbly : 1,
        cuddly : 1,
        curly : 1,
        currently : 1,
        daily : 1,
        dastardly : 1,
        deadly : 1,
        deathly : 1,
        definitely : 1,
        dilly : 1,
        disorderly : 1,
        doily : 1,
        dolly : 1,
        dragonfly : 1,
        early : 1,
        elderly : 1,
        elly : 1,
        emily : 1,
        especially : 1,
        exactly : 1,
        exclusively : 1,
        family : 1,
        finally : 1,
        firefly : 1,
        folly : 1,
        friendly : 1,
        frilly : 1,
        gadfly : 1,
        gangly : 1,
        generally : 1,
        ghastly : 1,
        giggly : 1,
        globally : 1,
        goodly : 1,
        gravelly : 1,
        grisly : 1,
        gully : 1,
        haily : 1,
        hally : 1,
        harly : 1,
        hardly : 1,
        heavenly : 1,
        hillbilly : 1,
        hilly : 1,
        holly : 1,
        holy : 1,
        homely : 1,
        homily : 1,
        horsefly : 1,
        hourly : 1,
        immediately : 1,
        instinctively : 1,
        imply : 1,
        italy : 1,
        jelly : 1,
        jiggly : 1,
        jilly : 1,
        jolly : 1,
        july : 1,
        karly : 1,
        kelly : 1,
        kindly : 1,
        lately : 1,
        likely : 1,
        lilly : 1,
        lily : 1,
        lively : 1,
        lolly : 1,
        lonely : 1,
        lovely : 1,
        lowly : 1,
        luckily : 1,
        mealy : 1,
        measly : 1,
        melancholy : 1,
        mentally : 1,
        molly : 1,
        monopoly : 1,
        monthly : 1,
        multiply : 1,
        nightly : 1,
        oily : 1,
        only : 1,
        orderly : 1,
        panoply : 1,
        particularly : 1,
        partly : 1,
        paully : 1,
        pearly : 1,
        pebbly : 1,
        polly : 1,
        potbelly : 1,
        presumably : 1,
        previously : 1,
        pualy : 1,
        quarterly : 1,
        rally : 1,
        rarely : 1,
        recently : 1,
        rely : 1,
        reply : 1,
        reportedly : 1,
        roughly : 1,
        sally : 1,
        scaly : 1,
        shapely : 1,
        shelly : 1,
        shirly : 1,
        shortly : 1,
        sickly : 1,
        silly : 1,
        sly : 1,
        smelly : 1,
        sparkly : 1,
        spindly : 1,
        spritely : 1,
        squiggly : 1,
        stately : 1,
        steely : 1,
        supply : 1,
        surly : 1,
        tally : 1,
        timely : 1,
        trolly : 1,
        ugly : 1,
        underbelly : 1,
        unfortunately : 1,
        unholy : 1,
        unlikely : 1,
        usually : 1,
        waverly : 1,
        weekly : 1,
        wholly : 1,
        willy : 1,
        wily : 1,
        wobbly : 1,
        wooly : 1,
        worldly : 1,
        wrinkly : 1,
        yearly : 1
    };
}, function(mixin, canCreateDiscussions) {
    mixin.exports = {
        "i believe" : 1,
        "i consider" : 1,
        "i don't believe" : 1,
        "i don't consider" : 1,
        "i don't feel" : 1,
        "i don't suggest" : 1,
        "i don't think" : 1,
        "i feel" : 1,
        "i hope to" : 1,
        "i might" : 1,
        "i suggest" : 1,
        "i think" : 1,
        "i was wondering" : 1,
        "i will try" : 1,
        "i wonder" : 1,
        "in my opinion" : 1,
        "is kind of" : 1,
        "is sort of" : 1,
        just : 1,
        maybe : 1,
        perhaps : 1,
        possibly : 1,
        "we believe" : 1,
        "we consider" : 1,
        "we don't believe" : 1,
        "we don't consider" : 1,
        "we don't feel" : 1,
        "we don't suggest" : 1,
        "we don't think" : 1,
        "we feel" : 1,
        "we hope to" : 1,
        "we might" : 1,
        "we suggest" : 1,
        "we think" : 1,
        "we were wondering" : 1,
        "we will try" : 1,
        "we wonder" : 1
    };
}, function(module, canCreateDiscussions, __webpack_require__) {
    var overArg = __webpack_require__(64);
    /** @type {function(!Object): (Object|null)} */
    var nativeKeys = Object.getPrototypeOf;
    var baseKeys = overArg(nativeKeys, Object);
    module.exports = baseKeys;
}, function(u, canCreateDiscussions) {
    /**
     * @param {string} e
     * @return {?}
     */
    function get(e) {
        /** @type {boolean} */
        var iceCandidatesAdded = false;
        if (null != e && "function" != typeof e.toString) {
            try {
                /** @type {boolean} */
                iceCandidatesAdded = !!(e + "");
            } catch (e) {
            }
        }
        return iceCandidatesAdded;
    }
    /** @type {function(string): ?} */
    u.exports = get;
}, function(module, canCreateDiscussions) {
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function compose(a, b) {
        return function(args) {
            return a(b(args));
        };
    }
    /** @type {function(?, ?): ?} */
    module.exports = compose;
}, function(module, canCreateDiscussions) {
    /**
     * @param {?} name
     * @return {?}
     */
    function n(name) {
        return !!name && "object" == typeof name;
    }
    /** @type {function(?): ?} */
    module.exports = n;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    /** @type {boolean} */
    exports.__esModule = true;
    exports.default = void 0;
    var _react = __webpack_require__(1);
    var _deepAssign = __webpack_require__(18);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _prepareStyleProperties = __webpack_require__(19);
    var Provider = (_interopRequireDefault(_prepareStyleProperties), function(_Component) {
        /**
         * @param {!Object} props
         * @param {?} context
         * @return {?}
         */
        function Provider(props, context) {
            _classCallCheck(this, Provider);
            var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
            return _this.store = props.store, _this;
        }
        return _inherits(Provider, _Component), Provider.prototype.getChildContext = function() {
            return {
                store : this.store
            };
        }, Provider.prototype.render = function() {
            return _react.Children.only(this.props.children);
        }, Provider;
    }(_react.Component));
    exports.default = Provider;
    Provider.propTypes = {
        store : _deepAssign2.default.isRequired,
        children : _react.PropTypes.element.isRequired
    };
    Provider.childContextTypes = {
        store : _deepAssign2.default.isRequired
    };
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        /** @type {!Object} */
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor : {
                value : subClass,
                enumerable : false,
                writable : true,
                configurable : true
            }
        });
        if (superClass) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(subClass, superClass);
            } else {
                /** @type {!Object} */
                subClass.__proto__ = superClass;
            }
        }
    }
    /**
     * @param {!Object} WrappedComponent
     * @return {?}
     */
    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || "Component";
    }
    /**
     * @param {!Function} callback
     * @param {?} arg
     * @return {?}
     */
    function tryCatch(callback, arg) {
        try {
            return callback.apply(arg);
        } catch (time) {
            return errorObject.value = time, errorObject;
        }
    }
    /**
     * @param {string} obj
     * @param {string} fn
     * @param {!Function} n
     * @return {?}
     */
    function connect(obj, fn, n) {
        var _ref = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        /** @type {boolean} */
        var shouldSubscribe = Boolean(obj);
        var mapState = obj || defaultMapStateToProps;
        var mapDispatch = void 0;
        mapDispatch = "function" == typeof fn ? fn : fn ? (0, _UiIcon2.default)(fn) : empty;
        var finalMergeProps = n || defaultMergeProps;
        var _ref$mapStateToPropsF = _ref.pure;
        var pure = void 0 === _ref$mapStateToPropsF || _ref$mapStateToPropsF;
        var title = _ref.withRef;
        var validateStatus = void 0 !== title && title;
        var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
        /** @type {number} */
        var version = hotReloadingVersion++;
        return function(WrappedComponent) {
            /**
             * @param {?} stateProps
             * @param {?} dispatchProps
             * @param {?} parentProps
             * @return {?}
             */
            function computeMergedProps(stateProps, dispatchProps, parentProps) {
                var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
                return mergedProps;
            }
            /** @type {string} */
            var displayName = "Connect(" + getDisplayName(WrappedComponent) + ")";
            var Connect = function(_Component) {
                /**
                 * @param {!Object} props
                 * @param {!Object} context
                 * @return {?}
                 */
                function Connect(props, context) {
                    _classCallCheck(this, Connect);
                    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
                    /** @type {number} */
                    _this.version = version;
                    _this.store = props.store || context.store;
                    (0, _UiRippleInk2.default)(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + displayName + '". ') + "Either wrap the root component in a <Provider>, " + ('or explicitly pass "store" as a prop to "' + displayName + '".'));
                    var storeState = _this.store.getState();
                    return _this.state = {
                        storeState : storeState
                    }, _this.clearCache(), _this;
                }
                return _inherits(Connect, _Component), Connect.prototype.shouldComponentUpdate = function() {
                    return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
                }, Connect.prototype.computeStateProps = function(store, props) {
                    if (!this.finalMapStateToProps) {
                        return this.configureFinalMapState(store, props);
                    }
                    var state = store.getState();
                    var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
                    return stateProps;
                }, Connect.prototype.configureFinalMapState = function(store, props) {
                    var mappedState = mapState(store.getState(), props);
                    /** @type {boolean} */
                    var isFactory = "function" == typeof mappedState;
                    return this.finalMapStateToProps = isFactory ? mappedState : mapState, this.doStatePropsDependOnOwnProps = 1 !== this.finalMapStateToProps.length, isFactory ? this.computeStateProps(store, props) : mappedState;
                }, Connect.prototype.computeDispatchProps = function(store, props) {
                    if (!this.finalMapDispatchToProps) {
                        return this.configureFinalMapDispatch(store, props);
                    }
                    var dispatch = store.dispatch;
                    var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
                    return dispatchProps;
                }, Connect.prototype.configureFinalMapDispatch = function(store, props) {
                    var mappedDispatch = mapDispatch(store.dispatch, props);
                    /** @type {boolean} */
                    var isFactory = "function" == typeof mappedDispatch;
                    return this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch, this.doDispatchPropsDependOnOwnProps = 1 !== this.finalMapDispatchToProps.length, isFactory ? this.computeDispatchProps(store, props) : mappedDispatch;
                }, Connect.prototype.updateStatePropsIfNeeded = function() {
                    var nextStateProps = this.computeStateProps(this.store, this.props);
                    return (!this.stateProps || !(0, _normalizeDataUri2.default)(nextStateProps, this.stateProps)) && (this.stateProps = nextStateProps, true);
                }, Connect.prototype.updateDispatchPropsIfNeeded = function() {
                    var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
                    return (!this.dispatchProps || !(0, _normalizeDataUri2.default)(nextDispatchProps, this.dispatchProps)) && (this.dispatchProps = nextDispatchProps, true);
                }, Connect.prototype.updateMergedPropsIfNeeded = function() {
                    var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
                    return !(this.mergedProps && checkMergedEquals && (0, _normalizeDataUri2.default)(nextMergedProps, this.mergedProps)) && (this.mergedProps = nextMergedProps, true);
                }, Connect.prototype.isSubscribed = function() {
                    return "function" == typeof this.unsubscribe;
                }, Connect.prototype.trySubscribe = function() {
                    if (shouldSubscribe && !this.unsubscribe) {
                        this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
                        this.handleChange();
                    }
                }, Connect.prototype.tryUnsubscribe = function() {
                    if (this.unsubscribe) {
                        this.unsubscribe();
                        /** @type {null} */
                        this.unsubscribe = null;
                    }
                }, Connect.prototype.componentDidMount = function() {
                    this.trySubscribe();
                }, Connect.prototype.componentWillReceiveProps = function(nextContext) {
                    if (!(pure && (0, _normalizeDataUri2.default)(nextContext, this.props))) {
                        /** @type {boolean} */
                        this.haveOwnPropsChanged = true;
                    }
                }, Connect.prototype.componentWillUnmount = function() {
                    this.tryUnsubscribe();
                    this.clearCache();
                }, Connect.prototype.clearCache = function() {
                    /** @type {null} */
                    this.dispatchProps = null;
                    /** @type {null} */
                    this.stateProps = null;
                    /** @type {null} */
                    this.mergedProps = null;
                    /** @type {boolean} */
                    this.haveOwnPropsChanged = true;
                    /** @type {boolean} */
                    this.hasStoreStateChanged = true;
                    /** @type {boolean} */
                    this.haveStatePropsBeenPrecalculated = false;
                    /** @type {null} */
                    this.statePropsPrecalculationError = null;
                    /** @type {null} */
                    this.renderedElement = null;
                    /** @type {null} */
                    this.finalMapDispatchToProps = null;
                    /** @type {null} */
                    this.finalMapStateToProps = null;
                }, Connect.prototype.handleChange = function() {
                    if (this.unsubscribe) {
                        var storeState = this.store.getState();
                        var prevStoreState = this.state.storeState;
                        if (!pure || prevStoreState !== storeState) {
                            if (pure && !this.doStatePropsDependOnOwnProps) {
                                var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
                                if (!haveStatePropsChanged) {
                                    return;
                                }
                                if (haveStatePropsChanged === errorObject) {
                                    this.statePropsPrecalculationError = errorObject.value;
                                }
                                /** @type {boolean} */
                                this.haveStatePropsBeenPrecalculated = true;
                            }
                            /** @type {boolean} */
                            this.hasStoreStateChanged = true;
                            this.setState({
                                storeState : storeState
                            });
                        }
                    }
                }, Connect.prototype.getWrappedInstance = function() {
                    return (0, _UiRippleInk2.default)(validateStatus, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."), this.refs.wrappedInstance;
                }, Connect.prototype.render = function() {
                    var haveOwnPropsChanged = this.haveOwnPropsChanged;
                    var hasStoreStateChanged = this.hasStoreStateChanged;
                    var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
                    var statePropsPrecalculationError = this.statePropsPrecalculationError;
                    var renderedElement = this.renderedElement;
                    if (this.haveOwnPropsChanged = false, this.hasStoreStateChanged = false, this.haveStatePropsBeenPrecalculated = false, this.statePropsPrecalculationError = null, statePropsPrecalculationError) {
                        throw statePropsPrecalculationError;
                    }
                    /** @type {boolean} */
                    var shouldUpdateStateProps = true;
                    /** @type {boolean} */
                    var shouldUpdateDispatchProps = true;
                    if (pure && renderedElement) {
                        shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
                        shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
                    }
                    /** @type {boolean} */
                    var haveStatePropsChanged = false;
                    /** @type {boolean} */
                    var haveDispatchPropsChanged = false;
                    if (haveStatePropsBeenPrecalculated) {
                        /** @type {boolean} */
                        haveStatePropsChanged = true;
                    } else {
                        if (shouldUpdateStateProps) {
                            haveStatePropsChanged = this.updateStatePropsIfNeeded();
                        }
                    }
                    if (shouldUpdateDispatchProps) {
                        haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
                    }
                    /** @type {boolean} */
                    var haveMergedPropsChanged = true;
                    return haveMergedPropsChanged = !!(haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) && this.updateMergedPropsIfNeeded(), !haveMergedPropsChanged && renderedElement ? renderedElement : (validateStatus ? this.renderedElement = (0, _require.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
                        ref : "wrappedInstance"
                    })) : this.renderedElement = (0, _require.createElement)(WrappedComponent, this.mergedProps), this.renderedElement);
                }, Connect;
            }(_require.Component);
            return Connect.displayName = displayName, Connect.WrappedComponent = WrappedComponent, Connect.contextTypes = {
                store : _deepAssign2.default
            }, Connect.propTypes = {
                store : _deepAssign2.default
            }, (0, _noframeworkWaypoints2.default)(Connect, WrappedComponent);
        };
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var _extends = Object.assign || function(headers) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
            var obj = arguments[i];
            var key;
            for (key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    headers[key] = obj[key];
                }
            }
        }
        return headers;
    };
    /** @type {function(string, string, !Function): ?} */
    exports.default = connect;
    var _require = __webpack_require__(1);
    var _deepAssign = __webpack_require__(18);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _normalizeDataUri = __webpack_require__(68);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(69);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _prepareStyleProperties = __webpack_require__(19);
    var _classlist = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(10));
    var _noframeworkWaypoints = (_interopRequireDefault(_classlist), __webpack_require__(56));
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _UiRippleInk = __webpack_require__(57);
    var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
    /**
     * @param {?} state
     * @return {?}
     */
    var defaultMapStateToProps = function(state) {
        return {};
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    var empty = function(callback) {
        return {
            dispatch : callback
        };
    };
    /**
     * @param {?} stateProps
     * @param {?} dispatchProps
     * @param {?} parentProps
     * @return {?}
     */
    var defaultMergeProps = function(stateProps, dispatchProps, parentProps) {
        return _extends({}, parentProps, stateProps, dispatchProps);
    };
    var errorObject = {
        value : null
    };
    /** @type {number} */
    var hotReloadingVersion = 0;
}, function(canCreateDiscussions, exports) {
    /**
     * @param {!Object} obj
     * @param {!Object} data
     * @return {?}
     */
    function render(obj, data) {
        if (obj === data) {
            return true;
        }
        /** @type {!Array<string>} */
        var names = Object.keys(obj);
        /** @type {!Array<string>} */
        var friends = Object.keys(data);
        if (names.length !== friends.length) {
            return false;
        }
        /** @type {function(this:Object, *): boolean} */
        var hasOwn = Object.prototype.hasOwnProperty;
        /** @type {number} */
        var i = 0;
        for (; i < names.length; i++) {
            if (!hasOwn.call(data, names[i]) || obj[names[i]] !== data[names[i]]) {
                return false;
            }
        }
        return true;
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(!Object, !Object): ?} */
    exports.default = render;
}, function(canCreateDiscussions, module, __webpack_require__) {
    /**
     * @param {!Array} jsonObj
     * @return {?}
     */
    function wrapActionCreators(jsonObj) {
        return function(mmCoreSplitViewBlock) {
            return (0, _redux.bindActionCreators)(jsonObj, mmCoreSplitViewBlock);
        };
    }
    /** @type {boolean} */
    module.__esModule = true;
    /** @type {function(!Array): ?} */
    module.default = wrapActionCreators;
    var _redux = __webpack_require__(11);
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @return {?}
     */
    function SortedDemuxer() {
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
        }
        return function(createStore) {
            return function(rootReducer, initialState, enhancer) {
                var store = createStore(rootReducer, initialState, enhancer);
                var dispatch = store.dispatch;
                /** @type {!Array} */
                var chain = [];
                var middlewareAPI = {
                    getState : store.getState,
                    dispatch : function(value) {
                        return dispatch(value);
                    }
                };
                return chain = args.map(function(middleware) {
                    return middleware(middlewareAPI);
                }), dispatch = _deepAssign2.default.apply(void 0, chain)(store.dispatch), _extends({}, store, {
                    dispatch : dispatch
                });
            };
        };
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var _extends = Object.assign || function(headers) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
            var obj = arguments[i];
            var key;
            for (key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    headers[key] = obj[key];
                }
            }
        }
        return headers;
    };
    /** @type {function(): ?} */
    exports.default = SortedDemuxer;
    var _deepAssign = __webpack_require__(20);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
}, function(canCreateDiscussions, exports) {
    /**
     * @param {!Function} target
     * @param {!Object} cb
     * @return {?}
     */
    function wrap(target, cb) {
        return function() {
            return cb(target.apply(void 0, arguments));
        };
    }
    /**
     * @param {!Array} obj
     * @param {!Object} name
     * @return {?}
     */
    function compile(obj, name) {
        if ("function" == typeof obj) {
            return wrap(obj, name);
        }
        if ("object" != typeof obj || null === obj) {
            throw new Error("bindActionCreators expected an object or a function, instead received " + (null === obj ? "null" : typeof obj) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        /** @type {!Array<string>} */
        var data = Object.keys(obj);
        var env = {};
        /** @type {number} */
        var id = 0;
        for (; id < data.length; id++) {
            /** @type {string} */
            var i = data[id];
            var v = obj[i];
            if ("function" == typeof v) {
                env[i] = wrap(v, name);
            }
        }
        return env;
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(!Array, !Object): ?} */
    exports.default = compile;
}, function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default : obj
        };
    }
    /**
     * @param {string} prop
     * @param {!Object} r
     * @return {?}
     */
    function add(prop, r) {
        var sorted = r && r.type;
        var url = sorted && '"' + sorted.toString() + '"' || "an action";
        return "Given action " + url + ', reducer "' + prop + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
    }
    /**
     * @param {!Object} obj
     * @return {undefined}
     */
    function combineReducers(obj) {
        Object.keys(obj).forEach(function(key) {
            var reducer = obj[key];
            var val = reducer(void 0, {
                type : _createStore.ActionTypes.INIT
            });
            if ("undefined" == typeof val) {
                throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
            }
            /** @type {string} */
            var GET_USER_PROFILE_SUCCESS = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
            if ("undefined" == typeof reducer(void 0, {
                type : GET_USER_PROFILE_SUCCESS
            })) {
                throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
            }
        });
    }
    /**
     * @param {!Array} value
     * @return {?}
     */
    function factory(value) {
        /** @type {!Array<string>} */
        var keys = Object.keys(value);
        var data = {};
        /** @type {number} */
        var i = 0;
        for (; i < keys.length; i++) {
            /** @type {string} */
            var k = keys[i];
            if ("function" == typeof value[k]) {
                data[k] = value[k];
            }
        }
        var unchangedActiveWorkspace;
        /** @type {!Array<string>} */
        var filenameFilter = Object.keys(data);
        try {
            combineReducers(data);
        } catch (w) {
            unchangedActiveWorkspace = w;
        }
        return function() {
            var syms = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            var s = arguments[1];
            if (unchangedActiveWorkspace) {
                throw unchangedActiveWorkspace;
            }
            /** @type {boolean} */
            var anyChildChanged = false;
            var meta = {};
            /** @type {number} */
            var ii = 0;
            for (; ii < filenameFilter.length; ii++) {
                /** @type {string} */
                var name = filenameFilter[ii];
                var fn = data[name];
                var child = syms[name];
                var el = fn(child, s);
                if ("undefined" == typeof el) {
                    var res = add(name, s);
                    throw new Error(res);
                }
                meta[name] = el;
                /** @type {boolean} */
                anyChildChanged = anyChildChanged || el !== child;
            }
            return anyChildChanged ? meta : syms;
        };
    }
    /** @type {boolean} */
    exports.__esModule = true;
    /** @type {function(!Array): ?} */
    exports.default = factory;
    var _createStore = __webpack_require__(21);
    var _prepareStyleProperties = __webpack_require__(10);
    var _normalizeDataUri = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(22));
    _interopRequireDefault(_normalizeDataUri);
}, function(module, canCreateDiscussions, factory) {
    module.exports = factory(74);
}, function(module, t, __webpack_require__) {
    (function(global, value) {
        /**
         * @param {!Object} obj
         * @return {?}
         */
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default : obj
            };
        }
        Object.defineProperty(t, "__esModule", {
            value : true
        });
        var c_export;
        var _prepareStyleProperties = __webpack_require__(75);
        var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
        c_export = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : value;
        var offsetFromCenter = (0, _prepareStyleProperties2.default)(c_export);
        t.default = offsetFromCenter;
    }).call(t, function() {
        return this;
    }(), __webpack_require__(76)(module));
}, function(canCreateDiscussions, exports) {
    /**
     * @param {!Array} context
     * @return {?}
     */
    function getSymbolObservable(context) {
        var result;
        var Symbol = context.Symbol;
        return "function" == typeof Symbol ? Symbol.observable ? result = Symbol.observable : (result = Symbol("observable"), Symbol.observable = result) : result = "@@observable", result;
    }
    Object.defineProperty(exports, "__esModule", {
        value : true
    });
    /** @type {function(!Array): ?} */
    exports.default = getSymbolObservable;
}, function(mixin, canCreateDiscussions) {
    /**
     * @param {!Object} module
     * @return {?}
     */
    mixin.exports = function(module) {
        return module.webpackPolyfill || (module.deprecate = function() {
        }, module.paths = [], module.children = [], module.webpackPolyfill = 1), module;
    };
}, function(module, canCreateDiscussions) {
    module.exports = ReactDOM;
}]);
