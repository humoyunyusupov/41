var elOpenModalBtn = document.querySelector(".header-bottom__button");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".modal-close");


elOpenModalBtn.addEventListener("click", function(){
    elModal.classList.add("modal-open");
});

elCloseModalBtn.addEventListener("click", function(){
    elModal.classList.remove("modal-open");
})  