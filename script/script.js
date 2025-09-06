// Reusable Function
function getId(id){
    return document.getElementById(id);
}

const loadCategories =()=> {
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => console.log(data));
}

