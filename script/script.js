// Reusable Function
function getId(id){
    return document.getElementById(id);
}

// Add to Cart handle function
const addToCartBtn = (tree) => {
    const priceCardContainer = getId('price-Card-Container');

    const priceDiv = document.createElement('div');
    priceDiv.innerHTML = `
        <div class="bg-[#dcfce7] p-4 md:p-2 rounded-[0.6rem] my-2 flex justify-between items-center gap-1">
            <div>
                <h3 class="font-semibold mb-1">${tree.name}</h3>
                <div class="text-[0.8rem]">৳<span>${tree.price}</span> x 1</div>
            </div>
            <div><i class="cross fa-solid fa-xmark"></i></div>
        </div>`;
    priceCardContainer.appendChild(priceDiv);

    //Normal Total Price Calculations
    const initialPrice = getId('totalPrice').innerText;
    const totalPrice = Number(initialPrice) + Number(tree.price);
    getId('totalPrice').innerText = totalPrice;

    //Remove Product Icon Functionalities
    const crossBtn = priceDiv.querySelector('.cross');
    crossBtn.addEventListener('click', ()=>{
        const initialPrice = getId('totalPrice').innerText;
        const totalPrice = Number(initialPrice) - Number(tree.price);
        getId('totalPrice').innerText = totalPrice;
        priceDiv.remove();
    });
};

//Reusable Modal
const displayTreeModal = (modal)=>{
    const treesModal = getId('trees_modal');
    treesModal.innerHTML = `
        <div class="modal-box shadow-lg">
            <div class="bg-white space-y-2">
                <h2 class="font-semibold text-2xl">${modal.name}</h2>
                <img class="rounded-[0.6rem] w-full h-56 md:h-52 object-cover" src="${modal.image}" alt="${modal.name}">
                <div class="font-semibold mt-3">Category: <span class="font-normal">${modal.category}</span> </div>
                <div class="font-semibold">Price: <span class="font-normal">৳${modal.price}</span> </div>
                <div class="font-semibold">Description: <span class="font-normal">${modal.description}</span> </div>
            </div>
            <div class="modal-action">
                <form method="dialog"> <button class="btn">Close</button></form>
            </div>
        </div>`
    treesModal.showModal();
}

//categories single btn name load from Api
const loadCategories =()=> { 
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
}

//Load All Trees from Api
const loadAllTrees = ()=>{  
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => displayAllTrees(data.plants))
}

// Display All Trees
const displayAllTrees = (AllTrees)=>{
    const treesCardContainer = getId('Trees-Card-Container');
    treesCardContainer.innerHTML = '';

        AllTrees.forEach(AllTree => {
            const TreesCardDiv = document.createElement('div')
            TreesCardDiv.innerHTML = `
                <div class="bg-white rounded-[1rem] shadow-sm p-4 flex flex-col h-full">
                    <img class="rounded-[0.8rem] w-full h-56 md:h-52 object-cover" src="${AllTree.image}" alt="${AllTree.name}">
                    <h3 class="font-semibold  text-[1.1rem] mt-3 tree-Name cursor-pointer">${AllTree.name}</h3>
                    <p class="mt-2 text-[0.8rem] flex-grow">${AllTree.description}</p>
                    <div class="flex justify-between items-center my-3 ">
                        <div class="text-[#15803d] bg-[#dcfce7] text-[0.8rem] px-4 py-2 rounded-[1rem]">${AllTree.category}</div>
                        <div class="font-semibold">৳<span>${AllTree.price}</span></div>
                    </div>
                    <button class="addToCard btn btn-success shadow-none text-white w-full rounded-[0.8rem]">Add to Cart</button>
                </div>`
            treesCardContainer.appendChild(TreesCardDiv)

            // Add to Cart handle function
            TreesCardDiv.querySelector(".addToCard")
            .addEventListener('click', () => addToCartBtn(AllTree));

        // Only Name Click opens Modal
        TreesCardDiv.querySelector(".tree-Name")
        .addEventListener('click', () => displayTreeModal(AllTree));
    })
};

// Event listener for "All Trees" button
getId('all-Trees-Btn').addEventListener('click', () => {
    loadAllTrees();
});
loadAllTrees();

//load Trees Card from Api
const loadTreesCard =(id)=> {  
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => displayTreesCard(data.plants));
}

//Display Trees Card
const displayTreesCard =(TreesCards)=>{  
    const treesCardContainer = getId('Trees-Card-Container');
    treesCardContainer.innerHTML = '';

        TreesCards.forEach(TreesCard => {
            const TreesCardDiv = document.createElement('div')
            TreesCardDiv.innerHTML = `
                <div class="bg-white rounded-[1rem] shadow-sm p-4 flex flex-col h-full">
                    <img class="rounded-[0.8rem] w-full h-56 md:h-52 object-cover" src="${TreesCard.image}" alt="${TreesCard.name}">
                    <h3 class="font-semibold text-[1.1rem] mt-3 tree-Name cursor-pointer">${TreesCard.name}</h3>
                    <p class="mt-2 text-[0.8rem] flex-grow">${TreesCard.description}</p>
                    <div class="flex justify-between items-center my-3 ">
                        <div class="text-[#15803d] bg-[#dcfce7] text-[0.8rem] px-4 py-2 rounded-[1rem]">${TreesCard.category}</div>
                        <div class="font-semibold">৳<span>${TreesCard.price}</span></div>
                    </div>
                    <button class="addToCard btn btn-success shadow-none text-white w-full rounded-[0.8rem]">Add to Cart</button>
                </div>`
            treesCardContainer.appendChild(TreesCardDiv)

            // Add to Cart handle function
            TreesCardDiv.querySelector(".addToCard")
            .addEventListener('click', () => addToCartBtn(TreesCard));

            // Only Name Click opens Modal
            TreesCardDiv.querySelector(".tree-Name")
            .addEventListener('click', () => displayTreeModal(TreesCard));
        });
}

// Display categories btn name 
const displayCategories =(Categories)=>{ 
    const categoriesContainer = getId('categories-Container');
    categoriesContainer.innerHTML = ''; 
        Categories.forEach(category => {
            const categoriesDiv = document.createElement('div');
            categoriesDiv.innerHTML = ` <button onclick="loadTreesCard('${category.id}')" class="btn btn-outline text-left justify-start border-none btn-success w-full Black my-1">${category.category_name}</button> `
            categoriesContainer.appendChild(categoriesDiv)
        });
}

loadCategories();