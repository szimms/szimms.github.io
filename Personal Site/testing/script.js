   const carouselContainer = document.querySelector('.carousel-container');
   const carouselItems = document.querySelector('.carousel');
   const prevButton = document.querySelector('.left-arrow');
   const nextButton = document.querySelector('.right-arrow');
   const items = Array.from(document.querySelectorAll('.item'));
   let currentItem = 0;
   
   
   
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