$(function(){

  // We want to listen to every time the user select an answer
  $('.which-side').on('click',function(event){

    // The class 'which-side' is on all the radio inputs
    // So when a user selects any choice this will be called

    // Get the value of what the user selected
    var value = $(this).val();

    console.log(value);

    if ( value === "light"){
      $('.light-side-content').removeClass('hidden');
      $('.dark-side-content').addClass('hidden');
    }

    if ( value === "dark"){
      $('.dark-side-content').removeClass('hidden');
      $('.light-side-content').addClass('hidden');
    }

  });


});
