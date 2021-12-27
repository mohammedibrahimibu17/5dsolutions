const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const confiq=require('../config/config').get(process.env.NODE_ENV);
const salt=10;
//delete token

userSchema.methods.deleteToken=function(token,cb){
    var user=this;

    user.update({$unset : {token :1}},function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}
