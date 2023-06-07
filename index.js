

let result=document.getElementById("result");
let searchbtn=document.getElementById("searchbtn");
 let url="https://themealdb.com/api/json/v1/1/search.php?s=";


searchbtn.addEventListener("click",()=>{
  let user=document.getElementById('user').value;
if(user.length==0){
  result.innerHTML=`<h3>input field cannot be empty</h3>`;
}
else{
  fetch(url + user)
  .then((response)=>response.json())
  .then((data)=>{
         let myMeal=data.meals[0];
      console.log(myMeal);
      console.log(myMeal.strMealThumb);
       console.log(myMeal.strMeal);
       console.log(myMeal.strArea);
       console.log(myMeal.strInstructions);
        let count=1;
       let ingredients=[];
      
       for(let i in myMeal){
         let ingredient="";
         let measure="";
          if(i.startsWith("strIngredient") && myMeal[i]){
              ingredient=myMeal[i];
              measure=myMeal[`strMeasure` + count];
              count+=1;
             ingredients.push(`${measure} ${ingredient}`);
         }
     }
      console.log(ingredients);
 
      result.innerHTML =`<img src=${myMeal.strMealThumb} height="200px" width="300px">
      <div class="details">
          <h3>${myMeal.strMeal}</h3>
          <h4>${myMeal.strArea}</h4>
          </div>
          <div id="ingredient-con"></div>
          <div id="recipe">
              
              <pre id="instructions">${myMeal.strInstructions}</pre>
         </div>
          
     `;
     let ingredientcon=document.getElementById("ingredient-con");
     let parent=document.createElement("ul");
      let Recipe=document.getElementById("recipe");
    
     ingredients.forEach((i)=>{
       let child=document.createElement("li");
       child.innerText=i;
       parent.appendChild(child);
       ingredientcon.appendChild(parent);
     });
    
  }).catch(()=>{
     result.innerHTML=`<h3>invalid input</h3>`;
   
  });
 }

 });



