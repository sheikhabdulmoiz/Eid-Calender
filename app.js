var date=new Date();
// console.log(date);
// console.log(date.getDate);
// console.log(document.getElementById());

// var firstEidDate=new Date("10 july 2022").getDate()-new Date().getDate()
// var first=firstEidDate+"d"
// var head=document.getElementById("hd1")
// head.innerHTML=first

// var secondEidDate=new Date("11 july 2022").getDate()-new Date().getDate()
// var second=secondEidDate+"d"
// var head=document.getElementById("hd2")
// head.innerHTML=second

// var thirdEidDate=new Date("12 july 2022").getDate()-new Date().getDate()
// var third=thirdEidDate+"d"
// var head=document.getElementById("hd3")
// head.innerHTML=third

// // var seconds=new Date().getTime()
// // console.log(seconds);
// // var neo =new Date("3/july2022").getTime()
// // console.log(neo);

//----------------------------------------
var firstEidSeconds=new Date("10/july/2022").getTime()-new Date().getTime();
var fSeconds=Math.round(firstEidSeconds/1000)
// console.log(fSeconds);

var firstEidMinutes=fSeconds/60
var fMinutes=Math.round(firstEidMinutes);
// console.log(fMinutes);

var firstEidHours=fMinutes/60
var fHours=Math.round(firstEidHours);
// console.log(fHours);

var firstEidDays=fHours/24
var fdays=Math.round(firstEidDays);
// console.log(fdays);

var totalMin, hoursRemaining, minRemaining;
totalMin = 1440 - 60 * (new Date().getHours()) - (new Date().getMinutes());
hoursRemaining = totalMin / 60;
minRemaining = totalMin % 60;
var timeLeft=Math.trunc(hoursRemaining)+"::" + minRemaining;

var head=document.getElementById("hd1")
head.innerHTML=fdays+"d "+fHours+"h "+fMinutes+"m "+fSeconds+"s left"
var head=document.getElementById("hd4")
head.innerHTML=fdays+"d "+Math.trunc(hoursRemaining)+"h "+minRemaining+"m left"
//----------------------------------------

var secondEidSeconds=new Date("11/july/2022").getTime()-new Date().getTime();
var sSeconds=Math.round(secondEidSeconds/1000)
// console.log(sSeconds);

var secondEidMinutes=sSeconds/60
var sMinutes=Math.round(secondEidMinutes);
// console.log(sMinutes);

var secondEidHours=sMinutes/60
var sHours=Math.round(secondEidHours);
// console.log(sHours);

var secondEidDays=sHours/24
var sdays=Math.round(secondEidDays);
// console.log(sdays);
var head=document.getElementById("hd2")
head.innerHTML=sdays+"d "+sHours+"h "+sMinutes+"m "+sSeconds+"s left"
var head=document.getElementById("hd5")
head.innerHTML=sdays+"d "+Math.trunc(hoursRemaining)+"h "+minRemaining+"m left"

//----------------------------------------

var thirdEidSeconds=new Date("12/july/2022").getTime()-new Date().getTime();
var tSeconds=Math.round(thirdEidSeconds/1000)
// console.log(tSeconds);

var thirdEidMinutes=tSeconds/60
var tMinutes=Math.round(thirdEidMinutes);
// console.log(tMinutes);

var thirdEidHours=tMinutes/60
var tHours=Math.round(thirdEidHours);
// console.log(tHours);

var thirdEidDays=tHours/24
var tdays=Math.round(thirdEidDays);
// console.log(tdays);
var head=document.getElementById("hd3")
head.innerHTML=tdays+"d "+tHours+"h "+tMinutes+"m "+tSeconds+"s left"
var head=document.getElementById("hd6")
head.innerHTML=tdays+"d "+Math.trunc(hoursRemaining)+"h "+minRemaining+"m left"

//-------------------------------------

var head=document.getElementById("hd7")
head.innerHTML="Sunday, July 2022"	

var head=document.getElementById("hd8")
head.innerHTML="Monday, July 2022"	

var head=document.getElementById("hd9")
head.innerHTML="Tuesday, July 2022"	























//  var today = new Date();
// var doomsday = new Date("July 10, 2022");
//  var msToday = today.getTime();
//  var msDoomsday = doomsday.getTime();
// var msDiff =  msToday-msDoomsday;
// // var dDiff = msDiff / (1000 * 60 * 60 * 24);
// //  dDiff = Math.floor(dDiff);
// console.log(msDiff);
// console.log(msToday);
// console.log(msDoomsday+msDiff);

var news=new Date("10/july/2022").getTime()
var old=new Date().getTime()
var diff=news-old
