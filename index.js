const menu = [
    {
        id: 1,
        name: 'Sausage thin crust Pizza',
        category: 'breakfast',
        img: "pizza1.jpg",
        Price: 15.00,
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s` 
    },
    {
        id: 2,
        name: 'Meatiest Party Pizza',
        category: 'breakfast',
        img: 'pizza2.jpg',
        Price: 25.00,
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`  
    },
    {
        id: 3,
        name: 'Vegetarian Hawaian Pizza',
        category: 'lunch',
        img: 'pizza3.jpg',
        Price: 5.00,
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    },
    {
        id: 4,
        name: 'United state Combo Pizza',
        category: 'dinner',
        img: 'pizza4.jpg',
        Price: 20.00,
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`     
    },
    {
        id: 5,
        name: 'Korean Street rounded Pizza',
        name: 'Pepperoni Pizza',
        category: 'lunch',
        img: 'pizza5.jpg',
        Price: 35.00,
        info: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`   
    },
]

const list = document.querySelector('.list-item');
const btns = document.querySelector('.buttons');

window.addEventListener('DOMContentLoaded',()=>{
    displayItems(menu)
    displayButtons(menu)
});

function displayItems(menuItem){
    let menuItems = menuItem.map((item)=>{
        return  `<div class="menu">
                    <div class="image-container">
                        <img src="${item.img}" alt="pizza">
                    </div>
                    <div class="info">
                        <p id="title">${item.name}<span>$${item.Price}</span></p>
                        <p>${item.info}</p>
                    </div>
                </div>`
    }).join('');
    list.innerHTML = menuItems;
}

function displayButtons(menuIitem){
    let menuBtn = menuIitem.reduce((values,item)=>{
        if(!values.includes(item.category))
            values.push(item.category);
        return values
    },['all']);
    let displayBtn = menuBtn.map((item)=>{
       return `<button class="field-btn" data-id=${item}>${item}</button>`;
    }).join('');
    btns.innerHTML = displayBtn;
    let itembtns = btns.querySelectorAll('.field-btn');
    itembtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            let data = e.currentTarget.dataset.id;
            let filtered = menuIitem.filter((item)=>{
                if(data === item.category){
                    return item;
                }
            });
            if(data === 'all'){
                displayItems(menu);
            }else{
                displayItems(filtered);
            }
        });
    });
}
