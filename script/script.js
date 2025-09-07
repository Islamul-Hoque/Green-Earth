// Reusable Function
function getId(id){
    return document.getElementById(id);
}

const loadCategories =()=> {  //categories btn name load from Api
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
}

const loadTreesCard =(id)=> {  //load Trees Card from Api
    
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => displayTreesCard(data.plants));
}

const displayTreesCard =(TreesCards)=>{  //Display Trees Card
    const treesCardContainer = getId('Trees-Card-Container');
    treesCardContainer.innerHTML = '';
        TreesCards.forEach(TreesCard => {
            const TreesCardDiv = document.createElement('div')
            TreesCardDiv.innerHTML = `
                <div class="bg-white rounded-[1rem] shadow-sm p-4 flex flex-col h-full">
                    <img class="rounded-[0.8rem] w-full h-56 md:h-52 object-cover" src="${TreesCard.image}" alt="">
                    <h3 class="font-semibold  text-[1.1rem] mt-3">Mango Tree</h3>
                    <p class="mt-2 text-[0.8rem] flex-grow">${TreesCard.description}</p>
                    <div class="flex justify-between items-center my-3 ">
                        <div class="text-[#15803d] bg-[#dcfce7] text-[0.8rem] px-4 py-2 rounded-[1rem]">${TreesCard.category}</div>
                        <div class="font-semibold">৳<span>${TreesCard.price}</span></div>
                    </div>
                    <button class="btn btn-success shadow-none text-white w-full rounded-[0.8rem]">Plant a Tree</button>
                </div>
            `
            treesCardContainer.appendChild(TreesCardDiv)
        });
}

const displayCategories =(Categories)=>{ // Display categories btn name 
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