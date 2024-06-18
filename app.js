//alert("what is this");
function AddnewAqfield(){
  //  console.log("123");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.setAttribute("rows",3);
    newNode.classList.add("mt-3");
    newNode.setAttribute('placeholder',"Enter your Qualifications");

    let AcademicQuali=document.getElementById("Aq");
    let acadmeicButton=document.getElementById("aqbtn");
    
    AcademicQuali.insertBefore(newNode,acadmeicButton);

}

function AddnewWefield(){
    let newNode2=document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("wefield");
    newNode2.setAttribute("rows",4);
    newNode2.classList.add("mt-3");
    newNode2.setAttribute('placeholder',"Enter your work experience");

    let Workarea=document.getElementById("We");
    let webutton=document.getElementById("webtn");
    
    Workarea.insertBefore(newNode2,webutton);

}

function AddnewProField(){
    let newNode3=document.createElement("textarea");
    newNode3.classList.add("form-control");
    newNode3.classList.add("prjfield");
    newNode3.setAttribute("rows",4);
    newNode3.classList.add("mt-3");
    newNode3.setAttribute('placeholder',"Write down about your Projects in Brief");

    let Proarea=document.getElementById("Pr");
    let Prbutton=document.getElementById("pjts");
    
    Proarea.insertBefore(newNode3,Prbutton);
    
}

function AddnewCerField(){
    let newNode4=document.createElement("textarea");
    newNode4.classList.add("form-control");
    newNode4.classList.add("cefield");
    newNode4.setAttribute("rows",2);
    newNode4.classList.add("mt-3");
    newNode4.setAttribute('placeholder',"Paste Your Link or Certification Id");

    let Cearea=document.getElementById("Ce");
    let Cebutton=document.getElementById("cert");
    
    Cearea.insertBefore(newNode4,Cebutton);
    
}


function GenerateCv(){
    console.log("hello");
    let nameField=document.getElementById("namefield").value;
    let nameT1=document.getElementById("NameTemp");
    nameT1.innerHTML=nameField;
    document.getElementById("Name2Temp").innerHTML=nameField;

    document.getElementById("ConTemp").innerHTML=document.getElementById("confield").value;
    document.getElementById("AddTemp").innerHTML=document.getElementById("addfield").value;
    document.getElementById("MailTemp").innerHTML=document.getElementById("mailfield").value;
    document.getElementById("LinkTemp").innerHTML=document.getElementById("linkfield").value;
    document.getElementById("GitTemp").innerHTML=document.getElementById("gitfield").value;
    document.getElementById("LeetTemp").innerHTML=document.getElementById("leetfield").value;
    document.getElementById("softTemp").innerHTML=document.getElementById("softfield").value;


    document.getElementById("ObjectiveTemp").innerHTML=document.getElementById("objField").value;

      let aqua=document.getElementsByClassName("aqfield");
      let str=" ";
     for(let e of aqua){
     str= str + `<li>${e.value}</li>`;
    }
    document.getElementById("AqTemp").innerHTML= str;

    let Wex=document.getElementsByClassName("wefield");
    let str1=" ";
   for(let e of Wex){
   str1= str1 + `<li>${e.value}</li>`;
  }
  
  document.getElementById("WeTemp").innerHTML= str1;


  let Pro=document.getElementsByClassName("prjfield");
  let str2=" ";
 for(let e of Pro){
 str2= str2 + `<li>${e.value}</li>`;
}
document.getElementById("PrTemp").innerHTML= str2;
    
let Cert=document.getElementsByClassName("cefield");
let str3=" ";
for(let e of Cert){
str3= str3 + `<li>${e.value}</li>`;
}
document.getElementById("ClTemp").innerHTML= str3;  

let file=document.getElementById("photofield").files[0];
console.log(file);

let reader= new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);
reader.onloadend=function(){
    document.getElementById("ImgTemp").src=reader.result;
    }




document.getElementById("cvform").style.display="none";
document.getElementById("Yourcv").style.display="block";
document.getElementById("Printbtn").style.display="block";
}

function PrintCV(){
    document.getElementById("Printbtn").style.display="none";
    window.print();
}
function GoBack(){
    document.getElementById("cvform").style.display="block";
    document.getElementById("Yourcv").style.display="none";
document.getElementById("Printbtn").style.display="none";
}
