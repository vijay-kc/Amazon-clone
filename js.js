// side bar menu
const sidebarNavigation = document.getElementById("sidebar-container-navigation");
const openSidebarNavigation = document.getElementById("open-navigation")
const closeSidebarNavigation = document.getElementById("sidebar-close")
console.log(openSidebarNavigation);
openSidebarNavigation.addEventListener("click",()=>{
    sidebarNavigation.classList.toggle("sidebar-show")
});
closeSidebarNavigation.addEventListener("click",()=>{
    sidebarNavigation.classList.toggle("sidebar-show")
});
