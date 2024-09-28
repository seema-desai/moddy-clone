// console.log("hello");
//  var shop=document.querySelector(".shop-sec");
//  const shoplists=document.querySelector(".shop-lits");
//  const shopicon=document.querySelector(".shop-sec i");

vartoggleBtnIcon=document.querySelector(".shop i");


        document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

toggleBtnIcon.classList = isOpen
?'fa-solid fa-xmark'
:'fa-solid fa-bars';


 
// document.addEventListener('DOMContentLoaded', function() {
//     var shop=document.querySelector(".shop-sec");
  
//     shop.addEventListener('mouseover', function() {
//       shop.classList.add('hovered');
//     });
  
//     shop.addEventListener('mouseout', function() {
//       // Uncomment the next line if you want to remove the class when the mouse leaves
//       //element.classList.remove('hovered');
//     });
//   });


   
// //     shop.onclick=function(){
//           shoplists.style.display="block";
//          shoplists.classList.add("active");

//  }


// const toggleBtn = document.querySelector('.toggle_btn')
// const toggleBtnIcon = document.querySelector('.toggle_btn i')
// const dropDownMenu = document.querySelector('.dropdown_menu')

// toggleBtn.onclick = function(){

//     dropDownMenu.classList.toggle('open')
//     const isOpen = dropDownMenu.classList.contains('open')

//     toggleBtnIcon.classList = isOpen
//         ?'fa-solid fa-xmark'
//         :'fa-solid fa-bars'
// }



// const togshopgleBtn = document.querySelector('.toggle_btn')
// const toggleBtnIcon = document.querySelector('.toggle_btn i')
// const dropDownMenu = document.querySelector('.dropdown_menu')

// shop.onclick = function(){

//     shoplists.classList.toggle('open')
//     const isOpen = shoplists.classList.contains('open');
//      shopicon.classList = isOpen
//         ?'fa-solid fa-chevron-up'
//          :'fa-solid fa-angle-down'
// }




// link.addEventListener('click', (e) => {
//     e.preventDefault();

//     // Get the target section id
//     // const targetId = link.getAttribute('data-target');
//     // const targetSection = document.getElementById(targetId);

//     // Check if the section is already visible
//     const isVisible = targetSection.classList.contains('active');

//     // Hide all sections
//     // document.querySelectorAll('.section').forEach(section => {
//         shoplists.classList.remove('active');
//     // });

//     // Toggle the visibility of the target section
//     if (!isVisible) {
//         shop.classList.add('active');
//     }
// });
