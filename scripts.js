// @codekit-prepend 'jquery-3.2.1.js'

$(".button-collapse").sideNav();

$('.carousel.carousel-slider').carousel({
    fullWidth: true
});

$('.carousel').carousel();


$('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 500, // Transition in duration
    outDuration: 500, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        
        console.log(modal, trigger);
    },
    complete: function () {
        
    } // Callback for Modal close
});