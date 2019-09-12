"use strict";
exports.__esModule = true;
var piscina = /** @class */ (function () {
    function piscina(diam, custoConst) {
        this.diam = diam;
        this.custoConst = custoConst;
    }
    piscina.prototype.raio = function () {
        return this.diam / 2;
    };
    piscina.prototype.area = function () {
        return 3.14 * (this.raio() * this.raio());
    };
    piscina.prototype.custoTotal = function () {
        return this.area() * this.custoConst;
    };
    return piscina;
}());
exports.piscina = piscina;
