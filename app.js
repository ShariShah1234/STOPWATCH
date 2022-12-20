// var showSec = document.getElementById("displaysec")
// var getMinInp = document.getElementById("getMin")
// var getHourInp = document.getElementById("getHour").value
//     console.log(e.target.value)

// }))

// var mint = +getMinInp.value--;
// var hour = +getHourInp.value--;
const display=document.querySelector("#display")
const show=document.querySelector("#show")
let intervaldis 
function startTimer(params) {
    var min=Number(document.getElementById("getmin").value||"")
    var sec=Number(document.getElementById("getsec").value||"")
    // const seconds=document.querySelector("#seconds")
    
      
    if (!min.toString().trim()||!sec.toString().trim()) {
        // window.alert("kindly give minutes and seconds ")

        return
    }else{
        if (min!==0&&sec!==0) {
            
            console.log("gg")
          intervaldis =setInterval(()=>{
              
              
    if (sec===0&&min===0) {
        clearInterval(intervaldis)
        
    }else{
        sec=sec-1
        if (sec<=0&&min!==0) {
                 sec=60
                 min=min-1
            
        }



    }
    //   sec=sec-1
    //   if (sec<=0) {
    //      sec=0
    //      min=min-1
    //      if (min<=0&&sec<=0) {
    //          clearInterval(intervaldis)
            
             
    //         }
    //         sec=2
      
          
    //  }
     
   
     
    //  console.log(min+":"+sec)

           display.innerHTML=`${min+":"+sec}`
           show.innerHTML=`${min+":"+sec}`
           
         
          },1000)
          
          return()=>clearInterval(interval)
          
           
        }




    }




   



















    
}




function reset(params) {

    clearInterval(intervaldis)
    display.innerHTML=`00:00`
    show.innerHTML=`00:00`

    
}


// clearInterval(intervaldis)



function pause(){
    clearInterval(intervaldis)
    

}









// function timer(){

//     sec--
//     if(sec == 0){
//         sec=60;
//         getMinInp.value--;
    
        
//          if(getMinInp.value == 0){
//             getMinInp.value = 60 ;
//             getHourInp.value--;
            
//         }
//     }
//     showSec.innerHTML = sec;
//     var min = getMinInp.value;
//     var hour = getHourInp.value;
//     document.getElementById("show").innerHTML = hour + " hr: " + min + " min: " + sec + " sec ";
//     if (min == 0 && hour == 0){
        
//             clearInterval(interval);
//             document.getElementById("show").innerHTML = "TIME UP";
//     }
    
    

// }

// function startTimer(){
//   interval = setInterval 
// (function()  {
//     timer();
// }, 100);
// }

// function pause(){
//     clearInterval (interval);
// }

// function reset(){
//     showSec.innerHTML=0;
//     getMinInp.value= 0;
//     getHourInp.value= 0;
    
//     document.getElementById("show").innerHTML = getMinInp.value + " hr: " + getHourInp.value + " min: " + showSec.innerHTML + " sec ";
// }