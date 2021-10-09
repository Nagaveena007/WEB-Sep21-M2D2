// .image-top {
//     width: 100px;
//    height: 100px;
//    object-fit: cover; 
//    }
   //images will fit in the cover
   /*padding-right: .6em;
    padding-left: .6em;
    border-radius: 10rem;
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;*/
    const removeCards = function () {
      const cards = document.querySelectorAll(".card");

      for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          card.remove();
      }

  };
 

  window.onload=function(){

    const numberOfTravels=function(){
        let count=document.querySelectorAll(".card")
        alert("There are"+count.length+"travels in the page")
    }
    numberOfTravels()


    const addBadge = function () {
        const cardsTitles = document.querySelectorAll(
            "#welcome-summer .card-title"
        );
    
        for (let i = 0; i < cardsTitles.length; i++) {
            const title = cardsTitles[i];
            const span = `<span class="badge badge-pill badge-danger ml-2">HOT</span>`;
            title.innerHTML += span;
        }
    };
    
    addBadge();
  }
 


