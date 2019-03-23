var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for(i in query)
{
  param=query[i].split("=");
  paramValue=parseInt(param[1]);
}

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
    var info=storeDB.get(paramValue);
    info.onsuccess=function(data)
     {
       console.log(data.target.result);
       display(data.target.result);

    }


}

var left=document.querySelector(".left");
var right=document.querySelector(".right");
function display(data)
{
  var image=document.createElement("img");
  image.src="images/resume.svg";
  left.append(image);

  var name=document.createElement("h3");
   name.textContent=data.name;
  left.append(name);


  var email=document.createElement("h3");
  email.textContent=data.email;
  left.append(email);


    var rollno=document.createElement("h3");
    rollno.textContent=data.rollno;
    left.append(rollno);

       var phonenumber=document.createElement("h3");
        phonenumber.textContent=data.phonenumber;
        left.append(phonenumber);

        var rh1 = document.createElement("h1");
        rh1.textContent="Career Objectives";
        right.append(rh1);


        var hr = document.createElement("hr");
        right.append(hr);


        var work=document.createElement("p");
        work.textContent=data.work;
        right.append(work);

          var rh1 = document.createElement("h1");
                rh1.textContent="Education Details";
                right.append(rh1);

          var hr = document.createElement("hr");
                right.append(hr);


var tabl =document.createElement("table");
let ww="<tr><th>college</th><th>degree</th><th>branch</th><th>marks</th></tr>"
let row='';
for(i in data.education)
{
  row=row+"<tr>"
  +"<td>"+data.education[i].college+"</td>"
  +"<td>"+data.education[i].degree+"</td>"
  +"<td>"+data.education[i].branch+"</td>"
  +"<td>"+data.education[i].marks+"</td>"
       +"</tr>";
}

tabl.innerHTML=ww+row;
right.appendChild(tabl);








                     var rh1 = document.createElement("h1");
                                rh1.textContent="Technical skills";
                                right.append(rh1);

                          var hr = document.createElement("hr");
                                right.append(hr);


                                var skills=document.createElement("h3");
                                skills.textContent=data.skills;
                                right.append(skills);


}
