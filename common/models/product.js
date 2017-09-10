'use strict';

module.exports = function(Product) {
    // console.log(Product.getDataSource())

    Product.observe('access', function logQuery(ctx, next) {
        console.log('access', ctx.options)
        next();
    });

    Product.createOptionsFromRemotingContext = function(ctx) {
        var base = this.base.createOptionsFromRemotingContext(ctx);
        return Object.assign(base, {
            fullCtx: ctx,
        });
    };

};