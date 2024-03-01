function add(n)
{
  if(n<=9)
  {
    return "0"+ n 
  }
  else 
  {
    return n
  }	
}
function gettime()
{
  let d=document.getElementById("date");
  let mon=document.getElementById("mon");
  let y=document.getElementById("year");
  let h=document.getElementById("hour");
  let m=document.getElementById("min");
  let s=document.getElementById("sec");
  let date=new Date();
  let dat=date.getDate();
  let month=date.getMonth();
  let year=date.getFullYear();
  let hour=date.getHours();
  let mini=date.getMinutes();
  let seco=date.getSeconds();
  let day=date.getDay();
  if(hour<12)
  {
	 let a1=document.getElementsByName("bn");
	 a1[0].style.accentColor="red";
	 a1[0].setAttribute("checked",true);
  }
  else
  {
	 a1=document.getElementsByName("bn");
	 a1[1].style.accentColor="red";
	 a1[1].setAttribute("checked",true);
  }
  if(hour>12)
  {
	hour=hour-12;
  }
  month=month+1;
  month=add(month);
  dat=add(dat);
  hour=add(hour);
  mini=add(mini);
  seco=add(seco);
  console.log(hour,mini,seco,dat,month,year);
  d.innerHTML=dat;
  mon.innerHTML=month;
  y.innerHTML=year;
  h.innerHTML=hour;
  m.innerHTML=mini;
  s.innerHTML=seco;
  let rel=document.getElementsByName("day");
  console.log(rel);
  for(let i=0;i<rel.length;i++)
  {
    if(rel[i].value==day)
	{
	  rel[i].style.accentColor="red";
	  rel[i].setAttribute("checked",true);
	}
  }
  let ap=document.getElementsByName("bn");
  console.log(ap);
}
setInterval(gettime,1000);