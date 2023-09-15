const data = 
[
    {"title": "home","url" : "/"},
    {"title" : "producten","url" : "/producten/"},
    {"title": "overons","url" : "/overons/"},
    {"title": "contact","url" : "/contact/"}
];
window.onload = () =>{
function createMenuItems(data){
    const menuList = document.getElementById("menu")

    data.forEach(item => {
        const listItem = document.createElement("ul");
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.title;
        listItem.appendChild(link);
        menuList.appendChild(listItem);

    });
}

createMenuItems(data);
}