var headbreaker;
(() => {
    var t = {
        6537: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2503), n = r.glob.performance && r.glob.performance.now ? function () {
                return r.glob.performance.now()
            } : function () {
                return (new Date).getTime()
            }, o = function () {
                function t(e, i) {
                    this.id = t.animIdCounter++, this.frame = {
                        time: 0,
                        timeDiff: 0,
                        lastTime: n(),
                        frameRate: 0
                    }, this.func = e, this.setLayers(i)
                }

                return t.prototype.setLayers = function (t) {
                    var e;
                    return e = t ? t.length > 0 ? t : [t] : [], this.layers = e, this
                }, t.prototype.getLayers = function () {
                    return this.layers
                }, t.prototype.addLayer = function (t) {
                    var e, i = this.layers, r = i.length;
                    for (e = 0; e < r; e++) if (i[e]._id === t._id) return !1;
                    return this.layers.push(t), !0
                }, t.prototype.isRunning = function () {
                    var e, i = t.animations, r = i.length;
                    for (e = 0; e < r; e++) if (i[e].id === this.id) return !0;
                    return !1
                }, t.prototype.start = function () {
                    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = n(), t._addAnimation(this), this
                }, t.prototype.stop = function () {
                    return t._removeAnimation(this), this
                }, t.prototype._updateFrameObject = function (t) {
                    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff
                }, t._addAnimation = function (t) {
                    this.animations.push(t), this._handleAnimation()
                }, t._removeAnimation = function (t) {
                    var e, i = t.id, r = this.animations, n = r.length;
                    for (e = 0; e < n; e++) if (r[e].id === i) {
                        this.animations.splice(e, 1);
                        break
                    }
                }, t._runFrames = function () {
                    var t, e, i, r, o, a, s, h, c = {}, l = this.animations;
                    for (r = 0; r < l.length; r++) if (e = (t = l[r]).layers, i = t.func, t._updateFrameObject(n()), a = e.length, !i || !1 !== i.call(t, t.frame)) for (o = 0; o < a; o++) void 0 !== (s = e[o])._id && (c[s._id] = s);
                    for (h in c) c.hasOwnProperty(h) && c[h].draw()
                }, t._animationLoop = function () {
                    var e = t;
                    e.animations.length ? (e._runFrames(), requestAnimationFrame(e._animationLoop)) : e.animRunning = !1
                }, t._handleAnimation = function () {
                    this.animRunning || (this.animRunning = !0, requestAnimationFrame(this._animationLoop))
                }, t.animations = [], t.animIdCounter = 0, t.animRunning = !1, t
            }();
            e.Animation = o
        }, 9706: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(6859), s = i(4206), h = i(2315), c = i(8370), l = function (t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.canvas = new c.SceneCanvas, i._waitingForDraw = !1, i.on("visibleChange", i._checkVisibility), i._checkVisibility(), i.on("imageSmoothingEnabledChange", i._setSmoothEnabled), i._setSmoothEnabled(), i
                }

                return n(e, t), e.prototype.createPNGStream = function () {
                    return this.canvas._canvas.createPNGStream()
                }, e.prototype.getCanvas = function () {
                    return this.canvas
                }, e.prototype.getHitCanvas = function () {
                    return this.hitCanvas
                }, e.prototype.getContext = function () {
                    return this.getCanvas().getContext()
                }, e.prototype.clear = function (t) {
                    return this.getContext().clear(t), this
                }, e.prototype.setZIndex = function (e) {
                    t.prototype.setZIndex.call(this, e);
                    var i = this.getStage();
                    return i && (i.content.removeChild(this.getCanvas()._canvas), e < i.children.length - 1 ? i.content.insertBefore(this.getCanvas()._canvas, i.children[e + 1].getCanvas()._canvas) : i.content.appendChild(this.getCanvas()._canvas)), this
                }, e.prototype.moveToTop = function () {
                    s.Node.prototype.moveToTop.call(this);
                    var t = this.getStage();
                    return t && (t.content.removeChild(this.getCanvas()._canvas), t.content.appendChild(this.getCanvas()._canvas)), !0
                }, e.prototype.moveUp = function () {
                    if (!s.Node.prototype.moveUp.call(this)) return !1;
                    var t = this.getStage();
                    return !!t && (t.content.removeChild(this.getCanvas()._canvas), this.index < t.children.length - 1 ? t.content.insertBefore(this.getCanvas()._canvas, t.children[this.index + 1].getCanvas()._canvas) : t.content.appendChild(this.getCanvas()._canvas), !0)
                }, e.prototype.moveDown = function () {
                    if (s.Node.prototype.moveDown.call(this)) {
                        var t = this.getStage();
                        if (t) {
                            var e = t.children;
                            t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[this.index + 1].getCanvas()._canvas)
                        }
                        return !0
                    }
                    return !1
                }, e.prototype.moveToBottom = function () {
                    if (s.Node.prototype.moveToBottom.call(this)) {
                        var t = this.getStage();
                        if (t) {
                            var e = t.children;
                            t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[1].getCanvas()._canvas)
                        }
                        return !0
                    }
                    return !1
                }, e.prototype.getLayer = function () {
                    return this
                }, e.prototype.hitGraphEnabled = function () {
                    return !0
                }, e.prototype.remove = function () {
                    var t = this.getCanvas()._canvas;
                    return s.Node.prototype.remove.call(this), t && t.parentNode && o.Util._isInDocument(t) && t.parentNode.removeChild(t), this
                }, e.prototype.getStage = function () {
                    return this.parent
                }, e.prototype.setSize = function (t) {
                    var e = t.width, i = t.height;
                    return this.canvas.setSize(e, i), this._setSmoothEnabled(), this
                }, e.prototype._toKonvaCanvas = function (t) {
                    return (t = t || {}).width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = void 0 !== t.x ? t.x : this.x(), t.y = void 0 !== t.y ? t.y : this.y(), s.Node.prototype._toKonvaCanvas.call(this, t)
                }, e.prototype._checkVisibility = function () {
                    var t = this.visible();
                    this.canvas._canvas.style.display = t ? "block" : "none"
                }, e.prototype._setSmoothEnabled = function () {
                    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled()
                }, e.prototype.getWidth = function () {
                    if (this.parent) return this.parent.width()
                }, e.prototype.setWidth = function () {
                    o.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.')
                }, e.prototype.getHeight = function () {
                    if (this.parent) return this.parent.height()
                }, e.prototype.setHeight = function () {
                    o.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.')
                }, e.prototype.getIntersection = function (t, e) {
                    return null
                }, e.prototype.batchDraw = function () {
                    var t = this;
                    return this._waitingForDraw || (this._waitingForDraw = !0, o.Util.requestAnimFrame((function () {
                        t.draw(), t._waitingForDraw = !1
                    }))), this
                }, e.prototype._applyTransform = function (t, e, i) {
                    var r = t.getAbsoluteTransform(i).getMatrix();
                    e.transform(r[0], r[1], r[2], r[3], r[4], r[5])
                }, e
            }(a.Container);
            e.BaseLayer = l, l.prototype.nodeType = "BaseLayer", h.Factory.addGetterSetter(l, "imageSmoothingEnabled", !0), h.Factory.addGetterSetter(l, "clearBeforeDraw", !0), o.Collection.mapMethods(l)
        }, 8370: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o, a = i(5117), s = i(7012), h = i(2503), c = i(2315), l = i(8734), u = function () {
                function t(t) {
                    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
                    var e = (t || {}).pixelRatio || h.Konva.pixelRatio || function () {
                        if (o) return o;
                        var t = a.Util.createCanvasElement().getContext("2d");
                        return o = (h.Konva._global.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
                    }();
                    this.pixelRatio = e, this._canvas = a.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0"
                }

                return t.prototype.getContext = function () {
                    return this.context
                }, t.prototype.getPixelRatio = function () {
                    return this.pixelRatio
                }, t.prototype.setPixelRatio = function (t) {
                    var e = this.pixelRatio;
                    this.pixelRatio = t, this.setSize(this.getWidth() / e, this.getHeight() / e)
                }, t.prototype.setWidth = function (t) {
                    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
                    var e = this.pixelRatio;
                    this.getContext()._context.scale(e, e)
                }, t.prototype.setHeight = function (t) {
                    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
                    var e = this.pixelRatio;
                    this.getContext()._context.scale(e, e)
                }, t.prototype.getWidth = function () {
                    return this.width
                }, t.prototype.getHeight = function () {
                    return this.height
                }, t.prototype.setSize = function (t, e) {
                    this.setWidth(t || 0), this.setHeight(e || 0)
                }, t.prototype.toDataURL = function (t, e) {
                    try {
                        return this._canvas.toDataURL(t, e)
                    } catch (t) {
                        try {
                            return this._canvas.toDataURL()
                        } catch (t) {
                            return a.Util.error("Unable to get data URL. " + t.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), ""
                        }
                    }
                }, t
            }();
            e.Canvas = u, c.Factory.addGetterSetter(u, "pixelRatio", void 0, l.getNumberValidator());
            var d = function (t) {
                function e(e) {
                    void 0 === e && (e = {width: 0, height: 0});
                    var i = t.call(this, e) || this;
                    return i.context = new s.SceneContext(i), i.setSize(e.width, e.height), i
                }

                return n(e, t), e
            }(u);
            e.SceneCanvas = d;
            var p = function (t) {
                function e(e) {
                    void 0 === e && (e = {width: 0, height: 0});
                    var i = t.call(this, e) || this;
                    return i.hitCanvas = !0, i.context = new s.HitContext(i), i.setSize(e.width, e.height), i
                }

                return n(e, t), e
            }(u);
            e.HitCanvas = p
        }, 6859: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(4206), h = i(4889), c = i(8734), l = i(2503), u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.children = new o.Collection, e
                }

                return n(e, t), e.prototype.getChildren = function (t) {
                    if (!t) return this.children;
                    var e = new o.Collection;
                    return this.children.each((function (i) {
                        t(i) && e.push(i)
                    })), e
                }, e.prototype.hasChildren = function () {
                    return this.getChildren().length > 0
                }, e.prototype.removeChildren = function () {
                    for (var t, e = 0; e < this.children.length; e++) (t = this.children[e]).parent = null, t.index = 0, t.remove();
                    return this.children = new o.Collection, this
                }, e.prototype.destroyChildren = function () {
                    for (var t, e = 0; e < this.children.length; e++) (t = this.children[e]).parent = null, t.index = 0, t.destroy();
                    return this.children = new o.Collection, this
                }, e.prototype.add = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    if (arguments.length > 1) {
                        for (var i = 0; i < arguments.length; i++) this.add(arguments[i]);
                        return this
                    }
                    var r = t[0];
                    if (r.getParent()) return r.moveTo(this), this;
                    var n = this.children;
                    return this._validateAdd(r), r._clearCaches(), r.index = n.length, r.parent = this, n.push(r), this._fire("add", {child: r}), this
                }, e.prototype.destroy = function () {
                    return this.hasChildren() && this.destroyChildren(), t.prototype.destroy.call(this), this
                }, e.prototype.find = function (t) {
                    return this._generalFind(t, !1)
                }, e.prototype.get = function (t) {
                    return o.Util.warn("collection.get() method is deprecated. Please use collection.find() instead."), this.find(t)
                }, e.prototype.findOne = function (t) {
                    var e = this._generalFind(t, !0);
                    return e.length > 0 ? e[0] : void 0
                }, e.prototype._generalFind = function (t, e) {
                    var i = [];
                    return this._descendants((function (r) {
                        var n = r._isMatch(t);
                        return n && i.push(r), !(!n || !e)
                    })), o.Collection.toCollection(i)
                }, e.prototype._descendants = function (t) {
                    for (var e = 0; e < this.children.length; e++) {
                        var i = this.children[e];
                        if (t(i)) return !0;
                        if (i.hasChildren() && i._descendants(t)) return !0
                    }
                    return !1
                }, e.prototype.toObject = function () {
                    var t = s.Node.prototype.toObject.call(this);
                    t.children = [];
                    for (var e = this.getChildren(), i = e.length, r = 0; r < i; r++) {
                        var n = e[r];
                        t.children.push(n.toObject())
                    }
                    return t
                }, e.prototype.isAncestorOf = function (t) {
                    for (var e = t.getParent(); e;) {
                        if (e._id === this._id) return !0;
                        e = e.getParent()
                    }
                    return !1
                }, e.prototype.clone = function (t) {
                    var e = s.Node.prototype.clone.call(this, t);
                    return this.getChildren().each((function (t) {
                        e.add(t.clone())
                    })), e
                }, e.prototype.getAllIntersections = function (t) {
                    var e = [];
                    return this.find("Shape").each((function (i) {
                        i.isVisible() && i.intersects(t) && e.push(i)
                    })), e
                }, e.prototype._setChildrenIndices = function () {
                    this.children.each((function (t, e) {
                        t.index = e
                    }))
                }, e.prototype.drawScene = function (t, e, i) {
                    var r = this.getLayer(), n = t || r && r.getCanvas(), o = n && n.getContext(),
                        a = this._getCanvasCache(), s = a && a.scene;
                    return (this.isVisible() || i) && (!i && s ? (o.save(), r._applyTransform(this, o, e), this._drawCachedSceneCanvas(o), o.restore()) : this._drawChildren(n, "drawScene", e, !1, i, i)), this
                }, e.prototype.drawHit = function (t, e, i) {
                    var r = this.getLayer(), n = t || r && r.hitCanvas, o = n && n.getContext(),
                        a = this._getCanvasCache(), s = a && a.hit;
                    return (this.shouldDrawHit(n) || i) && (!i && s ? (o.save(), r._applyTransform(this, o, e), this._drawCachedHitCanvas(o), o.restore()) : this._drawChildren(n, "drawHit", e, !1, i, i)), this
                }, e.prototype._drawChildren = function (t, e, i, r, n, o) {
                    var a, s, h = this.getLayer(), c = t && t.getContext(), l = this.clipWidth(), u = this.clipHeight(),
                        d = this.clipFunc(), p = l && u || d;
                    if (p && h) {
                        c.save();
                        var f = this.getAbsoluteTransform(i), g = f.getMatrix();
                        c.transform(g[0], g[1], g[2], g[3], g[4], g[5]), c.beginPath(), d ? d.call(this, c, this) : (a = this.clipX(), s = this.clipY(), c.rect(a, s, l, u)), c.clip(), g = f.copy().invert().getMatrix(), c.transform(g[0], g[1], g[2], g[3], g[4], g[5])
                    }
                    var y = "source-over" !== this.globalCompositeOperation() && !o && "drawScene" === e;
                    y && h && (c.save(), c._applyGlobalCompositeOperation(this)), this.children.each((function (o) {
                        o[e](t, i, r, n)
                    })), y && h && c.restore(), p && h && c.restore()
                }, e.prototype.shouldDrawHit = function (t) {
                    if (t && t.isCache) return !0;
                    var e = this.getLayer(), i = !1;
                    h.DD._dragElements.forEach((function (t) {
                        "dragging" === t.dragStatus && t.node.getLayer() === e && (i = !0)
                    }));
                    var r = !l.Konva.hitOnDragEnabled && i;
                    return e && e.hitGraphEnabled() && this.isVisible() && !r
                }, e.prototype.getClientRect = function (t) {
                    var e, i, r, n, o, a = (t = t || {}).skipTransform, s = t.relativeTo, h = this;
                    this.children.each((function (o) {
                        if (o.visible()) {
                            var a = o.getClientRect({
                                relativeTo: h,
                                skipShadow: t.skipShadow,
                                skipStroke: t.skipStroke
                            });
                            0 === a.width && 0 === a.height || (void 0 === e ? (e = a.x, i = a.y, r = a.x + a.width, n = a.y + a.height) : (e = Math.min(e, a.x), i = Math.min(i, a.y), r = Math.max(r, a.x + a.width), n = Math.max(n, a.y + a.height)))
                        }
                    }));
                    for (var c = this.find("Shape"), l = !1, u = 0; u < c.length; u++) if (c[u]._isVisible(this)) {
                        l = !0;
                        break
                    }
                    return o = l && void 0 !== e ? {x: e, y: i, width: r - e, height: n - i} : {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }, a ? o : this._transformedRect(o, s)
                }, e
            }(s.Node);
            e.Container = u, a.Factory.addComponentsGetterSetter(u, "clip", ["x", "y", "width", "height"]), a.Factory.addGetterSetter(u, "clipX", void 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "clipY", void 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "clipWidth", void 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "clipHeight", void 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "clipFunc"), o.Collection.mapMethods(u)
        }, 7012: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2503),
                s = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "ellipse", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"],
                h = function () {
                    function t(t) {
                        this.canvas = t, this._context = t._canvas.getContext("2d"), a.Konva.enableTrace && (this.traceArr = [], this._enableTrace())
                    }

                    return t.prototype.fillShape = function (t) {
                        t.fillEnabled() && this._fill(t)
                    }, t.prototype._fill = function (t) {
                    }, t.prototype.strokeShape = function (t) {
                        t.hasStroke() && this._stroke(t)
                    }, t.prototype._stroke = function (t) {
                    }, t.prototype.fillStrokeShape = function (t) {
                        this.fillShape(t), this.strokeShape(t)
                    }, t.prototype.getTrace = function (t) {
                        var e, i, r, n, a = this.traceArr, s = a.length, h = "";
                        for (e = 0; e < s; e++) (r = (i = a[e]).method) ? (n = i.args, h += r, t ? h += "()" : o.Util._isArray(n[0]) ? h += "([" + n.join(",") + "])" : h += "(" + n.join(",") + ")") : (h += i.property, t || (h += "=" + i.val)), h += ";";
                        return h
                    }, t.prototype.clearTrace = function () {
                        this.traceArr = []
                    }, t.prototype._trace = function (t) {
                        var e = this.traceArr;
                        e.push(t), e.length >= 100 && e.shift()
                    }, t.prototype.reset = function () {
                        var t = this.getCanvas().getPixelRatio();
                        this.setTransform(1 * t, 0, 0, 1 * t, 0, 0)
                    }, t.prototype.getCanvas = function () {
                        return this.canvas
                    }, t.prototype.clear = function (t) {
                        var e = this.getCanvas();
                        t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio)
                    }, t.prototype._applyLineCap = function (t) {
                        var e = t.getLineCap();
                        e && this.setAttr("lineCap", e)
                    }, t.prototype._applyOpacity = function (t) {
                        var e = t.getAbsoluteOpacity();
                        1 !== e && this.setAttr("globalAlpha", e)
                    }, t.prototype._applyLineJoin = function (t) {
                        var e = t.getLineJoin();
                        e && this.setAttr("lineJoin", e)
                    }, t.prototype.setAttr = function (t, e) {
                        this._context[t] = e
                    }, t.prototype.arc = function (t, e, i, r, n, o) {
                        this._context.arc(t, e, i, r, n, o)
                    }, t.prototype.arcTo = function (t, e, i, r, n) {
                        this._context.arcTo(t, e, i, r, n)
                    }, t.prototype.beginPath = function () {
                        this._context.beginPath()
                    }, t.prototype.bezierCurveTo = function (t, e, i, r, n, o) {
                        this._context.bezierCurveTo(t, e, i, r, n, o)
                    }, t.prototype.clearRect = function (t, e, i, r) {
                        this._context.clearRect(t, e, i, r)
                    }, t.prototype.clip = function () {
                        this._context.clip()
                    }, t.prototype.closePath = function () {
                        this._context.closePath()
                    }, t.prototype.createImageData = function (t, e) {
                        var i = arguments;
                        return 2 === i.length ? this._context.createImageData(t, e) : 1 === i.length ? this._context.createImageData(t) : void 0
                    }, t.prototype.createLinearGradient = function (t, e, i, r) {
                        return this._context.createLinearGradient(t, e, i, r)
                    }, t.prototype.createPattern = function (t, e) {
                        return this._context.createPattern(t, e)
                    }, t.prototype.createRadialGradient = function (t, e, i, r, n, o) {
                        return this._context.createRadialGradient(t, e, i, r, n, o)
                    }, t.prototype.drawImage = function (t, e, i, r, n, o, a, s, h) {
                        var c = arguments, l = this._context;
                        3 === c.length ? l.drawImage(t, e, i) : 5 === c.length ? l.drawImage(t, e, i, r, n) : 9 === c.length && l.drawImage(t, e, i, r, n, o, a, s, h)
                    }, t.prototype.ellipse = function (t, e, i, r, n, o, a, s) {
                        this._context.ellipse(t, e, i, r, n, o, a, s)
                    }, t.prototype.isPointInPath = function (t, e) {
                        return this._context.isPointInPath(t, e)
                    }, t.prototype.fill = function () {
                        this._context.fill()
                    }, t.prototype.fillRect = function (t, e, i, r) {
                        this._context.fillRect(t, e, i, r)
                    }, t.prototype.strokeRect = function (t, e, i, r) {
                        this._context.strokeRect(t, e, i, r)
                    }, t.prototype.fillText = function (t, e, i) {
                        this._context.fillText(t, e, i)
                    }, t.prototype.measureText = function (t) {
                        return this._context.measureText(t)
                    }, t.prototype.getImageData = function (t, e, i, r) {
                        return this._context.getImageData(t, e, i, r)
                    }, t.prototype.lineTo = function (t, e) {
                        this._context.lineTo(t, e)
                    }, t.prototype.moveTo = function (t, e) {
                        this._context.moveTo(t, e)
                    }, t.prototype.rect = function (t, e, i, r) {
                        this._context.rect(t, e, i, r)
                    }, t.prototype.putImageData = function (t, e, i) {
                        this._context.putImageData(t, e, i)
                    }, t.prototype.quadraticCurveTo = function (t, e, i, r) {
                        this._context.quadraticCurveTo(t, e, i, r)
                    }, t.prototype.restore = function () {
                        this._context.restore()
                    }, t.prototype.rotate = function (t) {
                        this._context.rotate(t)
                    }, t.prototype.save = function () {
                        this._context.save()
                    }, t.prototype.scale = function (t, e) {
                        this._context.scale(t, e)
                    }, t.prototype.setLineDash = function (t) {
                        this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t)
                    }, t.prototype.getLineDash = function () {
                        return this._context.getLineDash()
                    }, t.prototype.setTransform = function (t, e, i, r, n, o) {
                        this._context.setTransform(t, e, i, r, n, o)
                    }, t.prototype.stroke = function () {
                        this._context.stroke()
                    }, t.prototype.strokeText = function (t, e, i, r) {
                        this._context.strokeText(t, e, i, r)
                    }, t.prototype.transform = function (t, e, i, r, n, o) {
                        this._context.transform(t, e, i, r, n, o)
                    }, t.prototype.translate = function (t, e) {
                        this._context.translate(t, e)
                    }, t.prototype._enableTrace = function () {
                        var t, e, i = this, r = s.length, n = o.Util._simplifyArray, a = this.setAttr,
                            h = function (t) {
                                var r, o = i[t];
                                i[t] = function () {
                                    return e = n(Array.prototype.slice.call(arguments, 0)), r = o.apply(i, arguments), i._trace({
                                        method: t,
                                        args: e
                                    }), r
                                }
                            };
                        for (t = 0; t < r; t++) h(s[t]);
                        i.setAttr = function () {
                            a.apply(i, arguments);
                            var t = arguments[0], e = arguments[1];
                            "shadowOffsetX" !== t && "shadowOffsetY" !== t && "shadowBlur" !== t || (e /= this.canvas.getPixelRatio()), i._trace({
                                property: t,
                                val: e
                            })
                        }
                    }, t.prototype._applyGlobalCompositeOperation = function (t) {
                        var e = t.getGlobalCompositeOperation();
                        "source-over" !== e && this.setAttr("globalCompositeOperation", e)
                    }, t
                }();
            e.Context = h, ["fillStyle", "strokeStyle", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "font", "textAlign", "textBaseline", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled"].forEach((function (t) {
                Object.defineProperty(h.prototype, t, {
                    get: function () {
                        return this._context[t]
                    }, set: function (e) {
                        this._context[t] = e
                    }
                })
            }));
            var c = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._fillColor = function (t) {
                    var e = t.fill();
                    this.setAttr("fillStyle", e), t._fillFunc(this)
                }, e.prototype._fillPattern = function (t) {
                    var e = t.getFillPatternX(), i = t.getFillPatternY(),
                        r = a.Konva.getAngle(t.getFillPatternRotation()), n = t.getFillPatternOffsetX(),
                        o = t.getFillPatternOffsetY(), s = t.getFillPatternScaleX(), h = t.getFillPatternScaleY();
                    (e || i) && this.translate(e || 0, i || 0), r && this.rotate(r), (s || h) && this.scale(s, h), (n || o) && this.translate(-1 * n, -1 * o), this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this)
                }, e.prototype._fillLinearGradient = function (t) {
                    var e = t._getLinearGradient();
                    e && (this.setAttr("fillStyle", e), t._fillFunc(this))
                }, e.prototype._fillRadialGradient = function (t) {
                    var e = t._getRadialGradient();
                    e && (this.setAttr("fillStyle", e), t._fillFunc(this))
                }, e.prototype._fill = function (t) {
                    var e = t.fill(), i = t.getFillPriority();
                    if (e && "color" === i) this._fillColor(t); else {
                        var r = t.getFillPatternImage();
                        if (r && "pattern" === i) this._fillPattern(t); else {
                            var n = t.getFillLinearGradientColorStops();
                            if (n && "linear-gradient" === i) this._fillLinearGradient(t); else {
                                var o = t.getFillRadialGradientColorStops();
                                o && "radial-gradient" === i ? this._fillRadialGradient(t) : e ? this._fillColor(t) : r ? this._fillPattern(t) : n ? this._fillLinearGradient(t) : o && this._fillRadialGradient(t)
                            }
                        }
                    }
                }, e.prototype._strokeLinearGradient = function (t) {
                    var e = t.getStrokeLinearGradientStartPoint(), i = t.getStrokeLinearGradientEndPoint(),
                        r = t.getStrokeLinearGradientColorStops(), n = this.createLinearGradient(e.x, e.y, i.x, i.y);
                    if (r) {
                        for (var o = 0; o < r.length; o += 2) n.addColorStop(r[o], r[o + 1]);
                        this.setAttr("strokeStyle", n)
                    }
                }, e.prototype._stroke = function (t) {
                    var e = t.dash(), i = t.getStrokeScaleEnabled();
                    if (t.hasStroke()) {
                        if (!i) {
                            this.save();
                            var r = this.getCanvas().getPixelRatio();
                            this.setTransform(r, 0, 0, r, 0, 0)
                        }
                        this._applyLineCap(t), e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), t.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), i || this.restore()
                    }
                }, e.prototype._applyShadow = function (t) {
                    var e = o.Util, i = e.get(t.getShadowRGBA(), "black"), r = e.get(t.getShadowBlur(), 5),
                        n = e.get(t.getShadowOffset(), {x: 0, y: 0}), a = t.getAbsoluteScale(),
                        s = this.canvas.getPixelRatio(), h = a.x * s, c = a.y * s;
                    this.setAttr("shadowColor", i), this.setAttr("shadowBlur", r * Math.min(Math.abs(h), Math.abs(c))), this.setAttr("shadowOffsetX", n.x * h), this.setAttr("shadowOffsetY", n.y * c)
                }, e
            }(h);
            e.SceneContext = c;
            var l = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._fill = function (t) {
                    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore()
                }, e.prototype.strokeShape = function (t) {
                    t.hasHitStroke() && this._stroke(t)
                }, e.prototype._stroke = function (t) {
                    if (t.hasHitStroke()) {
                        var e = t.getStrokeScaleEnabled();
                        if (!e) {
                            this.save();
                            var i = this.getCanvas().getPixelRatio();
                            this.setTransform(i, 0, 0, i, 0, 0)
                        }
                        this._applyLineCap(t);
                        var r = t.hitStrokeWidth(), n = "auto" === r ? t.strokeWidth() : r;
                        this.setAttr("lineWidth", n), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), e || this.restore()
                    }
                }, e
            }(h);
            e.HitContext = l
        }, 4889: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2503), n = i(5117);
            e.DD = {
                get isDragging() {
                    var t = !1;
                    return e.DD._dragElements.forEach((function (e) {
                        "dragging" === e.dragStatus && (t = !0)
                    })), t
                }, justDragged: !1, get node() {
                    var t;
                    return e.DD._dragElements.forEach((function (e) {
                        t = e.node
                    })), t
                }, _dragElements: new Map, _drag: function (t) {
                    e.DD._dragElements.forEach((function (e, i) {
                        var r = e.node, o = r.getStage();
                        o.setPointersPositions(t), void 0 === e.pointerId && (e.pointerId = n.Util._getFirstPointerId(t));
                        var a = o._changedPointerPositions.find((function (t) {
                            return t.id === e.pointerId
                        }));
                        if (a) {
                            if ("dragging" !== e.dragStatus) {
                                var s = r.dragDistance();
                                if (Math.max(Math.abs(a.x - e.startPointerPos.x), Math.abs(a.y - e.startPointerPos.y)) < s) return;
                                if (r.startDrag({evt: t}), !r.isDragging()) return
                            }
                            r._setDragPosition(t, e), r.fire("dragmove", {type: "dragmove", target: r, evt: t}, !0)
                        }
                    }))
                }, _endDragBefore: function (t) {
                    e.DD._dragElements.forEach((function (i, n) {
                        var o = i.node.getStage();
                        if (t && o.setPointersPositions(t), o._changedPointerPositions.find((function (t) {
                            return t.id === i.pointerId
                        }))) {
                            "dragging" !== i.dragStatus && "stopped" !== i.dragStatus || (e.DD.justDragged = !0, r.Konva.listenClickTap = !1, i.dragStatus = "stopped");
                            var a = i.node.getLayer() || i.node instanceof r.Konva.Stage && i.node;
                            a && a.draw()
                        }
                    }))
                }, _endDragAfter: function (t) {
                    e.DD._dragElements.forEach((function (i, r) {
                        "stopped" === i.dragStatus && i.node.fire("dragend", {
                            type: "dragend",
                            target: i.node,
                            evt: t
                        }, !0), "dragging" !== i.dragStatus && e.DD._dragElements.delete(r)
                    }))
                }
            }, r.Konva.isBrowser && (window.addEventListener("mouseup", e.DD._endDragBefore, !0), window.addEventListener("touchend", e.DD._endDragBefore, !0), window.addEventListener("mousemove", e.DD._drag), window.addEventListener("touchmove", e.DD._drag), window.addEventListener("mouseup", e.DD._endDragAfter, !1), window.addEventListener("touchend", e.DD._endDragAfter, !1))
        }, 2315: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(5117), n = i(8734), o = "get", a = "set";
            e.Factory = {
                addGetterSetter: function (t, e, i, r, n) {
                    this.addGetter(t, e, i), this.addSetter(t, e, r, n), this.addOverloadedGetterSetter(t, e)
                }, addGetter: function (t, e, i) {
                    var n = o + r.Util._capitalize(e);
                    t.prototype[n] = t.prototype[n] || function () {
                        var t = this.attrs[e];
                        return void 0 === t ? i : t
                    }
                }, addSetter: function (t, i, n, o) {
                    var s = a + r.Util._capitalize(i);
                    t.prototype[s] || e.Factory.overWriteSetter(t, i, n, o)
                }, overWriteSetter: function (t, e, i, n) {
                    var o = a + r.Util._capitalize(e);
                    t.prototype[o] = function (t) {
                        return i && null != t && (t = i.call(this, t, e)), this._setAttr(e, t), n && n.call(this), this
                    }
                }, addComponentsGetterSetter: function (t, e, i, s, h) {
                    var c, l, u = i.length, d = r.Util._capitalize, p = o + d(e), f = a + d(e);
                    t.prototype[p] = function () {
                        var t = {};
                        for (c = 0; c < u; c++) t[l = i[c]] = this.getAttr(e + d(l));
                        return t
                    };
                    var g = n.getComponentValidator(i);
                    t.prototype[f] = function (t) {
                        var i, r = this.attrs[e];
                        for (i in s && (t = s.call(this, t)), g && g.call(this, t, e), t) t.hasOwnProperty(i) && this._setAttr(e + d(i), t[i]);
                        return this._fireChangeEvent(e, r, t), h && h.call(this), this
                    }, this.addOverloadedGetterSetter(t, e)
                }, addOverloadedGetterSetter: function (t, e) {
                    var i = r.Util._capitalize(e), n = a + i, s = o + i;
                    t.prototype[e] = function () {
                        return arguments.length ? (this[n](arguments[0]), this) : this[s]()
                    }
                }, addDeprecatedGetterSetter: function (t, e, i, n) {
                    r.Util.error("Adding deprecated " + e);
                    var a = o + r.Util._capitalize(e),
                        s = e + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
                    t.prototype[a] = function () {
                        r.Util.error(s);
                        var t = this.attrs[e];
                        return void 0 === t ? i : t
                    }, this.addSetter(t, e, n, (function () {
                        r.Util.error(s)
                    })), this.addOverloadedGetterSetter(t, e)
                }, backCompat: function (t, e) {
                    r.Util.each(e, (function (e, i) {
                        var n = t.prototype[i], s = o + r.Util._capitalize(e), h = a + r.Util._capitalize(e);

                        function c() {
                            n.apply(this, arguments), r.Util.error('"' + e + '" method is deprecated and will be removed soon. Use ""' + i + '" instead.')
                        }

                        t.prototype[e] = c, t.prototype[s] = c, t.prototype[h] = c
                    }))
                }, afterSetFilter: function () {
                    this._filterUpToDate = !1
                }
            }
        }, 1725: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(6859), s = i(9706), h = i(2503), c = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._validateAdd = function (t) {
                    "Shape" !== t.getType() && o.Util.throw("You may only add shapes to a fast layer.")
                }, e.prototype.hitGraphEnabled = function () {
                    return !1
                }, e.prototype.drawScene = function (t) {
                    var e = this.getLayer(), i = t || e && e.getCanvas();
                    return this.clearBeforeDraw() && i.getContext().clear(), a.Container.prototype.drawScene.call(this, i), this
                }, e.prototype.draw = function () {
                    return this.drawScene(), this
                }, e
            }(s.BaseLayer);
            e.FastLayer = c, c.prototype.nodeType = "FastLayer", h._registerNode(c), o.Collection.mapMethods(c)
        }, 2503: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = Math.PI / 180, n = function (t) {
                var e = t.indexOf("msie ");
                if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                if (t.indexOf("trident/") > 0) {
                    var i = t.indexOf("rv:");
                    return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
                }
                var r = t.indexOf("edge/");
                return r > 0 && parseInt(t.substring(r + 5, t.indexOf(".", r)), 10)
            };
            e._parseUA = function (t) {
                var e = t.toLowerCase(),
                    i = /(chrome)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                    r = !!t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
                    o = !!t.match(/IEMobile/i);
                return {browser: i[1] || "", version: i[2] || "0", isIE: n(e), mobile: r, ieMobile: o}
            }, e.glob = void 0 !== i.g ? i.g : "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope ? self : {}, e.Konva = {
                _global: e.glob,
                version: "6.0.0",
                isBrowser: "undefined" != typeof window && ("[object Window]" === {}.toString.call(window) || "[object global]" === {}.toString.call(window)),
                isUnminified: /param/.test(function (t) {
                }.toString()),
                dblClickWindow: 400,
                getAngle: function (t) {
                    return e.Konva.angleDeg ? t * r : t
                },
                enableTrace: !1,
                _pointerEventsEnabled: !1,
                hitOnDragEnabled: !1,
                captureTouchEventsEnabled: !1,
                listenClickTap: !1,
                inDblClickWindow: !1,
                pixelRatio: void 0,
                dragDistance: 3,
                angleDeg: !0,
                showWarnings: !0,
                dragButtons: [0, 1],
                isDragging: function () {
                    return e.Konva.DD.isDragging
                },
                isDragReady: function () {
                    return !!e.Konva.DD.node
                },
                UA: e._parseUA(e.glob.navigator && e.glob.navigator.userAgent || ""),
                document: e.glob.document,
                _injectGlobal: function (t) {
                    e.glob.Konva = t
                },
                _parseUA: e._parseUA
            }, e._NODES_REGISTRY = {}, e._registerNode = function (t) {
                e._NODES_REGISTRY[t.prototype.getClassName()] = t, e.Konva[t.prototype.getClassName()] = t
            }
        }, 583: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(6859), s = i(2503), h = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._validateAdd = function (t) {
                    var e = t.getType();
                    "Group" !== e && "Shape" !== e && o.Util.throw("You may only add groups and shapes to groups.")
                }, e
            }(a.Container);
            e.Group = h, h.prototype.nodeType = "Group", s._registerNode(h), o.Collection.mapMethods(h)
        }, 5968: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(6859), s = i(2315), h = i(9706), c = i(8370), l = i(1457), u = i(8734), d = i(2503),
                p = [{x: 0, y: 0}, {x: -1, y: -1}, {x: 1, y: -1}, {x: 1, y: 1}, {x: -1, y: 1}], f = p.length,
                g = function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.hitCanvas = new c.HitCanvas({pixelRatio: 1}), e
                    }

                    return n(e, t), e.prototype.setSize = function (e) {
                        var i = e.width, r = e.height;
                        return t.prototype.setSize.call(this, {width: i, height: r}), this.hitCanvas.setSize(i, r), this
                    }, e.prototype._validateAdd = function (t) {
                        var e = t.getType();
                        "Group" !== e && "Shape" !== e && o.Util.throw("You may only add groups and shapes to a layer.")
                    }, e.prototype.getIntersection = function (t, e) {
                        var i, r, n, o;
                        if (!this.hitGraphEnabled() || !this.isVisible()) return null;
                        for (var a = 1, s = !1; ;) {
                            for (r = 0; r < f; r++) {
                                if (n = p[r], (o = (i = this._getIntersection({
                                    x: t.x + n.x * a,
                                    y: t.y + n.y * a
                                })).shape) && e) return o.findAncestor(e, !0);
                                if (o) return o;
                                if (s = !!i.antialiased, !i.antialiased) break
                            }
                            if (!s) return null;
                            a += 1
                        }
                    }, e.prototype._getIntersection = function (t) {
                        var e, i, r = this.hitCanvas.pixelRatio,
                            n = this.hitCanvas.context.getImageData(Math.round(t.x * r), Math.round(t.y * r), 1, 1).data,
                            a = n[3];
                        return 255 === a ? (e = o.Util._rgbToHex(n[0], n[1], n[2]), (i = l.shapes["#" + e]) ? {shape: i} : {antialiased: !0}) : a > 0 ? {antialiased: !0} : {}
                    }, e.prototype.drawScene = function (t, e) {
                        var i = this.getLayer(), r = t || i && i.getCanvas();
                        return this._fire("beforeDraw", {node: this}), this.clearBeforeDraw() && r.getContext().clear(), a.Container.prototype.drawScene.call(this, r, e), this._fire("draw", {node: this}), this
                    }, e.prototype.drawHit = function (t, e) {
                        var i = this.getLayer(), r = t || i && i.hitCanvas;
                        return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), a.Container.prototype.drawHit.call(this, r, e), this
                    }, e.prototype.clear = function (t) {
                        return h.BaseLayer.prototype.clear.call(this, t), this.getHitCanvas().getContext().clear(t), this
                    }, e.prototype.enableHitGraph = function () {
                        return this.hitGraphEnabled(!0), this
                    }, e.prototype.disableHitGraph = function () {
                        return this.hitGraphEnabled(!1), this
                    }, e.prototype.toggleHitCanvas = function () {
                        if (this.parent) {
                            var t = this.parent;
                            this.hitCanvas._canvas.parentNode ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas)
                        }
                    }, e
                }(h.BaseLayer);
            e.Layer = g, g.prototype.nodeType = "Layer", d._registerNode(g), s.Factory.addGetterSetter(g, "hitGraphEnabled", !0, u.getBooleanValidator()), o.Collection.mapMethods(g)
        }, 4206: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(5117), n = i(2315), o = i(8370), a = i(2503), s = i(4889), h = i(8734);
            e.ids = {}, e.names = {}, e._removeId = function (t, i) {
                t && e.ids[t] === i && delete e.ids[t]
            }, e._addName = function (t, i) {
                i && (e.names[i] || (e.names[i] = []), e.names[i].push(t))
            }, e._removeName = function (t, i) {
                if (t) {
                    var r = e.names[t];
                    if (r) {
                        for (var n = 0; n < r.length; n++) r[n]._id === i && r.splice(n, 1);
                        0 === r.length && delete e.names[t]
                    }
                }
            };
            var c = "absoluteOpacity", l = "absoluteTransform", u = "absoluteScale", d = "canvas", p = "listening",
                f = "mouseenter", g = "mouseleave", y = "Shape", v = " ", _ = "stage", m = "transform", b = "visible",
                x = ["xChange.konva", "yChange.konva", "scaleXChange.konva", "scaleYChange.konva", "skewXChange.konva", "skewYChange.konva", "rotationChange.konva", "offsetXChange.konva", "offsetYChange.konva", "transformsEnabledChange.konva"].join(v),
                S = (["scaleXChange.konva", "scaleYChange.konva"].join(v), new r.Collection), w = 1, C = function () {
                    function t(t) {
                        var e = this;
                        this._id = w++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this.parent = null, this._cache = new Map, this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this.children = S, this._dragEventId = null, this.setAttrs(t), this.on(x, (function () {
                            e._batchingTransformChange ? e._needClearTransformCache = !0 : (e._clearCache(m), e._clearSelfAndDescendantCache(l))
                        })), this.on("visibleChange.konva", (function () {
                            e._clearSelfAndDescendantCache(b)
                        })), this.on("listeningChange.konva", (function () {
                            e._clearSelfAndDescendantCache(p)
                        })), this.on("opacityChange.konva", (function () {
                            e._clearSelfAndDescendantCache(c)
                        }))
                    }

                    return t.prototype.hasChildren = function () {
                        return !1
                    }, t.prototype.getChildren = function () {
                        return S
                    }, t.prototype._clearCache = function (t) {
                        t ? this._cache.delete(t) : this._cache.clear()
                    }, t.prototype._getCache = function (t, e) {
                        var i = this._cache.get(t);
                        return void 0 === i && (i = e.call(this), this._cache.set(t, i)), i
                    }, t.prototype._getCanvasCache = function () {
                        return this._cache.get(d)
                    }, t.prototype._clearSelfAndDescendantCache = function (t, e) {
                        this._clearCache(t), e && t === l && this.fire("_clearTransformCache"), this.isCached() || this.children && this.children.each((function (e) {
                            e._clearSelfAndDescendantCache(t, !0)
                        }))
                    }, t.prototype.clearCache = function () {
                        return this._cache.delete(d), this._clearSelfAndDescendantCache(), this
                    }, t.prototype.cache = function (t) {
                        var e = t || {}, i = {};
                        void 0 !== e.x && void 0 !== e.y && void 0 !== e.width && void 0 !== e.height || (i = this.getClientRect({
                            skipTransform: !0,
                            relativeTo: this.getParent()
                        }));
                        var n = Math.ceil(e.width || i.width), a = Math.ceil(e.height || i.height), s = e.pixelRatio,
                            h = void 0 === e.x ? i.x : e.x, l = void 0 === e.y ? i.y : e.y, p = e.offset || 0,
                            f = e.drawBorder || !1;
                        if (n && a) {
                            n += 2 * p, a += 2 * p, h -= p, l -= p;
                            var g = new o.SceneCanvas({pixelRatio: s, width: n, height: a}),
                                y = new o.SceneCanvas({pixelRatio: s, width: 0, height: 0}),
                                v = new o.HitCanvas({pixelRatio: 1, width: n, height: a}), _ = g.getContext(),
                                m = v.getContext();
                            return v.isCache = !0, this._cache.delete("canvas"), this._filterUpToDate = !1, !1 === e.imageSmoothingEnabled && (g.getContext()._context.imageSmoothingEnabled = !1, y.getContext()._context.imageSmoothingEnabled = !1), _.save(), m.save(), _.translate(-h, -l), m.translate(-h, -l), this._isUnderCache = !0, this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(u), this.drawScene(g, this, !0), this.drawHit(v, this, !0), this._isUnderCache = !1, _.restore(), m.restore(), f && (_.save(), _.beginPath(), _.rect(0, 0, n, a), _.closePath(), _.setAttr("strokeStyle", "red"), _.setAttr("lineWidth", 5), _.stroke(), _.restore()), this._cache.set(d, {
                                scene: g,
                                filter: y,
                                hit: v,
                                x: h,
                                y: l
                            }), this
                        }
                        r.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")
                    }, t.prototype.isCached = function () {
                        return this._cache.has("canvas")
                    }, t.prototype.getClientRect = function (t) {
                        throw new Error('abstract "getClientRect" method call')
                    }, t.prototype._transformedRect = function (t, e) {
                        var i, r, n, o, a = [{x: t.x, y: t.y}, {x: t.x + t.width, y: t.y}, {
                            x: t.x + t.width,
                            y: t.y + t.height
                        }, {x: t.x, y: t.y + t.height}], s = this.getAbsoluteTransform(e);
                        return a.forEach((function (t) {
                            var e = s.point(t);
                            void 0 === i && (i = n = e.x, r = o = e.y), i = Math.min(i, e.x), r = Math.min(r, e.y), n = Math.max(n, e.x), o = Math.max(o, e.y)
                        })), {x: i, y: r, width: n - i, height: o - r}
                    }, t.prototype._drawCachedSceneCanvas = function (t) {
                        t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
                        var e = this._getCanvasCache();
                        t.translate(e.x, e.y);
                        var i = this._getCachedSceneCanvas(), r = i.pixelRatio;
                        t.drawImage(i._canvas, 0, 0, i.width / r, i.height / r), t.restore()
                    }, t.prototype._drawCachedHitCanvas = function (t) {
                        var e = this._getCanvasCache(), i = e.hit;
                        t.save(), t.translate(e.x, e.y), t.drawImage(i._canvas, 0, 0), t.restore()
                    }, t.prototype._getCachedSceneCanvas = function () {
                        var t, e, i, n, o = this.filters(), a = this._getCanvasCache(), s = a.scene, h = a.filter,
                            c = h.getContext();
                        if (o) {
                            if (!this._filterUpToDate) {
                                var l = s.pixelRatio;
                                h.setSize(s.width / s.pixelRatio, s.height / s.pixelRatio);
                                try {
                                    for (t = o.length, c.clear(), c.drawImage(s._canvas, 0, 0, s.getWidth() / l, s.getHeight() / l), e = c.getImageData(0, 0, h.getWidth(), h.getHeight()), i = 0; i < t; i++) "function" == typeof (n = o[i]) ? (n.call(this, e), c.putImageData(e, 0, 0)) : r.Util.error("Filter should be type of function, but got " + typeof n + " instead. Please check correct filters")
                                } catch (t) {
                                    r.Util.error("Unable to apply filter. " + t.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.")
                                }
                                this._filterUpToDate = !0
                            }
                            return h
                        }
                        return s
                    }, t.prototype.on = function (t, e) {
                        if (3 === arguments.length) return this._delegate.apply(this, arguments);
                        var i, r, n, o, a = t.split(v), s = a.length;
                        for (i = 0; i < s; i++) n = (r = a[i].split("."))[0], o = r[1] || "", this.eventListeners[n] || (this.eventListeners[n] = []), this.eventListeners[n].push({
                            name: o,
                            handler: e
                        });
                        return this
                    }, t.prototype.off = function (t, e) {
                        var i, r, n, o, a, s = (t || "").split(v), h = s.length;
                        if (!t) for (r in this.eventListeners) this._off(r);
                        for (i = 0; i < h; i++) if (o = (n = s[i].split("."))[0], a = n[1], o) this.eventListeners[o] && this._off(o, a, e); else for (r in this.eventListeners) this._off(r, a, e);
                        return this
                    }, t.prototype.dispatchEvent = function (t) {
                        var e = {target: this, type: t.type, evt: t};
                        return this.fire(t.type, e), this
                    }, t.prototype.addEventListener = function (t, e) {
                        return this.on(t, (function (t) {
                            e.call(this, t.evt)
                        })), this
                    }, t.prototype.removeEventListener = function (t) {
                        return this.off(t), this
                    }, t.prototype._delegate = function (t, e, i) {
                        var n = this;
                        this.on(t, (function (t) {
                            for (var o = t.target.findAncestors(e, !0, n), a = 0; a < o.length; a++) (t = r.Util.cloneObject(t)).currentTarget = o[a], i.call(o[a], t)
                        }))
                    }, t.prototype.remove = function () {
                        return this.isDragging() && this.stopDrag(), s.DD._dragElements.delete(this._id), this._remove(), this
                    }, t.prototype._clearCaches = function () {
                        this._clearSelfAndDescendantCache(l), this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(u), this._clearSelfAndDescendantCache(_), this._clearSelfAndDescendantCache(b), this._clearSelfAndDescendantCache(p)
                    }, t.prototype._remove = function () {
                        this._clearCaches();
                        var t = this.getParent();
                        t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null)
                    }, t.prototype.destroy = function () {
                        e._removeId(this.id(), this);
                        for (var t = (this.name() || "").split(/\s/g), i = 0; i < t.length; i++) {
                            var r = t[i];
                            e._removeName(r, this._id)
                        }
                        return this.remove(), this
                    }, t.prototype.getAttr = function (t) {
                        var e = "get" + r.Util._capitalize(t);
                        return r.Util._isFunction(this[e]) ? this[e]() : this.attrs[t]
                    }, t.prototype.getAncestors = function () {
                        for (var t = this.getParent(), e = new r.Collection; t;) e.push(t), t = t.getParent();
                        return e
                    }, t.prototype.getAttrs = function () {
                        return this.attrs || {}
                    }, t.prototype.setAttrs = function (t) {
                        var e, i;
                        if (!t) return this;
                        for (e in t) "children" !== e && (i = "set" + r.Util._capitalize(e), r.Util._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]));
                        return this
                    }, t.prototype.isListening = function () {
                        return this._getCache(p, this._isListening)
                    }, t.prototype._isListening = function () {
                        var t = this.listening(), e = this.getParent();
                        return "inherit" === t ? !e || e.isListening() : t
                    }, t.prototype.isVisible = function () {
                        return this._getCache(b, this._isVisible)
                    }, t.prototype._isVisible = function (t) {
                        var e = this.visible(), i = this.getParent();
                        return "inherit" === e ? !i || i === t || i._isVisible(t) : t && t !== i ? e && i._isVisible(t) : e
                    }, t.prototype.shouldDrawHit = function () {
                        var t = this.getLayer();
                        return !t && this.isListening() && this.isVisible() || t && t.hitGraphEnabled() && this.isListening() && this.isVisible()
                    }, t.prototype.show = function () {
                        return this.visible(!0), this
                    }, t.prototype.hide = function () {
                        return this.visible(!1), this
                    }, t.prototype.getZIndex = function () {
                        return this.index || 0
                    }, t.prototype.getAbsoluteZIndex = function () {
                        var t, e, i, r, n = this.getDepth(), o = this, a = 0;
                        return "Stage" !== o.nodeType && function s(h) {
                            for (t = [], e = h.length, i = 0; i < e; i++) r = h[i], a++, r.nodeType !== y && (t = t.concat(r.getChildren().toArray())), r._id === o._id && (i = e);
                            t.length > 0 && t[0].getDepth() <= n && s(t)
                        }(o.getStage().getChildren()), a
                    }, t.prototype.getDepth = function () {
                        for (var t = 0, e = this.parent; e;) t++, e = e.parent;
                        return t
                    }, t.prototype._batchTransformChanges = function (t) {
                        this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(m), this._clearSelfAndDescendantCache(l, !0)), this._needClearTransformCache = !1
                    }, t.prototype.setPosition = function (t) {
                        var e = this;
                        return this._batchTransformChanges((function () {
                            e.x(t.x), e.y(t.y)
                        })), this
                    }, t.prototype.getPosition = function () {
                        return {x: this.x(), y: this.y()}
                    }, t.prototype.getAbsolutePosition = function (t) {
                        for (var e = !1, i = this.parent; i;) {
                            if (i.isCached()) {
                                e = !0;
                                break
                            }
                            i = i.parent
                        }
                        e && !t && (t = !0);
                        var n = this.getAbsoluteTransform(t).getMatrix(), o = new r.Transform, a = this.offset();
                        return o.m = n.slice(), o.translate(a.x, a.y), o.getTranslation()
                    }, t.prototype.setAbsolutePosition = function (t) {
                        var e, i = this._clearTransform();
                        return this.attrs.x = i.x, this.attrs.y = i.y, delete i.x, delete i.y, this._clearCache(m), (e = this._getAbsoluteTransform()).invert(), e.translate(t.x, t.y), t = {
                            x: this.attrs.x + e.getTranslation().x,
                            y: this.attrs.y + e.getTranslation().y
                        }, this._setTransform(i), this.setPosition({x: t.x, y: t.y}), this
                    }, t.prototype._setTransform = function (t) {
                        var e;
                        for (e in t) this.attrs[e] = t[e]
                    }, t.prototype._clearTransform = function () {
                        var t = {
                            x: this.x(),
                            y: this.y(),
                            rotation: this.rotation(),
                            scaleX: this.scaleX(),
                            scaleY: this.scaleY(),
                            offsetX: this.offsetX(),
                            offsetY: this.offsetY(),
                            skewX: this.skewX(),
                            skewY: this.skewY()
                        };
                        return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t
                    }, t.prototype.move = function (t) {
                        var e = t.x, i = t.y, r = this.x(), n = this.y();
                        return void 0 !== e && (r += e), void 0 !== i && (n += i), this.setPosition({x: r, y: n}), this
                    }, t.prototype._eachAncestorReverse = function (t, e) {
                        var i, r, n = [], o = this.getParent();
                        if (e && e._id === this._id) t(this); else {
                            for (n.unshift(this); o && (!e || o._id !== e._id);) n.unshift(o), o = o.parent;
                            for (i = n.length, r = 0; r < i; r++) t(n[r])
                        }
                    }, t.prototype.rotate = function (t) {
                        return this.rotation(this.rotation() + t), this
                    }, t.prototype.moveToTop = function () {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
                        var t = this.index;
                        return this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0
                    }, t.prototype.moveUp = function () {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveUp function is ignored."), !1;
                        var t = this.index;
                        return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0)
                    }, t.prototype.moveDown = function () {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveDown function is ignored."), !1;
                        var t = this.index;
                        return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0)
                    }, t.prototype.moveToBottom = function () {
                        if (!this.parent) return r.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
                        var t = this.index;
                        return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0)
                    }, t.prototype.setZIndex = function (t) {
                        if (!this.parent) return r.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
                        (t < 0 || t >= this.parent.children.length) && r.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
                        var e = this.index;
                        return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this
                    }, t.prototype.getAbsoluteOpacity = function () {
                        return this._getCache(c, this._getAbsoluteOpacity)
                    }, t.prototype._getAbsoluteOpacity = function () {
                        var t = this.opacity(), e = this.getParent();
                        return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t
                    }, t.prototype.moveTo = function (t) {
                        return this.getParent() !== t && (this._remove(), t.add(this)), this
                    }, t.prototype.toObject = function () {
                        var t, e, i, n, o = {}, a = this.getAttrs();
                        for (t in o.attrs = {}, a) e = a[t], r.Util.isObject(e) && !r.Util._isPlainObject(e) && !r.Util._isArray(e) || (i = "function" == typeof this[t] && this[t], delete a[t], n = i ? i.call(this) : null, a[t] = e, n !== e && (o.attrs[t] = e));
                        return o.className = this.getClassName(), r.Util._prepareToStringify(o)
                    }, t.prototype.toJSON = function () {
                        return JSON.stringify(this.toObject())
                    }, t.prototype.getParent = function () {
                        return this.parent
                    }, t.prototype.findAncestors = function (t, e, i) {
                        var r = [];
                        e && this._isMatch(t) && r.push(this);
                        for (var n = this.parent; n;) {
                            if (n === i) return r;
                            n._isMatch(t) && r.push(n), n = n.parent
                        }
                        return r
                    }, t.prototype.isAncestorOf = function (t) {
                        return !1
                    }, t.prototype.findAncestor = function (t, e, i) {
                        return this.findAncestors(t, e, i)[0]
                    }, t.prototype._isMatch = function (t) {
                        if (!t) return !1;
                        if ("function" == typeof t) return t(this);
                        var e, i, n = t.replace(/ /g, "").split(","), o = n.length;
                        for (e = 0; e < o; e++) if (i = n[e], r.Util.isValidSelector(i) || (r.Util.warn('Selector "' + i + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), r.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), r.Util.warn("Konva is awesome, right?")), "#" === i.charAt(0)) {
                            if (this.id() === i.slice(1)) return !0
                        } else if ("." === i.charAt(0)) {
                            if (this.hasName(i.slice(1))) return !0
                        } else if (this.className === i || this.nodeType === i) return !0;
                        return !1
                    }, t.prototype.getLayer = function () {
                        var t = this.getParent();
                        return t ? t.getLayer() : null
                    }, t.prototype.getStage = function () {
                        return this._getCache(_, this._getStage)
                    }, t.prototype._getStage = function () {
                        var t = this.getParent();
                        return t ? t.getStage() : void 0
                    }, t.prototype.fire = function (t, e, i) {
                        return void 0 === e && (e = {}), e.target = e.target || this, i ? this._fireAndBubble(t, e) : this._fire(t, e), this
                    }, t.prototype.getAbsoluteTransform = function (t) {
                        return t ? this._getAbsoluteTransform(t) : this._getCache(l, this._getAbsoluteTransform)
                    }, t.prototype._getAbsoluteTransform = function (t) {
                        var e;
                        if (t) return e = new r.Transform, this._eachAncestorReverse((function (t) {
                            var i = t.transformsEnabled();
                            "all" === i ? e.multiply(t.getTransform()) : "position" === i && e.translate(t.x() - t.offsetX(), t.y() - t.offsetY())
                        }), t), e;
                        e = this.parent ? this.parent.getAbsoluteTransform().copy() : new r.Transform;
                        var i = this.transformsEnabled();
                        return "all" === i ? e.multiply(this.getTransform()) : "position" === i && e.translate(this.x() - this.offsetX(), this.y() - this.offsetY()), e
                    }, t.prototype.getAbsoluteScale = function (t) {
                        for (var e = this; e;) e._isUnderCache && (t = e), e = e.getParent();
                        var i = this.getAbsoluteTransform(t).decompose();
                        return {x: i.scaleX, y: i.scaleY}
                    }, t.prototype.getAbsoluteRotation = function () {
                        return this.getAbsoluteTransform().decompose().rotation
                    }, t.prototype.getTransform = function () {
                        return this._getCache(m, this._getTransform)
                    }, t.prototype._getTransform = function () {
                        var t = new r.Transform, e = this.x(), i = this.y(), n = a.Konva.getAngle(this.rotation()),
                            o = this.scaleX(), s = this.scaleY(), h = this.skewX(), c = this.skewY(), l = this.offsetX(),
                            u = this.offsetY();
                        return 0 === e && 0 === i || t.translate(e, i), 0 !== n && t.rotate(n), 0 === h && 0 === c || t.skew(h, c), 1 === o && 1 === s || t.scale(o, s), 0 === l && 0 === u || t.translate(-1 * l, -1 * u), t
                    }, t.prototype.clone = function (t) {
                        var e, i, n, o, a, s = r.Util.cloneObject(this.attrs);
                        for (e in t) s[e] = t[e];
                        var h = new this.constructor(s);
                        for (e in this.eventListeners) for (n = (i = this.eventListeners[e]).length, o = 0; o < n; o++) (a = i[o]).name.indexOf("konva") < 0 && (h.eventListeners[e] || (h.eventListeners[e] = []), h.eventListeners[e].push(a));
                        return h
                    }, t.prototype._toKonvaCanvas = function (t) {
                        t = t || {};
                        var e = this.getClientRect(), i = this.getStage(), r = void 0 !== t.x ? t.x : e.x,
                            n = void 0 !== t.y ? t.y : e.y, a = t.pixelRatio || 1, s = new o.SceneCanvas({
                                width: t.width || e.width || (i ? i.width() : 0),
                                height: t.height || e.height || (i ? i.height() : 0),
                                pixelRatio: a
                            }), h = s.getContext();
                        return h.save(), (r || n) && h.translate(-1 * r, -1 * n), this.drawScene(s), h.restore(), s
                    }, t.prototype.toCanvas = function (t) {
                        return this._toKonvaCanvas(t)._canvas
                    }, t.prototype.toDataURL = function (t) {
                        var e = (t = t || {}).mimeType || null, i = t.quality || null,
                            r = this._toKonvaCanvas(t).toDataURL(e, i);
                        return t.callback && t.callback(r), r
                    }, t.prototype.toImage = function (t) {
                        if (!t || !t.callback) throw "callback required for toImage method config argument";
                        var e = t.callback;
                        delete t.callback, r.Util._urlToImage(this.toDataURL(t), (function (t) {
                            e(t)
                        }))
                    }, t.prototype.setSize = function (t) {
                        return this.width(t.width), this.height(t.height), this
                    }, t.prototype.getSize = function () {
                        return {width: this.width(), height: this.height()}
                    }, t.prototype.getClassName = function () {
                        return this.className || this.nodeType
                    }, t.prototype.getType = function () {
                        return this.nodeType
                    }, t.prototype.getDragDistance = function () {
                        return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : a.Konva.dragDistance
                    }, t.prototype._off = function (t, e, i) {
                        var r, n, o, a = this.eventListeners[t];
                        for (r = 0; r < a.length; r++) if (n = a[r].name, o = a[r].handler, !("konva" === n && "konva" !== e || e && n !== e || i && i !== o)) {
                            if (a.splice(r, 1), 0 === a.length) {
                                delete this.eventListeners[t];
                                break
                            }
                            r--
                        }
                    }, t.prototype._fireChangeEvent = function (t, e, i) {
                        this._fire(t + "Change", {oldVal: e, newVal: i})
                    }, t.prototype.setId = function (t) {
                        var i = this.id();
                        return e._removeId(i, this), function (t, i) {
                            i && (e.ids[i] = t)
                        }(this, t), this._setAttr("id", t), this
                    }, t.prototype.setName = function (t) {
                        var i, r, n = (this.name() || "").split(/\s/g), o = (t || "").split(/\s/g);
                        for (r = 0; r < n.length; r++) i = n[r], -1 === o.indexOf(i) && i && e._removeName(i, this._id);
                        for (r = 0; r < o.length; r++) i = o[r], -1 === n.indexOf(i) && i && e._addName(this, i);
                        return this._setAttr("name", t), this
                    }, t.prototype.addName = function (t) {
                        if (!this.hasName(t)) {
                            var e = this.name(), i = e ? e + " " + t : t;
                            this.setName(i)
                        }
                        return this
                    }, t.prototype.hasName = function (t) {
                        if (!t) return !1;
                        var e = this.name();
                        return !!e && -1 !== (e || "").split(/\s/g).indexOf(t)
                    }, t.prototype.removeName = function (t) {
                        var e = (this.name() || "").split(/\s/g), i = e.indexOf(t);
                        return -1 !== i && (e.splice(i, 1), this.setName(e.join(" "))), this
                    }, t.prototype.setAttr = function (t, e) {
                        var i = this["set" + r.Util._capitalize(t)];
                        return r.Util._isFunction(i) ? i.call(this, e) : this._setAttr(t, e), this
                    }, t.prototype._setAttr = function (t, e) {
                        var i = this.attrs[t];
                        (i !== e || r.Util.isObject(e)) && (null == e ? delete this.attrs[t] : this.attrs[t] = e, this._fireChangeEvent(t, i, e))
                    }, t.prototype._setComponentAttr = function (t, e, i) {
                        var r;
                        void 0 !== i && ((r = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = i, this._fireChangeEvent(t, r, i))
                    }, t.prototype._fireAndBubble = function (t, e, i) {
                        if (e && this.nodeType === y && (e.target = this), t !== f && t !== g || !(i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || "Stage" === this.nodeType && !i)) {
                            this._fire(t, e);
                            var r = (t === f || t === g) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
                            (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !r && (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i) : this._fireAndBubble.call(this.parent, t, e))
                        }
                    }, t.prototype._fire = function (t, e) {
                        var i, r = this.eventListeners[t];
                        if (r) for ((e = e || {}).currentTarget = this, e.type = t, i = 0; i < r.length; i++) r[i].handler.call(this, e)
                    }, t.prototype.draw = function () {
                        return this.drawScene(), this.drawHit(), this
                    }, t.prototype._createDragElement = function (t) {
                        var e = t ? t.pointerId : void 0, i = this.getStage(), r = this.getAbsolutePosition(),
                            n = i._getPointerById(e) || i._changedPointerPositions[0] || r;
                        s.DD._dragElements.set(this._id, {
                            node: this,
                            startPointerPos: n,
                            offset: {x: n.x - r.x, y: n.y - r.y},
                            dragStatus: "ready",
                            pointerId: e
                        })
                    }, t.prototype.startDrag = function (t) {
                        s.DD._dragElements.has(this._id) || this._createDragElement(t), s.DD._dragElements.get(this._id).dragStatus = "dragging", this.fire("dragstart", {
                            type: "dragstart",
                            target: this,
                            evt: t && t.evt
                        }, !0)
                    }, t.prototype._setDragPosition = function (t, e) {
                        var i = this.getStage()._getPointerById(e.pointerId);
                        if (i) {
                            var n = {x: i.x - e.offset.x, y: i.y - e.offset.y}, o = this.dragBoundFunc();
                            if (void 0 !== o) {
                                var a = o.call(this, n, t);
                                a ? n = a : r.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.")
                            }
                            this._lastPos && this._lastPos.x === n.x && this._lastPos.y === n.y || (this.setAbsolutePosition(n), this.getLayer() ? this.getLayer().batchDraw() : this.getStage() && this.getStage().batchDraw()), this._lastPos = n
                        }
                    }, t.prototype.stopDrag = function (t) {
                        var e = s.DD._dragElements.get(this._id);
                        e && (e.dragStatus = "stopped"), s.DD._endDragBefore(t), s.DD._endDragAfter(t)
                    }, t.prototype.setDraggable = function (t) {
                        this._setAttr("draggable", t), this._dragChange()
                    },t.prototype.isDragging = function () {
                        var t = s.DD._dragElements.get(this._id);
                        return !!t && "dragging" === t.dragStatus
                    },t.prototype._listenDrag = function () {
                        this._dragCleanup(), this.on("mousedown.konva touchstart.konva", (function (t) {
                            var e = this;
                            if ((void 0 === t.evt.button || a.Konva.dragButtons.indexOf(t.evt.button) >= 0) && !this.isDragging()) {
                                var i = !1;
                                s.DD._dragElements.forEach((function (t) {
                                    e.isAncestorOf(t.node) && (i = !0)
                                })), i || this._createDragElement(t)
                            }
                        }))
                    },t.prototype._dragChange = function () {
                        this.attrs.draggable ? this._listenDrag() : (this._dragCleanup(), this.getStage() && s.DD._dragElements.has(this._id) && this.stopDrag())
                    },t.prototype._dragCleanup = function () {
                        this.off("mousedown.konva"), this.off("touchstart.konva")
                    },t.create = function (t, e) {
                        return r.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e)
                    },t._createNode = function (e, i) {
                        var n, o, s, h = t.prototype.getClassName.call(e), c = e.children;
                        if (i && (e.attrs.container = i), a._NODES_REGISTRY[h] || (r.Util.warn('Can not find a node with class name "' + h + '". Fallback to "Shape".'), h = "Shape"), n = new (0, a._NODES_REGISTRY[h])(e.attrs), c) for (o = c.length, s = 0; s < o; s++) n.add(t._createNode(c[s]));
                        return n
                    },t
                }();
            e.Node = C, C.prototype.nodeType = "Node", C.prototype._attrsAffectingSize = [], n.Factory.addGetterSetter(C, "zIndex"), n.Factory.addGetterSetter(C, "absolutePosition"), n.Factory.addGetterSetter(C, "position"), n.Factory.addGetterSetter(C, "x", 0, h.getNumberValidator()), n.Factory.addGetterSetter(C, "y", 0, h.getNumberValidator()), n.Factory.addGetterSetter(C, "globalCompositeOperation", "source-over", h.getStringValidator()), n.Factory.addGetterSetter(C, "opacity", 1, h.getNumberValidator()), n.Factory.addGetterSetter(C, "name", "", h.getStringValidator()), n.Factory.addGetterSetter(C, "id", "", h.getStringValidator()), n.Factory.addGetterSetter(C, "rotation", 0, h.getNumberValidator()), n.Factory.addComponentsGetterSetter(C, "scale", ["x", "y"]), n.Factory.addGetterSetter(C, "scaleX", 1, h.getNumberValidator()), n.Factory.addGetterSetter(C, "scaleY", 1, h.getNumberValidator()), n.Factory.addComponentsGetterSetter(C, "skew", ["x", "y"]), n.Factory.addGetterSetter(C, "skewX", 0, h.getNumberValidator()), n.Factory.addGetterSetter(C, "skewY", 0, h.getNumberValidator()), n.Factory.addComponentsGetterSetter(C, "offset", ["x", "y"]), n.Factory.addGetterSetter(C, "offsetX", 0, h.getNumberValidator()), n.Factory.addGetterSetter(C, "offsetY", 0, h.getNumberValidator()), n.Factory.addGetterSetter(C, "dragDistance", null, h.getNumberValidator()), n.Factory.addGetterSetter(C, "width", 0, h.getNumberValidator()), n.Factory.addGetterSetter(C, "height", 0, h.getNumberValidator()), n.Factory.addGetterSetter(C, "listening", "inherit", (function (t) {
                return !0 === t || !1 === t || "inherit" === t || r.Util.warn(t + ' is a not valid value for "listening" attribute. The value may be true, false or "inherit".'), t
            })), n.Factory.addGetterSetter(C, "preventDefault", !0, h.getBooleanValidator()), n.Factory.addGetterSetter(C, "filters", null, (function (t) {
                return this._filterUpToDate = !1, t
            })), n.Factory.addGetterSetter(C, "visible", "inherit", (function (t) {
                return !0 === t || !1 === t || "inherit" === t || r.Util.warn(t + ' is a not valid value for "visible" attribute. The value may be true, false or "inherit".'), t
            })), n.Factory.addGetterSetter(C, "transformsEnabled", "all", h.getStringValidator()), n.Factory.addGetterSetter(C, "size"), n.Factory.addGetterSetter(C, "dragBoundFunc"), n.Factory.addGetterSetter(C, "draggable", !1, h.getBooleanValidator()), n.Factory.backCompat(C, {
                rotateDeg: "rotate",
                setRotationDeg: "setRotation",
                getRotationDeg: "getRotation"
            }), r.Collection.mapMethods(C)
        }, 5533: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2503), n = new Map, o = void 0 !== r.Konva._global.PointerEvent;

            function a(t) {
                return {evt: t, pointerId: t.pointerId}
            }

            function s(t, e) {
                var i = n.get(t);
                if (i) {
                    var r = i.getStage();
                    r && r.content, n.delete(t), o && i._fire("lostpointercapture", a(new PointerEvent("lostpointercapture")))
                }
            }

            e.getCapturedShape = function (t) {
                return n.get(t)
            }, e.createEvent = a, e.hasPointerCapture = function (t, e) {
                return n.get(t) === e
            }, e.setPointerCapture = function (t, e) {
                s(t), e.getStage() && (n.set(t, e), o && e._fire("gotpointercapture", a(new PointerEvent("gotpointercapture"))))
            }, e.releaseCapture = s
        }, 1457: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o, a = i(5117), s = i(2315), h = i(4206), c = i(8734), l = i(2503), u = i(5533), d = "hasShadow",
                p = "shadowRGBA", f = "patternImage", g = "linearGradient", y = "radialGradient";

            function v() {
                return o || (o = a.Util.createCanvasElement().getContext("2d"))
            }

            function _() {
                this._clearCache(d)
            }

            function m() {
                this._clearCache(p)
            }

            function b() {
                this._clearCache(f)
            }

            function x() {
                this._clearCache(g)
            }

            function S() {
                this._clearCache(y)
            }

            e.shapes = {};
            var w = function (t) {
                function i(i) {
                    for (var r, n = t.call(this, i) || this; !(r = a.Util.getRandomColor()) || r in e.shapes;) ;
                    return n.colorKey = r, e.shapes[r] = n, n.on("shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _), n.on("shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", m), n.on("fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva", b), n.on("fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", x), n.on("fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", S), n
                }

                return n(i, t), i.prototype.getContext = function () {
                    return this.getLayer().getContext()
                }, i.prototype.getCanvas = function () {
                    return this.getLayer().getCanvas()
                }, i.prototype.getSceneFunc = function () {
                    return this.attrs.sceneFunc || this._sceneFunc
                }, i.prototype.getHitFunc = function () {
                    return this.attrs.hitFunc || this._hitFunc
                }, i.prototype.hasShadow = function () {
                    return this._getCache(d, this._hasShadow)
                }, i.prototype._hasShadow = function () {
                    return this.shadowEnabled() && 0 !== this.shadowOpacity() && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY())
                }, i.prototype._getFillPattern = function () {
                    return this._getCache(f, this.__getFillPattern)
                }, i.prototype.__getFillPattern = function () {
                    if (this.fillPatternImage()) return v().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat")
                }, i.prototype._getLinearGradient = function () {
                    return this._getCache(g, this.__getLinearGradient)
                }, i.prototype.__getLinearGradient = function () {
                    var t = this.fillLinearGradientColorStops();
                    if (t) {
                        for (var e = v(), i = this.fillLinearGradientStartPoint(), r = this.fillLinearGradientEndPoint(), n = e.createLinearGradient(i.x, i.y, r.x, r.y), o = 0; o < t.length; o += 2) n.addColorStop(t[o], t[o + 1]);
                        return n
                    }
                }, i.prototype._getRadialGradient = function () {
                    return this._getCache(y, this.__getRadialGradient)
                }, i.prototype.__getRadialGradient = function () {
                    var t = this.fillRadialGradientColorStops();
                    if (t) {
                        for (var e = v(), i = this.fillRadialGradientStartPoint(), r = this.fillRadialGradientEndPoint(), n = e.createRadialGradient(i.x, i.y, this.fillRadialGradientStartRadius(), r.x, r.y, this.fillRadialGradientEndRadius()), o = 0; o < t.length; o += 2) n.addColorStop(t[o], t[o + 1]);
                        return n
                    }
                }, i.prototype.getShadowRGBA = function () {
                    return this._getCache(p, this._getShadowRGBA)
                }, i.prototype._getShadowRGBA = function () {
                    if (this.hasShadow()) {
                        var t = a.Util.colorToRGBA(this.shadowColor());
                        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")"
                    }
                }, i.prototype.hasFill = function () {
                    return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops())
                }, i.prototype.hasStroke = function () {
                    return this.strokeEnabled() && this.strokeWidth() && !(!this.stroke() && !this.strokeLinearGradientColorStops())
                }, i.prototype.hasHitStroke = function () {
                    var t = this.hitStrokeWidth();
                    return "auto" === t ? this.hasStroke() : this.strokeEnabled() && !!t
                }, i.prototype.intersects = function (t) {
                    var e = this.getStage().bufferHitCanvas;
                    return e.getContext().clear(), this.drawHit(e), e.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data[3] > 0
                }, i.prototype.destroy = function () {
                    return h.Node.prototype.destroy.call(this), delete e.shapes[this.colorKey], delete this.colorKey, this
                }, i.prototype._useBufferCanvas = function (t) {
                    return !(t && !this.hasShadow() || !this.perfectDrawEnabled() || 1 === this.getAbsoluteOpacity() || !this.hasFill() || !this.hasStroke() || !this.getStage())
                }, i.prototype.setStrokeHitEnabled = function (t) {
                    a.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0)
                }, i.prototype.getStrokeHitEnabled = function () {
                    return 0 !== this.hitStrokeWidth()
                }, i.prototype.getSelfRect = function () {
                    var t = this.size();
                    return {
                        x: this._centroid ? -t.width / 2 : 0,
                        y: this._centroid ? -t.height / 2 : 0,
                        width: t.width,
                        height: t.height
                    }
                }, i.prototype.getClientRect = function (t) {
                    var e = (t = t || {}).skipTransform, i = t.relativeTo, r = this.getSelfRect(),
                        n = !t.skipStroke && this.hasStroke() && this.strokeWidth() || 0, o = r.width + n,
                        a = r.height + n, s = !t.skipShadow && this.hasShadow(), h = s ? this.shadowOffsetX() : 0,
                        c = s ? this.shadowOffsetY() : 0, l = o + Math.abs(h), u = a + Math.abs(c),
                        d = s && this.shadowBlur() || 0, p = l + 2 * d, f = u + 2 * d, g = 0;
                    Math.round(n / 2) !== n / 2 && (g = 1);
                    var y = {
                        width: p + g,
                        height: f + g,
                        x: -Math.round(n / 2 + d) + Math.min(h, 0) + r.x,
                        y: -Math.round(n / 2 + d) + Math.min(c, 0) + r.y
                    };
                    return e ? y : this._transformedRect(y, i)
                }, i.prototype.drawScene = function (t, e, i, r) {
                    var n, o, a = this.getLayer(), s = t || a.getCanvas(), h = s.getContext(),
                        c = this._getCanvasCache(), l = this.sceneFunc(), u = this.hasShadow(), d = this.hasStroke();
                    if (!this.isVisible() && !i) return this;
                    if (c) return h.save(), a._applyTransform(this, h, e), this._drawCachedSceneCanvas(h), h.restore(), this;
                    if (!l) return this;
                    if (h.save(), this._useBufferCanvas(i) && !r) {
                        if ((o = (n = this.getStage().bufferCanvas).getContext()).clear(), o.save(), o._applyLineJoin(this), !i) if (a) a._applyTransform(this, o, e); else {
                            var p = this.getAbsoluteTransform(e).getMatrix();
                            h.transform(p[0], p[1], p[2], p[3], p[4], p[5])
                        }
                        l.call(this, o, this), o.restore();
                        var f = n.pixelRatio;
                        u && !s.hitCanvas ? (h.save(), h._applyShadow(this), h._applyOpacity(this), h._applyGlobalCompositeOperation(this), h.drawImage(n._canvas, 0, 0, n.width / f, n.height / f), h.restore()) : (h._applyOpacity(this), h._applyGlobalCompositeOperation(this), h.drawImage(n._canvas, 0, 0, n.width / f, n.height / f))
                    } else {
                        if (h._applyLineJoin(this), !i) if (a) a._applyTransform(this, h, e); else {
                            var g = this.getAbsoluteTransform(e).getMatrix();
                            h.transform(g[0], g[1], g[2], g[3], g[4], g[5])
                        }
                        u && d && !s.hitCanvas ? (h.save(), i || (h._applyOpacity(this), h._applyGlobalCompositeOperation(this)), h._applyShadow(this), l.call(this, h, this), h.restore(), this.hasFill() && this.shadowForStrokeEnabled() && l.call(this, h, this)) : u && !s.hitCanvas ? (h.save(), i || (h._applyOpacity(this), h._applyGlobalCompositeOperation(this)), h._applyShadow(this), l.call(this, h, this), h.restore()) : (i || (h._applyOpacity(this), h._applyGlobalCompositeOperation(this)), l.call(this, h, this))
                    }
                    return h.restore(), this
                }, i.prototype.drawHit = function (t, e, i) {
                    var r = this.getLayer(), n = t || r.hitCanvas, o = n && n.getContext(),
                        s = this.hitFunc() || this.sceneFunc(), h = this._getCanvasCache(), c = h && h.hit;
                    if (this.colorKey || (console.log(this), a.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()")), !this.shouldDrawHit() && !i) return this;
                    if (c) return o.save(), r._applyTransform(this, o, e), this._drawCachedHitCanvas(o), o.restore(), this;
                    if (!s) return this;
                    if (o.save(), o._applyLineJoin(this), !i) if (r) r._applyTransform(this, o, e); else {
                        var l = this.getAbsoluteTransform(e).getMatrix();
                        o.transform(l[0], l[1], l[2], l[3], l[4], l[5])
                    }
                    return s.call(this, o, this), o.restore(), this
                }, i.prototype.drawHitFromCache = function (t) {
                    void 0 === t && (t = 0);
                    var e, i, r, n, o, s = this._getCanvasCache(), h = this._getCachedSceneCanvas(), c = s.hit,
                        l = c.getContext(), u = c.getWidth(), d = c.getHeight();
                    l.clear(), l.drawImage(h._canvas, 0, 0, u, d);
                    try {
                        for (r = (i = (e = l.getImageData(0, 0, u, d)).data).length, n = a.Util._hexToRgb(this.colorKey), o = 0; o < r; o += 4) i[o + 3] > t ? (i[o] = n.r, i[o + 1] = n.g, i[o + 2] = n.b, i[o + 3] = 255) : i[o + 3] = 0;
                        l.putImageData(e, 0, 0)
                    } catch (t) {
                        a.Util.error("Unable to draw hit graph from cached scene canvas. " + t.message)
                    }
                    return this
                }, i.prototype.hasPointerCapture = function (t) {
                    return u.hasPointerCapture(t, this)
                }, i.prototype.setPointerCapture = function (t) {
                    u.setPointerCapture(t, this)
                }, i.prototype.releaseCapture = function (t) {
                    u.releaseCapture(t, this)
                }, i
            }(h.Node);
            e.Shape = w, w.prototype._fillFunc = function (t) {
                t.fill()
            }, w.prototype._strokeFunc = function (t) {
                t.stroke()
            }, w.prototype._fillFuncHit = function (t) {
                t.fill()
            }, w.prototype._strokeFuncHit = function (t) {
                t.stroke()
            }, w.prototype._centroid = !1, w.prototype.nodeType = "Shape", l._registerNode(w), s.Factory.addGetterSetter(w, "stroke", void 0, c.getStringValidator()), s.Factory.addGetterSetter(w, "strokeWidth", 2, c.getNumberValidator()), s.Factory.addGetterSetter(w, "hitStrokeWidth", "auto", c.getNumberOrAutoValidator()), s.Factory.addGetterSetter(w, "strokeHitEnabled", !0, c.getBooleanValidator()), s.Factory.addGetterSetter(w, "perfectDrawEnabled", !0, c.getBooleanValidator()), s.Factory.addGetterSetter(w, "shadowForStrokeEnabled", !0, c.getBooleanValidator()), s.Factory.addGetterSetter(w, "lineJoin"), s.Factory.addGetterSetter(w, "lineCap"), s.Factory.addGetterSetter(w, "sceneFunc"), s.Factory.addGetterSetter(w, "hitFunc"), s.Factory.addGetterSetter(w, "dash"), s.Factory.addGetterSetter(w, "dashOffset", 0, c.getNumberValidator()), s.Factory.addGetterSetter(w, "shadowColor", void 0, c.getStringValidator()), s.Factory.addGetterSetter(w, "shadowBlur", 0, c.getNumberValidator()), s.Factory.addGetterSetter(w, "shadowOpacity", 1, c.getNumberValidator()), s.Factory.addComponentsGetterSetter(w, "shadowOffset", ["x", "y"]), s.Factory.addGetterSetter(w, "shadowOffsetX", 0, c.getNumberValidator()), s.Factory.addGetterSetter(w, "shadowOffsetY", 0, c.getNumberValidator()), s.Factory.addGetterSetter(w, "fillPatternImage"), s.Factory.addGetterSetter(w, "fill", void 0, c.getStringValidator()), s.Factory.addGetterSetter(w, "fillPatternX", 0, c.getNumberValidator()), s.Factory.addGetterSetter(w, "fillPatternY", 0, c.getNumberValidator()), s.Factory.addGetterSetter(w, "fillLinearGradientColorStops"), s.Factory.addGetterSetter(w, "strokeLinearGradientColorStops"), s.Factory.addGetterSetter(w, "fillRadialGradientStartRadius", 0), s.Factory.addGetterSetter(w, "fillRadialGradientEndRadius", 0), s.Factory.addGetterSetter(w, "fillRadialGradientColorStops"), s.Factory.addGetterSetter(w, "fillPatternRepeat", "repeat"), s.Factory.addGetterSetter(w, "fillEnabled", !0), s.Factory.addGetterSetter(w, "strokeEnabled", !0), s.Factory.addGetterSetter(w, "shadowEnabled", !0), s.Factory.addGetterSetter(w, "dashEnabled", !0), s.Factory.addGetterSetter(w, "strokeScaleEnabled", !0), s.Factory.addGetterSetter(w, "fillPriority", "color"), s.Factory.addComponentsGetterSetter(w, "fillPatternOffset", ["x", "y"]), s.Factory.addGetterSetter(w, "fillPatternOffsetX", 0, c.getNumberValidator()), s.Factory.addGetterSetter(w, "fillPatternOffsetY", 0, c.getNumberValidator()), s.Factory.addComponentsGetterSetter(w, "fillPatternScale", ["x", "y"]), s.Factory.addGetterSetter(w, "fillPatternScaleX", 1, c.getNumberValidator()), s.Factory.addGetterSetter(w, "fillPatternScaleY", 1, c.getNumberValidator()), s.Factory.addComponentsGetterSetter(w, "fillLinearGradientStartPoint", ["x", "y"]), s.Factory.addComponentsGetterSetter(w, "strokeLinearGradientStartPoint", ["x", "y"]), s.Factory.addGetterSetter(w, "fillLinearGradientStartPointX", 0), s.Factory.addGetterSetter(w, "strokeLinearGradientStartPointX", 0), s.Factory.addGetterSetter(w, "fillLinearGradientStartPointY", 0), s.Factory.addGetterSetter(w, "strokeLinearGradientStartPointY", 0), s.Factory.addComponentsGetterSetter(w, "fillLinearGradientEndPoint", ["x", "y"]), s.Factory.addComponentsGetterSetter(w, "strokeLinearGradientEndPoint", ["x", "y"]), s.Factory.addGetterSetter(w, "fillLinearGradientEndPointX", 0), s.Factory.addGetterSetter(w, "strokeLinearGradientEndPointX", 0), s.Factory.addGetterSetter(w, "fillLinearGradientEndPointY", 0), s.Factory.addGetterSetter(w, "strokeLinearGradientEndPointY", 0), s.Factory.addComponentsGetterSetter(w, "fillRadialGradientStartPoint", ["x", "y"]), s.Factory.addGetterSetter(w, "fillRadialGradientStartPointX", 0), s.Factory.addGetterSetter(w, "fillRadialGradientStartPointY", 0), s.Factory.addComponentsGetterSetter(w, "fillRadialGradientEndPoint", ["x", "y"]), s.Factory.addGetterSetter(w, "fillRadialGradientEndPointX", 0), s.Factory.addGetterSetter(w, "fillRadialGradientEndPointY", 0), s.Factory.addGetterSetter(w, "fillPatternRotation", 0), s.Factory.backCompat(w, {
                dashArray: "dash",
                getDashArray: "getDash",
                setDashArray: "getDash",
                drawFunc: "sceneFunc",
                getDrawFunc: "getSceneFunc",
                setDrawFunc: "setSceneFunc",
                drawHitFunc: "hitFunc",
                getDrawHitFunc: "getHitFunc",
                setDrawHitFunc: "setHitFunc"
            }), a.Collection.mapMethods(w)
        }, 2562: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(6859), h = i(2503), c = i(8370), l = i(4889), u = i(2503), d = i(5533),
                p = "mouseout", f = "mouseleave", g = "mouseover", y = "mouseenter", v = "mousemove", _ = "mousedown",
                m = "mouseup", b = "pointermove", x = "pointerdown", S = "pointerup", w = "contextmenu", C = "click",
                P = "dblclick", A = "touchstart", T = "touchend", k = "dbltap", M = "touchmove", F = "wheel",
                O = [y, _, v, m, p, A, M, T, g, F, w, x, b, S, "pointercancel", "lostpointercapture"], D = O.length;

            function G(t, e) {
                t.content.addEventListener(e, (function (i) {
                    t["_" + e](i)
                }), !1)
            }

            function z(t) {
                return void 0 === t && (t = {}), (t.clipFunc || t.clipWidth || t.clipHeight) && o.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), t
            }

            e.stages = [];
            var R = function (t) {
                function i(i) {
                    var r = t.call(this, z(i)) || this;
                    return r._pointerPositions = [], r._changedPointerPositions = [], r._buildDOM(), r._bindContentEvents(), e.stages.push(r), r.on("widthChange.konva heightChange.konva", r._resizeDOM), r.on("visibleChange.konva", r._checkVisibility), r.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", (function () {
                        z(r.attrs)
                    })), r._checkVisibility(), r
                }

                return n(i, t), i.prototype._validateAdd = function (t) {
                    var e = "Layer" === t.getType(), i = "FastLayer" === t.getType();
                    e || i || o.Util.throw("You may only add layers to the stage.")
                }, i.prototype._checkVisibility = function () {
                    if (this.content) {
                        var t = this.visible() ? "" : "none";
                        this.content.style.display = t
                    }
                }, i.prototype.setContainer = function (t) {
                    if ("string" == typeof t) {
                        if ("." === t.charAt(0)) {
                            var e = t.slice(1);
                            t = document.getElementsByClassName(e)[0]
                        } else {
                            var i;
                            i = "#" !== t.charAt(0) ? t : t.slice(1), t = document.getElementById(i)
                        }
                        if (!t) throw "Can not find container in document with id " + i
                    }
                    return this._setAttr("container", t), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), t.appendChild(this.content)), this
                }, i.prototype.shouldDrawHit = function () {
                    return !0
                }, i.prototype.clear = function () {
                    var t, e = this.children, i = e.length;
                    for (t = 0; t < i; t++) e[t].clear();
                    return this
                }, i.prototype.clone = function (t) {
                    return t || (t = {}), t.container = document.createElement("div"), s.Container.prototype.clone.call(this, t)
                }, i.prototype.destroy = function () {
                    t.prototype.destroy.call(this);
                    var i = this.content;
                    i && o.Util._isInDocument(i) && this.container().removeChild(i);
                    var r = e.stages.indexOf(this);
                    return r > -1 && e.stages.splice(r, 1), this
                }, i.prototype.getPointerPosition = function () {
                    var t = this._pointerPositions[0] || this._changedPointerPositions[0];
                    return t ? {
                        x: t.x,
                        y: t.y
                    } : (o.Util.warn("Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"), null)
                }, i.prototype._getPointerById = function (t) {
                    return this._pointerPositions.find((function (e) {
                        return e.id === t
                    }))
                }, i.prototype.getPointersPositions = function () {
                    return this._pointerPositions
                }, i.prototype.getStage = function () {
                    return this
                }, i.prototype.getContent = function () {
                    return this.content
                }, i.prototype._toKonvaCanvas = function (t) {
                    var e = (t = t || {}).x || 0, i = t.y || 0, r = new c.SceneCanvas({
                        width: t.width || this.width(),
                        height: t.height || this.height(),
                        pixelRatio: t.pixelRatio || 1
                    }), n = r.getContext()._context, o = this.children;
                    return (e || i) && n.translate(-1 * e, -1 * i), o.each((function (r) {
                        if (r.isVisible()) {
                            var o = r._toKonvaCanvas(t);
                            n.drawImage(o._canvas, e, i, o.getWidth() / o.getPixelRatio(), o.getHeight() / o.getPixelRatio())
                        }
                    })), r
                }, i.prototype.getIntersection = function (t, e) {
                    if (!t) return null;
                    var i, r, n = this.children;
                    for (i = n.length - 1; i >= 0; i--) if (r = n[i].getIntersection(t, e)) return r;
                    return null
                }, i.prototype._resizeDOM = function () {
                    var t = this.width(), e = this.height();
                    this.content && (this.content.style.width = t + "px", this.content.style.height = e + "px"), this.bufferCanvas.setSize(t, e), this.bufferHitCanvas.setSize(t, e), this.children.each((function (i) {
                        i.setSize({width: t, height: e}), i.draw()
                    }))
                }, i.prototype.add = function (e) {
                    if (arguments.length > 1) {
                        for (var i = 0; i < arguments.length; i++) this.add(arguments[i]);
                        return this
                    }
                    t.prototype.add.call(this, e);
                    var r = this.children.length;
                    return r > 5 && o.Util.warn("The stage has " + r + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), e.setSize({
                        width: this.width(),
                        height: this.height()
                    }), e.draw(), h.Konva.isBrowser && this.content.appendChild(e.canvas._canvas), this
                }, i.prototype.getParent = function () {
                    return null
                }, i.prototype.getLayer = function () {
                    return null
                }, i.prototype.hasPointerCapture = function (t) {
                    return d.hasPointerCapture(t, this)
                }, i.prototype.setPointerCapture = function (t) {
                    d.setPointerCapture(t, this)
                }, i.prototype.releaseCapture = function (t) {
                    d.releaseCapture(t, this)
                }, i.prototype.getLayers = function () {
                    return this.getChildren()
                }, i.prototype._bindContentEvents = function () {
                    if (h.Konva.isBrowser) for (var t = 0; t < D; t++) G(this, O[t])
                }, i.prototype._mouseenter = function (t) {
                    this.setPointersPositions(t), this._fire(y, {evt: t, target: this, currentTarget: this})
                }, i.prototype._mouseover = function (t) {
                    this.setPointersPositions(t), this._fire("contentMouseover", {evt: t}), this._fire(g, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    })
                }, i.prototype._mouseout = function (t) {
                    var e;
                    this.setPointersPositions(t);
                    var i = (null === (e = this.targetShape) || void 0 === e ? void 0 : e.getStage()) ? this.targetShape : null,
                        r = !l.DD.isDragging || h.Konva.hitOnDragEnabled;
                    i && r ? (i._fireAndBubble(p, {evt: t}), i._fireAndBubble(f, {evt: t}), this._fire(f, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this.targetShape = null) : r && (this._fire(f, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this._fire(p, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    })), this.pointerPos = void 0, this._pointerPositions = [], this._fire("contentMouseout", {evt: t})
                }, i.prototype._mousemove = function (t) {
                    var e;
                    if (h.Konva.UA.ieMobile) return this._touchmove(t);
                    this.setPointersPositions(t);
                    var i, r = o.Util._getFirstPointerId(t),
                        n = (null === (e = this.targetShape) || void 0 === e ? void 0 : e.getStage()) ? this.targetShape : null,
                        a = !l.DD.isDragging || h.Konva.hitOnDragEnabled;
                    a && ((i = this.getIntersection(this.getPointerPosition())) && i.isListening() ? a && n !== i ? (n && (n._fireAndBubble(p, {
                        evt: t,
                        pointerId: r
                    }, i), n._fireAndBubble(f, {evt: t, pointerId: r}, i)), i._fireAndBubble(g, {
                        evt: t,
                        pointerId: r
                    }, n), i._fireAndBubble(y, {evt: t, pointerId: r}, n), i._fireAndBubble(v, {
                        evt: t,
                        pointerId: r
                    }), this.targetShape = i) : i._fireAndBubble(v, {
                        evt: t,
                        pointerId: r
                    }) : (n && a && (n._fireAndBubble(p, {evt: t, pointerId: r}), n._fireAndBubble(f, {
                        evt: t,
                        pointerId: r
                    }), this._fire(g, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: r
                    }), this.targetShape = null), this._fire(v, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: r
                    })), this._fire("contentMousemove", {evt: t})), t.cancelable && t.preventDefault()
                }, i.prototype._mousedown = function (t) {
                    if (h.Konva.UA.ieMobile) return this._touchstart(t);
                    this.setPointersPositions(t);
                    var e = o.Util._getFirstPointerId(t), i = this.getIntersection(this.getPointerPosition());
                    l.DD.justDragged = !1, h.Konva.listenClickTap = !0, i && i.isListening() ? (this.clickStartShape = i, i._fireAndBubble(_, {
                        evt: t,
                        pointerId: e
                    })) : this._fire(_, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    }), this._fire("contentMousedown", {evt: t})
                }, i.prototype._mouseup = function (t) {
                    if (h.Konva.UA.ieMobile) return this._touchend(t);
                    this.setPointersPositions(t);
                    var e = o.Util._getFirstPointerId(t), i = this.getIntersection(this.getPointerPosition()),
                        r = this.clickStartShape, n = this.clickEndShape, a = !1;
                    h.Konva.inDblClickWindow ? (a = !0, clearTimeout(this.dblTimeout)) : l.DD.justDragged || (h.Konva.inDblClickWindow = !0, clearTimeout(this.dblTimeout)), this.dblTimeout = setTimeout((function () {
                        h.Konva.inDblClickWindow = !1
                    }), h.Konva.dblClickWindow), i && i.isListening() ? (this.clickEndShape = i, i._fireAndBubble(m, {
                        evt: t,
                        pointerId: e
                    }), h.Konva.listenClickTap && r && r._id === i._id && (i._fireAndBubble(C, {
                        evt: t,
                        pointerId: e
                    }), a && n && n === i && i._fireAndBubble(P, {evt: t, pointerId: e}))) : (this._fire(m, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    }), h.Konva.listenClickTap && this._fire(C, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    }), a && this._fire(P, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: e
                    })), this._fire("contentMouseup", {evt: t}), h.Konva.listenClickTap && (this._fire("contentClick", {evt: t}), a && this._fire("contentDblclick", {evt: t})), h.Konva.listenClickTap = !1, t.cancelable && t.preventDefault()
                }, i.prototype._contextmenu = function (t) {
                    this.setPointersPositions(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    e && e.isListening() ? e._fireAndBubble(w, {evt: t}) : this._fire(w, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this._fire("contentContextmenu", {evt: t})
                }, i.prototype._touchstart = function (t) {
                    var e = this;
                    this.setPointersPositions(t);
                    var i = !1;
                    this._changedPointerPositions.forEach((function (r) {
                        var n = e.getIntersection(r);
                        h.Konva.listenClickTap = !0, l.DD.justDragged = !1, n && n.isListening() && (h.Konva.captureTouchEventsEnabled && n.setPointerCapture(r.id), e.tapStartShape = n, n._fireAndBubble(A, {
                            evt: t,
                            pointerId: r.id
                        }, e), i = !0, n.isListening() && n.preventDefault() && t.cancelable && t.preventDefault())
                    })), i || this._fire(A, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), this._fire("contentTouchstart", {evt: t})
                }, i.prototype._touchmove = function (t) {
                    var e = this;
                    if (this.setPointersPositions(t), !l.DD.isDragging || h.Konva.hitOnDragEnabled) {
                        var i = !1, r = {};
                        this._changedPointerPositions.forEach((function (n) {
                            var o = d.getCapturedShape(n.id) || e.getIntersection(n);
                            o && o.isListening() && (r[o._id] || (r[o._id] = !0, o._fireAndBubble(M, {
                                evt: t,
                                pointerId: n.id
                            }), i = !0, o.isListening() && o.preventDefault() && t.cancelable && t.preventDefault()))
                        })), i || this._fire(M, {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: this._changedPointerPositions[0].id
                        }), this._fire("contentTouchmove", {evt: t})
                    }
                    l.DD.isDragging && l.DD.node.preventDefault() && t.cancelable && t.preventDefault()
                }, i.prototype._touchend = function (t) {
                    var e = this;
                    this.setPointersPositions(t);
                    var i = this.clickEndShape, r = !1;
                    h.Konva.inDblClickWindow ? (r = !0, clearTimeout(this.dblTimeout)) : l.DD.justDragged || (h.Konva.inDblClickWindow = !0, clearTimeout(this.dblTimeout)), this.dblTimeout = setTimeout((function () {
                        h.Konva.inDblClickWindow = !1
                    }), h.Konva.dblClickWindow);
                    var n = !1, o = {}, a = !1, s = !1;
                    this._changedPointerPositions.forEach((function (c) {
                        var l = d.getCapturedShape(c.id) || e.getIntersection(c);
                        l && l.releaseCapture(c.id), l && l.isListening() && (o[l._id] || (o[l._id] = !0, e.clickEndShape = l, l._fireAndBubble(T, {
                            evt: t,
                            pointerId: c.id
                        }), n = !0, h.Konva.listenClickTap && l === e.tapStartShape && (a = !0, l._fireAndBubble("tap", {
                            evt: t,
                            pointerId: c.id
                        }), r && i && i === l && (s = !0, l._fireAndBubble(k, {
                            evt: t,
                            pointerId: c.id
                        }))), l.isListening() && l.preventDefault() && t.cancelable && t.preventDefault()))
                    })), n || this._fire(T, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), h.Konva.listenClickTap && !a && this._fire("tap", {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), r && !s && this._fire(k, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), this._fire("contentTouchend", {evt: t}), h.Konva.listenClickTap && (this._fire("contentTap", {evt: t}), r && this._fire("contentDbltap", {evt: t})), h.Konva.listenClickTap = !1
                }, i.prototype._wheel = function (t) {
                    this.setPointersPositions(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    e && e.isListening() ? e._fireAndBubble(F, {evt: t}) : this._fire(F, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    }), this._fire("contentWheel", {evt: t})
                }, i.prototype._pointerdown = function (t) {
                    if (h.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = d.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble(x, d.createEvent(t))
                    }
                }, i.prototype._pointermove = function (t) {
                    if (h.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = d.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble(b, d.createEvent(t))
                    }
                }, i.prototype._pointerup = function (t) {
                    if (h.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = d.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble(S, d.createEvent(t)), d.releaseCapture(t.pointerId)
                    }
                }, i.prototype._pointercancel = function (t) {
                    if (h.Konva._pointerEventsEnabled) {
                        this.setPointersPositions(t);
                        var e = d.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                        e && e._fireAndBubble(S, d.createEvent(t)), d.releaseCapture(t.pointerId)
                    }
                }, i.prototype._lostpointercapture = function (t) {
                    d.releaseCapture(t.pointerId)
                }, i.prototype.setPointersPositions = function (t) {
                    var e = this, i = this._getContentPosition(), r = null, n = null;
                    void 0 !== (t = t || window.event).touches ? (this._pointerPositions = [], this._changedPointerPositions = [], o.Collection.prototype.each.call(t.touches, (function (t) {
                        e._pointerPositions.push({
                            id: t.identifier,
                            x: (t.clientX - i.left) / i.scaleX,
                            y: (t.clientY - i.top) / i.scaleY
                        })
                    })), o.Collection.prototype.each.call(t.changedTouches || t.touches, (function (t) {
                        e._changedPointerPositions.push({
                            id: t.identifier,
                            x: (t.clientX - i.left) / i.scaleX,
                            y: (t.clientY - i.top) / i.scaleY
                        })
                    }))) : (r = (t.clientX - i.left) / i.scaleX, n = (t.clientY - i.top) / i.scaleY, this.pointerPos = {
                        x: r,
                        y: n
                    }, this._pointerPositions = [{
                        x: r,
                        y: n,
                        id: o.Util._getFirstPointerId(t)
                    }], this._changedPointerPositions = [{x: r, y: n, id: o.Util._getFirstPointerId(t)}])
                }, i.prototype._setPointerPosition = function (t) {
                    o.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(t)
                }, i.prototype._getContentPosition = function () {
                    if (!this.content || !this.content.getBoundingClientRect) return {
                        top: 0,
                        left: 0,
                        scaleX: 1,
                        scaleY: 1
                    };
                    var t = this.content.getBoundingClientRect();
                    return {
                        top: t.top,
                        left: t.left,
                        scaleX: t.width / this.content.clientWidth || 1,
                        scaleY: t.height / this.content.clientHeight || 1
                    }
                }, i.prototype._buildDOM = function () {
                    if (this.bufferCanvas = new c.SceneCanvas({
                        width: this.width(),
                        height: this.height()
                    }), this.bufferHitCanvas = new c.HitCanvas({
                        pixelRatio: 1,
                        width: this.width(),
                        height: this.height()
                    }), h.Konva.isBrowser) {
                        var t = this.container();
                        if (!t) throw "Stage has no container. A container is required.";
                        t.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), t.appendChild(this.content), this._resizeDOM()
                    }
                }, i.prototype.cache = function () {
                    return o.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this
                }, i.prototype.clearCache = function () {
                    return this
                }, i.prototype.batchDraw = function () {
                    return this.children.each((function (t) {
                        t.batchDraw()
                    })), this
                }, i
            }(s.Container);
            e.Stage = R, R.prototype.nodeType = "Stage", u._registerNode(R), a.Factory.addGetterSetter(R, "container")
        }, 4638: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(5117), n = i(6537), o = i(4206), a = i(2503),
                s = {node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1}, h = 0,
                c = ["fill", "stroke", "shadowColor"], l = function () {
                    function t(t, e, i, r, n, o, a) {
                        this.prop = t, this.propFunc = e, this.begin = r, this._pos = r, this.duration = o, this._change = 0, this.prevPos = 0, this.yoyo = a, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = i, this._change = n - this.begin, this.pause()
                    }

                    return t.prototype.fire = function (t) {
                        var e = this[t];
                        e && e()
                    }, t.prototype.setTime = function (t) {
                        t > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : t < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = t, this.update())
                    }, t.prototype.getTime = function () {
                        return this._time
                    }, t.prototype.setPosition = function (t) {
                        this.prevPos = this._pos, this.propFunc(t), this._pos = t
                    }, t.prototype.getPosition = function (t) {
                        return void 0 === t && (t = this._time), this.func(t, this.begin, this._change, this.duration)
                    }, t.prototype.play = function () {
                        this.state = 2, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay")
                    }, t.prototype.reverse = function () {
                        this.state = 3, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse")
                    }, t.prototype.seek = function (t) {
                        this.pause(), this._time = t, this.update(), this.fire("onSeek")
                    }, t.prototype.reset = function () {
                        this.pause(), this._time = 0, this.update(), this.fire("onReset")
                    }, t.prototype.finish = function () {
                        this.pause(), this._time = this.duration, this.update(), this.fire("onFinish")
                    }, t.prototype.update = function () {
                        this.setPosition(this.getPosition(this._time))
                    }, t.prototype.onEnterFrame = function () {
                        var t = this.getTimer() - this._startTime;
                        2 === this.state ? this.setTime(t) : 3 === this.state && this.setTime(this.duration - t)
                    }, t.prototype.pause = function () {
                        this.state = 1, this.fire("onPause")
                    }, t.prototype.getTimer = function () {
                        return (new Date).getTime()
                    }, t
                }(), u = function () {
                    function t(i) {
                        var o, c, u = this, d = i.node, p = d._id, f = i.easing || e.Easings.Linear, g = !!i.yoyo;
                        o = void 0 === i.duration ? .3 : 0 === i.duration ? .001 : i.duration, this.node = d, this._id = h++;
                        var y = d.getLayer() || (d instanceof a.Konva.Stage ? d.getLayers() : null);
                        for (c in y || r.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation((function () {
                            u.tween.onEnterFrame()
                        }), y), this.tween = new l(c, (function (t) {
                            u._tweenFunc(t)
                        }), f, 0, 1, 1e3 * o, g), this._addListeners(), t.attrs[p] || (t.attrs[p] = {}), t.attrs[p][this._id] || (t.attrs[p][this._id] = {}), t.tweens[p] || (t.tweens[p] = {}), i) void 0 === s[c] && this._addAttr(c, i[c]);
                        this.reset(), this.onFinish = i.onFinish, this.onReset = i.onReset
                    }

                    return t.prototype._addAttr = function (e, i) {
                        var n, o, a, s, h, l, u, d, p = this.node, f = p._id;
                        if ((a = t.tweens[f][e]) && delete t.attrs[f][a][e], n = p.getAttr(e), r.Util._isArray(i)) if (o = [], h = Math.max(i.length, n.length), "points" === e && i.length !== n.length && (i.length > n.length ? (u = n, n = r.Util._prepareArrayForTween(n, i, p.closed())) : (l = i, i = r.Util._prepareArrayForTween(i, n, p.closed()))), 0 === e.indexOf("fill")) for (s = 0; s < h; s++) if (s % 2 == 0) o.push(i[s] - n[s]); else {
                            var g = r.Util.colorToRGBA(n[s]);
                            d = r.Util.colorToRGBA(i[s]), n[s] = g, o.push({
                                r: d.r - g.r,
                                g: d.g - g.g,
                                b: d.b - g.b,
                                a: d.a - g.a
                            })
                        } else for (s = 0; s < h; s++) o.push(i[s] - n[s]); else -1 !== c.indexOf(e) ? (n = r.Util.colorToRGBA(n), o = {
                            r: (d = r.Util.colorToRGBA(i)).r - n.r,
                            g: d.g - n.g,
                            b: d.b - n.b,
                            a: d.a - n.a
                        }) : o = i - n;
                        t.attrs[f][this._id][e] = {
                            start: n,
                            diff: o,
                            end: i,
                            trueEnd: l,
                            trueStart: u
                        }, t.tweens[f][e] = this._id
                    }, t.prototype._tweenFunc = function (e) {
                        var i, n, o, a, s, h, l, u, d = this.node, p = t.attrs[d._id][this._id];
                        for (i in p) {
                            if (o = (n = p[i]).start, a = n.diff, u = n.end, r.Util._isArray(o)) if (s = [], l = Math.max(o.length, u.length), 0 === i.indexOf("fill")) for (h = 0; h < l; h++) h % 2 == 0 ? s.push((o[h] || 0) + a[h] * e) : s.push("rgba(" + Math.round(o[h].r + a[h].r * e) + "," + Math.round(o[h].g + a[h].g * e) + "," + Math.round(o[h].b + a[h].b * e) + "," + (o[h].a + a[h].a * e) + ")"); else for (h = 0; h < l; h++) s.push((o[h] || 0) + a[h] * e); else s = -1 !== c.indexOf(i) ? "rgba(" + Math.round(o.r + a.r * e) + "," + Math.round(o.g + a.g * e) + "," + Math.round(o.b + a.b * e) + "," + (o.a + a.a * e) + ")" : o + a * e;
                            d.setAttr(i, s)
                        }
                    }, t.prototype._addListeners = function () {
                        var e = this;
                        this.tween.onPlay = function () {
                            e.anim.start()
                        }, this.tween.onReverse = function () {
                            e.anim.start()
                        }, this.tween.onPause = function () {
                            e.anim.stop()
                        }, this.tween.onFinish = function () {
                            var i = e.node, r = t.attrs[i._id][e._id];
                            r.points && r.points.trueEnd && i.setAttr("points", r.points.trueEnd), e.onFinish && e.onFinish.call(e)
                        }, this.tween.onReset = function () {
                            var i = e.node, r = t.attrs[i._id][e._id];
                            r.points && r.points.trueStart && i.points(r.points.trueStart), e.onReset && e.onReset()
                        }
                    }, t.prototype.play = function () {
                        return this.tween.play(), this
                    }, t.prototype.reverse = function () {
                        return this.tween.reverse(), this
                    }, t.prototype.reset = function () {
                        return this.tween.reset(), this
                    }, t.prototype.seek = function (t) {
                        return this.tween.seek(1e3 * t), this
                    }, t.prototype.pause = function () {
                        return this.tween.pause(), this
                    }, t.prototype.finish = function () {
                        return this.tween.finish(), this
                    }, t.prototype.destroy = function () {
                        var e, i = this.node._id, r = this._id, n = t.tweens[i];
                        for (e in this.pause(), n) delete t.tweens[i][e];
                        delete t.attrs[i][r]
                    }, t.attrs = {}, t.tweens = {}, t
                }();
            e.Tween = u, o.Node.prototype.to = function (t) {
                var e = t.onFinish;
                t.node = this, t.onFinish = function () {
                    this.destroy(), e && e()
                }, new u(t).play()
            }, e.Easings = {
                BackEaseIn: function (t, e, i, r) {
                    var n = 1.70158;
                    return i * (t /= r) * t * ((n + 1) * t - n) + e
                }, BackEaseOut: function (t, e, i, r) {
                    var n = 1.70158;
                    return i * ((t = t / r - 1) * t * ((n + 1) * t + n) + 1) + e
                }, BackEaseInOut: function (t, e, i, r) {
                    var n = 1.70158;
                    return (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : i / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
                }, ElasticEaseIn: function (t, e, i, r, n, o) {
                    var a = 0;
                    return 0 === t ? e : 1 == (t /= r) ? e + i : (o || (o = .3 * r), !n || n < Math.abs(i) ? (n = i, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(i / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) + e)
                }, ElasticEaseOut: function (t, e, i, r, n, o) {
                    var a = 0;
                    return 0 === t ? e : 1 == (t /= r) ? e + i : (o || (o = .3 * r), !n || n < Math.abs(i) ? (n = i, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(i / n), n * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + i + e)
                }, ElasticEaseInOut: function (t, e, i, r, n, o) {
                    var a = 0;
                    return 0 === t ? e : 2 == (t /= r / 2) ? e + i : (o || (o = r * (.3 * 1.5)), !n || n < Math.abs(i) ? (n = i, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(i / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * -.5 + e : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + i + e)
                }, BounceEaseOut: function (t, e, i, r) {
                    return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                }, BounceEaseIn: function (t, i, r, n) {
                    return r - e.Easings.BounceEaseOut(n - t, 0, r, n) + i
                }, BounceEaseInOut: function (t, i, r, n) {
                    return t < n / 2 ? .5 * e.Easings.BounceEaseIn(2 * t, 0, r, n) + i : .5 * e.Easings.BounceEaseOut(2 * t - n, 0, r, n) + .5 * r + i
                }, EaseIn: function (t, e, i, r) {
                    return i * (t /= r) * t + e
                }, EaseOut: function (t, e, i, r) {
                    return -i * (t /= r) * (t - 2) + e
                }, EaseInOut: function (t, e, i, r) {
                    return (t /= r / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
                }, StrongEaseIn: function (t, e, i, r) {
                    return i * (t /= r) * t * t * t * t + e
                }, StrongEaseOut: function (t, e, i, r) {
                    return i * ((t = t / r - 1) * t * t * t * t + 1) + e
                }, StrongEaseInOut: function (t, e, i, r) {
                    return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }, Linear: function (t, e, i, r) {
                    return i * t / r + e
                }
            }
        }, 5117: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2503), n = function () {
                function t() {
                }

                return t.toCollection = function (e) {
                    var i, r = new t, n = e.length;
                    for (i = 0; i < n; i++) r.push(e[i]);
                    return r
                }, t._mapMethod = function (e) {
                    t.prototype[e] = function () {
                        var t, i = this.length, r = [].slice.call(arguments);
                        for (t = 0; t < i; t++) this[t][e].apply(this[t], r);
                        return this
                    }
                }, t.mapMethods = function (e) {
                    var i = e.prototype;
                    for (var r in i) t._mapMethod(r)
                }, t
            }();
            e.Collection = n, n.prototype = [], n.prototype.each = function (t) {
                for (var e = 0; e < this.length; e++) t(this[e], e)
            }, n.prototype.toArray = function () {
                var t, e = [], i = this.length;
                for (t = 0; t < i; t++) e.push(this[t]);
                return e
            };
            var o = function () {
                function t(t) {
                    void 0 === t && (t = [1, 0, 0, 1, 0, 0]), this.m = t && t.slice() || [1, 0, 0, 1, 0, 0]
                }

                return t.prototype.copy = function () {
                    return new t(this.m)
                }, t.prototype.point = function (t) {
                    var e = this.m;
                    return {x: e[0] * t.x + e[2] * t.y + e[4], y: e[1] * t.x + e[3] * t.y + e[5]}
                }, t.prototype.translate = function (t, e) {
                    return this.m[4] += this.m[0] * t + this.m[2] * e, this.m[5] += this.m[1] * t + this.m[3] * e, this
                }, t.prototype.scale = function (t, e) {
                    return this.m[0] *= t, this.m[1] *= t, this.m[2] *= e, this.m[3] *= e, this
                }, t.prototype.rotate = function (t) {
                    var e = Math.cos(t), i = Math.sin(t), r = this.m[0] * e + this.m[2] * i,
                        n = this.m[1] * e + this.m[3] * i, o = this.m[0] * -i + this.m[2] * e,
                        a = this.m[1] * -i + this.m[3] * e;
                    return this.m[0] = r, this.m[1] = n, this.m[2] = o, this.m[3] = a, this
                }, t.prototype.getTranslation = function () {
                    return {x: this.m[4], y: this.m[5]}
                }, t.prototype.skew = function (t, e) {
                    var i = this.m[0] + this.m[2] * e, r = this.m[1] + this.m[3] * e, n = this.m[2] + this.m[0] * t,
                        o = this.m[3] + this.m[1] * t;
                    return this.m[0] = i, this.m[1] = r, this.m[2] = n, this.m[3] = o, this
                }, t.prototype.multiply = function (t) {
                    var e = this.m[0] * t.m[0] + this.m[2] * t.m[1], i = this.m[1] * t.m[0] + this.m[3] * t.m[1],
                        r = this.m[0] * t.m[2] + this.m[2] * t.m[3], n = this.m[1] * t.m[2] + this.m[3] * t.m[3],
                        o = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
                        a = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
                    return this.m[0] = e, this.m[1] = i, this.m[2] = r, this.m[3] = n, this.m[4] = o, this.m[5] = a, this
                }, t.prototype.invert = function () {
                    var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), e = this.m[3] * t, i = -this.m[1] * t,
                        r = -this.m[2] * t, n = this.m[0] * t, o = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                        a = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
                    return this.m[0] = e, this.m[1] = i, this.m[2] = r, this.m[3] = n, this.m[4] = o, this.m[5] = a, this
                }, t.prototype.getMatrix = function () {
                    return this.m
                }, t.prototype.setAbsolutePosition = function (t, e) {
                    var i = this.m[0], r = this.m[1], n = this.m[2], o = this.m[3], a = this.m[4],
                        s = (i * (e - this.m[5]) - r * (t - a)) / (i * o - r * n), h = (t - a - n * s) / i;
                    return this.translate(h, s)
                }, t.prototype.decompose = function () {
                    var t = this.m[0], i = this.m[1], r = this.m[2], n = this.m[3], o = t * n - i * r,
                        a = {x: this.m[4], y: this.m[5], rotation: 0, scaleX: 0, scaleY: 0, skewX: 0, skewY: 0};
                    if (0 != t || 0 != i) {
                        var s = Math.sqrt(t * t + i * i);
                        a.rotation = i > 0 ? Math.acos(t / s) : -Math.acos(t / s), a.scaleX = s, a.scaleY = o / s, a.skewX = (t * r + i * n) / o, a.skewY = 0
                    } else if (0 != r || 0 != n) {
                        var h = Math.sqrt(r * r + n * n);
                        a.rotation = Math.PI / 2 - (n > 0 ? Math.acos(-r / h) : -Math.acos(r / h)), a.scaleX = o / h, a.scaleY = h, a.skewX = 0, a.skewY = (t * r + i * n) / o
                    }
                    return a.rotation = e.Util._getRotation(a.rotation), a
                }, t
            }();
            e.Transform = o;
            var a = Math.PI / 180, s = 180 / Math.PI, h = "Konva error: ", c = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 132, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 255, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 203],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [119, 128, 144],
                slategrey: [119, 128, 144],
                snow: [255, 255, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                transparent: [255, 255, 255, 0],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 5]
            }, l = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, u = [];
            e.Util = {
                _isElement: function (t) {
                    return !(!t || 1 != t.nodeType)
                }, _isFunction: function (t) {
                    return !!(t && t.constructor && t.call && t.apply)
                }, _isPlainObject: function (t) {
                    return !!t && t.constructor === Object
                }, _isArray: function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, _isNumber: function (t) {
                    return "[object Number]" === Object.prototype.toString.call(t) && !isNaN(t) && isFinite(t)
                }, _isString: function (t) {
                    return "[object String]" === Object.prototype.toString.call(t)
                }, _isBoolean: function (t) {
                    return "[object Boolean]" === Object.prototype.toString.call(t)
                }, isObject: function (t) {
                    return t instanceof Object
                }, isValidSelector: function (t) {
                    if ("string" != typeof t) return !1;
                    var e = t[0];
                    return "#" === e || "." === e || e === e.toUpperCase()
                }, _sign: function (t) {
                    return 0 === t ? 0 : t > 0 ? 1 : -1
                }, requestAnimFrame: function (t) {
                    u.push(t), 1 === u.length && requestAnimationFrame((function () {
                        var t = u;
                        u = [], t.forEach((function (t) {
                            t()
                        }))
                    }))
                }, createCanvasElement: function () {
                    var t = document.createElement("canvas");
                    try {
                        t.style = t.style || {}
                    } catch (t) {
                    }
                    return t
                }, createImageElement: function () {
                    return document.createElement("img")
                }, _isInDocument: function (t) {
                    for (; t = t.parentNode;) if (t == document) return !0;
                    return !1
                }, _simplifyArray: function (t) {
                    var i, r, n = [], o = t.length, a = e.Util;
                    for (i = 0; i < o; i++) r = t[i], a._isNumber(r) ? r = Math.round(1e3 * r) / 1e3 : a._isString(r) || (r = r.toString()), n.push(r);
                    return n
                }, _urlToImage: function (t, e) {
                    var i = new r.glob.Image;
                    i.onload = function () {
                        e(i)
                    }, i.src = t
                }, _rgbToHex: function (t, e, i) {
                    return ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
                }, _hexToRgb: function (t) {
                    t = t.replace("#", "");
                    var e = parseInt(t, 16);
                    return {r: e >> 16 & 255, g: e >> 8 & 255, b: 255 & e}
                }, getRandomColor: function () {
                    for (var t = (16777215 * Math.random() << 0).toString(16); t.length < 6;) t = "0" + t;
                    return "#" + t
                }, get: function (t, e) {
                    return void 0 === t ? e : t
                }, getRGB: function (t) {
                    var e;
                    return t in c ? {
                        r: (e = c[t])[0],
                        g: e[1],
                        b: e[2]
                    } : "#" === t[0] ? this._hexToRgb(t.substring(1)) : "rgb(" === t.substr(0, 4) ? (e = l.exec(t.replace(/ /g, "")), {
                        r: parseInt(e[1], 10),
                        g: parseInt(e[2], 10),
                        b: parseInt(e[3], 10)
                    }) : {r: 0, g: 0, b: 0}
                }, colorToRGBA: function (t) {
                    return t = t || "black", e.Util._namedColorToRBA(t) || e.Util._hex3ColorToRGBA(t) || e.Util._hex6ColorToRGBA(t) || e.Util._rgbColorToRGBA(t) || e.Util._rgbaColorToRGBA(t) || e.Util._hslColorToRGBA(t)
                }, _namedColorToRBA: function (t) {
                    var e = c[t.toLowerCase()];
                    return e ? {r: e[0], g: e[1], b: e[2], a: 1} : null
                }, _rgbColorToRGBA: function (t) {
                    if (0 === t.indexOf("rgb(")) {
                        var e = (t = t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                        return {r: e[0], g: e[1], b: e[2], a: 1}
                    }
                }, _rgbaColorToRGBA: function (t) {
                    if (0 === t.indexOf("rgba(")) {
                        var e = (t = t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                        return {r: e[0], g: e[1], b: e[2], a: e[3]}
                    }
                }, _hex6ColorToRGBA: function (t) {
                    if ("#" === t[0] && 7 === t.length) return {
                        r: parseInt(t.slice(1, 3), 16),
                        g: parseInt(t.slice(3, 5), 16),
                        b: parseInt(t.slice(5, 7), 16),
                        a: 1
                    }
                }, _hex3ColorToRGBA: function (t) {
                    if ("#" === t[0] && 4 === t.length) return {
                        r: parseInt(t[1] + t[1], 16),
                        g: parseInt(t[2] + t[2], 16),
                        b: parseInt(t[3] + t[3], 16),
                        a: 1
                    }
                }, _hslColorToRGBA: function (t) {
                    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
                        var e, i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t), r = (i[0], i.slice(1)),
                            n = Number(r[0]) / 360, o = Number(r[1]) / 100, a = Number(r[2]) / 100, s = void 0,
                            h = void 0;
                        if (0 === o) return h = 255 * a, {r: Math.round(h), g: Math.round(h), b: Math.round(h), a: 1};
                        for (var c = 2 * a - (e = a < .5 ? a * (1 + o) : a + o - a * o), l = [0, 0, 0], u = 0; u < 3; u++) (s = n + 1 / 3 * -(u - 1)) < 0 && s++, s > 1 && s--, h = 6 * s < 1 ? c + 6 * (e - c) * s : 2 * s < 1 ? e : 3 * s < 2 ? c + (e - c) * (2 / 3 - s) * 6 : c, l[u] = 255 * h;
                        return {r: Math.round(l[0]), g: Math.round(l[1]), b: Math.round(l[2]), a: 1}
                    }
                }, haveIntersection: function (t, e) {
                    return !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y)
                }, cloneObject: function (t) {
                    var e = {};
                    for (var i in t) this._isPlainObject(t[i]) ? e[i] = this.cloneObject(t[i]) : this._isArray(t[i]) ? e[i] = this.cloneArray(t[i]) : e[i] = t[i];
                    return e
                }, cloneArray: function (t) {
                    return t.slice(0)
                }, _degToRad: function (t) {
                    return t * a
                }, _radToDeg: function (t) {
                    return t * s
                }, _getRotation: function (t) {
                    return r.Konva.angleDeg ? e.Util._radToDeg(t) : t
                }, _capitalize: function (t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }, throw: function (t) {
                    throw new Error(h + t)
                }, error: function (t) {
                    console.error(h + t)
                }, warn: function (t) {
                    r.Konva.showWarnings && console.warn("Konva warning: " + t)
                }, extend: function (t, e) {
                    function i() {
                        this.constructor = t
                    }

                    i.prototype = e.prototype;
                    var r = t.prototype;
                    for (var n in t.prototype = new i, r) r.hasOwnProperty(n) && (t.prototype[n] = r[n]);
                    t.__super__ = e.prototype, t.super = e
                }, _getControlPoints: function (t, e, i, r, n, o, a) {
                    var s = Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - e, 2)),
                        h = Math.sqrt(Math.pow(n - i, 2) + Math.pow(o - r, 2)), c = a * s / (s + h),
                        l = a * h / (s + h);
                    return [i - c * (n - t), r - c * (o - e), i + l * (n - t), r + l * (o - e)]
                }, _expandPoints: function (t, i) {
                    var r, n, o = t.length, a = [];
                    for (r = 2; r < o - 2; r += 2) n = e.Util._getControlPoints(t[r - 2], t[r - 1], t[r], t[r + 1], t[r + 2], t[r + 3], i), a.push(n[0]), a.push(n[1]), a.push(t[r]), a.push(t[r + 1]), a.push(n[2]), a.push(n[3]);
                    return a
                }, each: function (t, e) {
                    for (var i in t) e(i, t[i])
                }, _inRange: function (t, e, i) {
                    return e <= t && t < i
                }, _getProjectionToSegment: function (t, e, i, r, n, o) {
                    var a, s, h, c = (t - i) * (t - i) + (e - r) * (e - r);
                    if (0 == c) a = t, s = e, h = (n - i) * (n - i) + (o - r) * (o - r); else {
                        var l = ((n - t) * (i - t) + (o - e) * (r - e)) / c;
                        l < 0 ? (a = t, s = e, h = (t - n) * (t - n) + (e - o) * (e - o)) : l > 1 ? (a = i, s = r, h = (i - n) * (i - n) + (r - o) * (r - o)) : h = ((a = t + l * (i - t)) - n) * (a - n) + ((s = e + l * (r - e)) - o) * (s - o)
                    }
                    return [a, s, h]
                }, _getProjectionToLine: function (t, i, r) {
                    var n = e.Util.cloneObject(t), o = Number.MAX_VALUE;
                    return i.forEach((function (a, s) {
                        if (r || s !== i.length - 1) {
                            var h = i[(s + 1) % i.length],
                                c = e.Util._getProjectionToSegment(a.x, a.y, h.x, h.y, t.x, t.y), l = c[0], u = c[1],
                                d = c[2];
                            d < o && (n.x = l, n.y = u, o = d)
                        }
                    })), n
                }, _prepareArrayForTween: function (t, i, r) {
                    var n, o = [], a = [];
                    if (t.length > i.length) {
                        var s = i;
                        i = t, t = s
                    }
                    for (n = 0; n < t.length; n += 2) o.push({x: t[n], y: t[n + 1]});
                    for (n = 0; n < i.length; n += 2) a.push({x: i[n], y: i[n + 1]});
                    var h = [];
                    return a.forEach((function (t) {
                        var i = e.Util._getProjectionToLine(t, o, r);
                        h.push(i.x), h.push(i.y)
                    })), h
                }, _prepareToStringify: function (t) {
                    var i;
                    for (var r in t.visitedByCircularReferenceRemoval = !0, t) if (t.hasOwnProperty(r) && t[r] && "object" == typeof t[r]) if (i = Object.getOwnPropertyDescriptor(t, r), t[r].visitedByCircularReferenceRemoval || e.Util._isElement(t[r])) {
                        if (!i.configurable) return null;
                        delete t[r]
                    } else if (null === e.Util._prepareToStringify(t[r])) {
                        if (!i.configurable) return null;
                        delete t[r]
                    }
                    return delete t.visitedByCircularReferenceRemoval, t
                }, _assign: function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }, _getFirstPointerId: function (t) {
                    return t.touches ? t.changedTouches[0].identifier : 999
                }
            }
        }, 8734: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2503), n = i(5117);

            function o(t) {
                return n.Util._isString(t) ? '"' + t + '"' : "[object Number]" === Object.prototype.toString.call(t) || n.Util._isBoolean(t) ? t : Object.prototype.toString.call(t)
            }

            e.RGBComponent = function (t) {
                return t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            }, e.alphaComponent = function (t) {
                return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t
            }, e.getNumberValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return n.Util._isNumber(t) || n.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t
                }
            }, e.getNumberOrAutoValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return n.Util._isNumber(t) || "auto" === t || n.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t
                }
            }, e.getStringValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return n.Util._isString(t) || n.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t
                }
            }, e.getFunctionValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return n.Util._isFunction(t) || n.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t
                }
            }, e.getNumberArrayValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return n.Util._isArray(t) ? t.forEach((function (t) {
                        n.Util._isNumber(t) || n.Util.warn('"' + e + '" attribute has non numeric element ' + t + ". Make sure that all elements are numbers.")
                    })) : n.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.'), t
                }
            }, e.getBooleanValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return !0 === t || !1 === t || n.Util.warn(o(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t
                }
            }, e.getComponentValidator = function (t) {
                if (r.Konva.isUnminified) return function (e, i) {
                    return n.Util.isObject(e) || n.Util.warn(o(e) + ' is a not valid value for "' + i + '" attribute. The value should be an object with properties ' + t), e
                }
            }
        }, 6150: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2503), n = i(5117), o = i(4206), a = i(6859), s = i(2562), h = i(5968), c = i(1725), l = i(583),
                u = i(4889), d = i(1457), p = i(6537), f = i(4638), g = i(7012), y = i(8370);
            e.Konva = n.Util._assign(r.Konva, {
                Collection: n.Collection,
                Util: n.Util,
                Transform: n.Transform,
                Node: o.Node,
                ids: o.ids,
                names: o.names,
                Container: a.Container,
                Stage: s.Stage,
                stages: s.stages,
                Layer: h.Layer,
                FastLayer: c.FastLayer,
                Group: l.Group,
                DD: u.DD,
                Shape: d.Shape,
                shapes: d.shapes,
                Animation: p.Animation,
                Tween: f.Tween,
                Easings: f.Easings,
                Context: g.Context,
                Canvas: y.Canvas
            })
        }, 8702: (t, e, i) => {
            "use strict";
            var r = i(6150), n = i(2939), o = i(8291), a = i(8409), s = i(2225), h = i(7391), c = i(5283), l = i(5358),
                u = i(3482), d = i(9890), p = i(384), f = i(3156), g = i(8640), y = i(7296), v = i(3131), _ = i(8249),
                m = i(2846), b = i(6041), x = i(6769), S = i(2978), w = i(1362), C = i(4314), P = i(8483), A = i(7813),
                T = i(5399), k = i(8557), M = i(1941), F = i(36), O = i(3476), D = i(1481), G = i(8402), z = i(3632),
                R = i(9946), N = i(7031), E = i(3811), L = i(8977), I = i(1174);
            e.S = r.Konva.Util._assign(r.Konva, {
                Arc: n.Arc,
                Arrow: o.Arrow,
                Circle: a.Circle,
                Ellipse: s.Ellipse,
                Image: h.Image,
                Label: c.Label,
                Tag: c.Tag,
                Line: l.Line,
                Path: u.Path,
                Rect: d.Rect,
                RegularPolygon: p.RegularPolygon,
                Ring: f.Ring,
                Sprite: g.Sprite,
                Star: y.Star,
                Text: v.Text,
                TextPath: _.TextPath,
                Transformer: m.Transformer,
                Wedge: b.Wedge,
                Filters: {
                    Blur: x.Blur,
                    Brighten: S.Brighten,
                    Contrast: w.Contrast,
                    Emboss: C.Emboss,
                    Enhance: P.Enhance,
                    Grayscale: A.Grayscale,
                    HSL: T.HSL,
                    HSV: k.HSV,
                    Invert: M.Invert,
                    Kaleidoscope: F.Kaleidoscope,
                    Mask: O.Mask,
                    Noise: D.Noise,
                    Pixelate: G.Pixelate,
                    Posterize: z.Posterize,
                    RGB: R.RGB,
                    RGBA: N.RGBA,
                    Sepia: E.Sepia,
                    Solarize: L.Solarize,
                    Threshold: I.Threshold
                }
            })
        }, 6769: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);

            function a() {
                this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
            }

            var s = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
                h = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
            e.Blur = function (t) {
                var e = Math.round(this.blurRadius());
                e > 0 && function (t, e) {
                    var i, r, n, o, c, l, u, d, p, f, g, y, v, _, m, b, x, S, w, C, P, A, T, k, M = t.data, F = t.width,
                        O = t.height, D = e + e + 1, G = F - 1, z = O - 1, R = e + 1, N = R * (R + 1) / 2, E = new a,
                        L = null, I = E, U = null, V = null, j = s[e], B = h[e];
                    for (n = 1; n < D; n++) I = I.next = new a, n === R && (L = I);
                    for (I.next = E, u = l = 0, r = 0; r < O; r++) {
                        for (b = x = S = w = d = p = f = g = 0, y = R * (C = M[l]), v = R * (P = M[l + 1]), _ = R * (A = M[l + 2]), m = R * (T = M[l + 3]), d += N * C, p += N * P, f += N * A, g += N * T, I = E, n = 0; n < R; n++) I.r = C, I.g = P, I.b = A, I.a = T, I = I.next;
                        for (n = 1; n < R; n++) o = l + ((G < n ? G : n) << 2), d += (I.r = C = M[o]) * (k = R - n), p += (I.g = P = M[o + 1]) * k, f += (I.b = A = M[o + 2]) * k, g += (I.a = T = M[o + 3]) * k, b += C, x += P, S += A, w += T, I = I.next;
                        for (U = E, V = L, i = 0; i < F; i++) M[l + 3] = T = g * j >> B, 0 !== T ? (T = 255 / T, M[l] = (d * j >> B) * T, M[l + 1] = (p * j >> B) * T, M[l + 2] = (f * j >> B) * T) : M[l] = M[l + 1] = M[l + 2] = 0, d -= y, p -= v, f -= _, g -= m, y -= U.r, v -= U.g, _ -= U.b, m -= U.a, o = u + ((o = i + e + 1) < G ? o : G) << 2, d += b += U.r = M[o], p += x += U.g = M[o + 1], f += S += U.b = M[o + 2], g += w += U.a = M[o + 3], U = U.next, y += C = V.r, v += P = V.g, _ += A = V.b, m += T = V.a, b -= C, x -= P, S -= A, w -= T, V = V.next, l += 4;
                        u += F
                    }
                    for (i = 0; i < F; i++) {
                        for (x = S = w = b = p = f = g = d = 0, y = R * (C = M[l = i << 2]), v = R * (P = M[l + 1]), _ = R * (A = M[l + 2]), m = R * (T = M[l + 3]), d += N * C, p += N * P, f += N * A, g += N * T, I = E, n = 0; n < R; n++) I.r = C, I.g = P, I.b = A, I.a = T, I = I.next;
                        for (c = F, n = 1; n <= e; n++) l = c + i << 2, d += (I.r = C = M[l]) * (k = R - n), p += (I.g = P = M[l + 1]) * k, f += (I.b = A = M[l + 2]) * k, g += (I.a = T = M[l + 3]) * k, b += C, x += P, S += A, w += T, I = I.next, n < z && (c += F);
                        for (l = i, U = E, V = L, r = 0; r < O; r++) M[3 + (o = l << 2)] = T = g * j >> B, T > 0 ? (T = 255 / T, M[o] = (d * j >> B) * T, M[o + 1] = (p * j >> B) * T, M[o + 2] = (f * j >> B) * T) : M[o] = M[o + 1] = M[o + 2] = 0, d -= y, p -= v, f -= _, g -= m, y -= U.r, v -= U.g, _ -= U.b, m -= U.a, o = i + ((o = r + R) < z ? o : z) * F << 2, d += b += U.r = M[o], p += x += U.g = M[o + 1], f += S += U.b = M[o + 2], g += w += U.a = M[o + 3], U = U.next, y += C = V.r, v += P = V.g, _ += A = V.b, m += T = V.a, b -= C, x -= P, S -= A, w -= T, V = V.next, l += F
                    }
                }(t, e)
            }, r.Factory.addGetterSetter(n.Node, "blurRadius", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 2978: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.Brighten = function (t) {
                var e, i = 255 * this.brightness(), r = t.data, n = r.length;
                for (e = 0; e < n; e += 4) r[e] += i, r[e + 1] += i, r[e + 2] += i
            }, r.Factory.addGetterSetter(n.Node, "brightness", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 1362: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.Contrast = function (t) {
                var e, i = Math.pow((this.contrast() + 100) / 100, 2), r = t.data, n = r.length, o = 150, a = 150,
                    s = 150;
                for (e = 0; e < n; e += 4) o = r[e], a = r[e + 1], s = r[e + 2], o /= 255, o -= .5, o *= i, o += .5, a /= 255, a -= .5, a *= i, a += .5, s /= 255, s -= .5, s *= i, s += .5, o = (o *= 255) < 0 ? 0 : o > 255 ? 255 : o, a = (a *= 255) < 0 ? 0 : a > 255 ? 255 : a, s = (s *= 255) < 0 ? 0 : s > 255 ? 255 : s, r[e] = o, r[e + 1] = a, r[e + 2] = s
            }, r.Factory.addGetterSetter(n.Node, "contrast", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 4314: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(5117), a = i(8734);
            e.Emboss = function (t) {
                var e = 10 * this.embossStrength(), i = 255 * this.embossWhiteLevel(), r = this.embossDirection(),
                    n = this.embossBlend(), a = 0, s = 0, h = t.data, c = t.width, l = t.height, u = 4 * c, d = l;
                switch (r) {
                    case"top-left":
                        a = -1, s = -1;
                        break;
                    case"top":
                        a = -1, s = 0;
                        break;
                    case"top-right":
                        a = -1, s = 1;
                        break;
                    case"right":
                        a = 0, s = 1;
                        break;
                    case"bottom-right":
                        a = 1, s = 1;
                        break;
                    case"bottom":
                        a = 1, s = 0;
                        break;
                    case"bottom-left":
                        a = 1, s = -1;
                        break;
                    case"left":
                        a = 0, s = -1;
                        break;
                    default:
                        o.Util.error("Unknown emboss direction: " + r)
                }
                do {
                    var p = (d - 1) * u, f = a;
                    d + f < 1 && (f = 0), d + f > l && (f = 0);
                    var g = (d - 1 + f) * c * 4, y = c;
                    do {
                        var v = p + 4 * (y - 1), _ = s;
                        y + _ < 1 && (_ = 0), y + _ > c && (_ = 0);
                        var m = g + 4 * (y - 1 + _), b = h[v] - h[m], x = h[v + 1] - h[m + 1], S = h[v + 2] - h[m + 2],
                            w = b, C = w > 0 ? w : -w;
                        if ((x > 0 ? x : -x) > C && (w = x), (S > 0 ? S : -S) > C && (w = S), w *= e, n) {
                            var P = h[v] + w, A = h[v + 1] + w, T = h[v + 2] + w;
                            h[v] = P > 255 ? 255 : P < 0 ? 0 : P, h[v + 1] = A > 255 ? 255 : A < 0 ? 0 : A, h[v + 2] = T > 255 ? 255 : T < 0 ? 0 : T
                        } else {
                            var k = i - w;
                            k < 0 ? k = 0 : k > 255 && (k = 255), h[v] = h[v + 1] = h[v + 2] = k
                        }
                    } while (--y)
                } while (--d)
            }, r.Factory.addGetterSetter(n.Node, "embossStrength", .5, a.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "embossWhiteLevel", .5, a.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "embossDirection", "top-left", null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "embossBlend", !1, null, r.Factory.afterSetFilter)
        }, 8483: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);

            function a(t, e, i, r, n) {
                var o = i - e, a = n - r;
                return 0 === o ? r + a / 2 : 0 === a ? r : a * ((t - e) / o) + r
            }

            e.Enhance = function (t) {
                var e, i, r, n, o = t.data, s = o.length, h = o[0], c = h, l = o[1], u = l, d = o[2], p = d,
                    f = this.enhance();
                if (0 !== f) {
                    for (n = 0; n < s; n += 4) (e = o[n + 0]) < h ? h = e : e > c && (c = e), (i = o[n + 1]) < l ? l = i : i > u && (u = i), (r = o[n + 2]) < d ? d = r : r > p && (p = r);
                    var g, y, v, _, m, b, x, S, w;
                    for (c === h && (c = 255, h = 0), u === l && (u = 255, l = 0), p === d && (p = 255, d = 0), f > 0 ? (y = c + f * (255 - c), v = h - f * (h - 0), m = u + f * (255 - u), b = l - f * (l - 0), S = p + f * (255 - p), w = d - f * (d - 0)) : (y = c + f * (c - (g = .5 * (c + h))), v = h + f * (h - g), m = u + f * (u - (_ = .5 * (u + l))), b = l + f * (l - _), S = p + f * (p - (x = .5 * (p + d))), w = d + f * (d - x)), n = 0; n < s; n += 4) o[n + 0] = a(o[n + 0], h, c, v, y), o[n + 1] = a(o[n + 1], l, u, b, m), o[n + 2] = a(o[n + 2], d, p, w, S)
                }
            }, r.Factory.addGetterSetter(n.Node, "enhance", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 7813: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0}), e.Grayscale = function (t) {
                var e, i, r = t.data, n = r.length;
                for (e = 0; e < n; e += 4) i = .34 * r[e] + .5 * r[e + 1] + .16 * r[e + 2], r[e] = i, r[e + 1] = i, r[e + 2] = i
            }
        }, 5399: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            r.Factory.addGetterSetter(n.Node, "hue", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "saturation", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "luminance", 0, o.getNumberValidator(), r.Factory.afterSetFilter), e.HSL = function (t) {
                var e, i, r, n, o, a = t.data, s = a.length, h = Math.pow(2, this.saturation()),
                    c = Math.abs(this.hue() + 360) % 360, l = 127 * this.luminance(),
                    u = 1 * h * Math.cos(c * Math.PI / 180), d = 1 * h * Math.sin(c * Math.PI / 180),
                    p = .299 + .701 * u + .167 * d, f = .587 - .587 * u + .33 * d, g = .114 - .114 * u - .497 * d,
                    y = .299 - .299 * u - .328 * d, v = .587 + .413 * u + .035 * d, _ = .114 - .114 * u + .293 * d,
                    m = .299 - .3 * u + 1.25 * d, b = .587 - .586 * u - 1.05 * d, x = .114 + .886 * u - .2 * d;
                for (e = 0; e < s; e += 4) i = a[e + 0], r = a[e + 1], n = a[e + 2], o = a[e + 3], a[e + 0] = p * i + f * r + g * n + l, a[e + 1] = y * i + v * r + _ * n + l, a[e + 2] = m * i + b * r + x * n + l, a[e + 3] = o
            }
        }, 8557: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.HSV = function (t) {
                var e, i, r, n, o, a = t.data, s = a.length, h = Math.pow(2, this.value()),
                    c = Math.pow(2, this.saturation()), l = Math.abs(this.hue() + 360) % 360,
                    u = h * c * Math.cos(l * Math.PI / 180), d = h * c * Math.sin(l * Math.PI / 180),
                    p = .299 * h + .701 * u + .167 * d, f = .587 * h - .587 * u + .33 * d,
                    g = .114 * h - .114 * u - .497 * d, y = .299 * h - .299 * u - .328 * d,
                    v = .587 * h + .413 * u + .035 * d, _ = .114 * h - .114 * u + .293 * d,
                    m = .299 * h - .3 * u + 1.25 * d, b = .587 * h - .586 * u - 1.05 * d,
                    x = .114 * h + .886 * u - .2 * d;
                for (e = 0; e < s; e += 4) i = a[e + 0], r = a[e + 1], n = a[e + 2], o = a[e + 3], a[e + 0] = p * i + f * r + g * n, a[e + 1] = y * i + v * r + _ * n, a[e + 2] = m * i + b * r + x * n, a[e + 3] = o
            }, r.Factory.addGetterSetter(n.Node, "hue", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "saturation", 0, o.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "value", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 1941: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0}), e.Invert = function (t) {
                var e, i = t.data, r = i.length;
                for (e = 0; e < r; e += 4) i[e] = 255 - i[e], i[e + 1] = 255 - i[e + 1], i[e + 2] = 255 - i[e + 2]
            }
        }, 36: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(5117), a = i(8734);
            e.Kaleidoscope = function (t) {
                var e, i, r, n, a, s, h, c, l, u = t.width, d = t.height, p = Math.round(this.kaleidoscopePower()),
                    f = Math.round(this.kaleidoscopeAngle()), g = Math.floor(u * (f % 360) / 360);
                if (!(p < 1)) {
                    var y = o.Util.createCanvasElement();
                    y.width = u, y.height = d;
                    var v = y.getContext("2d").getImageData(0, 0, u, d);
                    !function (t, e, i) {
                        var r, n, o, a, s = t.data, h = e.data, c = t.width, l = t.height, u = i.polarCenterX || c / 2,
                            d = i.polarCenterY || l / 2, p = 0, f = 0, g = 0, y = 0, v = Math.sqrt(u * u + d * d);
                        n = c - u, o = l - d, v = (a = Math.sqrt(n * n + o * o)) > v ? a : v;
                        var _, m, b, x, S = l, w = c, C = 360 / w * Math.PI / 180;
                        for (m = 0; m < w; m += 1) for (b = Math.sin(m * C), x = Math.cos(m * C), _ = 0; _ < S; _ += 1) n = Math.floor(u + v * _ / S * x), p = s[0 + (r = 4 * ((o = Math.floor(d + v * _ / S * b)) * c + n))], f = s[r + 1], g = s[r + 2], y = s[r + 3], h[0 + (r = 4 * (m + _ * c))] = p, h[r + 1] = f, h[r + 2] = g, h[r + 3] = y
                    }(t, v, {polarCenterX: u / 2, polarCenterY: d / 2});
                    for (var _ = u / Math.pow(2, p); _ <= 8;) _ *= 2, p -= 1;
                    var m = _ = Math.ceil(_), b = 0, x = m, S = 1;
                    for (g + _ > u && (b = m, x = 0, S = -1), i = 0; i < d; i += 1) for (e = b; e !== x; e += S) c = 4 * (u * i + Math.round(e + g) % u), n = v.data[c + 0], a = v.data[c + 1], s = v.data[c + 2], h = v.data[c + 3], l = 4 * (u * i + e), v.data[l + 0] = n, v.data[l + 1] = a, v.data[l + 2] = s, v.data[l + 3] = h;
                    for (i = 0; i < d; i += 1) for (m = Math.floor(_), r = 0; r < p; r += 1) {
                        for (e = 0; e < m + 1; e += 1) c = 4 * (u * i + e), n = v.data[c + 0], a = v.data[c + 1], s = v.data[c + 2], h = v.data[c + 3], l = 4 * (u * i + 2 * m - e - 1), v.data[l + 0] = n, v.data[l + 1] = a, v.data[l + 2] = s, v.data[l + 3] = h;
                        m *= 2
                    }
                    !function (t, e, i) {
                        var r, n, o, a, s, h, c = t.data, l = e.data, u = t.width, d = t.height,
                            p = i.polarCenterX || u / 2, f = i.polarCenterY || d / 2, g = 0, y = 0, v = 0, _ = 0,
                            m = Math.sqrt(p * p + f * f);
                        n = u - p, o = d - f, m = (h = Math.sqrt(n * n + o * o)) > m ? h : m;
                        var b, x, S, w = d, C = u, P = i.polarRotation || 0;
                        for (n = 0; n < u; n += 1) for (o = 0; o < d; o += 1) a = n - p, s = o - f, b = Math.sqrt(a * a + s * s) * w / m, x = (x = (180 * Math.atan2(s, a) / Math.PI + 360 + P) % 360) * C / 360, S = Math.floor(x), g = c[0 + (r = 4 * (Math.floor(b) * u + S))], y = c[r + 1], v = c[r + 2], _ = c[r + 3], l[0 + (r = 4 * (o * u + n))] = g, l[r + 1] = y, l[r + 2] = v, l[r + 3] = _
                    }(v, t, {polarRotation: 0})
                }
            }, r.Factory.addGetterSetter(n.Node, "kaleidoscopePower", 2, a.getNumberValidator(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "kaleidoscopeAngle", 0, a.getNumberValidator(), r.Factory.afterSetFilter)
        }, 3476: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);

            function a(t, e, i) {
                var r = 4 * (i * t.width + e), n = [];
                return n.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), n
            }

            function s(t, e) {
                return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2))
            }

            e.Mask = function (t) {
                var e = function (t, e) {
                    var i = a(t, 0, 0), r = a(t, t.width - 1, 0), n = a(t, 0, t.height - 1),
                        o = a(t, t.width - 1, t.height - 1), h = e || 10;
                    if (s(i, r) < h && s(r, o) < h && s(o, n) < h && s(n, i) < h) {
                        for (var c = function (t) {
                            for (var e = [0, 0, 0], i = 0; i < t.length; i++) e[0] += t[i][0], e[1] += t[i][1], e[2] += t[i][2];
                            return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e
                        }([r, i, o, n]), l = [], u = 0; u < t.width * t.height; u++) {
                            var d = s(c, [t.data[4 * u], t.data[4 * u + 1], t.data[4 * u + 2]]);
                            l[u] = d < h ? 0 : 255
                        }
                        return l
                    }
                }(t, this.threshold());
                return e && function (t, e) {
                    for (var i = 0; i < t.width * t.height; i++) t.data[4 * i + 3] = e[i]
                }(t, e = function (t, e, i) {
                    for (var r = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], n = Math.round(Math.sqrt(r.length)), o = Math.floor(n / 2), a = [], s = 0; s < i; s++) for (var h = 0; h < e; h++) {
                        for (var c = s * e + h, l = 0, u = 0; u < n; u++) for (var d = 0; d < n; d++) {
                            var p = s + u - o, f = h + d - o;
                            if (p >= 0 && p < i && f >= 0 && f < e) {
                                var g = r[u * n + d];
                                l += t[p * e + f] * g
                            }
                        }
                        a[c] = l
                    }
                    return a
                }(e = function (t, e, i) {
                    for (var r = [1, 1, 1, 1, 1, 1, 1, 1, 1], n = Math.round(Math.sqrt(r.length)), o = Math.floor(n / 2), a = [], s = 0; s < i; s++) for (var h = 0; h < e; h++) {
                        for (var c = s * e + h, l = 0, u = 0; u < n; u++) for (var d = 0; d < n; d++) {
                            var p = s + u - o, f = h + d - o;
                            if (p >= 0 && p < i && f >= 0 && f < e) {
                                var g = r[u * n + d];
                                l += t[p * e + f] * g
                            }
                        }
                        a[c] = l >= 1020 ? 255 : 0
                    }
                    return a
                }(e = function (t, e, i) {
                    for (var r = [1, 1, 1, 1, 0, 1, 1, 1, 1], n = Math.round(Math.sqrt(r.length)), o = Math.floor(n / 2), a = [], s = 0; s < i; s++) for (var h = 0; h < e; h++) {
                        for (var c = s * e + h, l = 0, u = 0; u < n; u++) for (var d = 0; d < n; d++) {
                            var p = s + u - o, f = h + d - o;
                            if (p >= 0 && p < i && f >= 0 && f < e) {
                                var g = r[u * n + d];
                                l += t[p * e + f] * g
                            }
                        }
                        a[c] = 2040 === l ? 255 : 0
                    }
                    return a
                }(e, t.width, t.height), t.width, t.height), t.width, t.height)), t
            }, r.Factory.addGetterSetter(n.Node, "threshold", 0, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 1481: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.Noise = function (t) {
                var e, i = 255 * this.noise(), r = t.data, n = r.length, o = i / 2;
                for (e = 0; e < n; e += 4) r[e + 0] += o - 2 * o * Math.random(), r[e + 1] += o - 2 * o * Math.random(), r[e + 2] += o - 2 * o * Math.random()
            }, r.Factory.addGetterSetter(n.Node, "noise", .2, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 8402: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(5117), o = i(4206), a = i(8734);
            e.Pixelate = function (t) {
                var e, i, r, o, a, s, h, c, l, u, d, p, f, g, y = Math.ceil(this.pixelSize()), v = t.width,
                    _ = t.height, m = Math.ceil(v / y), b = Math.ceil(_ / y), x = t.data;
                if (y <= 0) n.Util.error("pixelSize value can not be <= 0"); else for (p = 0; p < m; p += 1) for (f = 0; f < b; f += 1) {
                    for (o = 0, a = 0, s = 0, h = 0, l = (c = p * y) + y, d = (u = f * y) + y, g = 0, e = c; e < l; e += 1) if (!(e >= v)) for (i = u; i < d; i += 1) i >= _ || (o += x[0 + (r = 4 * (v * i + e))], a += x[r + 1], s += x[r + 2], h += x[r + 3], g += 1);
                    for (o /= g, a /= g, s /= g, h /= g, e = c; e < l; e += 1) if (!(e >= v)) for (i = u; i < d; i += 1) i >= _ || (x[0 + (r = 4 * (v * i + e))] = o, x[r + 1] = a, x[r + 2] = s, x[r + 3] = h)
                }
            }, r.Factory.addGetterSetter(o.Node, "pixelSize", 8, a.getNumberValidator(), r.Factory.afterSetFilter)
        }, 3632: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.Posterize = function (t) {
                var e, i = Math.round(254 * this.levels()) + 1, r = t.data, n = r.length, o = 255 / i;
                for (e = 0; e < n; e += 1) r[e] = Math.floor(r[e] / o) * o
            }, r.Factory.addGetterSetter(n.Node, "levels", .5, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 9946: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.RGB = function (t) {
                var e, i, r = t.data, n = r.length, o = this.red(), a = this.green(), s = this.blue();
                for (e = 0; e < n; e += 4) i = (.34 * r[e] + .5 * r[e + 1] + .16 * r[e + 2]) / 255, r[e] = i * o, r[e + 1] = i * a, r[e + 2] = i * s, r[e + 3] = r[e + 3]
            }, r.Factory.addGetterSetter(n.Node, "red", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(n.Node, "green", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(n.Node, "blue", 0, o.RGBComponent, r.Factory.afterSetFilter)
        }, 7031: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.RGBA = function (t) {
                var e, i, r = t.data, n = r.length, o = this.red(), a = this.green(), s = this.blue(), h = this.alpha();
                for (e = 0; e < n; e += 4) i = 1 - h, r[e] = o * h + r[e] * i, r[e + 1] = a * h + r[e + 1] * i, r[e + 2] = s * h + r[e + 2] * i
            }, r.Factory.addGetterSetter(n.Node, "red", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(n.Node, "green", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(n.Node, "blue", 0, o.RGBComponent, r.Factory.afterSetFilter), r.Factory.addGetterSetter(n.Node, "alpha", 1, (function (t) {
                return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t
            }))
        }, 3811: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0}), e.Sepia = function (t) {
                var e, i, r, n, o = t.data, a = o.length;
                for (e = 0; e < a; e += 4) i = o[e + 0], r = o[e + 1], n = o[e + 2], o[e + 0] = Math.min(255, .393 * i + .769 * r + .189 * n), o[e + 1] = Math.min(255, .349 * i + .686 * r + .168 * n), o[e + 2] = Math.min(255, .272 * i + .534 * r + .131 * n)
            }
        }, 8977: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0}), e.Solarize = function (t) {
                var e = t.data, i = t.width, r = 4 * i, n = t.height;
                do {
                    var o = (n - 1) * r, a = i;
                    do {
                        var s = o + 4 * (a - 1), h = e[s], c = e[s + 1], l = e[s + 2];
                        h > 127 && (h = 255 - h), c > 127 && (c = 255 - c), l > 127 && (l = 255 - l), e[s] = h, e[s + 1] = c, e[s + 2] = l
                    } while (--a)
                } while (--n)
            }
        }, 1174: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = i(2315), n = i(4206), o = i(8734);
            e.Threshold = function (t) {
                var e, i = 255 * this.threshold(), r = t.data, n = r.length;
                for (e = 0; e < n; e += 1) r[e] = r[e] < i ? 0 : 255
            }, r.Factory.addGetterSetter(n.Node, "threshold", .5, o.getNumberValidator(), r.Factory.afterSetFilter)
        }, 1001: (t, e, i) => {
            var r = i(8702).S;
            r._injectGlobal(r), e.default = r, t.exports = e.default
        }, 2939: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(2503), c = i(8734), l = i(2503), u = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e = h.Konva.getAngle(this.angle()), i = this.clockwise();
                    t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, e, i), t.arc(0, 0, this.innerRadius(), e, 0, !i), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    return 2 * this.outerRadius()
                }, e.prototype.getHeight = function () {
                    return 2 * this.outerRadius()
                }, e.prototype.setWidth = function (t) {
                    this.outerRadius(t / 2)
                }, e.prototype.setHeight = function (t) {
                    this.outerRadius(t / 2)
                }, e
            }(s.Shape);
            e.Arc = u, u.prototype._centroid = !0, u.prototype.className = "Arc", u.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], l._registerNode(u), a.Factory.addGetterSetter(u, "innerRadius", 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "outerRadius", 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "angle", 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "clockwise", !1, c.getBooleanValidator()), o.Collection.mapMethods(u)
        }, 8291: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(5358), h = i(8734), c = i(2503), l = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (e) {
                    t.prototype._sceneFunc.call(this, e);
                    var i = 2 * Math.PI, r = this.points(), n = r, o = 0 !== this.tension() && r.length > 4;
                    o && (n = this.getTensionPoints());
                    var a, s, h = r.length;
                    o ? (a = r[h - 2] - (n[n.length - 2] + n[n.length - 4]) / 2, s = r[h - 1] - (n[n.length - 1] + n[n.length - 3]) / 2) : (a = r[h - 2] - r[h - 4], s = r[h - 1] - r[h - 3]);
                    var c = (Math.atan2(s, a) + i) % i, l = this.pointerLength(), u = this.pointerWidth();
                    e.save(), e.beginPath(), e.translate(r[h - 2], r[h - 1]), e.rotate(c), e.moveTo(0, 0), e.lineTo(-l, u / 2), e.lineTo(-l, -u / 2), e.closePath(), e.restore(), this.pointerAtBeginning() && (e.save(), e.translate(r[0], r[1]), o ? (a = (n[0] + n[2]) / 2 - r[0], s = (n[1] + n[3]) / 2 - r[1]) : (a = r[2] - r[0], s = r[3] - r[1]), e.rotate((Math.atan2(-s, -a) + i) % i), e.moveTo(0, 0), e.lineTo(-l, u / 2), e.lineTo(-l, -u / 2), e.closePath(), e.restore());
                    var d = this.dashEnabled();
                    d && (this.attrs.dashEnabled = !1, e.setLineDash([])), e.fillStrokeShape(this), d && (this.attrs.dashEnabled = !0)
                }, e.prototype.getSelfRect = function () {
                    var e = t.prototype.getSelfRect.call(this), i = this.pointerWidth() / 2;
                    return {x: e.x - i, y: e.y - i, width: e.width + 2 * i, height: e.height + 2 * i}
                }, e
            }(s.Line);
            e.Arrow = l, l.prototype.className = "Arrow", c._registerNode(l), a.Factory.addGetterSetter(l, "pointerLength", 10, h.getNumberValidator()), a.Factory.addGetterSetter(l, "pointerWidth", 10, h.getNumberValidator()), a.Factory.addGetterSetter(l, "pointerAtBeginning", !1), o.Collection.mapMethods(l)
        }, 8409: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(8734), c = i(2503), l = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    t.beginPath(), t.arc(0, 0, this.radius(), 0, 2 * Math.PI, !1), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    return 2 * this.radius()
                }, e.prototype.getHeight = function () {
                    return 2 * this.radius()
                }, e.prototype.setWidth = function (t) {
                    this.radius() !== t / 2 && this.radius(t / 2)
                }, e.prototype.setHeight = function (t) {
                    this.radius() !== t / 2 && this.radius(t / 2)
                }, e
            }(s.Shape);
            e.Circle = l, l.prototype._centroid = !0, l.prototype.className = "Circle", l.prototype._attrsAffectingSize = ["radius"], c._registerNode(l), a.Factory.addGetterSetter(l, "radius", 0, h.getNumberValidator()), o.Collection.mapMethods(l)
        }, 2225: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(8734), c = i(2503), l = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e = this.radiusX(), i = this.radiusY();
                    t.beginPath(), t.save(), e !== i && t.scale(1, i / e), t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.restore(), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    return 2 * this.radiusX()
                }, e.prototype.getHeight = function () {
                    return 2 * this.radiusY()
                }, e.prototype.setWidth = function (t) {
                    this.radiusX(t / 2)
                }, e.prototype.setHeight = function (t) {
                    this.radiusY(t / 2)
                }, e
            }(s.Shape);
            e.Ellipse = l, l.prototype.className = "Ellipse", l.prototype._centroid = !0, l.prototype._attrsAffectingSize = ["radiusX", "radiusY"], c._registerNode(l), a.Factory.addComponentsGetterSetter(l, "radius", ["x", "y"]), a.Factory.addGetterSetter(l, "radiusX", 0, h.getNumberValidator()), a.Factory.addGetterSetter(l, "radiusY", 0, h.getNumberValidator()), o.Collection.mapMethods(l)
        }, 7391: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(8734), c = i(2503), l = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._useBufferCanvas = function () {
                    return !(!this.hasShadow() && 1 === this.getAbsoluteOpacity() || !this.hasStroke() || !this.getStage())
                }, e.prototype._sceneFunc = function (t) {
                    var e, i, r, n = this.width(), o = this.height(), a = this.image();
                    a && (e = this.cropWidth(), i = this.cropHeight(), r = e && i ? [a, this.cropX(), this.cropY(), e, i, 0, 0, n, o] : [a, 0, 0, n, o]), (this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, n, o), t.closePath(), t.fillStrokeShape(this)), a && t.drawImage.apply(t, r)
                }, e.prototype._hitFunc = function (t) {
                    var e = this.width(), i = this.height();
                    t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    var t, e = this.image();
                    return null !== (t = this.attrs.width) && void 0 !== t ? t : e ? e.width : 0
                }, e.prototype.getHeight = function () {
                    var t, e = this.image();
                    return null !== (t = this.attrs.height) && void 0 !== t ? t : e ? e.height : 0
                }, e.fromURL = function (t, i) {
                    var r = o.Util.createImageElement();
                    r.onload = function () {
                        var t = new e({image: r});
                        i(t)
                    }, r.crossOrigin = "Anonymous", r.src = t
                }, e
            }(s.Shape);
            e.Image = l, l.prototype.className = "Image", c._registerNode(l), a.Factory.addGetterSetter(l, "image"), a.Factory.addComponentsGetterSetter(l, "crop", ["x", "y", "width", "height"]), a.Factory.addGetterSetter(l, "cropX", 0, h.getNumberValidator()), a.Factory.addGetterSetter(l, "cropY", 0, h.getNumberValidator()), a.Factory.addGetterSetter(l, "cropWidth", 0, h.getNumberValidator()), a.Factory.addGetterSetter(l, "cropHeight", 0, h.getNumberValidator()), o.Collection.mapMethods(l)
        }, 5283: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(583), c = i(8734), l = i(2503),
                u = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text", "width"], d = "up",
                p = "right", f = "down", g = "left", y = u.length, v = function (t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        return i.on("add.konva", (function (t) {
                            this._addListeners(t.child), this._sync()
                        })), i
                    }

                    return n(e, t), e.prototype.getText = function () {
                        return this.find("Text")[0]
                    }, e.prototype.getTag = function () {
                        return this.find("Tag")[0]
                    }, e.prototype._addListeners = function (t) {
                        var e, i = this, r = function () {
                            i._sync()
                        };
                        for (e = 0; e < y; e++) t.on(u[e] + "Change.konva", r)
                    }, e.prototype.getWidth = function () {
                        return this.getText().width()
                    }, e.prototype.getHeight = function () {
                        return this.getText().height()
                    }, e.prototype._sync = function () {
                        var t, e, i, r, n, o, a, s = this.getText(), h = this.getTag();
                        if (s && h) {
                            switch (t = s.width(), e = s.height(), i = h.pointerDirection(), r = h.pointerWidth(), a = h.pointerHeight(), n = 0, o = 0, i) {
                                case d:
                                    n = t / 2, o = -1 * a;
                                    break;
                                case p:
                                    n = t + r, o = e / 2;
                                    break;
                                case f:
                                    n = t / 2, o = e + a;
                                    break;
                                case g:
                                    n = -1 * r, o = e / 2
                            }
                            h.setAttrs({x: -1 * n, y: -1 * o, width: t, height: e}), s.setAttrs({x: -1 * n, y: -1 * o})
                        }
                    }, e
                }(h.Group);
            e.Label = v, v.prototype.className = "Label", l._registerNode(v), o.Collection.mapMethods(v);
            var _ = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e = this.width(), i = this.height(), r = this.pointerDirection(), n = this.pointerWidth(),
                        o = this.pointerHeight(), a = Math.min(this.cornerRadius(), e / 2, i / 2);
                    t.beginPath(), a ? t.moveTo(a, 0) : t.moveTo(0, 0), r === d && (t.lineTo((e - n) / 2, 0), t.lineTo(e / 2, -1 * o), t.lineTo((e + n) / 2, 0)), a ? (t.lineTo(e - a, 0), t.arc(e - a, a, a, 3 * Math.PI / 2, 0, !1)) : t.lineTo(e, 0), r === p && (t.lineTo(e, (i - o) / 2), t.lineTo(e + n, i / 2), t.lineTo(e, (i + o) / 2)), a ? (t.lineTo(e, i - a), t.arc(e - a, i - a, a, 0, Math.PI / 2, !1)) : t.lineTo(e, i), r === f && (t.lineTo((e + n) / 2, i), t.lineTo(e / 2, i + o), t.lineTo((e - n) / 2, i)), a ? (t.lineTo(a, i), t.arc(a, i - a, a, Math.PI / 2, Math.PI, !1)) : t.lineTo(0, i), r === g && (t.lineTo(0, (i + o) / 2), t.lineTo(-1 * n, i / 2), t.lineTo(0, (i - o) / 2)), a && (t.lineTo(0, a), t.arc(a, a, a, Math.PI, 3 * Math.PI / 2, !1)), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getSelfRect = function () {
                    var t = 0, e = 0, i = this.pointerWidth(), r = this.pointerHeight(), n = this.pointerDirection(),
                        o = this.width(), a = this.height();
                    return n === d ? (e -= r, a += r) : n === f ? a += r : n === g ? (t -= 1.5 * i, o += i) : n === p && (o += 1.5 * i), {
                        x: t,
                        y: e,
                        width: o,
                        height: a
                    }
                }, e
            }(s.Shape);
            e.Tag = _, _.prototype.className = "Tag", l._registerNode(_), a.Factory.addGetterSetter(_, "pointerDirection", "none"), a.Factory.addGetterSetter(_, "pointerWidth", 0, c.getNumberValidator()), a.Factory.addGetterSetter(_, "pointerHeight", 0, c.getNumberValidator()), a.Factory.addGetterSetter(_, "cornerRadius", 0, c.getNumberValidator()), o.Collection.mapMethods(_)
        }, 5358: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }), o = this && this.__spreadArrays || function () {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                var r = Array(t), n = 0;
                for (e = 0; e < i; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, n++) r[n] = o[a];
                return r
            };
            Object.defineProperty(e, "__esModule", {value: !0});
            var a = i(5117), s = i(2315), h = i(1457), c = i(8734), l = i(2503), u = function (t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", (function () {
                        this._clearCache("tensionPoints")
                    })), i
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e, i, r, n = this.points(), o = n.length, a = this.tension(), s = this.closed(),
                        h = this.bezier();
                    if (o) {
                        if (t.beginPath(), t.moveTo(n[0], n[1]), 0 !== a && o > 4) {
                            for (i = (e = this.getTensionPoints()).length, r = s ? 0 : 4, s || t.quadraticCurveTo(e[0], e[1], e[2], e[3]); r < i - 2;) t.bezierCurveTo(e[r++], e[r++], e[r++], e[r++], e[r++], e[r++]);
                            s || t.quadraticCurveTo(e[i - 2], e[i - 1], n[o - 2], n[o - 1])
                        } else if (h) for (r = 2; r < o;) t.bezierCurveTo(n[r++], n[r++], n[r++], n[r++], n[r++], n[r++]); else for (r = 2; r < o; r += 2) t.lineTo(n[r], n[r + 1]);
                        s ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this)
                    }
                }, e.prototype.getTensionPoints = function () {
                    return this._getCache("tensionPoints", this._getTensionPoints)
                }, e.prototype._getTensionPoints = function () {
                    return this.closed() ? this._getTensionPointsClosed() : a.Util._expandPoints(this.points(), this.tension())
                }, e.prototype._getTensionPointsClosed = function () {
                    var t = this.points(), e = t.length, i = this.tension(),
                        r = a.Util._getControlPoints(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i),
                        n = a.Util._getControlPoints(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i),
                        o = a.Util._expandPoints(t, i);
                    return [r[2], r[3]].concat(o).concat([n[0], n[1], t[e - 2], t[e - 1], n[2], n[3], r[0], r[1], t[0], t[1]])
                }, e.prototype.getWidth = function () {
                    return this.getSelfRect().width
                }, e.prototype.getHeight = function () {
                    return this.getSelfRect().height
                }, e.prototype.getSelfRect = function () {
                    var t = this.points();
                    if (t.length < 4) return {x: t[0] || 0, y: t[1] || 0, width: 0, height: 0};
                    for (var e, i, r = (t = 0 !== this.tension() ? o([t[0], t[1]], this._getTensionPoints(), [t[t.length - 2], t[t.length - 1]]) : this.points())[0], n = t[0], a = t[1], s = t[1], h = 0; h < t.length / 2; h++) e = t[2 * h], i = t[2 * h + 1], r = Math.min(r, e), n = Math.max(n, e), a = Math.min(a, i), s = Math.max(s, i);
                    return {x: r, y: a, width: n - r, height: s - a}
                }, e
            }(h.Shape);
            e.Line = u, u.prototype.className = "Line", u.prototype._attrsAffectingSize = ["points", "bezier", "tension"], l._registerNode(u), s.Factory.addGetterSetter(u, "closed", !1), s.Factory.addGetterSetter(u, "bezier", !1), s.Factory.addGetterSetter(u, "tension", 0, c.getNumberValidator()), s.Factory.addGetterSetter(u, "points", [], c.getNumberArrayValidator()), a.Collection.mapMethods(u)
        }, 3482: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(2503), c = function (t) {
                function e(i) {
                    var r = t.call(this, i) || this;
                    r.dataArray = [], r.pathLength = 0, r.dataArray = e.parsePathData(r.data()), r.pathLength = 0;
                    for (var n = 0; n < r.dataArray.length; ++n) r.pathLength += r.dataArray[n].pathLength;
                    return r.on("dataChange.konva", (function () {
                        this.dataArray = e.parsePathData(this.data()), this.pathLength = 0;
                        for (var t = 0; t < this.dataArray.length; ++t) this.pathLength += this.dataArray[t].pathLength
                    })), r
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e = this.dataArray;
                    t.beginPath();
                    for (var i = !1, r = 0; r < e.length; r++) {
                        var n = e[r].command, o = e[r].points;
                        switch (n) {
                            case"L":
                                t.lineTo(o[0], o[1]);
                                break;
                            case"M":
                                t.moveTo(o[0], o[1]);
                                break;
                            case"C":
                                t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
                                break;
                            case"Q":
                                t.quadraticCurveTo(o[0], o[1], o[2], o[3]);
                                break;
                            case"A":
                                var a = o[0], s = o[1], h = o[2], c = o[3], l = o[4], u = o[5], d = o[6], p = o[7],
                                    f = h > c ? h : c, g = h > c ? 1 : h / c, y = h > c ? c / h : 1;
                                t.translate(a, s), t.rotate(d), t.scale(g, y), t.arc(0, 0, f, l, l + u, 1 - p), t.scale(1 / g, 1 / y), t.rotate(-d), t.translate(-a, -s);
                                break;
                            case"z":
                                i = !0, t.closePath()
                        }
                    }
                    i || this.hasFill() ? t.fillStrokeShape(this) : t.strokeShape(this)
                }, e.prototype.getSelfRect = function () {
                    var t = [];
                    this.dataArray.forEach((function (i) {
                        if ("A" === i.command) {
                            var r = i.points[4], n = i.points[5], o = i.points[4] + n, a = Math.PI / 180;
                            if (Math.abs(r - o) < a && (a = Math.abs(r - o)), n < 0) for (var s = r - a; s > o; s -= a) {
                                var h = e.getPointOnEllipticalArc(i.points[0], i.points[1], i.points[2], i.points[3], s, 0);
                                t.push(h.x, h.y)
                            } else for (s = r + a; s < o; s += a) h = e.getPointOnEllipticalArc(i.points[0], i.points[1], i.points[2], i.points[3], s, 0), t.push(h.x, h.y)
                        } else if ("C" === i.command) for (s = 0; s <= 1; s += .01) h = e.getPointOnCubicBezier(s, i.start.x, i.start.y, i.points[0], i.points[1], i.points[2], i.points[3], i.points[4], i.points[5]), t.push(h.x, h.y); else t = t.concat(i.points)
                    }));
                    for (var i, r, n = t[0], o = t[0], a = t[1], s = t[1], h = 0; h < t.length / 2; h++) i = t[2 * h], r = t[2 * h + 1], isNaN(i) || (n = Math.min(n, i), o = Math.max(o, i)), isNaN(r) || (a = Math.min(a, r), s = Math.max(s, r));
                    return {x: Math.round(n), y: Math.round(a), width: Math.round(o - n), height: Math.round(s - a)}
                }, e.prototype.getLength = function () {
                    return this.pathLength
                }, e.prototype.getPointAtLength = function (t) {
                    var i, r = 0, n = this.dataArray.length;
                    if (!n) return null;
                    for (; r < n && t > this.dataArray[r].pathLength;) t -= this.dataArray[r].pathLength, ++r;
                    if (r === n) return {x: (i = this.dataArray[r - 1].points.slice(-2))[0], y: i[1]};
                    if (t < .01) return {x: (i = this.dataArray[r].points.slice(0, 2))[0], y: i[1]};
                    var o = this.dataArray[r], a = o.points;
                    switch (o.command) {
                        case"L":
                            return e.getPointOnLine(t, o.start.x, o.start.y, a[0], a[1]);
                        case"C":
                            return e.getPointOnCubicBezier(t / o.pathLength, o.start.x, o.start.y, a[0], a[1], a[2], a[3], a[4], a[5]);
                        case"Q":
                            return e.getPointOnQuadraticBezier(t / o.pathLength, o.start.x, o.start.y, a[0], a[1], a[2], a[3]);
                        case"A":
                            var s = a[0], h = a[1], c = a[2], l = a[3], u = a[4], d = a[5], p = a[6];
                            return u += d * t / o.pathLength, e.getPointOnEllipticalArc(s, h, c, l, u, p)
                    }
                    return null
                }, e.getLineLength = function (t, e, i, r) {
                    return Math.sqrt((i - t) * (i - t) + (r - e) * (r - e))
                }, e.getPointOnLine = function (t, e, i, r, n, o, a) {
                    void 0 === o && (o = e), void 0 === a && (a = i);
                    var s = (n - i) / (r - e + 1e-8), h = Math.sqrt(t * t / (1 + s * s));
                    r < e && (h *= -1);
                    var c, l = s * h;
                    if (r === e) c = {x: o, y: a + l}; else if ((a - i) / (o - e + 1e-8) === s) c = {
                        x: o + h,
                        y: a + l
                    }; else {
                        var u, d, p = this.getLineLength(e, i, r, n);
                        if (p < 1e-8) return;
                        var f = (o - e) * (r - e) + (a - i) * (n - i);
                        u = e + (f /= p * p) * (r - e), d = i + f * (n - i);
                        var g = this.getLineLength(o, a, u, d), y = Math.sqrt(t * t - g * g);
                        h = Math.sqrt(y * y / (1 + s * s)), r < e && (h *= -1), c = {x: u + h, y: d + (l = s * h)}
                    }
                    return c
                }, e.getPointOnCubicBezier = function (t, e, i, r, n, o, a, s, h) {
                    function c(t) {
                        return t * t * t
                    }

                    function l(t) {
                        return 3 * t * t * (1 - t)
                    }

                    function u(t) {
                        return 3 * t * (1 - t) * (1 - t)
                    }

                    function d(t) {
                        return (1 - t) * (1 - t) * (1 - t)
                    }

                    return {x: s * c(t) + o * l(t) + r * u(t) + e * d(t), y: h * c(t) + a * l(t) + n * u(t) + i * d(t)}
                }, e.getPointOnQuadraticBezier = function (t, e, i, r, n, o, a) {
                    function s(t) {
                        return t * t
                    }

                    function h(t) {
                        return 2 * t * (1 - t)
                    }

                    function c(t) {
                        return (1 - t) * (1 - t)
                    }

                    return {x: o * s(t) + r * h(t) + e * c(t), y: a * s(t) + n * h(t) + i * c(t)}
                }, e.getPointOnEllipticalArc = function (t, e, i, r, n, o) {
                    var a = Math.cos(o), s = Math.sin(o), h = i * Math.cos(n), c = r * Math.sin(n);
                    return {x: t + (h * a - c * s), y: e + (h * s + c * a)}
                }, e.parsePathData = function (t) {
                    if (!t) return [];
                    var e = t,
                        i = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
                    e = e.replace(new RegExp(" ", "g"), ",");
                    for (var r = 0; r < i.length; r++) e = e.replace(new RegExp(i[r], "g"), "|" + i[r]);
                    var n, o = e.split("|"), a = [], s = [], h = 0, c = 0,
                        l = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
                    for (r = 1; r < o.length; r++) {
                        var u = o[r], d = u.charAt(0);
                        for (u = u.slice(1), s.length = 0; n = l.exec(u);) s.push(n[0]);
                        for (var p = [], f = 0, g = s.length; f < g; f++) {
                            var y = parseFloat(s[f]);
                            isNaN(y) ? p.push(0) : p.push(y)
                        }
                        for (; p.length > 0 && !isNaN(p[0]);) {
                            var v, _, m, b, x, S, w, C, P, A, T = null, k = [], M = h, F = c;
                            switch (d) {
                                case"l":
                                    h += p.shift(), c += p.shift(), T = "L", k.push(h, c);
                                    break;
                                case"L":
                                    h = p.shift(), c = p.shift(), k.push(h, c);
                                    break;
                                case"m":
                                    var O = p.shift(), D = p.shift();
                                    if (h += O, c += D, T = "M", a.length > 2 && "z" === a[a.length - 1].command) for (var G = a.length - 2; G >= 0; G--) if ("M" === a[G].command) {
                                        h = a[G].points[0] + O, c = a[G].points[1] + D;
                                        break
                                    }
                                    k.push(h, c), d = "l";
                                    break;
                                case"M":
                                    h = p.shift(), c = p.shift(), T = "M", k.push(h, c), d = "L";
                                    break;
                                case"h":
                                    h += p.shift(), T = "L", k.push(h, c);
                                    break;
                                case"H":
                                    h = p.shift(), T = "L", k.push(h, c);
                                    break;
                                case"v":
                                    c += p.shift(), T = "L", k.push(h, c);
                                    break;
                                case"V":
                                    c = p.shift(), T = "L", k.push(h, c);
                                    break;
                                case"C":
                                    k.push(p.shift(), p.shift(), p.shift(), p.shift()), h = p.shift(), c = p.shift(), k.push(h, c);
                                    break;
                                case"c":
                                    k.push(h + p.shift(), c + p.shift(), h + p.shift(), c + p.shift()), h += p.shift(), c += p.shift(), T = "C", k.push(h, c);
                                    break;
                                case"S":
                                    _ = h, m = c, "C" === (v = a[a.length - 1]).command && (_ = h + (h - v.points[2]), m = c + (c - v.points[3])), k.push(_, m, p.shift(), p.shift()), h = p.shift(), c = p.shift(), T = "C", k.push(h, c);
                                    break;
                                case"s":
                                    _ = h, m = c, "C" === (v = a[a.length - 1]).command && (_ = h + (h - v.points[2]), m = c + (c - v.points[3])), k.push(_, m, h + p.shift(), c + p.shift()), h += p.shift(), c += p.shift(), T = "C", k.push(h, c);
                                    break;
                                case"Q":
                                    k.push(p.shift(), p.shift()), h = p.shift(), c = p.shift(), k.push(h, c);
                                    break;
                                case"q":
                                    k.push(h + p.shift(), c + p.shift()), h += p.shift(), c += p.shift(), T = "Q", k.push(h, c);
                                    break;
                                case"T":
                                    _ = h, m = c, "Q" === (v = a[a.length - 1]).command && (_ = h + (h - v.points[0]), m = c + (c - v.points[1])), h = p.shift(), c = p.shift(), T = "Q", k.push(_, m, h, c);
                                    break;
                                case"t":
                                    _ = h, m = c, "Q" === (v = a[a.length - 1]).command && (_ = h + (h - v.points[0]), m = c + (c - v.points[1])), h += p.shift(), c += p.shift(), T = "Q", k.push(_, m, h, c);
                                    break;
                                case"A":
                                    b = p.shift(), x = p.shift(), S = p.shift(), w = p.shift(), C = p.shift(), P = h, A = c, h = p.shift(), c = p.shift(), T = "A", k = this.convertEndpointToCenterParameterization(P, A, h, c, w, C, b, x, S);
                                    break;
                                case"a":
                                    b = p.shift(), x = p.shift(), S = p.shift(), w = p.shift(), C = p.shift(), P = h, A = c, h += p.shift(), c += p.shift(), T = "A", k = this.convertEndpointToCenterParameterization(P, A, h, c, w, C, b, x, S)
                            }
                            a.push({
                                command: T || d,
                                points: k,
                                start: {x: M, y: F},
                                pathLength: this.calcLength(M, F, T || d, k)
                            })
                        }
                        "z" !== d && "Z" !== d || a.push({command: "z", points: [], start: void 0, pathLength: 0})
                    }
                    return a
                }, e.calcLength = function (t, i, r, n) {
                    var o, a, s, h, c = e;
                    switch (r) {
                        case"L":
                            return c.getLineLength(t, i, n[0], n[1]);
                        case"C":
                            for (o = 0, a = c.getPointOnCubicBezier(0, t, i, n[0], n[1], n[2], n[3], n[4], n[5]), h = .01; h <= 1; h += .01) s = c.getPointOnCubicBezier(h, t, i, n[0], n[1], n[2], n[3], n[4], n[5]), o += c.getLineLength(a.x, a.y, s.x, s.y), a = s;
                            return o;
                        case"Q":
                            for (o = 0, a = c.getPointOnQuadraticBezier(0, t, i, n[0], n[1], n[2], n[3]), h = .01; h <= 1; h += .01) s = c.getPointOnQuadraticBezier(h, t, i, n[0], n[1], n[2], n[3]), o += c.getLineLength(a.x, a.y, s.x, s.y), a = s;
                            return o;
                        case"A":
                            o = 0;
                            var l = n[4], u = n[5], d = n[4] + u, p = Math.PI / 180;
                            if (Math.abs(l - d) < p && (p = Math.abs(l - d)), a = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], l, 0), u < 0) for (h = l - p; h > d; h -= p) s = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), o += c.getLineLength(a.x, a.y, s.x, s.y), a = s; else for (h = l + p; h < d; h += p) s = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), o += c.getLineLength(a.x, a.y, s.x, s.y), a = s;
                            return s = c.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], d, 0), o + c.getLineLength(a.x, a.y, s.x, s.y)
                    }
                    return 0
                }, e.convertEndpointToCenterParameterization = function (t, e, i, r, n, o, a, s, h) {
                    var c = h * (Math.PI / 180), l = Math.cos(c) * (t - i) / 2 + Math.sin(c) * (e - r) / 2,
                        u = -1 * Math.sin(c) * (t - i) / 2 + Math.cos(c) * (e - r) / 2,
                        d = l * l / (a * a) + u * u / (s * s);
                    d > 1 && (a *= Math.sqrt(d), s *= Math.sqrt(d));
                    var p = Math.sqrt((a * a * (s * s) - a * a * (u * u) - s * s * (l * l)) / (a * a * (u * u) + s * s * (l * l)));
                    n === o && (p *= -1), isNaN(p) && (p = 0);
                    var f = p * a * u / s, g = p * -s * l / a, y = (t + i) / 2 + Math.cos(c) * f - Math.sin(c) * g,
                        v = (e + r) / 2 + Math.sin(c) * f + Math.cos(c) * g, _ = function (t) {
                            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
                        }, m = function (t, e) {
                            return (t[0] * e[0] + t[1] * e[1]) / (_(t) * _(e))
                        }, b = function (t, e) {
                            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e))
                        }, x = b([1, 0], [(l - f) / a, (u - g) / s]), S = [(l - f) / a, (u - g) / s],
                        w = [(-1 * l - f) / a, (-1 * u - g) / s], C = b(S, w);
                    return m(S, w) <= -1 && (C = Math.PI), m(S, w) >= 1 && (C = 0), 0 === o && C > 0 && (C -= 2 * Math.PI), 1 === o && C < 0 && (C += 2 * Math.PI), [y, v, a, s, x, C, c, o]
                }, e
            }(s.Shape);
            e.Path = c, c.prototype.className = "Path", c.prototype._attrsAffectingSize = ["data"], h._registerNode(c), a.Factory.addGetterSetter(c, "data"), o.Collection.mapMethods(c)
        }, 9890: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(2503), c = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e = this.cornerRadius(), i = this.width(), r = this.height();
                    if (t.beginPath(), e) {
                        var n = 0, o = 0, a = 0, s = 0;
                        "number" == typeof e ? n = o = a = s = Math.min(e, i / 2, r / 2) : (n = Math.min(e[0], i / 2, r / 2), o = Math.min(e[1], i / 2, r / 2), s = Math.min(e[2], i / 2, r / 2), a = Math.min(e[3], i / 2, r / 2)), t.moveTo(n, 0), t.lineTo(i - o, 0), t.arc(i - o, o, o, 3 * Math.PI / 2, 0, !1), t.lineTo(i, r - s), t.arc(i - s, r - s, s, 0, Math.PI / 2, !1), t.lineTo(a, r), t.arc(a, r - a, a, Math.PI / 2, Math.PI, !1), t.lineTo(0, n), t.arc(n, n, n, Math.PI, 3 * Math.PI / 2, !1)
                    } else t.rect(0, 0, i, r);
                    t.closePath(), t.fillStrokeShape(this)
                }, e
            }(s.Shape);
            e.Rect = c, c.prototype.className = "Rect", h._registerNode(c), a.Factory.addGetterSetter(c, "cornerRadius", 0), o.Collection.mapMethods(c)
        }, 384: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(8734), c = i(2503), l = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e, i, r, n = this.sides(), o = this.radius();
                    for (t.beginPath(), t.moveTo(0, 0 - o), e = 1; e < n; e++) i = o * Math.sin(2 * e * Math.PI / n), r = -1 * o * Math.cos(2 * e * Math.PI / n), t.lineTo(i, r);
                    t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    return 2 * this.radius()
                }, e.prototype.getHeight = function () {
                    return 2 * this.radius()
                }, e.prototype.setWidth = function (t) {
                    this.radius(t / 2)
                }, e.prototype.setHeight = function (t) {
                    this.radius(t / 2)
                }, e
            }(s.Shape);
            e.RegularPolygon = l, l.prototype.className = "RegularPolygon", l.prototype._centroid = !0, l.prototype._attrsAffectingSize = ["radius"], c._registerNode(l), a.Factory.addGetterSetter(l, "radius", 0, h.getNumberValidator()), a.Factory.addGetterSetter(l, "sides", 0, h.getNumberValidator()), o.Collection.mapMethods(l)
        }, 3156: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(8734), c = i(2503), l = 2 * Math.PI, u = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, l, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), l, 0, !0), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    return 2 * this.outerRadius()
                }, e.prototype.getHeight = function () {
                    return 2 * this.outerRadius()
                }, e.prototype.setWidth = function (t) {
                    this.outerRadius(t / 2)
                }, e.prototype.setHeight = function (t) {
                    this.outerRadius(t / 2)
                }, e
            }(s.Shape);
            e.Ring = u, u.prototype.className = "Ring", u.prototype._centroid = !0, u.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], c._registerNode(u), a.Factory.addGetterSetter(u, "innerRadius", 0, h.getNumberValidator()), a.Factory.addGetterSetter(u, "outerRadius", 0, h.getNumberValidator()), o.Collection.mapMethods(u)
        }, 8640: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(6537), c = i(8734), l = i(2503), u = function (t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i._updated = !0, i.anim = new h.Animation((function () {
                        var t = i._updated;
                        return i._updated = !1, t
                    })), i.on("animationChange.konva", (function () {
                        this.frameIndex(0)
                    })), i.on("frameIndexChange.konva", (function () {
                        this._updated = !0
                    })), i.on("frameRateChange.konva", (function () {
                        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval())
                    })), i
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e = this.animation(), i = this.frameIndex(), r = 4 * i, n = this.animations()[e],
                        o = this.frameOffsets(), a = n[r + 0], s = n[r + 1], h = n[r + 2], c = n[r + 3],
                        l = this.image();
                    if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, h, c), t.closePath(), t.fillStrokeShape(this)), l) if (o) {
                        var u = o[e], d = 2 * i;
                        t.drawImage(l, a, s, h, c, u[d + 0], u[d + 1], h, c)
                    } else t.drawImage(l, a, s, h, c, 0, 0, h, c)
                }, e.prototype._hitFunc = function (t) {
                    var e = this.animation(), i = this.frameIndex(), r = 4 * i, n = this.animations()[e],
                        o = this.frameOffsets(), a = n[r + 2], s = n[r + 3];
                    if (t.beginPath(), o) {
                        var h = o[e], c = 2 * i;
                        t.rect(h[c + 0], h[c + 1], a, s)
                    } else t.rect(0, 0, a, s);
                    t.closePath(), t.fillShape(this)
                }, e.prototype._useBufferCanvas = function () {
                    return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke()
                }, e.prototype._setInterval = function () {
                    var t = this;
                    this.interval = setInterval((function () {
                        t._updateIndex()
                    }), 1e3 / this.frameRate())
                }, e.prototype.start = function () {
                    if (!this.isRunning()) {
                        var t = this.getLayer();
                        this.anim.setLayers(t), this._setInterval(), this.anim.start()
                    }
                }, e.prototype.stop = function () {
                    this.anim.stop(), clearInterval(this.interval)
                }, e.prototype.isRunning = function () {
                    return this.anim.isRunning()
                }, e.prototype._updateIndex = function () {
                    var t = this.frameIndex(), e = this.animation();
                    t < this.animations()[e].length / 4 - 1 ? this.frameIndex(t + 1) : this.frameIndex(0)
                }, e
            }(s.Shape);
            e.Sprite = u, u.prototype.className = "Sprite", l._registerNode(u), a.Factory.addGetterSetter(u, "animation"), a.Factory.addGetterSetter(u, "animations"), a.Factory.addGetterSetter(u, "frameOffsets"), a.Factory.addGetterSetter(u, "image"), a.Factory.addGetterSetter(u, "frameIndex", 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "frameRate", 17, c.getNumberValidator()), a.Factory.backCompat(u, {
                index: "frameIndex",
                getIndex: "getFrameIndex",
                setIndex: "setFrameIndex"
            }), o.Collection.mapMethods(u)
        }, 7296: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(8734), c = i(2503), l = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e = this.innerRadius(), i = this.outerRadius(), r = this.numPoints();
                    t.beginPath(), t.moveTo(0, 0 - i);
                    for (var n = 1; n < 2 * r; n++) {
                        var o = n % 2 == 0 ? i : e, a = o * Math.sin(n * Math.PI / r),
                            s = -1 * o * Math.cos(n * Math.PI / r);
                        t.lineTo(a, s)
                    }
                    t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    return 2 * this.outerRadius()
                }, e.prototype.getHeight = function () {
                    return 2 * this.outerRadius()
                }, e.prototype.setWidth = function (t) {
                    this.outerRadius(t / 2)
                }, e.prototype.setHeight = function (t) {
                    this.outerRadius(t / 2)
                }, e
            }(s.Shape);
            e.Star = l, l.prototype.className = "Star", l.prototype._centroid = !0, l.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], c._registerNode(l), a.Factory.addGetterSetter(l, "numPoints", 5, h.getNumberValidator()), a.Factory.addGetterSetter(l, "innerRadius", 0, h.getNumberValidator()), a.Factory.addGetterSetter(l, "outerRadius", 0, h.getNumberValidator()), o.Collection.mapMethods(l)
        }, 3131: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o, a = i(5117), s = i(2315), h = i(1457), c = i(2503), l = i(8734), u = i(2503), d = "auto",
                p = "justify", f = "left", g = "middle", y = "normal", v = " ",
                _ = ["fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "verticalAlign", "lineHeight", "text", "width", "height", "wrap", "ellipsis", "letterSpacing"],
                m = _.length;

            function b() {
                return o || (o = a.Util.createCanvasElement().getContext("2d"))
            }

            String.prototype.trimRight;
            var x = function (t) {
                function e(e) {
                    var i = t.call(this, function (t) {
                        return (t = t || {}).fillLinearGradientColorStops || t.fillRadialGradientColorStops || t.fillPatternImage || (t.fill = t.fill || "black"), t
                    }(e)) || this;
                    i._partialTextX = 0, i._partialTextY = 0;
                    for (var r = 0; r < m; r++) i.on(_[r] + "Change.konva", i._setTextData);
                    return i._setTextData(), i
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    var e, i = this.padding(), r = this.fontSize(), n = this.lineHeight() * r, o = this.textArr,
                        a = o.length, s = this.verticalAlign(), h = 0, c = this.align(), l = this.getWidth(),
                        u = this.letterSpacing(), d = this.fill(), y = this.textDecoration(),
                        v = -1 !== y.indexOf("underline"), _ = -1 !== y.indexOf("line-through"), m = 0,
                        b = (m = n / 2, 0), x = 0;
                    for (t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", g), t.setAttr("textAlign", f), s === g ? h = (this.getHeight() - a * n - 2 * i) / 2 : "bottom" === s && (h = this.getHeight() - a * n - 2 * i), t.translate(i, h + i), e = 0; e < a; e++) {
                        b = 0, x = 0;
                        var S, w, C, P = o[e], A = P.text, T = P.width, k = e !== a - 1;
                        if (t.save(), "right" === c ? b += l - T - 2 * i : "center" === c && (b += (l - T - 2 * i) / 2), v && (t.save(), t.beginPath(), t.moveTo(b, m + x + Math.round(r / 2)), w = 0 == (S = A.split(" ").length - 1), C = c === p && k && !w ? l - 2 * i : T, t.lineTo(b + Math.round(C), m + x + Math.round(r / 2)), t.lineWidth = r / 15, t.strokeStyle = d, t.stroke(), t.restore()), _ && (t.save(), t.beginPath(), t.moveTo(b, m + x), w = 0 == (S = A.split(" ").length - 1), C = c === p && k && !w ? l - 2 * i : T, t.lineTo(b + Math.round(C), m + x), t.lineWidth = r / 15, t.strokeStyle = d, t.stroke(), t.restore()), 0 !== u || c === p) {
                            S = A.split(" ").length - 1;
                            for (var M = 0; M < A.length; M++) {
                                var F = A[M];
                                " " === F && e !== a - 1 && c === p && (b += Math.floor((l - 2 * i - T) / S)), this._partialTextX = b, this._partialTextY = m + x, this._partialText = F, t.fillStrokeShape(this), b += Math.round(this.measureSize(F).width) + u
                            }
                        } else this._partialTextX = b, this._partialTextY = m + x, this._partialText = A, t.fillStrokeShape(this);
                        t.restore(), a > 1 && (m += n)
                    }
                }, e.prototype._hitFunc = function (t) {
                    var e = this.getWidth(), i = this.getHeight();
                    t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.setText = function (t) {
                    var e = a.Util._isString(t) ? t : null == t ? "" : t + "";
                    return this._setAttr("text", e), this
                }, e.prototype.getWidth = function () {
                    return this.attrs.width === d || void 0 === this.attrs.width ? this.getTextWidth() + 2 * this.padding() : this.attrs.width
                }, e.prototype.getHeight = function () {
                    return this.attrs.height === d || void 0 === this.attrs.height ? this.fontSize() * this.textArr.length * this.lineHeight() + 2 * this.padding() : this.attrs.height
                }, e.prototype.getTextWidth = function () {
                    return this.textWidth
                }, e.prototype.getTextHeight = function () {
                    return a.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight
                }, e.prototype.measureSize = function (t) {
                    var e, i = b(), r = this.fontSize();
                    return i.save(), i.font = this._getContextFont(), e = i.measureText(t), i.restore(), {
                        width: e.width,
                        height: r
                    }
                }, e.prototype._getContextFont = function () {
                    return c.Konva.UA.isIE ? this.fontStyle() + v + this.fontSize() + "px " + this.fontFamily() : this.fontStyle() + v + this.fontVariant() + v + this.fontSize() + "px " + this.fontFamily()
                }, e.prototype._addTextLine = function (t) {
                    this.align() === p && (t = t.trim());
                    var e = this._getTextWidth(t);
                    return this.textArr.push({text: t, width: e})
                }, e.prototype._getTextWidth = function (t) {
                    var e = this.letterSpacing(), i = t.length;
                    return b().measureText(t).width + (i ? e * (i - 1) : 0)
                }, e.prototype._setTextData = function () {
                    var t = this.text().split("\n"), e = +this.fontSize(), i = 0, r = this.lineHeight() * e,
                        n = this.attrs.width, o = this.attrs.height, a = n !== d && void 0 !== n,
                        s = o !== d && void 0 !== o, h = this.padding(), c = n - 2 * h, l = o - 2 * h, u = 0,
                        p = this.wrap(), f = "none" !== p, g = "char" !== p && f, y = this.ellipsis() && !f;
                    this.textArr = [], b().font = this._getContextFont();
                    for (var _ = y ? this._getTextWidth("…") : 0, m = 0, x = t.length; m < x; ++m) {
                        var S = t[m], w = this._getTextWidth(S);
                        if (a && w > c) for (; S.length > 0;) {
                            for (var C = 0, P = S.length, A = "", T = 0; C < P;) {
                                var k = C + P >>> 1, M = S.slice(0, k + 1), F = this._getTextWidth(M) + _;
                                F <= c ? (C = k + 1, A = M + (y ? "…" : ""), T = F) : P = k
                            }
                            if (!A) break;
                            if (g) {
                                var O, D = S[A.length];
                                (O = (D === v || "-" === D) && T <= c ? A.length : Math.max(A.lastIndexOf(v), A.lastIndexOf("-")) + 1) > 0 && (C = O, A = A.slice(0, C), T = this._getTextWidth(A))
                            }
                            if (A = A.trimRight(), this._addTextLine(A), i = Math.max(i, T), u += r, !f || s && u + r > l) break;
                            if ((S = (S = S.slice(C)).trimLeft()).length > 0 && (w = this._getTextWidth(S)) <= c) {
                                this._addTextLine(S), u += r, i = Math.max(i, w);
                                break
                            }
                        } else this._addTextLine(S), u += r, i = Math.max(i, w);
                        if (s && u + r > l) break
                    }
                    this.textHeight = e, this.textWidth = i
                }, e.prototype.getStrokeScaleEnabled = function () {
                    return !0
                }, e
            }(h.Shape);
            e.Text = x, x.prototype._fillFunc = function (t) {
                t.fillText(this._partialText, this._partialTextX, this._partialTextY)
            }, x.prototype._strokeFunc = function (t) {
                t.strokeText(this._partialText, this._partialTextX, this._partialTextY)
            }, x.prototype.className = "Text", x.prototype._attrsAffectingSize = ["text", "fontSize", "padding", "wrap", "lineHeight"], u._registerNode(x), s.Factory.overWriteSetter(x, "width", l.getNumberOrAutoValidator()), s.Factory.overWriteSetter(x, "height", l.getNumberOrAutoValidator()), s.Factory.addGetterSetter(x, "fontFamily", "Arial"), s.Factory.addGetterSetter(x, "fontSize", 12, l.getNumberValidator()), s.Factory.addGetterSetter(x, "fontStyle", y), s.Factory.addGetterSetter(x, "fontVariant", y), s.Factory.addGetterSetter(x, "padding", 0, l.getNumberValidator()), s.Factory.addGetterSetter(x, "align", f), s.Factory.addGetterSetter(x, "verticalAlign", "top"), s.Factory.addGetterSetter(x, "lineHeight", 1, l.getNumberValidator()), s.Factory.addGetterSetter(x, "wrap", "word"), s.Factory.addGetterSetter(x, "ellipsis", !1), s.Factory.addGetterSetter(x, "letterSpacing", 0, l.getNumberValidator()), s.Factory.addGetterSetter(x, "text", "", l.getStringValidator()), s.Factory.addGetterSetter(x, "textDecoration", ""), a.Collection.mapMethods(x)
        }, 8249: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(3482), c = i(3131), l = i(8734), u = i(2503), d = "normal";

            function p(t) {
                t.fillText(this.partialText, 0, 0)
            }

            function f(t) {
                t.strokeText(this.partialText, 0, 0)
            }

            var g = function (t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.dummyCanvas = o.Util.createCanvasElement(), i.dataArray = [], i.dataArray = h.Path.parsePathData(i.attrs.data), i.on("dataChange.konva", (function () {
                        this.dataArray = h.Path.parsePathData(this.attrs.data), this._setTextData()
                    })), i.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva", i._setTextData), e && e.getKerning && (o.Util.warn('getKerning TextPath API is deprecated. Please use "kerningFunc" instead.'), i.kerningFunc(e.getKerning)), i._setTextData(), i
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
                    var e = this.textDecoration(), i = this.fill(), r = this.fontSize(), n = this.glyphInfo;
                    "underline" === e && t.beginPath();
                    for (var o = 0; o < n.length; o++) {
                        t.save();
                        var a = n[o].p0;
                        t.translate(a.x, a.y), t.rotate(n[o].rotation), this.partialText = n[o].text, t.fillStrokeShape(this), "underline" === e && (0 === o && t.moveTo(0, r / 2 + 1), t.lineTo(r, r / 2 + 1)), t.restore()
                    }
                    "underline" === e && (t.strokeStyle = i, t.lineWidth = r / 20, t.stroke()), t.restore()
                }, e.prototype._hitFunc = function (t) {
                    t.beginPath();
                    var e = this.glyphInfo;
                    if (e.length >= 1) {
                        var i = e[0].p0;
                        t.moveTo(i.x, i.y)
                    }
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r].p1;
                        t.lineTo(n.x, n.y)
                    }
                    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke()
                }, e.prototype.getTextWidth = function () {
                    return this.textWidth
                }, e.prototype.getTextHeight = function () {
                    return o.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight
                }, e.prototype.setText = function (t) {
                    return c.Text.prototype.setText.call(this, t)
                }, e.prototype._getContextFont = function () {
                    return c.Text.prototype._getContextFont.call(this)
                }, e.prototype._getTextSize = function (t) {
                    var e = this.dummyCanvas.getContext("2d");
                    e.save(), e.font = this._getContextFont();
                    var i = e.measureText(t);
                    return e.restore(), {width: i.width, height: parseInt(this.attrs.fontSize, 10)}
                }, e.prototype._setTextData = function () {
                    var t = this, e = this._getTextSize(this.attrs.text), i = this.letterSpacing(), r = this.align(),
                        n = this.kerningFunc();
                    this.textWidth = e.width, this.textHeight = e.height;
                    var o = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
                    this.glyphInfo = [];
                    for (var a = 0, s = 0; s < t.dataArray.length; s++) t.dataArray[s].pathLength > 0 && (a += t.dataArray[s].pathLength);
                    var c = 0;
                    "center" === r && (c = Math.max(0, a / 2 - o / 2)), "right" === r && (c = Math.max(0, a - o));
                    for (var l, u, d, p = this.text().split(""), f = this.text().split(" ").length - 1, g = -1, y = 0, v = function () {
                        y = 0;
                        for (var e = t.dataArray, i = g + 1; i < e.length; i++) {
                            if (e[i].pathLength > 0) return g = i, e[i];
                            "M" === e[i].command && (l = {x: e[i].points[0], y: e[i].points[1]})
                        }
                        return {}
                    }, _ = function (e) {
                        var n = t._getTextSize(e).width + i;
                        " " === e && "justify" === r && (n += (a - o) / f);
                        var s = 0, c = 0;
                        for (u = void 0; Math.abs(n - s) / n > .01 && c < 25;) {
                            c++;
                            for (var p = s; void 0 === d;) (d = v()) && p + d.pathLength < n && (p += d.pathLength, d = void 0);
                            if (d === {} || void 0 === l) return;
                            var g = !1;
                            switch (d.command) {
                                case"L":
                                    h.Path.getLineLength(l.x, l.y, d.points[0], d.points[1]) > n ? u = h.Path.getPointOnLine(n, l.x, l.y, d.points[0], d.points[1], l.x, l.y) : d = void 0;
                                    break;
                                case"A":
                                    var _ = d.points[4], m = d.points[5], b = d.points[4] + m;
                                    0 === y ? y = _ + 1e-8 : n > s ? y += Math.PI / 180 * m / Math.abs(m) : y -= Math.PI / 360 * m / Math.abs(m), (m < 0 && y < b || m >= 0 && y > b) && (y = b, g = !0), u = h.Path.getPointOnEllipticalArc(d.points[0], d.points[1], d.points[2], d.points[3], y, d.points[6]);
                                    break;
                                case"C":
                                    0 === y ? y = n > d.pathLength ? 1e-8 : n / d.pathLength : n > s ? y += (n - s) / d.pathLength : y -= (s - n) / d.pathLength, y > 1 && (y = 1, g = !0), u = h.Path.getPointOnCubicBezier(y, d.start.x, d.start.y, d.points[0], d.points[1], d.points[2], d.points[3], d.points[4], d.points[5]);
                                    break;
                                case"Q":
                                    0 === y ? y = n / d.pathLength : n > s ? y += (n - s) / d.pathLength : y -= (s - n) / d.pathLength, y > 1 && (y = 1, g = !0), u = h.Path.getPointOnQuadraticBezier(y, d.start.x, d.start.y, d.points[0], d.points[1], d.points[2], d.points[3])
                            }
                            void 0 !== u && (s = h.Path.getLineLength(l.x, l.y, u.x, u.y)), g && (g = !1, d = void 0)
                        }
                    }, m = c / (t._getTextSize("C").width + i) - 1, b = 0; b < m && (_("C"), void 0 !== l && void 0 !== u); b++) l = u;
                    for (var x = 0; x < p.length && (_(p[x]), void 0 !== l && void 0 !== u); x++) {
                        var S = h.Path.getLineLength(l.x, l.y, u.x, u.y), w = 0;
                        if (n) try {
                            w = n(p[x - 1], p[x]) * this.fontSize()
                        } catch (t) {
                            w = 0
                        }
                        l.x += w, u.x += w, this.textWidth += w;
                        var C = h.Path.getPointOnLine(w + S / 2, l.x, l.y, u.x, u.y),
                            P = Math.atan2(u.y - l.y, u.x - l.x);
                        this.glyphInfo.push({
                            transposeX: C.x,
                            transposeY: C.y,
                            text: p[x],
                            rotation: P,
                            p0: l,
                            p1: u
                        }), l = u
                    }
                }, e.prototype.getSelfRect = function () {
                    if (!this.glyphInfo.length) return {x: 0, y: 0, width: 0, height: 0};
                    var t = [];
                    this.glyphInfo.forEach((function (e) {
                        t.push(e.p0.x), t.push(e.p0.y), t.push(e.p1.x), t.push(e.p1.y)
                    }));
                    for (var e, i, r = t[0] || 0, n = t[0] || 0, o = t[1] || 0, a = t[1] || 0, s = 0; s < t.length / 2; s++) e = t[2 * s], i = t[2 * s + 1], r = Math.min(r, e), n = Math.max(n, e), o = Math.min(o, i), a = Math.max(a, i);
                    var h = this.fontSize();
                    return {x: r - h / 2, y: o - h / 2, width: n - r + h, height: a - o + h}
                }, e
            }(s.Shape);
            e.TextPath = g, g.prototype._fillFunc = p, g.prototype._strokeFunc = f, g.prototype._fillFuncHit = p, g.prototype._strokeFuncHit = f, g.prototype.className = "TextPath", g.prototype._attrsAffectingSize = ["text", "fontSize", "data"], u._registerNode(g), a.Factory.addGetterSetter(g, "data"), a.Factory.addGetterSetter(g, "fontFamily", "Arial"), a.Factory.addGetterSetter(g, "fontSize", 12, l.getNumberValidator()), a.Factory.addGetterSetter(g, "fontStyle", d), a.Factory.addGetterSetter(g, "align", "left"), a.Factory.addGetterSetter(g, "letterSpacing", 0, l.getNumberValidator()), a.Factory.addGetterSetter(g, "textBaseline", "middle"), a.Factory.addGetterSetter(g, "fontVariant", d), a.Factory.addGetterSetter(g, "text", ""), a.Factory.addGetterSetter(g, "textDecoration", null), a.Factory.addGetterSetter(g, "kerningFunc", null), o.Collection.mapMethods(g)
        }, 2846: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }), o = this && this.__assign || function () {
                return o = Object.assign || function (t) {
                    for (var e, i = 1, r = arguments.length; i < r; i++) for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }, o.apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {value: !0});
            var a = i(5117), s = i(2315), h = i(4206), c = i(1457), l = i(9890), u = i(583), d = i(2503), p = i(8734),
                f = i(2503), g = "tr-konva",
                y = ["resizeEnabledChange", "rotateAnchorOffsetChange", "rotateEnabledChange", "enabledAnchorsChange", "anchorSizeChange", "borderEnabledChange", "borderStrokeChange", "borderStrokeWidthChange", "borderDashChange", "anchorStrokeChange", "anchorStrokeWidthChange", "anchorFillChange", "anchorCornerRadiusChange", "ignoreStrokeChange"].map((function (t) {
                    return t + "." + g
                })).join(" "), v = "nodesRect",
                _ = ["widthChange", "heightChange", "scaleXChange", "scaleYChange", "skewXChange", "skewYChange", "rotationChange", "offsetXChange", "offsetYChange", "transformsEnabledChange", "strokeWidthChange"].map((function (t) {
                    return t + "." + g
                })).join(" "), m = {
                    "top-left": -45,
                    "top-center": 0,
                    "top-right": 45,
                    "middle-right": -90,
                    "middle-left": 90,
                    "bottom-left": -135,
                    "bottom-center": 180,
                    "bottom-right": 135
                }, b = "ontouchstart" in d.Konva._global,
                x = ["top-left", "top-center", "top-right", "middle-right", "middle-left", "bottom-left", "bottom-center", "bottom-right"];

            function S(t, e, i) {
                var r = i.x + (t.x - i.x) * Math.cos(e) - (t.y - i.y) * Math.sin(e),
                    n = i.y + (t.x - i.x) * Math.sin(e) + (t.y - i.y) * Math.cos(e);
                return o(o({}, t), {rotation: t.rotation + e, x: r, y: n})
            }

            var w = function (t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i._transforming = !1, i._createElements(), i._handleMouseMove = i._handleMouseMove.bind(i), i._handleMouseUp = i._handleMouseUp.bind(i), i.update = i.update.bind(i), i.on(y, i.update), i.getNode() && i.update(), i
                }

                return n(e, t), e.prototype.attachTo = function (t) {
                    return this.setNode(t), this
                }, e.prototype.setNode = function (t) {
                    return a.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([t])
                }, e.prototype.getNode = function () {
                    return this._nodes && this._nodes[0]
                }, e.prototype.setNodes = function (t) {
                    var e = this;
                    return void 0 === t && (t = []), this._nodes && this._nodes.length && this.detach(), this._nodes = t, 1 === t.length ? this.rotation(t[0].rotation()) : this.rotation(0), this._nodes.forEach((function (t) {
                        var i = t._attrsAffectingSize.map((function (t) {
                            return t + "Change." + g
                        })).join(" "), r = function () {
                            e._resetTransformCache(), e._transforming || e.update()
                        };
                        t.on(i, r), t.on(_, r), t.on("_clearTransformCache." + g, r), t.on("xChange." + g + " yChange." + g, r), e._proxyDrag(t)
                    })), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this
                }, e.prototype._proxyDrag = function (t) {
                    var e, i = this;
                    t.on("dragstart." + g, (function () {
                        e = t.getAbsolutePosition()
                    })), t.on("dragmove." + g, (function () {
                        if (e) {
                            var r = t.getAbsolutePosition(), n = r.x - e.x, o = r.y - e.y;
                            i.nodes().forEach((function (e) {
                                if (e !== t && !e.isDragging()) {
                                    var i = e.getAbsolutePosition();
                                    e.setAbsolutePosition({x: i.x + n, y: i.y + o}), e.startDrag()
                                }
                            })), e = null
                        }
                    }))
                }, e.prototype.getNodes = function () {
                    return this._nodes
                }, e.prototype.getActiveAnchor = function () {
                    return this._movingAnchorName
                }, e.prototype.detach = function () {
                    this._nodes && this._nodes.forEach((function (t) {
                        t.off("." + g)
                    })), this._nodes = [], this._resetTransformCache()
                }, e.prototype._resetTransformCache = function () {
                    this._clearCache(v), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform")
                }, e.prototype._getNodeRect = function () {
                    return this._getCache(v, this.__getNodeRect)
                }, e.prototype.__getNodeShape = function (t, e, i) {
                    void 0 === e && (e = this.rotation());
                    var r = t.getClientRect({skipTransform: !0, skipShadow: !0, skipStroke: this.ignoreStroke()}),
                        n = t.getAbsoluteScale(i), o = t.getAbsolutePosition(i), a = r.x * n.x - t.offsetX() * n.x,
                        s = r.y * n.y - t.offsetY() * n.y,
                        h = (d.Konva.getAngle(t.getAbsoluteRotation()) + 2 * Math.PI) % (2 * Math.PI);
                    return S({
                        x: o.x + a * Math.cos(h) + s * Math.sin(-h),
                        y: o.y + s * Math.cos(h) + a * Math.sin(h),
                        width: r.width * n.x,
                        height: r.height * n.y,
                        rotation: h
                    }, -d.Konva.getAngle(e), {x: 0, y: 0})
                }, e.prototype.__getNodeRect = function () {
                    var t = this;
                    if (!this.getNode()) return {x: -1e8, y: -1e8, width: 0, height: 0, rotation: 0};
                    var e = [];
                    this.nodes().map((function (i) {
                        var r = i.getClientRect({skipTransform: !0, skipShadow: !0, skipStroke: t.ignoreStroke()}),
                            n = [{x: r.x, y: r.y}, {x: r.x + r.width, y: r.y}, {
                                x: r.x + r.width,
                                y: r.y + r.height
                            }, {x: r.x, y: r.y + r.height}], o = i.getAbsoluteTransform();
                        n.forEach((function (t) {
                            var i = o.point(t);
                            e.push(i)
                        }))
                    }));
                    var i, r, n, o, s = new a.Transform;
                    s.rotate(-d.Konva.getAngle(this.rotation())), e.forEach((function (t) {
                        var e = s.point(t);
                        void 0 === i && (i = n = e.x, r = o = e.y), i = Math.min(i, e.x), r = Math.min(r, e.y), n = Math.max(n, e.x), o = Math.max(o, e.y)
                    })), s.invert();
                    var h = s.point({x: i, y: r});
                    return {x: h.x, y: h.y, width: n - i, height: o - r, rotation: d.Konva.getAngle(this.rotation())}
                }, e.prototype.getX = function () {
                    return this._getNodeRect().x
                }, e.prototype.getY = function () {
                    return this._getNodeRect().y
                }, e.prototype.getWidth = function () {
                    return this._getNodeRect().width
                }, e.prototype.getHeight = function () {
                    return this._getNodeRect().height
                }, e.prototype._createElements = function () {
                    this._createBack(), x.forEach(function (t) {
                        this._createAnchor(t)
                    }.bind(this)), this._createAnchor("rotater")
                }, e.prototype._createAnchor = function (t) {
                    var e = this, i = new l.Rect({
                        stroke: "rgb(0, 161, 255)",
                        fill: "white",
                        strokeWidth: 1,
                        name: t + " _anchor",
                        dragDistance: 0,
                        draggable: !0,
                        hitStrokeWidth: b ? 10 : "auto"
                    }), r = this;
                    i.on("mousedown touchstart", (function (t) {
                        r._handleMouseDown(t)
                    })), i.on("dragstart", (function (t) {
                        i.stopDrag(), t.cancelBubble = !0
                    })), i.on("dragend", (function (t) {
                        t.cancelBubble = !0
                    })), i.on("mouseenter", (function () {
                        var r = d.Konva.getAngle(e.rotation()), n = function (t, e) {
                            if ("rotater" === t) return "crosshair";
                            e += a.Util._degToRad(m[t] || 0);
                            var i = (a.Util._radToDeg(e) % 360 + 360) % 360;
                            return a.Util._inRange(i, 337.5, 360) || a.Util._inRange(i, 0, 22.5) ? "ns-resize" : a.Util._inRange(i, 22.5, 67.5) ? "nesw-resize" : a.Util._inRange(i, 67.5, 112.5) ? "ew-resize" : a.Util._inRange(i, 112.5, 157.5) ? "nwse-resize" : a.Util._inRange(i, 157.5, 202.5) ? "ns-resize" : a.Util._inRange(i, 202.5, 247.5) ? "nesw-resize" : a.Util._inRange(i, 247.5, 292.5) ? "ew-resize" : a.Util._inRange(i, 292.5, 337.5) ? "nwse-resize" : (a.Util.error("Transformer has unknown angle for cursor detection: " + i), "pointer")
                        }(t, r);
                        i.getStage().content.style.cursor = n, e._cursorChange = !0
                    })), i.on("mouseout", (function () {
                        i.getStage().content.style.cursor = "", e._cursorChange = !1
                    })), this.add(i)
                }, e.prototype._createBack = function () {
                    var t = this, e = new c.Shape({
                        name: "back", width: 0, height: 0, draggable: !0, sceneFunc: function (t) {
                            var e = this.getParent(), i = e.padding();
                            t.beginPath(), t.rect(-i, -i, this.width() + 2 * i, this.height() + 2 * i), t.moveTo(this.width() / 2, -i), e.rotateEnabled() && t.lineTo(this.width() / 2, -e.rotateAnchorOffset() * a.Util._sign(this.height()) - i), t.fillStrokeShape(this)
                        }, hitFunc: function (e, i) {
                            if (t.shouldOverdrawWholeArea()) {
                                var r = t.padding();
                                e.beginPath(), e.rect(-r, -r, i.width() + 2 * r, i.height() + 2 * r), e.fillStrokeShape(i)
                            }
                        }
                    });
                    this.add(e), this._proxyDrag(e)
                }, e.prototype._handleMouseDown = function (t) {
                    this._movingAnchorName = t.target.name().split(" ")[0];
                    var e = this._getNodeRect(), i = e.width, r = e.height,
                        n = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
                    this.sin = Math.abs(r / n), this.cos = Math.abs(i / n), window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0), this._transforming = !0;
                    var o = t.target.getAbsolutePosition(), a = t.target.getStage().getPointerPosition();
                    this._anchorDragOffset = {x: a.x - o.x, y: a.y - o.y}, this._fire("transformstart", {
                        evt: t,
                        target: this.getNode()
                    }), this.getNode()._fire("transformstart", {evt: t, target: this.getNode()})
                }, e.prototype._handleMouseMove = function (t) {
                    var e, i, r, n = this.findOne("." + this._movingAnchorName), o = n.getStage();
                    o.setPointersPositions(t);
                    var a = o.getPointerPosition(),
                        s = {x: a.x - this._anchorDragOffset.x, y: a.y - this._anchorDragOffset.y},
                        h = n.getAbsolutePosition();
                    n.setAbsolutePosition(s);
                    var c = n.getAbsolutePosition();
                    if (h.x !== c.x || h.y !== c.y) if ("rotater" !== this._movingAnchorName) {
                        var l = this.keepRatio() || t.shiftKey, u = this.centeredScaling() || t.altKey;
                        if ("top-left" === this._movingAnchorName) {
                            if (l) {
                                var p = u ? {
                                    x: this.width() / 2,
                                    y: this.height() / 2
                                } : {x: this.findOne(".bottom-right").x(), y: this.findOne(".bottom-right").y()};
                                r = Math.sqrt(Math.pow(p.x - n.x(), 2) + Math.pow(p.y - n.y(), 2));
                                var f = this.findOne(".top-left").x() > p.x ? -1 : 1,
                                    g = this.findOne(".top-left").y() > p.y ? -1 : 1;
                                e = r * this.cos * f, i = r * this.sin * g, this.findOne(".top-left").x(p.x - e), this.findOne(".top-left").y(p.y - i)
                            }
                        } else if ("top-center" === this._movingAnchorName) this.findOne(".top-left").y(n.y()); else if ("top-right" === this._movingAnchorName) {
                            l && (p = u ? {
                                x: this.width() / 2,
                                y: this.height() / 2
                            } : {
                                x: this.findOne(".bottom-left").x(),
                                y: this.findOne(".bottom-left").y()
                            }, r = Math.sqrt(Math.pow(n.x() - p.x, 2) + Math.pow(p.y - n.y(), 2)), f = this.findOne(".top-right").x() < p.x ? -1 : 1, g = this.findOne(".top-right").y() > p.y ? -1 : 1, e = r * this.cos * f, i = r * this.sin * g, this.findOne(".top-right").x(p.x + e), this.findOne(".top-right").y(p.y - i));
                            var y = n.position();
                            this.findOne(".top-left").y(y.y), this.findOne(".bottom-right").x(y.x)
                        } else "middle-left" === this._movingAnchorName ? this.findOne(".top-left").x(n.x()) : "middle-right" === this._movingAnchorName ? this.findOne(".bottom-right").x(n.x()) : "bottom-left" === this._movingAnchorName ? (l && (p = u ? {
                            x: this.width() / 2,
                            y: this.height() / 2
                        } : {
                            x: this.findOne(".top-right").x(),
                            y: this.findOne(".top-right").y()
                        }, r = Math.sqrt(Math.pow(p.x - n.x(), 2) + Math.pow(n.y() - p.y, 2)), f = p.x < n.x() ? -1 : 1, g = n.y() < p.y ? -1 : 1, e = r * this.cos * f, i = r * this.sin * g, n.x(p.x - e), n.y(p.y + i)), y = n.position(), this.findOne(".top-left").x(y.x), this.findOne(".bottom-right").y(y.y)) : "bottom-center" === this._movingAnchorName ? this.findOne(".bottom-right").y(n.y()) : "bottom-right" === this._movingAnchorName ? l && (p = u ? {
                            x: this.width() / 2,
                            y: this.height() / 2
                        } : {
                            x: this.findOne(".top-left").x(),
                            y: this.findOne(".top-left").y()
                        }, r = Math.sqrt(Math.pow(n.x() - p.x, 2) + Math.pow(n.y() - p.y, 2)), f = this.findOne(".bottom-right").x() < p.x ? -1 : 1, g = this.findOne(".bottom-right").y() < p.y ? -1 : 1, e = r * this.cos * f, i = r * this.sin * g, this.findOne(".bottom-right").x(p.x + e), this.findOne(".bottom-right").y(p.y + i)) : console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
                        if (u = this.centeredScaling() || t.altKey) {
                            var v = this.findOne(".top-left"), _ = this.findOne(".bottom-right"), m = v.x(), b = v.y(),
                                x = this.getWidth() - _.x(), w = this.getHeight() - _.y();
                            _.move({x: -m, y: -b}), v.move({x, y: w})
                        }
                        var C = this.findOne(".top-left").getAbsolutePosition();
                        e = C.x, i = C.y;
                        var P = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(),
                            A = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
                        this._fitNodesInto({
                            x: e,
                            y: i,
                            width: P,
                            height: A,
                            rotation: d.Konva.getAngle(this.rotation())
                        }, t)
                    } else {
                        var T = this._getNodeRect();
                        e = n.x() - T.width / 2, i = -n.y() + T.height / 2;
                        var k = Math.atan2(-i, e) + Math.PI / 2;
                        T.height < 0 && (k -= Math.PI);
                        var M = d.Konva.getAngle(this.rotation()) + k,
                            F = d.Konva.getAngle(this.rotationSnapTolerance()), O = function (t, e, i) {
                                for (var r = e, n = 0; n < t.length; n++) {
                                    var o = d.Konva.getAngle(t[n]), a = Math.abs(o - e) % (2 * Math.PI);
                                    Math.min(a, 2 * Math.PI - a) < i && (r = o)
                                }
                                return r
                            }(this.rotationSnaps(), M, F), D = function (t, e) {
                                var i = function (t) {
                                    return {
                                        x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
                                        y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
                                    }
                                }(t);
                                return S(t, e, i)
                            }(T, O - T.rotation);
                        this._fitNodesInto(D, t)
                    }
                }, e.prototype._handleMouseUp = function (t) {
                    this._removeEvents(t)
                }, e.prototype.getAbsoluteTransform = function () {
                    return this.getTransform()
                }, e.prototype._removeEvents = function (t) {
                    if (this._transforming) {
                        this._transforming = !1, window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0);
                        var e = this.getNode();
                        this._fire("transformend", {evt: t, target: e}), e && e.fire("transformend", {
                            evt: t,
                            target: e
                        }), this._movingAnchorName = null
                    }
                }, e.prototype._fitNodesInto = function (t, e) {
                    var i = this, r = this._getNodeRect();
                    if (a.Util._inRange(t.width, 2 * -this.padding() - 1, 1)) this.update(); else if (a.Util._inRange(t.height, 2 * -this.padding() - 1, 1)) this.update(); else {
                        var n = new a.Transform;
                        if (n.rotate(d.Konva.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
                            var o = n.point({x: 2 * -this.padding(), y: 0});
                            t.x += o.x, t.y += o.y, t.width += 2 * this.padding(), this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= o.x, this._anchorDragOffset.y -= o.y
                        } else this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0 && (o = n.point({
                            x: 2 * this.padding(),
                            y: 0
                        }), this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= o.x, this._anchorDragOffset.y -= o.y, t.width += 2 * this.padding());
                        if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0 ? (o = n.point({
                            x: 0,
                            y: 2 * -this.padding()
                        }), t.x += o.x, t.y += o.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= o.x, this._anchorDragOffset.y -= o.y, t.height += 2 * this.padding()) : this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0 && (o = n.point({
                            x: 0,
                            y: 2 * this.padding()
                        }), this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= o.x, this._anchorDragOffset.y -= o.y, t.height += 2 * this.padding()), this.boundBoxFunc()) {
                            var s = this.boundBoxFunc()(r, t);
                            s ? t = s : a.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!")
                        }
                        var h = 1e7, c = new a.Transform;
                        c.translate(r.x, r.y), c.rotate(r.rotation), c.scale(r.width / h, r.height / h);
                        var l = new a.Transform;
                        l.translate(t.x, t.y), l.rotate(t.rotation), l.scale(t.width / h, t.height / h);
                        var u = l.multiply(c.invert());
                        this._nodes.forEach((function (t) {
                            var r = t.getParent().getAbsoluteTransform(), n = t.getTransform().copy();
                            n.translate(t.offsetX(), t.offsetY());
                            var o = new a.Transform;
                            o.multiply(r.copy().invert()).multiply(u).multiply(r).multiply(n);
                            var s = o.decompose();
                            t._batchTransformChanges((function () {
                                t.setAttrs(s)
                            })), i._fire("transform", {evt: e, target: t}), t._fire("transform", {evt: e, target: t})
                        })), this.rotation(a.Util._getRotation(t.rotation)), this._resetTransformCache(), this.update(), this.getLayer().batchDraw()
                    }
                }, e.prototype.forceUpdate = function () {
                    this._resetTransformCache(), this.update()
                }, e.prototype._batchChangeChild = function (t, e) {
                    var i = this.findOne(t);
                    i._batchTransformChanges((function () {
                        i.setAttrs(e)
                    }))
                }, e.prototype.update = function () {
                    var t = this, e = this._getNodeRect();
                    this.rotation(a.Util._getRotation(e.rotation));
                    var i = e.width, r = e.height, n = this.enabledAnchors(), o = this.resizeEnabled(),
                        s = this.padding(), h = this.anchorSize();
                    this.find("._anchor").each((function (e) {
                        e._batchTransformChanges((function () {
                            e.setAttrs({
                                width: h,
                                height: h,
                                offsetX: h / 2,
                                offsetY: h / 2,
                                stroke: t.anchorStroke(),
                                strokeWidth: t.anchorStrokeWidth(),
                                fill: t.anchorFill(),
                                cornerRadius: t.anchorCornerRadius()
                            })
                        }))
                    })), this._batchChangeChild(".top-left", {
                        x: 0,
                        y: 0,
                        offsetX: h / 2 + s,
                        offsetY: h / 2 + s,
                        visible: o && n.indexOf("top-left") >= 0
                    }), this._batchChangeChild(".top-center", {
                        x: i / 2,
                        y: 0,
                        offsetY: h / 2 + s,
                        visible: o && n.indexOf("top-center") >= 0
                    }), this._batchChangeChild(".top-right", {
                        x: i,
                        y: 0,
                        offsetX: h / 2 - s,
                        offsetY: h / 2 + s,
                        visible: o && n.indexOf("top-right") >= 0
                    }), this._batchChangeChild(".middle-left", {
                        x: 0,
                        y: r / 2,
                        offsetX: h / 2 + s,
                        visible: o && n.indexOf("middle-left") >= 0
                    }), this._batchChangeChild(".middle-right", {
                        x: i,
                        y: r / 2,
                        offsetX: h / 2 - s,
                        visible: o && n.indexOf("middle-right") >= 0
                    }), this._batchChangeChild(".bottom-left", {
                        x: 0,
                        y: r,
                        offsetX: h / 2 + s,
                        offsetY: h / 2 - s,
                        visible: o && n.indexOf("bottom-left") >= 0
                    }), this._batchChangeChild(".bottom-center", {
                        x: i / 2,
                        y: r,
                        offsetY: h / 2 - s,
                        visible: o && n.indexOf("bottom-center") >= 0
                    }), this._batchChangeChild(".bottom-right", {
                        x: i,
                        y: r,
                        offsetX: h / 2 - s,
                        offsetY: h / 2 - s,
                        visible: o && n.indexOf("bottom-right") >= 0
                    }), this._batchChangeChild(".rotater", {
                        x: i / 2,
                        y: -this.rotateAnchorOffset() * a.Util._sign(r) - s,
                        visible: this.rotateEnabled()
                    }), this._batchChangeChild(".back", {
                        width: i,
                        height: r,
                        visible: this.borderEnabled(),
                        stroke: this.borderStroke(),
                        strokeWidth: this.borderStrokeWidth(),
                        dash: this.borderDash(),
                        x: 0,
                        y: 0
                    })
                }, e.prototype.isTransforming = function () {
                    return this._transforming
                }, e.prototype.stopTransform = function () {
                    if (this._transforming) {
                        this._removeEvents();
                        var t = this.findOne("." + this._movingAnchorName);
                        t && t.stopDrag()
                    }
                }, e.prototype.destroy = function () {
                    return this.getStage() && this._cursorChange && (this.getStage().content.style.cursor = ""), u.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this
                }, e.prototype.toObject = function () {
                    return h.Node.prototype.toObject.call(this)
                }, e
            }(u.Group);
            e.Transformer = w, w.prototype.className = "Transformer", f._registerNode(w), s.Factory.addGetterSetter(w, "enabledAnchors", x, (function (t) {
                return t instanceof Array || a.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach((function (t) {
                    -1 === x.indexOf(t) && a.Util.warn("Unknown anchor name: " + t + ". Available names are: " + x.join(", "))
                })), t || []
            })), s.Factory.addGetterSetter(w, "resizeEnabled", !0), s.Factory.addGetterSetter(w, "anchorSize", 10, p.getNumberValidator()), s.Factory.addGetterSetter(w, "rotateEnabled", !0), s.Factory.addGetterSetter(w, "rotationSnaps", []), s.Factory.addGetterSetter(w, "rotateAnchorOffset", 50, p.getNumberValidator()), s.Factory.addGetterSetter(w, "rotationSnapTolerance", 5, p.getNumberValidator()), s.Factory.addGetterSetter(w, "borderEnabled", !0), s.Factory.addGetterSetter(w, "anchorStroke", "rgb(0, 161, 255)"), s.Factory.addGetterSetter(w, "anchorStrokeWidth", 1, p.getNumberValidator()), s.Factory.addGetterSetter(w, "anchorFill", "white"), s.Factory.addGetterSetter(w, "anchorCornerRadius", 0, p.getNumberValidator()), s.Factory.addGetterSetter(w, "borderStroke", "rgb(0, 161, 255)"), s.Factory.addGetterSetter(w, "borderStrokeWidth", 1, p.getNumberValidator()), s.Factory.addGetterSetter(w, "borderDash"), s.Factory.addGetterSetter(w, "keepRatio", !0), s.Factory.addGetterSetter(w, "centeredScaling", !1), s.Factory.addGetterSetter(w, "ignoreStroke", !1), s.Factory.addGetterSetter(w, "padding", 0, p.getNumberValidator()), s.Factory.addGetterSetter(w, "node"), s.Factory.addGetterSetter(w, "nodes"), s.Factory.addGetterSetter(w, "boundBoxFunc"), s.Factory.addGetterSetter(w, "shouldOverdrawWholeArea", !1), s.Factory.backCompat(w, {
                lineEnabled: "borderEnabled",
                rotateHandlerOffset: "rotateAnchorOffset",
                enabledHandlers: "enabledAnchors"
            }), a.Collection.mapMethods(w)
        }, 6041: function (t, e, i) {
            "use strict";
            var r, n = this && this.__extends || (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                }, r(t, e)
            }, function (t, e) {
                function i() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {value: !0});
            var o = i(5117), a = i(2315), s = i(1457), h = i(2503), c = i(8734), l = i(2503), u = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return n(e, t), e.prototype._sceneFunc = function (t) {
                    t.beginPath(), t.arc(0, 0, this.radius(), 0, h.Konva.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this)
                }, e.prototype.getWidth = function () {
                    return 2 * this.radius()
                }, e.prototype.getHeight = function () {
                    return 2 * this.radius()
                }, e.prototype.setWidth = function (t) {
                    this.radius(t / 2)
                }, e.prototype.setHeight = function (t) {
                    this.radius(t / 2)
                }, e
            }(s.Shape);
            e.Wedge = u, u.prototype.className = "Wedge", u.prototype._centroid = !0, u.prototype._attrsAffectingSize = ["radius"], l._registerNode(u), a.Factory.addGetterSetter(u, "radius", 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "angle", 0, c.getNumberValidator()), a.Factory.addGetterSetter(u, "clockwise", !1), a.Factory.backCompat(u, {
                angleDeg: "angle",
                getAngleDeg: "getAngle",
                setAngleDeg: "setAngle"
            }), o.Collection.mapMethods(u)
        }, 9982: (t, e, i) => {
            const r = i(4787), n = i(5254), {vector: o} = i(3865);

            class a {
                constructor(t, e) {
                    this.x = t, this.y = e
                }

                equal(t) {
                    return this.isAt(t.x, t.y)
                }

                isAt(t, e) {
                    return n.equal(this.x, this.y, t, e)
                }

                translated(t, e) {
                    return this.copy().translate(t, e)
                }

                translate(t, e) {
                    return this.x += t, this.y += e, this
                }

                closeTo(t, e) {
                    return r(this.x, t.x - e, t.x + e) && r(this.y, t.y - e, t.y + e)
                }

                copy() {
                    return new a(this.x, this.y)
                }

                diff(t) {
                    return n.diff(this.x, this.y, t.x, t.y)
                }

                asPair() {
                    return [this.x, this.y]
                }

                asVector() {
                    return o(this.x, this.y)
                }

                export() {
                    return this.asVector()
                }

                static atRandom(t, e) {
                    return new a(Math.random() * t, Math.random() * e)
                }

                static import(t) {
                    return s(t.x, t.y)
                }
            }

            function s(t, e) {
                return new a(t, e)
            }

            t.exports = {anchor: s, Anchor: a}
        }, 4748: t => {
            t.exports = {
                Vertical: {atVector: t => t.y, atDimension: t => t.height},
                Horizontal: {atVector: t => t.x, atDimension: t => t.width}
            }
        }, 4787: t => {
            t.exports = function (t, e, i) {
                return e <= t && t <= i
            }
        }, 7969: (t, e, i) => {
            const r = i(5254), n = (i(8878), i(7067)), o = i(2906), {twoAndTwo: a} = i(8237), s = i(1737),
                h = i(8395), {vector: c, ...l} = i(3865), u = i(3212), d = i(9452), {
                    PuzzleValidator: p,
                    PieceValidator: f
                } = i(5961), {Horizontal: g, Vertical: y} = i(4748),
                v = i(4634), {diameter: _} = i(3861), {itself: m} = i(2058), {Classic: b} = i(4554);
            t.exports = class {
                constructor(t, {
                    width: e,
                    height: i,
                    pieceSize: r = 50,
                    proximity: n = 10,
                    borderFill: o = 0,
                    strokeWidth: a = 3,
                    strokeColor: s = "black",
                    lineSoftness: c = 0,
                    preventOffstageDrag: u = !1,
                    image: d = null,
                    fixed: p = !1,
                    painter: f = null,
                    puzzleDiameter: g = null,
                    maxPiecesCount: y = null,
                    outline: v = null
                }) {
                    this.width = e, this.height = i, this.pieceSize = _(r), this.borderFill = l.cast(o), this.imageMetadata = h.asImageMetadata(d), this.strokeWidth = a, this.strokeColor = s, this.lineSoftness = c, this.preventOffstageDrag = u, this.proximity = n, this.fixed = p, this._painter = f || new window.headbreaker.painters.Konva, this._initialize(), this._painter.initialize(this, t), this._maxPiecesCount = l.cast(y), this._puzzleDiameter = l.cast(g), this._imageAdjuster = m, this._outline = v || b
                }

                _initialize() {
                    this._puzzle = null, this.figures = {}, this.templates = {}, this._figurePadding = null, this._drawn = !1
                }

                sketchPiece({structure: t, size: e = null, metadata: i}) {
                    d.initialize(i, l.zero()), this.renderPiece(this._newPiece(t, e, i))
                }

                renderPiece(t) {
                    const e = {label: null, group: null, shape: null};
                    this.figures[t.metadata.id] = e, this._painter.sketch(this, t, e, this._outline);
                    const i = t.metadata.label;
                    i && i.text && (i.fontSize = i.fontSize || .55 * t.diameter.y, i.y = i.y || (t.diameter.y - i.fontSize) / 2, this._painter.label(this, t, e)), this._bindGroupToPiece(e.group, t), this._bindPieceToGroup(t, e.group)
                }

                renderPieces(t) {
                    t.forEach((t => {
                        this._annotatePiecePosition(t), this.renderPiece(t)
                    }))
                }

                renderPuzzle(t) {
                    this.pieceSize = t.pieceSize, this.proximity = 2 * t.proximity, this._puzzle = t, this.renderPieces(t.pieces)
                }

                autogenerate({
                                 horizontalPiecesCount: t = 5,
                                 verticalPiecesCount: e = 5,
                                 insertsGenerator: i = a,
                                 metadata: r = []
                             } = {}) {
                    const n = new o;
                    n.withDimensions(t, e), n.withInsertsGenerator(i), n.withMetadata(r), this.autogenerateWithManufacturer(n)
                }

                autogenerateWithManufacturer(t) {
                    t.withStructure(this.settings), this._puzzle = t.build(), this._maxPiecesCount = c(t.width, t.height), this.renderPieces(this.puzzle.pieces)
                }

                defineTemplate(t, e) {
                    this.templates[t] = e
                }

                sketchPieceUsingTemplate(t, e) {
                    const i = this.templates[e];
                    if (!i) throw new Error(`Unknown template ${t}`);
                    const r = u.copy(i.metadata);
                    r.id = t, this.sketchPiece({structure: i.structure, metadata: r})
                }

                shuffle(t = 1) {
                    const e = this.pieceRadius;
                    this.puzzle.shuffle(t * (this.width - e.x), t * (this.height - e.y)), this.puzzle.translate(e.x, e.y), this.autoconnected = !0
                }

                shuffleColumns(t = 1) {
                    this.shuffleWith(t, v.columns)
                }

                shuffleGrid(t = 1) {
                    this.shuffleWith(t, v.grid)
                }

                shuffleLine(t = 1) {
                    this.shuffleWith(t, v.line)
                }

                shuffleWith(t, e) {
                    this.solve(), this.puzzle.shuffleWith(v.padder(3 * this.proximity, this.maxPiecesCount.x, this.maxPiecesCount.y)), this.puzzle.shuffleWith(e), this.puzzle.shuffleWith(v.noise(l.cast(this.proximity * t / 2))), this.autoconnected = !0
                }

                solve() {
                    this.puzzle.pieces.forEach((t => {
                        const {x: e, y: i} = t.metadata.targetPosition;
                        t.relocateTo(e, i)
                    })), this.autoconnect()
                }

                autoconnect() {
                    this.puzzle.autoconnect(), this.autoconnected = !0
                }

                registerKeyboardGestures(t = {
                    16: t => t.forceConnectionWhileDragging(),
                    17: t => t.forceDisconnectionWhileDragging()
                }) {
                    this._painter.registerKeyboardGestures(this, t)
                }

                draw() {
                    if (this._drawn) throw new Error("This canvas has already been drawn. Call redraw instead");
                    this.autoconnected || this.autoconnect(), this.puzzle.updateValidity(), this.autoconnected = !1, this.redraw(), this._drawn = !0
                }

                redraw() {
                    this._painter.draw(this)
                }

                refill() {
                    this.puzzle.pieces.forEach((t => {
                        this._painter.fill(this, t, this.getFigure(t))
                    }))
                }

                clear() {
                    this._initialize(), this._painter.reinitialize(this)
                }

                attachConnectionRequirement(t) {
                    this.puzzle.attachConnectionRequirement(t)
                }

                clearConnectionRequirements() {
                    this.puzzle.clearConnectionRequirements()
                }

                attachValidator(t) {
                    this.puzzle.attachValidator(t)
                }

                attachSolvedValidator() {
                    this.puzzle.attachValidator(new p(d.solved))
                }

                attachRelativePositionValidator() {
                    this.puzzle.attachValidator(new p(d.relativePosition))
                }

                attachRelativeRefsValidator(t) {
                    this.puzzle.attachValidator(new p(p.relativeRefs(t)))
                }

                attachAbsolutePositionValidator() {
                    this.puzzle.attachValidator(new f(d.absolutePosition))
                }

                onConnect(t) {
                    this.puzzle.onConnect(((e, i) => {
                        t(e, this.getFigure(e), i, this.getFigure(i))
                    }))
                }

                onDisconnect(t) {
                    this.puzzle.onDisconnect(((e, i) => {
                        t(e, this.getFigure(e), i, this.getFigure(i))
                    }))
                }

                onTranslate(t) {
                    this.puzzle.onTranslate(((e, i, r) => {
                        t(e, this.getFigure(e), i, r)
                    }))
                }

                reframeWithinDimensions() {
                    if (!this.fixed) throw new Error("Only fixed canvas can be reframed");
                    this.puzzle.reframe(this.figurePadding, l.minus(c(this.width, this.height), this.figurePadding))
                }

                onValid(t) {
                    this.puzzle.onValid(t)
                }

                get valid() {
                    return this.puzzle.valid
                }

                getFigure(t) {
                    return this.getFigureById(t.metadata.id)
                }

                getFigureById(t) {
                    return this.figures[t]
                }

                resize(t, e) {
                    this.width = t, this.height = e, this._painter.resize(this, t, e)
                }

                scale(t) {
                    this._painter.scale(this, l.cast(t))
                }

                _annotatePiecePosition(t) {
                    const e = t.centralAnchor.asVector();
                    d.initialize(t.metadata, e, l.copy(e))
                }

                _bindGroupToPiece(t, e) {
                    e.onTranslate(((i, r) => {
                        this._painter.physicalTranslate(this, t, e), this._painter.logicalTranslate(this, e, t)
                    }))
                }

                _bindPieceToGroup(t, e) {
                    this._painter.onDrag(this, t, e, ((i, n) => {
                        r.isNull(i, n) || (t.drag(i, n, !0), this._painter.logicalTranslate(this, t, e), this.redraw())
                    })), this._painter.onDragEnd(this, t, e, (() => {
                        t.drop(), this.puzzle.validate(), this.redraw()
                    }))
                }

                _baseImageMetadataFor(t) {
                    if (this.imageMetadata) {
                        const e = t.metadata.scale || this.imageMetadata.scale || 1,
                            i = l.plus(t.metadata.targetPosition || l.zero(), this.imageMetadata.offset || l.zero());
                        return {content: this.imageMetadata.content, offset: i, scale: e}
                    }
                    return h.asImageMetadata(t.metadata.image)
                }

                imageMetadataFor(t) {
                    return this._imageAdjuster(this._baseImageMetadataFor(t))
                }

                adjustImagesToPuzzle(t) {
                    this._imageAdjuster = e => {
                        const i = t.atVector(this.puzzleDiameter) / t.atDimension(e.content),
                            r = l.plus(e.offset, l.minus(this.borderFill, this.pieceDiameter));
                        return {content: e.content, scale: i, offset: r}
                    }
                }

                adjustImagesToPuzzleWidth() {
                    this.adjustImagesToPuzzle(g)
                }

                adjustImagesToPuzzleHeight() {
                    this.adjustImagesToPuzzle(y)
                }

                adjustImagesToPiece(t) {
                    this._imageAdjuster = e => {
                        const i = t.atVector(this.pieceDiameter) / t.atDimension(e.content),
                            r = l.plus(e.offset, this.borderFill);
                        return {content: e.content, scale: i, offset: r}
                    }
                }

                adjustImagesToPieceWidth() {
                    this.adjustImagesToPiece(g)
                }

                adjustImagesToPieceHeight() {
                    this.adjustImagesToPiece(y)
                }

                _initializeEmptyPuzzle() {
                    this._puzzle = new n(this.settings)
                }

                _newPiece(t, e, i) {
                    return this.puzzle.newPiece(s.asStructure(t), {
                        centralAnchor: c(i.currentPosition.x, i.currentPosition.y),
                        metadata: i,
                        size: e
                    })
                }

                get puzzleDiameter() {
                    return this._puzzleDiameter || this.estimatedPuzzleDiameter
                }

                get estimatedPuzzleDiameter() {
                    return l.plus(l.multiply(this.pieceDiameter, this.maxPiecesCount), 2 * this.strokeWidth)
                }

                get maxPiecesCount() {
                    if (!this._maxPiecesCount) throw new Error("max pieces count was not specified");
                    return this._maxPiecesCount
                }

                get pieceRadius() {
                    return this.pieceSize.radius
                }

                get pieceDiameter() {
                    return this.pieceSize.diameter
                }

                get figurePadding() {
                    return this._figurePadding || (this._figurePadding = l.plus(this.strokeWidth, this.borderFill)), this._figurePadding
                }

                get figuresCount() {
                    return Object.values(this.figures).length
                }

                get puzzle() {
                    return this._puzzle || this._initializeEmptyPuzzle(), this._puzzle
                }

                get settings() {
                    return {pieceRadius: this.pieceRadius, proximity: this.proximity}
                }
            }
        }, 1521: (t, e, i) => {
            const {pivot: r} = i(2058);

            function n(t, e) {
                return !0
            }

            class o {
                constructor(t, e, i) {
                    this.axis = t, this.forward = e, this.backward = i, this.forwardAnchor = `${e}Anchor`, this.backwardAnchor = `${i}Anchor`, this.forwardConnection = `${e}Connection`, this.backwardConnection = `${i}Connection`, this.requirement = n
                }

                attract(t, e, i = !1) {
                    const [n, o] = r(t, e, i);
                    let a, s;
                    o.centralAnchor[this.axis] > n.centralAnchor[this.axis] ? [a, s] = o[this.backwardAnchor].diff(n[this.forwardAnchor]) : [a, s] = o[this.forwardAnchor].diff(n[this.backwardAnchor]), n.push(a, s)
                }

                openMovement(t, e) {
                    return e > 0 && !t[this.forwardConnection] || e < 0 && !t[this.backwardConnection] || 0 == e
                }

                canConnectWith(t, e, i) {
                    return this.closeTo(t, e, i) && this.match(t, e) && this.requirement(t, e)
                }

                closeTo(t, e, i) {
                    return t[this.forwardAnchor].closeTo(e[this.backwardAnchor], i)
                }

                match(t, e) {
                    return t[this.forward].match(e[this.backward])
                }

                connectWith(t, e, i, r) {
                    if (!this.canConnectWith(t, e, i)) throw new Error(`can not connect ${this.forward}!`);
                    t[this.forwardConnection] !== e && (this.attract(e, t, r), t[this.forwardConnection] = e, e[this.backwardConnection] = t, t.fireConnect(e))
                }

                attachRequirement(t) {
                    this.requirement = t
                }

                static horizontal() {
                    return new o("x", "right", "left")
                }

                static vertical() {
                    return new o("y", "down", "up")
                }
            }

            t.exports = {Connector: o, noConnectionRequirements: n}
        }, 7644: (t, e, i) => {
            i(1521);
            t.exports = {
                TryDisconnection: {dragShouldDisconnect: (t, e, i) => t.horizontalConnector.openMovement(t, e) && t.verticalConnector.openMovement(t, i)},
                ForceDisconnection: {dragShouldDisconnect: (t, e, i) => !0},
                ForceConnection: {dragShouldDisconnect: (t, e, i) => !1}
            }
        }, 555: (t, e, i) => {
            i(7969), i(8878);
            const r = i(3169);
            t.exports = class extends r {
                initialize(t, e) {
                    t.__nullLayer__ = {drawn: !1, figures: 0}
                }

                draw(t) {
                    t.__nullLayer__.drawn = !0
                }

                sketch(t, e, i, r) {
                    t.__nullLayer__.figures++
                }
            }
        }, 8395: (t, e, i) => {
            const {vector: r} = i(3865);
            t.exports = {
                asImageMetadata: function (t) {
                    return t instanceof HTMLImageElement || t instanceof HTMLCanvasElement ? {
                        content: t,
                        offset: r(1, 1),
                        scale: 1
                    } : t
                }
            }
        }, 6010: (t, e, i) => {
            const r = i(5254), {anchor: n, Anchor: o} = i(9982), a = i(7067), s = i(8878), {
                    Tab: h,
                    Slot: c,
                    None: l
                } = i(8590), {NullValidator: u, PieceValidator: d, PuzzleValidator: p} = i(5961), {
                    Horizontal: f,
                    Vertical: g
                } = i(4748), y = i(1737), v = i(4554), _ = i(7969), m = i(2906), {InsertSequence: b, ...x} = i(8237),
                S = i(3212), w = i(9452), {vector: C, ...P} = i(3865), {radius: A, diameter: T} = i(3861), k = i(4634),
                M = i(4554), F = i(7644), O = i(1521);
            t.exports = {
                anchor: n,
                vector: C,
                radius: A,
                diameter: T,
                Anchor: o,
                Puzzle: a,
                Piece: s,
                Canvas: _,
                Manufacturer: m,
                InsertSequence: b,
                PieceValidator: d,
                PuzzleValidator: p,
                NullValidator: u,
                Horizontal: f,
                Vertical: g,
                Tab: h,
                Slot: c,
                None: l,
                Pair: r,
                Metadata: S,
                SpatialMetadata: w,
                Outline: v,
                Structure: y,
                Vector: P,
                Shuffler: k,
                generators: x,
                outline: M,
                dragMode: F,
                connector: O,
                painters: {Dummy: i(555), Konva: i(262)}
            }
        }, 8590: t => {
            const e = {
                isSlot: () => !1,
                isTab: () => !0,
                isNone: () => !1,
                match: t => t.isSlot(),
                toString: () => "Tab",
                complement: () => i,
                serialize: () => "T"
            }, i = {
                isSlot: () => !0,
                isTab: () => !1,
                isNone: () => !1,
                match: t => t.isTab(),
                toString: () => "Slot",
                complement: () => e,
                serialize: () => "S"
            }, r = {
                isSlot: () => !1,
                isTab: () => !1,
                isNone: () => !0,
                match: t => !1,
                toString: () => "None",
                complement: () => r,
                serialize: () => "-"
            };
            t.exports = {None: r, Slot: i, Tab: e}
        }, 262: (t, e, i) => {
            let r;
            try {
                r = i(1001)
            } catch (t) {
                r = {
                    Stage: class {
                        constructor(t) {
                            throw new Error("Konva not loaded")
                        }
                    }
                }
            }
            i(7969), i(4554), i(8878);
            const n = i(5254), {vector: o, ...a} = i(3865), s = i(3169);
            t.exports = class extends s {
                initialize(t, e) {
                    var i = new r.Stage({container: e, width: t.width, height: t.height, draggable: !t.fixed});
                    this._initializeLayer(i, t)
                }

                _initializeLayer(t, e) {
                    var i = new r.Layer;
                    t.add(i), e.__konvaLayer__ = i
                }

                draw(t) {
                    t.__konvaLayer__.draw()
                }

                reinitialize(t) {
                    const e = t.__konvaLayer__, i = e.getStage();
                    e.destroy(), this._initializeLayer(i, t)
                }

                resize(t, e, i) {
                    const r = t.__konvaLayer__.getStage();
                    r.width(e), r.height(i)
                }

                scale(t, e) {
                    t.__konvaLayer__.getStage().scale(e)
                }

                sketch(t, e, i, n) {
                    i.group = new r.Group({
                        x: e.metadata.currentPosition.x,
                        y: e.metadata.currentPosition.y,
                        draggable: !e.metadata.fixed,
                        dragBoundFunc: t.preventOffstageDrag ? i => {
                            const r = a.minus(o(t.width, t.height), e.size.radius);
                            return a.max(a.min(i, r), e.size.radius)
                        } : null
                    }), i.shape = new r.Line({
                        points: n.draw(e, e.diameter, t.borderFill),
                        bezier: n.isBezier(),
                        tension: n.isBezier() ? null : t.lineSoftness,
                        stroke: e.metadata.strokeColor || t.strokeColor,
                        strokeWidth: t.strokeWidth,
                        closed: !0, ...a.multiply(e.radius, -1)
                    }), this.fill(t, e, i), i.group.add(i.shape), t.__konvaLayer__.add(i.group)
                }

                fill(t, e, i) {
                    const r = t.imageMetadataFor(e);
                    i.shape.fill(r ? null : e.metadata.color || "black"), i.shape.fillPatternImage(r && r.content), i.shape.fillPatternScale(r && {
                        x: r.scale,
                        y: r.scale
                    }), i.shape.fillPatternOffset(r && a.divide(r.offset, r.scale))
                }

                label(t, e, i) {
                    i.label = new r.Text({
                        ...a.minus({
                            x: e.metadata.label.x || i.group.width() / 2,
                            y: e.metadata.label.y || i.group.height() / 2
                        }, e.radius),
                        text: e.metadata.label.text,
                        fontSize: e.metadata.label.fontSize,
                        fontFamily: e.metadata.label.fontFamily || "Sans Serif",
                        fill: e.metadata.label.color || "white"
                    }), i.group.add(i.label)
                }

                physicalTranslate(t, e, i) {
                    e.x(i.centralAnchor.x), e.y(i.centralAnchor.y)
                }

                logicalTranslate(t, e, i) {
                    a.update(e.metadata.currentPosition, i.x(), i.y())
                }

                onDrag(t, e, i, r) {
                    i.on("mouseover", (() => {
                        document.body.style.cursor = "pointer"
                    })), i.on("mouseout", (() => {
                        document.body.style.cursor = "default"
                    })), i.on("dragmove", (() => {
                        let [o, a] = function (t, e) {
                            return n.diff(e.x(), e.y(), t.metadata.currentPosition.x, t.metadata.currentPosition.y)
                        }(e, i);
                        i.zIndex(t.figuresCount - 1), r(o, a)
                    }))
                }

                onDragEnd(t, e, i, r) {
                    i.on("dragend", (() => {
                        r()
                    }))
                }

                registerKeyboardGestures(t, e) {
                    const i = t.__konvaLayer__.getStage().container();
                    i.tabIndex = -1, this._registerKeyDown(t, i, e), this._registerKeyUp(t, i, e)
                }

                _registerKeyDown(t, e, i) {
                    e.addEventListener("keydown", (function (e) {
                        for (let r in i) e.keyCode == r && i[r](t.puzzle)
                    }))
                }

                _registerKeyUp(t, e, i) {
                    e.addEventListener("keyup", (function (e) {
                        for (let r in i) e.keyCode == r && t.puzzle.tryDisconnectionWhileDragging()
                    }))
                }
            }
        }, 2906: (t, e, i) => {
            const r = i(7067), {Anchor: n} = (i(8878), i(9982)), {anchor: o} = i(9982), {
                fixed: a,
                InsertSequence: s
            } = i(8237), h = i(3212);

            class c {
                constructor(t, e) {
                    this.puzzle = t, this.initializeOffset(e)
                }

                initializeOffset(t) {
                    this.offset = t ? t.asVector() : this.pieceDiameter
                }

                get pieceDiameter() {
                    return this.puzzle.pieceDiameter
                }

                naturalAnchor(t, e) {
                    return o(t * this.pieceDiameter.x + this.offset.x, e * this.pieceDiameter.y + this.offset.y)
                }
            }

            t.exports = class {
                constructor() {
                    this.insertsGenerator = a, this.metadata = [], this.headAnchor = null
                }

                withMetadata(t) {
                    this.metadata = t
                }

                withInsertsGenerator(t) {
                    this.insertsGenerator = t || this.insertsGenerator
                }

                withHeadAt(t) {
                    this.headAnchor = t
                }

                withStructure(t) {
                    this.structure = t
                }

                withDimensions(t, e) {
                    this.width = t, this.height = e
                }

                build() {
                    const t = new r(this.structure), e = new c(t, this.headAnchor);
                    let i, n = this._newSequence();
                    for (let r = 0; r < this.height; r++) {
                        i = this._newSequence(), n.next();
                        for (let o = 0; o < this.width; o++) i.next(), this._buildPiece(t, i, n).centerAround(e.naturalAnchor(o, r))
                    }
                    return this._annotateAll(t.pieces), t
                }

                _annotateAll(t) {
                    t.forEach(((t, e) => this._annotate(t, e)))
                }

                _annotate(t, e) {
                    const i = this.metadata[e], r = i ? h.copy(i) : {};
                    r.id = r.id || String(e + 1), t.annotate(r)
                }

                _newSequence() {
                    return new s(this.insertsGenerator)
                }

                _buildPiece(t, e, i) {
                    return t.newPiece({
                        left: e.previousComplement(),
                        up: i.previousComplement(),
                        right: e.current(this.width),
                        down: i.current(this.height)
                    })
                }
            }
        }, 3212: t => {
            t.exports = {
                copy: function (t) {
                    return JSON.parse(JSON.stringify(t))
                }
            }
        }, 4554: (t, e, i) => {
            i(8878);
            const {vector: r, ...n} = i(3865);

            function o(t, e, i, r) {
                return t.isTab() ? e : t.isSlot() ? i : r
            }

            const a = (t, e, i, r) => o(t.left, e, i, r), s = (t, e, i, r) => o(t.right, e, i, r),
                h = (t, e, i, r) => o(t.up, e, i, r), c = (t, e, i, r) => o(t.down, e, i, r);

            class l {
                draw(t, e = 50, i = 0) {
                    const r = n.cast(e), h = n.divide(n.multiply(i, 5), r);
                    return [0 - h.x, 0 - h.y, 1, 0 - h.y, 2, o(t.up, -1 - h.y, 1 - h.y, 0 - h.y), 3, 0 - h.y, 4 + h.x, 0 - h.y, 4 + h.x, 1, s(t, 5 + h.x, 3 + h.x, 4 + h.x), 2, 4 + h.x, 3, 4 + h.x, 4 + h.y, 3, 4 + h.y, 2, o(t.down, 5 + h.y, 3 + h.y, 4 + h.y), 1, 4 + h.y, 0 - h.x, 4 + h.y, 0 - h.x, 3, a(t, -1 - h.x, 1 - h.x, 0 - h.x), 2, 0 - h.x, 1].map(((t, e) => t * (e % 2 == 0 ? r.x : r.y) / 5))
                }

                isBezier() {
                    return !1
                }
            }

            t.exports = {
                Classic: new l, Squared: l, Rounded: class {
                    constructor({
                                    bezelize: t = !1,
                                    bezelDepth: e = .4,
                                    insertDepth: i = .8,
                                    borderLength: r = 1 / 3,
                                    referenceInsertAxis: n = null
                                } = {}) {
                        this.bezelize = t, this.bezelDepth = e, this.insertDepth = i, this.borderLength = r, this.referenceInsertAxis = n
                    }

                    referenceInsertAxisLength(t) {
                        return this.referenceInsertAxis ? this.referenceInsertAxis.atVector(t) : n.inner.min(t)
                    }

                    draw(t, e = 150, i = 0) {
                        const r = n.cast(e),
                            o = Math.trunc(this.referenceInsertAxisLength(r) * (1 - 2 * this.borderLength) * 100) / 100,
                            l = n.divide(n.minus(r, o), 2), u = n.multiply(o, this.insertDepth),
                            d = n.multiply(n.inner.min(l), this.bezelDepth), [p, f, g, y] = this.bezels(t),
                            v = t => t ? d.x : 0, _ = t => t ? d.y : 0, m = o + l.y, b = o + l.x, x = o + 2 * l.y,
                            S = o + 2 * l.x;
                        return [v(p), 0, ...p ? [0, 0, 0, 0, 0, d.y] : [], 0, _(p), 0, l.y, 0, l.y, ...a(t, [-u.x, l.y, -u.x, m], [u.x, l.y, u.x, m], [0, l.y, 0, m]), 0, m, 0, m, 0, x, 0, x - _(f), ...f ? [0, x, 0, x, d.x, x] : [], v(f), x, l.x, x, l.x, x, ...c(t, [l.x, x + u.y, b, x + u.y], [l.x, x - u.y, b, x - u.y], [l.x, x, b, x]), b, x, b, x, S, x, S - v(g), x, ...g ? [S, x, S, x, S, x - d.y] : [], S, x - _(g), S, m, S, m, ...s(t, [S + u.x, m, S + u.x, l.y], [S - u.x, m, S - u.x, l.y], [S, m, S, l.y]), S, l.y, S, l.y, S, 0, S, _(y), ...y ? [S, 0, S, 0, S - d.x, 0] : [], S - v(y), 0, b, 0, b, 0, ...h(t, [b, -u.y, l.x, -u.y], [b, u.y, l.x, u.y], [b, 0, l.x, 0]), l.x, 0, l.x, 0, 0, 0, p ? d.x : 0, 0]
                    }

                    bezels(t) {
                        return this.bezelize ? [t.left.isNone() && t.up.isNone(), t.left.isNone() && t.down.isNone(), t.right.isNone() && t.down.isNone(), t.right.isNone() && t.up.isNone()] : [!1, !1, !1, !1]
                    }

                    isBezier() {
                        return !0
                    }
                }
            }
        }, 3169: (t, e, i) => {
            i(7969), i(8878), t.exports = class {
                resize(t, e, i) {
                }

                initialize(t, e) {
                }

                reinitialize(t) {
                }

                draw(t) {
                }

                scale(t, e) {
                }

                sketch(t, e, i, r) {
                }

                fill(t, e, i) {
                }

                label(t, e, i) {
                }

                physicalTranslate(t, e, i) {
                }

                logicalTranslate(t, e, i) {
                }

                onDrag(t, e, i, r) {
                }

                onDragEnd(t, e, i, r) {
                }

                registerKeyboardGestures(t, e) {
                }
            }
        }, 5254: t => {
            function e(t, e, i, r, n = 0) {
                return Math.abs(t - i) <= n && Math.abs(e - r) <= n
            }

            t.exports = {
                isNull: function (t, i) {
                    return e(t, i, 0, 0)
                }, diff: function (t, e, i, r) {
                    return [t - i, e - r]
                }, equal: e
            }
        }, 8878: (t, e, i) => {
            const r = i(5254), {anchor: n, Anchor: o} = i(9982), {None: a} = i(8590), {Connector: s} = i(1521),
                h = i(1737), {itself: c, orthogonalTransform: l} = i(2058);

            class u {
                constructor({up: t = a, down: e = a, left: i = a, right: r = a} = {}, n = {}) {
                    this.up = t, this.down = e, this.left = i, this.right = r, this.metadata = {}, this.centralAnchor = null, this._size = null, this._horizontalConnector = null, this._verticalConnector = null, this._initializeListeners(), this.configure(n)
                }

                _initializeListeners() {
                    this.translateListeners = [], this.connectListeners = [], this.disconnectListeners = []
                }

                configure(t) {
                    t.centralAnchor && this.centerAround(o.import(t.centralAnchor)), t.metadata && this.annotate(t.metadata), t.size && this.resize(t.size)
                }

                annotate(t) {
                    Object.assign(this.metadata, t)
                }

                reannotate(t) {
                    this.metadata = t
                }

                belongTo(t) {
                    this.puzzle = t
                }

                get presentConnections() {
                    return this.connections.filter(c)
                }

                get connections() {
                    return [this.rightConnection, this.downConnection, this.leftConnection, this.upConnection]
                }

                get inserts() {
                    return [this.right, this.down, this.left, this.up]
                }

                onTranslate(t) {
                    this.translateListeners.push(t)
                }

                onConnect(t) {
                    this.connectListeners.push(t)
                }

                onDisconnect(t) {
                    this.disconnectListeners.push(t)
                }

                fireTranslate(t, e) {
                    this.translateListeners.forEach((i => i(this, t, e)))
                }

                fireConnect(t) {
                    this.connectListeners.forEach((e => e(this, t)))
                }

                fireDisconnect(t) {
                    t.forEach((t => {
                        this.disconnectListeners.forEach((e => e(this, t)))
                    }))
                }

                connectVerticallyWith(t, e = !1) {
                    this.verticalConnector.connectWith(this, t, this.proximity, e)
                }

                attractVertically(t, e = !1) {
                    this.verticalConnector.attract(this, t, e)
                }

                connectHorizontallyWith(t, e = !1) {
                    this.horizontalConnector.connectWith(this, t, this.proximity, e)
                }

                attractHorizontally(t, e = !1) {
                    this.horizontalConnector.attract(this, t, e)
                }

                tryConnectWith(t, e = !1) {
                    this.tryConnectHorizontallyWith(t, e), this.tryConnectVerticallyWith(t, e)
                }

                tryConnectHorizontallyWith(t, e = !1) {
                    this.canConnectHorizontallyWith(t) && this.connectHorizontallyWith(t, e)
                }

                tryConnectVerticallyWith(t, e = !1) {
                    this.canConnectVerticallyWith(t) && this.connectVerticallyWith(t, e)
                }

                disconnect() {
                    if (!this.connected) return;
                    const t = this.presentConnections;
                    this.upConnection && (this.upConnection.downConnection = null, this.upConnection = null), this.downConnection && (this.downConnection.upConnection = null, this.downConnection = null), this.leftConnection && (this.leftConnection.rightConnection = null, this.leftConnection = null), this.rightConnection && (this.rightConnection.leftConnection = null, this.rightConnection = null), this.fireDisconnect(t)
                }

                centerAround(t) {
                    if (this.centralAnchor) throw new Error("this pieces has already being centered. Use recenterAround instead");
                    this.centralAnchor = t
                }

                locateAt(t, e) {
                    this.centerAround(n(t, e))
                }

                isAt(t, e) {
                    return this.centralAnchor.isAt(t, e)
                }

                recenterAround(t, e = !1) {
                    const [i, r] = t.diff(this.centralAnchor);
                    this.translate(i, r, e)
                }

                relocateTo(t, e, i = !1) {
                    this.recenterAround(n(t, e), i)
                }

                translate(t, e, i = !1) {
                    r.isNull(t, e) || (this.centralAnchor.translate(t, e), i || this.fireTranslate(t, e))
                }

                push(t, e, i = !1, r = [this]) {
                    this.translate(t, e, i);
                    const n = this.presentConnections.filter((t => -1 === r.indexOf(t)));
                    r.push(...n), n.forEach((i => i.push(t, e, !1, r)))
                }

                drag(t, e, i = !1) {
                    r.isNull(t, e) || (this.dragShouldDisconnect(t, e) ? (this.disconnect(), this.translate(t, e, i)) : this.push(t, e, i))
                }

                dragShouldDisconnect(t, e) {
                    return this.puzzle.dragShouldDisconnect(this, t, e)
                }

                drop() {
                    this.puzzle.autoconnectWith(this)
                }

                dragAndDrop(t, e) {
                    this.drag(t, e), this.drop()
                }

                canConnectHorizontallyWith(t) {
                    return this.horizontalConnector.canConnectWith(this, t, this.proximity)
                }

                canConnectVerticallyWith(t) {
                    return this.verticalConnector.canConnectWith(this, t, this.proximity)
                }

                verticallyCloseTo(t) {
                    return this.verticalConnector.closeTo(this, t, this.proximity)
                }

                horizontallyCloseTo(t) {
                    return this.horizontalConnector.closeTo(this, t, this.proximity)
                }

                verticallyMatch(t) {
                    return this.verticalConnector.match(this, t)
                }

                horizontallyMatch(t) {
                    return this.horizontalConnector.match(this, t)
                }

                get connected() {
                    return !!(this.upConnection || this.downConnection || this.leftConnection || this.rightConnection)
                }

                get downAnchor() {
                    return this.centralAnchor.translated(0, this.radius.y)
                }

                get rightAnchor() {
                    return this.centralAnchor.translated(this.radius.x, 0)
                }

                get upAnchor() {
                    return this.centralAnchor.translated(0, -this.radius.y)
                }

                get leftAnchor() {
                    return this.centralAnchor.translated(-this.radius.x, 0)
                }

                resize(t) {
                    this._size = t
                }

                get radius() {
                    return this.size.radius
                }

                get diameter() {
                    return this.size.diameter
                }

                get size() {
                    return this._size || this.puzzle.pieceSize
                }

                get proximity() {
                    return this.puzzle.proximity
                }

                get id() {
                    return this.metadata.id
                }

                get horizontalConnector() {
                    return this.getConnector("horizontal")
                }

                get verticalConnector() {
                    return this.getConnector("vertical")
                }

                getConnector(t) {
                    const e = t + "Connector", i = "_" + e;
                    return this.puzzle && !this[i] ? this.puzzle[e] : (this[i] || (this[i] = s[t]()), this[i])
                }

                export({compact: t = !1} = {}) {
                    const e = {
                        centralAnchor: this.centralAnchor && this.centralAnchor.export(),
                        structure: h.serialize(this),
                        metadata: this.metadata
                    };
                    return this._size && (e.size = {radius: this._size.radius}), t ? e : Object.assign(e, {connections: l(this.connections, (t => ({id: t.id})))})
                }

                static import(t) {
                    return new u(h.deserialize(t.structure), {
                        centralAnchor: t.centralAnchor,
                        metadata: t.metadata,
                        size: t.size
                    })
                }
            }

            t.exports = u
        }, 2058: t => {
            function e(t, e, i = null) {
                return t.map((t => {
                    const r = t || i;
                    return r && e(r)
                }))
            }

            t.exports = {
                pivot: function (t, e, i = !1) {
                    return i ? [t, e] : [e, t]
                }, itself: function (t) {
                    return t
                }, orthogonalMap: e, orthogonalTransform: function (t, i, r = null) {
                    const [n, o, a, s] = e(t, i, r);
                    return {right: n, down: o, left: a, up: s}
                }
            }
        }, 7067: (t, e, i) => {
            const {Anchor: r} = i(9982), n = i(8878), {NullValidator: o} = i(5961), {
                vector: a,
                ...s
            } = i(3865), {radius: h} = i(3861), c = i(4634), l = i(7644), {
                Connector: u,
                noConnectionRequirements: d
            } = i(1521);

            class p {
                constructor({pieceRadius: t = 2, proximity: e = 1} = {}) {
                    this.pieceSize = h(t), this.proximity = e, this.pieces = [], this.validator = new o, this.dragMode = l.TryDisconnection, this.horizontalConnector = u.horizontal(), this.verticalConnector = u.vertical()
                }

                newPiece(t = {}, e = {}) {
                    const i = new n(t, e);
                    return this.addPiece(i), i
                }

                addPiece(t) {
                    this.pieces.push(t), t.belongTo(this)
                }

                addPieces(t) {
                    t.forEach((t => this.addPiece(t)))
                }

                annotate(t) {
                    this.pieces.forEach(((e, i) => e.annotate(t[i])))
                }

                relocateTo(t) {
                    this.pieces.forEach(((e, i) => e.relocateTo(...t[i])))
                }

                autoconnect() {
                    this.pieces.forEach((t => this.autoconnectWith(t)))
                }

                disconnect() {
                    this.pieces.forEach((t => t.disconnect()))
                }

                autoconnectWith(t) {
                    this.pieces.filter((e => e !== t)).forEach((e => {
                        t.tryConnectWith(e), e.tryConnectWith(t, !0)
                    }))
                }

                shuffle(t, e) {
                    this.shuffleWith(c.random(t, e))
                }

                shuffleWith(t) {
                    this.disconnect(), t(this.pieces).forEach((({x: t, y: e}, i) => {
                        this.pieces[i].relocateTo(t, e)
                    })), this.autoconnect()
                }

                translate(t, e) {
                    this.pieces.forEach((i => i.translate(t, e)))
                }

                reframe(t, e) {
                    let i;
                    const r = t.x - Math.min(...this.pieces.map((t => t.leftAnchor.x)));
                    if (r > 0) i = r; else {
                        const t = e.x - Math.max(...this.pieces.map((t => t.rightAnchor.x)));
                        i = t < 0 ? t : 0
                    }
                    let n;
                    const o = t.y - Math.min(...this.pieces.map((t => t.upAnchor.y)));
                    if (o > 0) n = o; else {
                        const t = e.y - Math.max(...this.pieces.map((t => t.downAnchor.y)));
                        n = t < 0 ? t : 0
                    }
                    this.translate(i, n)
                }

                onTranslate(t) {
                    this.pieces.forEach((e => e.onTranslate(t)))
                }

                onConnect(t) {
                    this.pieces.forEach((e => e.onConnect(t)))
                }

                onDisconnect(t) {
                    this.pieces.forEach((e => e.onDisconnect(t)))
                }

                onValid(t) {
                    this.validator.onValid(t)
                }

                get points() {
                    return this.pieces.map((t => t.centralAnchor.asPair()))
                }

                get refs() {
                    return this.points.map((([t, e], i) => {
                        const r = this.pieces[i].diameter;
                        return [t / r.x, e / r.y]
                    }))
                }

                get metadata() {
                    return this.pieces.map((t => t.metadata))
                }

                get head() {
                    return this.pieces[0]
                }

                get headAnchor() {
                    return this.head.centralAnchor
                }

                get verticalRequirement() {
                    return this.verticalConnector.requirement
                }

                get horizontalRequirement() {
                    return this.horizontalConnector.requirement
                }

                attachHorizontalConnectionRequirement(t) {
                    this.horizontalConnector.attachRequirement(t)
                }

                attachVerticalConnectionRequirement(t) {
                    this.verticalConnector.attachRequirement(t)
                }

                attachConnectionRequirement(t) {
                    this.attachHorizontalConnectionRequirement(t), this.attachVerticalConnectionRequirement(t)
                }

                clearConnectionRequirements() {
                    this.attachConnectionRequirement(d)
                }

                attachValidator(t) {
                    this.validator = t
                }

                isValid() {
                    return this.validator.isValid(this)
                }

                get valid() {
                    return this.validator.valid
                }

                validate() {
                    this.validator.validate(this)
                }

                updateValidity() {
                    this.validator.validate(this)
                }

                get connected() {
                    return this.pieces.every((t => t.connected))
                }

                get pieceDiameter() {
                    return this.pieceSize.diameter
                }

                get pieceRadius() {
                    return this.pieceSize.radius
                }

                forceConnectionWhileDragging() {
                    this.dragMode = l.ForceConnection
                }

                forceDisconnectionWhileDragging() {
                    this.dragMode = l.ForceDisconnection
                }

                tryDisconnectionWhileDragging() {
                    this.dragMode = l.TryDisconnection
                }

                dragShouldDisconnect(t, e, i) {
                    return this.dragMode.dragShouldDisconnect(t, e, i)
                }

                export(t = {}) {
                    return {
                        pieceRadius: this.pieceRadius,
                        proximity: this.proximity,
                        pieces: this.pieces.map((e => e.export(t)))
                    }
                }

                static import(t) {
                    const e = new p({pieceRadius: t.pieceRadius, proximity: t.proximity});
                    return e.addPieces(t.pieces.map((t => n.import(t)))), e.autoconnect(), e
                }
            }

            t.exports = p
        }, 8237: (t, e, i) => {
            const {Tab: r, Slot: n, None: o} = i(8590);
            t.exports = {
                InsertSequence: class {
                    constructor(t) {
                        this.generator = t, this.n = 0, this._previous, this._current = o
                    }

                    previousComplement() {
                        return this._previous.complement()
                    }

                    current(t) {
                        return this.n == t ? o : this._current
                    }

                    next() {
                        return this._previous = this._current, this._current = this.generator(this.n++), this._current
                    }
                }, fixed: function (t) {
                    return r
                }, flipflop: function (t) {
                    return t % 2 == 0 ? r : n
                }, twoAndTwo: function (t) {
                    return t % 4 < 2 ? r : n
                }, random: function (t) {
                    return Math.random() < .5 ? r : n
                }
            }
        }, 4634: (t, e, i) => {
            const {Anchor: r} = i(9982);

            function n(t) {
                return Math.round(Math.random() * (t.length - 1))
            }

            t.exports = {
                random: function (t, e) {
                    return i => i.map((i => r.atRandom(t, e)))
                }, grid: t => {
                    const e = t.map((t => t.centralAnchor.asVector()));
                    for (let t = 0; t < e.length; t++) {
                        const i = n(e), r = e[i];
                        e[i] = e[t], e[t] = r
                    }
                    return e
                }, columns: t => {
                    const e = t.map((t => t.centralAnchor.asVector())), i = new Map;
                    for (let t of e) {
                        i.get(t.x) || i.set(t.x, e.filter((e => e.x == t.x)));
                        const r = i.get(t.x), o = n(r), a = r[o].y;
                        r[o].y = t.y, t.y = a
                    }
                    return e
                }, line: t => {
                    const e = t.map((t => t.centralAnchor.asVector())), i = new Set(e.map((t => t.x))),
                        r = Math.max(...i), o = Math.min(...i), a = (r - o) / (i.size - 1), s = o + a / 2,
                        h = e.length * a, c = e.filter((t => t.x < s)).length * a, l = [], u = [];
                    for (let t = 0; t < c; t += a) l.push(t);
                    for (let t = l[l.length - 1] + a; t < h; t += a) u.push(t);
                    for (let t of e) {
                        const e = t.x < s ? l : u, i = n(e);
                        t.y = 0, t.x = e[i], e.splice(i, 1)
                    }
                    return e
                }, noop: t => t.map((t => t.centralAnchor)), padder: function (t, e, i) {
                    return r => {
                        const n = r.map((t => t.centralAnchor.asVector()));
                        let o = 0, a = 0;
                        for (let r = 0; r < i; r++) {
                            for (let i = 0; i < e; i++) {
                                const s = n[i + e * r];
                                s.x += o, s.y += a, o += t
                            }
                            o = 0, a += t
                        }
                        return n
                    }
                }, noise: function (t) {
                    return e => e.map((e => r.atRandom(2 * t.x, 2 * t.y).translate(-t.x, -t.y).translate(e.centralAnchor.x, e.centralAnchor.y).asVector()))
                }
            }
        }, 3861: (t, e, i) => {
            const r = i(3865);
            t.exports = {
                radius: function (t) {
                    const e = r.cast(t);
                    return {radius: e, diameter: r.multiply(e, 2)}
                }, diameter: function (t) {
                    const e = r.cast(t);
                    return {radius: r.multiply(e, .5), diameter: e}
                }
            }
        }, 9452: (t, e, i) => {
            const r = i(3865), {PuzzleValidator: n} = (i(8878), i(5254), i(5961));

            function o(t) {
                return r.diff(t.metadata.targetPosition, t.centralAnchor.asVector())
            }

            const a = t => {
                const e = o(t.head);
                return t.pieces.every((t => n.equalDiffs(e, o(t))))
            };
            t.exports = {
                initialize: function (t, e, i) {
                    t.targetPosition = t.targetPosition || e, t.currentPosition = t.currentPosition || i || r.copy(t.targetPosition)
                },
                solved: t => a(t) && n.connected(t),
                relativePosition: a,
                absolutePosition: t => r.equal(t.centralAnchor.asVector(), t.metadata.targetPosition)
            }
        }, 1737: (t, e, i) => {
            const {Slot: r, Tab: n, None: o} = i(8590), {orthogonalMap: a} = i(2058);

            function s(t) {
                return "S" === t ? r : "T" === t ? n : o
            }

            function h(t) {
                if (4 !== t.length) throw new Error("structure string must be 4-chars long");
                return {right: s(t[0]), down: s(t[1]), left: s(t[2]), up: s(t[3])}
            }

            t.exports = {
                serialize: function (t) {
                    return a([t.right, t.down, t.left, t.up], (t => t.serialize()), o).join("")
                }, deserialize: h, asStructure: function (t) {
                    return "string" == typeof t ? h(t) : t
                }
            }
        }, 5961: (t, e, i) => {
            i(7067), i(8878);
            const r = i(5254);

            class n {
                constructor() {
                    this.validListeners = [], this._valid = void 0
                }

                validate(t) {
                    const e = this._valid;
                    this.updateValidity(t), this._valid && !e && this.fireValid(t)
                }

                updateValidity(t) {
                    this._valid = this.isValid(t)
                }

                fireValid(t) {
                    this.validListeners.forEach((e => e(t)))
                }

                onValid(t) {
                    this.validListeners.push(t)
                }

                get valid() {
                    return this._valid
                }

                get isNull() {
                    return !1
                }
            }

            class o extends n {
                constructor(t) {
                    super(), this.condition = t
                }

                isValid(t) {
                    return this.condition(t)
                }

                static equalDiffs([t, e], [i, n]) {
                    return r.equal(t, e, i, n, o.DIFF_DELTA)
                }
            }

            o.DIFF_DELTA = .01, o.connected = t => t.connected, o.relativeRefs = t => e => {
                function i(e, i, n) {
                    return r.diff(e, i, ...t[n])
                }

                const n = e.refs, [a, s] = n[0], h = i(a, s, 0);
                return n.every((([t, e], r) => o.equalDiffs(h, i(t, e, r))))
            }, t.exports = {
                PuzzleValidator: o, PieceValidator: class extends n {
                    constructor(t) {
                        super(), this.condition = t
                    }

                    isValid(t) {
                        return t.pieces.every((t => this.condition(t)))
                    }
                }, NullValidator: class extends n {
                    isValid(t) {
                        return !1
                    }

                    get isNull() {
                        return !0
                    }
                }
            }
        }, 3865: (t, e, i) => {
            const r = i(5254);

            function n(t, e) {
                return {x: t, y: e}
            }

            function o(t) {
                return "number" == typeof t ? n(t, t) : t
            }

            function a(t, e, i) {
                const r = o(t), n = o(e);
                return {x: i(r.x, n.x), y: i(r.y, n.y)}
            }

            const s = {
                min(t) {
                    return this.apply(t, Math.min)
                }, max(t) {
                    return this.apply(t, Math.max)
                }, apply: (t, e) => e(t.x, t.y)
            };
            t.exports = {
                cast: o, vector: n, copy: function ({x: t, y: e}) {
                    return {x: t, y: e}
                }, equal: function (t, e, i = 0) {
                    return r.equal(t.x, t.y, e.x, e.y, i)
                }, zero: function () {
                    return n(0, 0)
                }, update: function (t, e, i) {
                    t.x = e, t.y = i
                }, diff: function (t, e) {
                    return r.diff(t.x, t.y, e.x, e.y)
                }, multiply: function (t, e) {
                    return a(t, e, ((t, e) => t * e))
                }, divide: function (t, e) {
                    return a(t, e, ((t, e) => t / e))
                }, plus: function (t, e) {
                    return a(t, e, ((t, e) => t + e))
                }, minus: function (t, e) {
                    return a(t, e, ((t, e) => t - e))
                }, apply: a, min: function (t, e) {
                    return a(t, e, Math.min)
                }, max: function (t, e) {
                    return a(t, e, Math.max)
                }, inner: s
            }
        }
    }, e = {};

    function i(r) {
        var n = e[r];
        if (void 0 !== n) return n.exports;
        var o = e[r] = {exports: {}};
        return t[r].call(o.exports, o, o.exports, i), o.exports
    }

    i.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }();
    var r = i(6010);
    headbreaker = r
})();
//# sourceMappingURL=headbreaker.js.map