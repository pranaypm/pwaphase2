
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

  var finalData =  storeDB.getAll();
  finalData.onsuccess = function(event)
  {
    console.log(event.target.result);
    display(event.target.result);
  }
}
function display(data)
{
var parent=document.querySelector(".parent");

for( var i=0;i<data.length ;i++)
{
   var child=document.createElement("div");
   child.classList.add("child");
  var image=document.createElement("img");
image.src="images/hacker.svg";
image.alt=data[i].name;

var name=document.createElement("h2");
name.textContent=data[i].name;

var email=document.createElement("h2");
email.textContent=data[i].email;

var link=document.createElement("a");
link.href="resume.html?id="+data[i].id;
link.textContent="view Profile";



child.append(image);
child.append(name);
child.append(email);
child.append(link);
parent.append(child);

}
}
