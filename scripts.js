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
  

  function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    
      resetBoard()  

      setTimeout( () => {
        alert("A match, way to go!!!") 

      }, 500)
      
   

  }
  
  function unflipCards() {


    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      
       resetBoard();
    }, 1000);
  }

   function resetBoard() {
       [hasFlippedCard, lockBoard] = [false, false];
       [firstCard, secondCard] = [null, null];
      //  [isButtonClicked, hasFlippedCard]= [true, true];
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
    


cards.forEach(card => card.addEventListener('click', flipCard));

