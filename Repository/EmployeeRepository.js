const firebase = require('../Config/firebase');

 const insertEmployee= async function(ctx,callback){
    let req=ctx.request.body;

  await  firebase.database().ref('Employee/'+Date.now()).set({
        createdon  : new Date().toString(),
        Name  :req.Name,
        Contact   :req.Contact
     },error=>{
       if(error){
        ctx.body=error;
       }else{
        ctx.body=JSON.stringify({"statusCode":200,"response":"Record inserted successfully"});
       }
     });
   }

   const getEmployee= async function(ctx,next) {
  
    var data=[];
  var response =await firebase.database().ref("Employee/").once("value").then((snapshot)=>{
    return snapshot.val();
  })
  Object.keys(response).forEach(function(key) {
     data.push(response[key])
  });
  ctx.body=  JSON.stringify({"statusCode":200,"response":"Record Retrieved successfully","Data":data});

  } 

   module.exports={insertEmployee,getEmployee};