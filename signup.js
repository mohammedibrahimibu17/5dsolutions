// adding new user (sign-up route)
app.post('/api/register',function(req,res){
   // taking a user
   const newuser=new User(req.body);
   
  if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
   
   User.findOne({email:newuser.email},function(err,user){
       if(user) return res.status(400).json({ auth : false, message :"email exits"});

       newuser.save((err,doc)=>{
           if(err) {console.log(err);
               return res.status(400).json({ success : false});}
           res.status(200).json({
               succes:true,
               user : doc
           });
       });
   });
});
