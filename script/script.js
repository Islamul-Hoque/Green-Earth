// Reusable Function
function getId(id){
    return document.getElementById(id);
}

const loadCategories =()=> {  //categories btn name load from Api
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
}


const displayCategories =(Categories)=>{ // display categories btn name 
    const categoriesContainer = getId('categories-Container');
    categoriesContainer.innerHTML = ''; 
        Categories.forEach(category => {
            const categoriesDiv = document.createElement('div');
            categoriesDiv.innerHTML = ` <button onclick="loadTreesCard('${category.id}')" class="btn btn-outline border-none btn-success w-full Black my-1">${category.category_name}</button> `
            categoriesContainer.appendChild(categoriesDiv)
            // console.log(category);
        });
}

loadCategories();