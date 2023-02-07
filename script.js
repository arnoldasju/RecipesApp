const ingredientsMain = document.querySelector(".ingredientsMain");
const addIngredient = document.querySelector(".addIngredient");
const getPhotoBtn = document.querySelector(".getPhoto");
const previewBtn = document.querySelector(".preview");
const titleInp = document.querySelector("#title");
const descriptionInp = document.querySelector("#description");
const caloriesInp = document.querySelector("#calories");
const photoInp = document.querySelector("#photo");
let photoUrl = document.querySelector("#photo");
let recipeList = [];
let allIngredients = [];
let recipe = {
    title: "",
    ingredients: [],
    description: "",
    calories: "",
    photo: "",
}

const getPhoto = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
            photoUrl.value = data.meals[0].strMealThumb;
            console.log(data.meals[0].strMealThumb);
        })
}

function updateRecipe() {
    const inputsIngredients = document.querySelectorAll(".ingredient");

    inputsIngredients.forEach(ingredient => {
        allIngredients.push(ingredient.value);
    });

    recipe = {
        title: titleInp.value,
        ingredients: allIngredients,
        description: descriptionInp.value,
        calories: caloriesInp.value,
        photo: photoInp.value
    }

    console.log(recipe);
}

function appendPreview() {
    const img = document.querySelector(".previewImg");
    const title = document.querySelector(".prevTitle");
    const description = document.querySelector(".prevDesc");
    const calories = document.querySelector(".prevCal");
    const ingredientsList = document.querySelector(".ingredientList");

    ingredientsList.innerHTML = "";
    let ingredients = recipe.ingredients;

    ingredients.forEach(ingredient => {
        let listItem = document.createElement("li");
        ingredientsList.appendChild(listItem);
        listItem.innerText = ingredient
    });

    img.src = recipe.photo;
    title.innerText = recipe.title;
    description.innerText = recipe.description;
    calories.innerText = "Calories: " + recipe.calories;
}



addIngredient.onclick = () => {
    let input = document.createElement("input");
    input.placeholder = "Ingredient";
    input.type = "text";
    input.classList.add("w-75", "my-2", "ingredient");
    ingredientsMain.appendChild(input);
}

getPhotoBtn.onclick = () => {
    getPhoto();
}

previewBtn.onclick = () => {

    updateRecipe();
    appendPreview();
}