const ingredientsMain = document.querySelector(".ingredientsMain");
const addIngredient = document.querySelector(".addIngredient");
const getPhotoBtn = document.querySelector(".getPhoto");
const previewBtn = document.querySelector(".preview");
const titleInp = document.querySelector("#title");
const descriptionInp = document.querySelector("#description");
const caloriesInp = document.querySelector("#calories");
const photoInp = document.querySelector("#photo");
const labels = document.querySelectorAll("label");
const addToListBtn = document.querySelector(".addList");
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

function previewValidation() {
    let invalid = false;

    if(recipe.title.length === 0) {
        titleInp.classList.add("invalid");
        invalid = true;
    } else {
        titleInp.classList.remove("invalid");
    }

    if(recipe.description.length === 0) {
        descriptionInp.classList.add("invalid");
        invalid = true;
    } else {
        descriptionInp.classList.remove("invalid");
    }

    if(recipe.ingredients.length < 3) {
        labels[1].classList.add("invalid");
        allIngredients = [];
        invalid = true;
    } else {
        labels[1].classList.remove("invalid");
    }

    if(recipe.calories.length === 0) {
        caloriesInp.classList.add("invalid");
        invalid = true;
    } else {
        caloriesInp.classList.remove("invalid");
    }

    console.log(recipe)

    if(invalid) return

    appendPreview();
    console.log(invalid);
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
        listItem.innerText = ingredient;
    });

    img.src = recipe.photo;
    title.innerText = recipe.title;
    description.innerText = recipe.description;
    calories.innerText = "Calories: " + recipe.calories;
}

function addToListValidation() {
    let invalid = false;

    if(recipe.photo.length === 0) {
        photoInp.classList.add("invalid");
        invalid = true;
    } else {
        photoInp.classList.remove("invalid");
    }

    console.log(recipe)
    console.log(invalid);
    if(invalid) return

    localStorage.setItem("recipe", JSON.stringify(recipe));
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
    previewValidation();
}

addToListBtn.onclick = () => {
    addToListValidation();

}