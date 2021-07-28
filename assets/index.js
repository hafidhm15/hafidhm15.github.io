  
let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "sejarah") {
            event.target.setAttribute("src", "assets/img/gambar5.png");
            return;
        } 
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "sejarah") {
            event.target.setAttribute("src", "assets/img/gambar1.jpg");
            return;
        }
    });
}