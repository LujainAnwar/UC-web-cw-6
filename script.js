function BMI(weight,height){
 return   weight / (height * height)
   
    
} 
let bmi = BMI(56,160);
console.log(bmi);

function Status(BMI){
if(BMI<18.5)
{
return "لديك نقص في الوزن"
}
else if(BMI>=18.5 && BMI<25)
{
  return  "وزنك صحي" 
} 
else(BMI>=25)
{
    return"لديك زيادة في الوزن"
}

}
function calculate(){
    let weight=document.getElementById("weight").value
    let height=document.getElementById("height").value
let bmiresult = BMI(weight,height);
let desc=Status(bmiresult);
bmiresult=document.getElementById("result").innerText=bmiresult+""+desc
}
