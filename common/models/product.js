'use strict';

module.exports = function(Product) {
    Product.observe('access', function logQuery(ctx, next) {
        console.log(ctx.options);
        next();
    });

};