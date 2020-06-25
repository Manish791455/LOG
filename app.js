var database = {
    email : 'manishkumar17@gmail.com',
    password : '791455',
    phoneNo : '7396451230',
   referenceEmail :'naniroy@gmail.com',
   
}
console.log(database)
function log(){
   var userEmail = prompt('enter your email')
   if(userEmail===database.email){
          var pss = prompt('enter password') 
          function log2(){
           if(pss===database.password){
               alert('login successful'+' '+'welcome to next-level')
           }
           else if(pss!=database.password){
                   var mobile = prompt('wrong password please enter registered mobile number to reset password')
                   function pass2(){
                       
                       if(mobile===database.phoneNo){
                           var Otp = Math.floor(1000 + Math.random() * 9000)
                           var conf = parseInt(prompt(Otp+' '+'is  otp for reset password'+' ' +'enter otp'))
                           

                           if(conf===Otp){
                                 var newp = prompt('otp successful please enter new password')
                                 var newdp = database;
                                 newdp.password = newp;
                                 console.log(database);//  here  we can see in the object password is changed 
                                 if(newp){
                                    alert('password changed successfully')
                                        var userEmail2 = prompt('enter your email')
                                        function log4(){
                                            if(userEmail2===database.email){
                                              var pss2 = prompt('enter passsword')
                                              function log5(){
                                                  if(pss2===database.password){
                                                    alert('login successful'+' '+'welcome to next-level')
                                                  }
                                                  else{
                                                      alert('wrong password')
                                                  }
                                              }
                                              log5()

                                            }
                                            else{
                                                alert('incorrect emial')
                                            }
                                        }
                                        log4()
                                    
                                 }
                                 else if(newp===''){
                                     alert('password setting failed')
                                 }
                                
                           }
                           else{
                               alert ('wrong otp')
                           }
                       }
                       
           
                       else{
                           alert('mobile no does not exist')
                       }
                   }
                   pass2();
           }
       }
       log2();
   }
   else if(userEmail!=database.email){
       var ref = prompt('email does not exist, to reset please enter your reference email')
       function use2(){
           if(ref===database.referenceEmail){
               var Otpp = Math.floor(1000 + Math.random() * 9000)
               var conff = parseInt(prompt(Otpp+' '+'is  otp for log into email'+' ' +'enter otp'))
               if(conff===Otpp){
                   var log3 = prompt('enter your password')
                   if(log3===database.password){
                          alert('login successful'+' '+'welcome to next-level')
                   }
                   else{
                       alert('wrong password')
                   }
               }
               else if(conff!=Otpp){
                  alert('wrong otp')
               }
               
           }
           else{
               alert('reference email is incorrect')
           }
         
       }
       use2()
   }
}

log();