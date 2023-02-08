const main = document.querySelector(".main");
const btn = document.querySelector(".filter");
const inputs = document.querySelectorAll("input");
let recipes = [];

function appendHtml() {
    const recipes = JSON.parse(localStorage.getItem("recipes"));

    main.innerHTML = "";
    recipes.recipe.map(recipe => {
        main.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${recipe.photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p>${recipe.description}</p>
                <p>${recipe.ingredients}</p>
                <p>Calories: ${recipe.calories}</p>
            </div>
        </div>
        `
    })

    console.log(recipes);
}

appendHtml();


btn.onclick = () => {
    const values = {
        title: Number(inputs[0].value),
        calories: Number(inputs[1].value),
        ingredients: Number(inputs[2].value)
    }

    let result = recipes;

    if(values.title) result = recipes.filter(recipe => recipe.title === values.title)

    console.log(result);
    appendHtml(result);
}

