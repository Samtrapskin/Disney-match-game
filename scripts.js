const cards = document.querySelectorAll('.memory-card');
const button = document.querySelectorAll('.new-game-button');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    //first click
      hasFlippedCard = true;
         firstCard = this;
         console.log(firstCard.dataset.charecter);

         return;
  }

//2nd click
  secondCard = this;
  console.log(secondCard.dataset.charecter);


  checkForMatch();
}

//Do the cards match??

  function checkForMatch() {
    let isMatch = firstCard.dataset.charecter === secondCard.dataset.charecter;
  isMatch ? disableCards() : unflipCards(); 

 
  }
  
//logic after match//
  function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    
      resetBoard()  

      setTimeout( () => {
        alert("A match, way to go!!!") 

      }, 500)
      
   

  }
  //logic if not a match
  function unflipCards() {

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      
       resetBoard();
    }, 800);
  }

   function resetBoard() {
       [hasFlippedCard, lockBoard] = [false, false];
       [firstCard, secondCard] = [null, null];
     }

     (function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    })();

    function buttonClicked() {
      
      console.log('I was clicked');
      location.reload();
      
      
    }
  
    $("#js-button1").click(function(){
          $(this).toggleClass("select");
          $('#js-button2').removeClass("select");
          $('#js-button3').removeClass("select");
  });

  $("#js-button2").click(function(){
    $(this).toggleClass("select");
    $('#js-button1').removeClass("select");
    $('#js-button3').removeClass("select");
  
});

$("#js-button3").click(function(){
  $(this).toggleClass("select");
  $('#js-button1').removeClass("select");
  $('#js-button2').removeClass("select");

});



// $(".select-buttons li").on('click','li', function(){
//   $(this).toggleClass('select').siblings().removeClass('select');
// })

// 13


// <div class="size">
//    <a href="">blahblah</a>
//    <a href="">blahblah</a>
// </div>


//   $("#js-button2").click(function(){
//     $(this).toggleClass("selector-button");
// });

// $("#js-button1").click(function(){
//   $(this).toggleClass("selector-button");
// });


  


cards.forEach(card => card.addEventListener('click', flipCard));

