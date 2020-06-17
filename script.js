var sum=0
     var details=document.getElementById('details')
     details.addEventListener('click',show)
     function show(){
     var name=document.getElementById('name')
     var newcol=document.createElement('div')
     document.getElementById('id1').append(newcol)
     newcol.innerHTML=name.value
     var units=document.getElementById('units')
     var newco=document.createElement('div')
    document.getElementById('id2').append(newco)
    newco.innerHTML=units.value  
   }
    var total=document.getElementById('totalunits')
    total.addEventListener('click',display)
    function display(){
    var sum=0
    var all=document.querySelectorAll('#id2>div')
    for(var i=0;i<all.length;i++)
  {
    sum=sum+Number(all[i].innerHTML)
  }
    document.getElementById('id3').innerHTML='Total No Of Units: '+sum
  }
    var billgenerator=document.getElementById('billgenerator')
    billgenerator.addEventListener('click',billgenerate)
    function billgenerate(){
    var all=document.querySelectorAll('#id2>div')
    for(var i=0;i<all.length;i++)
  {
    sum=sum+Number(all[i].innerHTML)
  }
   var totalbill=document.getElementById('bill')
   if(sum<=100)
     totalbill.innerHTML='Net Bill Amount: Rs '+(4*sum)
   else if(sum<=300)
     totalbill.innerHTML='Net Bill Amount: Rs '+(400+(sum-100)*5)
   else if(sum<=500)
     totalbill.innerHTML='Net Bill Amount: Rs '+(400+1000+(sum-300)*7)
   else
     totalbill.innerHTML='Net Bill Amount: Rs '+(400+1000+1400+(sum-500)*10)
   billgenerator.removeEventListener('click',billgenerate)
 }