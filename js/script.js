//JS

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});

// let expand = document.getElementsByClassName("menu")[0];
// let open = false;

// function openExpand() {
//     open = !open;
//     if(open){
//         expand.setAttribute('class','menu expand');
//     }else{
//         expand.setAttribute('class','menu collapse');
//     }
// }