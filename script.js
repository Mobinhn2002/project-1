let navbarIcon = document.querySelector('nav button i')

document.querySelector('nav button').addEventListener('click',()=>{
    document.querySelector('header nav .secondList').classList.toggle('active')
    if(navbarIcon.classList.contains('fa-bars')){
        navbarIcon.classList.replace('fa-bars','fa-xmark')
    }else{
        navbarIcon.classList.replace('fa-xmark','fa-bars')
    }
})