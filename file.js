
var container=document.createElement("div");
container.setAttribute("class","container");
var row= document.createElement("div");
row.setAttribute("class","row");
var column1= document.createElement("div");
column1.setAttribute("class", "col-2 bg-primary");


var column2= document.createElement("div");
column2.setAttribute("class","col-8 bg-success");

var rowa= document.createElement("div");
rowa.setAttribute("class","row");
var columna= document.createElement("div");
columna.setAttribute("class", "col-6");

var rowb= document.createElement("div");
rowb.setAttribute("class","row");
var columnc= document.createElement("div");
columnc.setAttribute("class", "col-12 p-3");
columnc.innerHTML='click any of below pages';
var columnl= document.createElement("div");
columnl.setAttribute("class", "col-12 p-3");
columnl.innerHTML='click any of below pages';
var columnm= document.createElement("div");
columnm.setAttribute("class", "col-12 p-3");
columnm.innerHTML='click any of below pages';
var columnn= document.createElement("div");
columnn.setAttribute("class", "col-12 p-3");
columnn.innerHTML='click any of below pages';
var columno= document.createElement("div");
columno.setAttribute("class", "col-12 p-3");
columno.innerHTML='click any of below pages';

rowb.append(columnc, columnl, columnm, columnn, columno);
columna.append(rowb);

var columnb= document.createElement("div");
columnb.setAttribute("class", "col-6 bg-primary");

var rowc= document.createElement("div");
rowc.setAttribute("class","row");
var columnd= document.createElement("div");
columnd.setAttribute("class", "col-12 p-3");
columnd.innerHTML='click any of below pages';
var columne= document.createElement("div");
columne.setAttribute("class", "col-12 p-3");
columne.innerHTML='click any of below pages';
var columnf= document.createElement("div");
columnf.setAttribute("class", "col-12 p-3");
columnf.innerHTML='click any of below pages';
var columng= document.createElement("div");
columng.setAttribute("class", "col-12 p-3");
columng.innerHTML='click any of below pages';
var columnh= document.createElement("div");
columnh.setAttribute("class", "col-12 p-3");
columnh.innerHTML='click any of below pages';


rowc.append(columnd,columne,columnf,columng,columnh);
columnb.append(rowc);

rowa.append(columna,columnb);
column2.append(rowa);

var column3= document.createElement("div");
column3.setAttribute("class","col-2 bg-danger");


row.append(column1,column2,column3);
container.append(row);
document.body.append(container);

var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m'];
  console.log(arr);
  for(var i=1;i<=10;i++){
  
    arr[i] = document.createElement('button');
 
 arr[i].innerHTML=i;
 
 document.body.appendChild(arr[i]);
 
 }

 var request=new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
request.send();
var data;

request.onload = function fun(){
var data = JSON.parse(this.response);

console.log(data);

var arr1=[columnc,columnl,columnm,columnn,columno,columnh,columng,columnf,columne,columnd]
var b=function(){
  for(var i=0;i<5;i++){

    arr1[i].innerHTML='name: '+data[i].name+', '+'mail: '+ data[i].email +', '+'id: '+data[i].id;
   
  }
  for(var j=9;j>=5;j--){
    arr1[j].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
    
  }
}
arr[1].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
     for(var j=10;j<15;j++){
    arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
    i=i+1;
  }}
  for(var i=9;i>=5;i--){
    for(var j=19;j>=15;j--){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i-1;;
 }}

}
arr[2].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=20;j<25;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=29;j>=25;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[3].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=30;j<35;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=39;j>=35;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[4].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=40;j<45;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=49;j>=45;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[5].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=50;j<55;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=59;j>=55;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[6].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=60;j<65;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=69;j>=65;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[7].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=70;j<75;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=79;j>=75;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[8].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=80;j<85;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=89;j>=85;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[9].onclick=b;

var b=function(){
  for(var i=0;i<5;i++){
    for(var j=90;j<95;j++){
   arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
   i=i+1;
 }}
 for(var i=9;i>=5;i--){
   for(var j=99;j>=95;j--){
  arr1[i].innerHTML='name: '+data[j].name+', '+'mail: '+ data[j].email +', '+'id: '+data[j].id;
  i=i-1;;
}}
}
arr[10].onclick=b;
}



  


