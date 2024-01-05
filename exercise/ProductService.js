"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductsService = /** @class */ (function () {
    function ProductsService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductsService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductsService.prototype.getProducts = function () {
        return this.products;
    };
    ProductsService.prototype.saveProduct = function (product) {
        if (product.id === 0 || product.id === null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductsService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductsService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) !== null) {
            key++;
        }
        return key;
    };
    return ProductsService;
}());
exports.ProductsService = ProductsService;
