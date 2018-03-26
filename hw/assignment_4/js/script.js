$(function(){
  //Hide stuff

  $('#getStarted, #finish, #previous, .hide').hide();

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
