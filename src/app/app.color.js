"use strict";
var RGB = (function () {
    function RGB(r, g, b) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.alpha = 1;
        this.value = 0;
        this.setRed(r).setGreen(g).setBlue(b);
        this.updateValue();
    }
    RGB.prototype.getHexPart = function (v) {
        var h = v.toString(16);
        return (h.length > 1) ? h : "0" + h;
    };
    RGB.prototype.updateValue = function () {
        this.value = (this.getRed() + this.getGreen() + this.getBlue());
        return this;
    };
    RGB.prototype.getValue = function () {
        return this.value;
    };
    RGB.prototype.toHex = function () {
        var hexString = (this.getAlpha() < 1) ? this.toHexAlpha().toString() : "#" + this.getHexPart(this.getRed()) + this.getHexPart(this.getGreen()) + this.getHexPart(this.getBlue());
        return new HEX(hexString);
    };
    RGB.prototype.toHexAlpha = function (light) {
        if (light === void 0) { light = true; }
        var tmpRgb = new RGB(this.getRed(), this.getGreen(), this.getBlue());
        if (this.getAlpha() < 1) {
            var tmp = (1 - this.getAlpha());
            tmpRgb.setRed(tmpRgb.getRed() * tmp);
            tmpRgb.setGreen(tmpRgb.getGreen() * tmp);
            tmpRgb.setBlue(tmpRgb.getBlue() * tmp);
        }
        var adjustValue = (this.getAlpha() < 1) ? Math.floor(255 * this.getAlpha()) : 0;
        return (light) ? tmpRgb.lighten(adjustValue).toHex() : tmpRgb.darken(adjustValue).toHex();
    };
    RGB.prototype.setRed = function (value) {
        this.r = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getRed = function () {
        return this.r;
    };
    RGB.prototype.setGreen = function (value) {
        this.g = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getGreen = function () {
        return this.g;
    };
    RGB.prototype.setBlue = function (value) {
        this.b = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getBlue = function () {
        return this.b;
    };
    RGB.prototype.setAlpha = function (a) {
        this.alpha = (a <= 1 && a >= 0) ? a : 1;
        return this;
    };
    RGB.prototype.getAlpha = function () {
        return this.alpha;
    };
    RGB.prototype.lighten = function (by) {
        this.setRed(this.getRed() + by)
            .setBlue(this.getBlue() + by)
            .setGreen(this.getGreen() + by);
        return this.updateValue();
    };
    RGB.prototype.darken = function (by) {
        this.setRed(this.getRed() - by)
            .setBlue(this.getBlue() - by)
            .setGreen(this.getGreen() - by);
        return this.updateValue();
    };
    RGB.prototype.toString = function () {
        return (this.alpha < 1) ? 'rgba(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ',' + this.getAlpha() + ')' : 'rgb(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ')';
    };
    return RGB;
}());
exports.RGB = RGB;
var HEX = (function () {
    function HEX(hex) {
        this.hex = "#000000";
        this.hex = (hex.toString().length == 6) ? "#" + hex : (hex.toString().length == 7) ? hex : null;
    }
    HEX.prototype.toRGB = function () {
        var hexString = this.hex.substr(1).toString();
        return new RGB(parseInt(hexString.substr(0, 2), 16), parseInt(hexString.substr(2, 2), 16), parseInt(hexString.substr(4, 2), 16));
    };
    HEX.prototype.toString = function () {
        return this.hex;
    };
    return HEX;
}());
exports.HEX = HEX;
var Color = (function () {
    function Color(color) {
        if (color instanceof HEX) {
            this.hex = color;
            this.rgb = color.toRGB();
        }
        else if (color instanceof RGB) {
            this.rgb = color;
            this.hex = color.toHex();
        }
    }
    Color.prototype.lighten = function (by) {
        this.rgb = this.rgb.lighten(by);
        this.hex = this.rgb.toHex();
        return this;
    };
    Color.prototype.darken = function (by) {
        this.rgb = this.rgb.darken(by);
        this.hex = this.rgb.toHex();
        return this;
    };
    Color.prototype.toString = function (rgb) {
        if (rgb === void 0) { rgb = true; }
        return (rgb) ? this.rgb.toString() : this.hex.toString();
    };
    Color.prototype.setAlpha = function (a) {
        this.rgb.setAlpha(a);
        this.hex = this.rgb.toHex();
        return this;
    };
    return Color;
}());
exports.Color = Color;
//# sourceMappingURL=app.color.js.map