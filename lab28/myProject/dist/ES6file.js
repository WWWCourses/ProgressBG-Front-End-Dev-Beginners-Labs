"use strict";
var A = /** @class */ (function () {
    function A(id) {
        this.id = id;
    }
    A.prototype.getId = function () {
        console.log(this.id);
    };
    return A;
}());
var obj1 = new A(1);
var obj2 = new A(2);
obj1.getId();
obj2.getId();
