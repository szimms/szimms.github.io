   const carouselContainer = document.querySelector('.carousel-container');
   const carouselItems = document.querySelector('.carousel');
   const prevButton = document.querySelector('.left-arrow');
   const nextButton = document.querySelector('.right-arrow');
   const items = Array.from(document.querySelectorAll('.item'));
   let currentItem = 0;

   let dropdown = document.querySelector('.dropdown');
   let dropdownContent = document.querySelector('.evansLeadershipDropdown');
   let dropdownContent2 = document.querySelector('.evansLeadershipDropdown2');
   let dropdownContent3 = document.querySelector('.evansLeadershipDropdown3');
let dropdownContent4 = document.querySelector('.evansLeadershipDropdown4');
   
   
   
   function showItem(index){
       items.forEach(item => item.style.display = 'none');
       items[index].style.display = 'flex';
   }

   showItem(currentItem);
   
   prevButton.addEventListener('click', () => {
       currentItem = (currentItem - 1 + items.length) % items.length;
       showItem(currentItem);
   });
   
   nextButton.addEventListener('click', () => {
       currentItem = (currentItem + 1) % items.length;
       showItem(currentItem);
   });



    function myFunction() {
        var x = document.getElementById("menuUL");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    function evansDropdown(){
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
    }

    function evansDropdown2(){
        if (dropdownContent2.style.display === "block") {
            dropdownContent2.style.display = "none";
        } else {
        dropdownContent2.style.display = "block";
        }
    }

    function evansDropdown3(){
        if (dropdownContent3.style.display === "block") {
            dropdownContent3.style.display = "none";
        } else {
        dropdownContent3.style.display = "block";
        }
    }

    function evansDropdown4(){
        if (dropdownContent4.style.display === "block") {
            dropdownContent4.style.display = "none";
        } else {
        dropdownContent4.style.display = "block";
        }
    }

