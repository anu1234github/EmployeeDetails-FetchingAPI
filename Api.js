
function getdata(a)
{
    url="https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json();     
    }).then((data)=>{
       console.log(data);
       var value=data; 
       //avatar      
           var img1=(value['data'][0]['avatar']);
           document.getElementById('E1img').src = img1;
           var img2=(value['data'][1]['avatar']);
           document.getElementById('E2img').src = img2;
           var img3=(value['data'][2]['avatar']);
           document.getElementById('E3img').src = img3;
           var img4=(value['data'][3]['avatar']);
           document.getElementById('E4img').src = img4;
           var img5=(value['data'][4]['avatar']);
           document.getElementById('E5img').src = img5;
           var img6=(value['data'][5]['avatar']);
           document.getElementById('E6img').src = img6;

           //names

           var first1=(value['data'][0]['first_name']);
           var last1=(value['data'][0]['last_name']);
           document.getElementById('E1name').innerHTML =first1+" "+last1;
           var first1=(value['data'][1]['first_name']);
           var last1=(value['data'][1]['last_name']);
           document.getElementById('E2name').innerHTML =first1+" "+last1;
           var first1=(value['data'][2]['first_name']);
           var last1=(value['data'][2]['last_name']);
           document.getElementById('E3name').innerHTML =first1+" "+last1;
           var first1=(value['data'][3]['first_name']);
           var last1=(value['data'][3]['last_name']);
           document.getElementById('E4name').innerHTML =first1+" "+last1;
           var first1=(value['data'][4]['first_name']);
           var last1=(value['data'][4]['last_name']);
           document.getElementById('E5name').innerHTML =first1+" "+last1;
           var first1=(value['data'][5]['first_name']);
           var last1=(value['data'][5]['last_name']);
           document.getElementById('E6name').innerHTML =first1+" "+last1;
           
     //Emails

      var mail1=(value['data'][0]['email']);
           document.getElementById('mail1').innerHTML=mail1;
           var mail2=(value['data'][1]['email']);
           document.getElementById('mail2').innerHTML=mail2;
           var mail3=(value['data'][2]['email']);
           document.getElementById('mail3').innerHTML=mail3;
           var mail3=(value['data'][3]['email']);
           document.getElementById('mail4').innerHTML=mail3;
           var mail3=(value['data'][4]['email']);
           document.getElementById('mail5').innerHTML=mail3;
           var mail3=(value['data'][5]['email']);
           document.getElementById('mail6').innerHTML=mail3;
        })
}