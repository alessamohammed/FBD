var timestamp = 1607110465663
var date = new Date(timestamp);

 const dateString = "year:"+date.getFullYear()+" Month: "+(date.getMonth()+1) +" Week: "+Math.ceil(date.getDate()/7)+" Day: "+date.getDate();
console.log(dateString);