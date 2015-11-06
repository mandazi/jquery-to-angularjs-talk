$(function(){

  $('.get-people').on('change',function(){
    var value = $(this).val();

    if ( value == 'light' ){
      $.ajax({
        url: 'data/lightside.json',
        success:function(data){
          $('.people-list').html('');
          $.each(data, function(i, item) {
            $('.people-list').append('<li>'+item.name+'</li>');
          });
        }
      })
    }


    if ( value == 'dark' ){
      $.ajax({
        url: 'data/darkside.json',
        success:function(data){
          $('.people-list').html('');
          $.each(data, function(i, item) {
            $('.people-list').append('<li>'+item.name+'</li>');
          });
        }
      })
    }

    if (!value){
      $('.people-list').html('');
    }

  });


});
