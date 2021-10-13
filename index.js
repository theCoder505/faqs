// accordion controller 
const buttons = document.querySelectorAll('.accordion_btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const para = button.nextElementSibling;
        const icon = button.children[1];

        para.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
});


// onclick to faq left side menu 
function activateFaq(event){
    // alert(event);
    $(".questions_container").addClass("hide");
    $(".questions_container").removeClass("show");
    $("." + event).addClass("show");
    

    $(".common_class").removeClass("activated");
    $("#" + event).addClass("activated");

}








