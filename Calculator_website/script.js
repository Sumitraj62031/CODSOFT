let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button')
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            // eval is a in-built functionof javasript It evaluate all the operation which is present in string 
            string=eval(string);
            //then it show the eavaluated value at input .
            input.value=string;
        }
        //if we click AC i.e all clear ṭhen string become empty 
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1)
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;

        }
        
    })
})