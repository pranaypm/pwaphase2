function addData()
{

  //career objectives
var work=document.querySelector("#work").value;
var name=document.querySelector("#name").value;
var email=document.querySelector("#email").value;
var rollno=document.querySelector("#rollno").value;
var phonenumber=document.querySelector("#phonenumber").value;

 //Graduation Details

 var college1=document.querySelector("#college1").value;
 var degree1=document.querySelector("#degree1").value;
 var branch1=document.querySelector("#branch1").value;
 var marks1=document.querySelector("#marks1").value;

//Intermediate Details

var college2=document.querySelector("#college2").value;
var degree2=document.querySelector("#degree2").value;
var branch2=document.querySelector("#branch2").value;
var marks2=document.querySelector("#marks2").value;

//ssc Details

var college3=document.querySelector("#college3").value;
var branch3=document.querySelector("#branch3").value;
var marks3=document.querySelector("#marks3").value;

//Technical Skills

var skills=document.querySelector("#skills").value;



var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

var open=idb.open("StoreData",1);
console.log("IndexedDB is Created");

open.onupgradeneeded=function(event)
{
var request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(event)
{
console.log("object not created"+error);
}
open.onsuccess=function(event)
{
  var  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB =transaction.objectStore("Formdata");
  storeDB.put({
    work:work,
    name:name,
    email:email,
    rollno:rollno,
    phonenumber:phonenumber,
    education:[
    {
      college :college1,
      degree:degree1,
      branch:branch1,
      marks:marks1
    },

    {
       college:college2,
       degree:degree2,
       branch:branch2,
       marks:marks2
   },

   {
      college:college3,
      degree:"",
      branch:branch3,
      marks:marks3

   }


 ],
       skills:skills

  });
  window.open("index.html");
}

}
