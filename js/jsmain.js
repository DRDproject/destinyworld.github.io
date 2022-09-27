// var a = "hello";
// var a = "world";
// document.write(a);
// console.log(a);
// $(document).ready(function(){

//     let obj = {
//         firstName : "Dharam",
//         lastName : "Pal",
//         mobileNumber: 8982471317.,
//         emailId : "dharmendrasingh@gmail.com"
//     };
//     for( let sign in obj){
//         document.write( sign + " : " + obj[sign] + "<br>");
//         console.log( sign + " : " + obj[sign] + "<br>");
//     }

// });



$(document).on('click',"ul li", function(){
$(this).addClass('active').siblings().removeClass('active')
});

