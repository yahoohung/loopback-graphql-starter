 //calls the check the ACLS on the model and return the access permission on method.
 function checkAccess({ accessToken, id, model, method, options, ctx }) {

     return new Promise((resolve, reject) => {
         // ignore checking if does not enable auth
         if (model.app.isAuthEnabled) {
             model.checkAccess(accessToken, id, method, ctx,
                 ((err, allowed) => {
                     if (err)
                         reject(err);
                     else if (allowed)
                         resolve(allowed);
                     else
                         reject(`Access denied`);
                 }));
         } else {
             resolve(true);
         }
     })

 }
 module.exports = checkAccess;