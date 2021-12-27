const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const confiq=require('../config/config').get(process.env.NODE_ENV);
const salt=10;
// find by token
userSchema.statics.findByToken=function(token,cb){
    var user=this;

    jwt.verify(token,confiq.SECRET,function(err,decode){
        user.findOne({"_id": decode, "token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
};
