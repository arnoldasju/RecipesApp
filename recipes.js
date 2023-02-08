const main = document.querySelector(".main");

function getRecipes() {
    //const recipe = JSON.parse(localStorage.getItem("recipe"));
    const recipes = JSON.parse(localStorage.getItem("recipes"));
    //console.log(recipe)
    console.log(recipes);

    main.innerHTML = "";
    recipes.recipe.map(recipe => {
        main.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${recipe.photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    })
}

getRecipes();