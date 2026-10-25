//your JS code here. If required.
let btn =document.getElementById("btn")
let username =document.getElementById("name")
let age =document.getElementById("age")

btn.addEventListener("click",()=>{
 if(age.value=="" || username.value==""){
  alert("Please enter valid details.")
 }else{
    ageValidation().then((data)=>{
       alert(data)
    }).catch((err)=>{
       alert(err)
    })
 }
})

function ageValidation(){
return new Promise((resolve,reject)=>{
    if(age.value>=18){
       setTimeout(()=>{
         resolve("Welcome, . You can vote.")
       },4000)
    }else{
        setTimeout(()=>{
         reject("Oh sorry . You aren't old enough.")
       },4000)
    }
})
}