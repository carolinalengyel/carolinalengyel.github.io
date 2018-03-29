$(function(){
  //Hide stuff

  $('#getStarted, #finish, #previous, .hide, #survey').hide();

  //alert("hello");
  $('#title').on('mouseover',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
    $('#getStarted').show();
  });

  $('#title').on('mouseleave',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });
  // show our slides when clicked
  $('#getStarted').on('click', function(){
    $('.hide').show();
    $('#getStarted').hide();
  });
  $('#finish').on('click', function() {
      $('.hide, #next, #previous, #finish').hide();
      $('#survey').show();
  });

$('#yes').on('click',function(){
  $('#surveytitle').css("background-color","white");
  $('#survey').css({"border": "1px solid white",
  "background":"#5FAE57"
});
});

$('#no').on('click',function(){
  $('#surveytitle').css("background-color","white");
  $('#survey').css({"border": "1px solid white",
  "background":"#CB1C20"
  });
  });

$('#next').on('click',function(){

var currentItem = $('li.active');
var nextItem = $('li.active').next();

currentItem.toggleClass('active');
nextItem.toggleClass('active');

// Conditional eval
if($('li').last().hasClass('active')) {
  $('#next').hide();
  $('#finish').show();
} else {
  $('#next').show();

}
// Conditional eval
if($('li').first().hasClass('active')) {
  $('#previous').hide();
} else {
  $('#previous').show();
}
});

$('#previous').on('click',function(){

var currentItem = $('li.active');
var previousItem = $('li.active').prev();

currentItem.toggleClass('active');
previousItem.toggleClass('active');

// Conditional eval
if($('li').last().hasClass('active')) {
  $('#next').hide();
  $('#finish').show();
} else {
  $('#next').show();
}

// Conditional eval
if($('li').first().hasClass('active')) {
  $('#previous').hide();
} else {
  $('#previous').show();
}

});


});
