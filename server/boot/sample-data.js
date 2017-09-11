// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function(app) {
    var User = app.models.user;
    var Product = app.models.product;
    var Brand = app.models.brand;

    var testUser = { username: 'marshall', email: 'marshall@demo.com', password: '1234' };
    User.create([
        testUser
    ], function(err, users) {
        User.login(testUser, function(err, accessToken) {
            console.log('Copy this access token for test: ', accessToken.id)
        })

    });

    Brand.create([
        { name: 'Apple' }
    ], function(err, brand) {
        Product.create([
            { 'name': 'iPhone 8 Plus', 'price': '9000', 'brandId': brand[0].id },
            { 'name': 'iPhone 8', 'price': '7000', 'brandId': brand[0].id }
        ])

    });



};