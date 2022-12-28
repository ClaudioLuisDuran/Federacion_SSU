var scrollbar = new Control.ScrollBar('scrollbar_content','scrollbar_track');  
  
$('scroll_down_50').observe('click',function(event){  
    scrollbar.scrollBy(-50);  
    event.stop();  
});  
  
$('scroll_up_50').observe('click',function(event){  
    scrollbar.scrollBy(50);  
    event.stop();  
});  
  
$('scroll_top').observe('click',function(event){  
    scrollbar.scrollTo('top');  
    event.stop();  
});  
  
$('scroll_bottom').observe('click',function(event){  
    //to animate a scroll operation you can pass true  
    //or a callback that will be called when scrolling is complete  
    scrollbar.scrollTo('bottom',function(){  
        if(typeof(console) != "undefined")  
            console.log('Finished scrolling to bottom.');  
    });  
    event.stop();  
});  
  
$('scroll_second').observe('click',function(event){  
    //you can pass a number or element to scroll to  
    //if you pass an element, it will be centered, unless it is  
    //near the bottom of the container  
    scrollbar.scrollTo($('second_subhead'));  
    event.stop();  
});  
  
$('scroll_third').observe('click',function(event){  
    //passing true will animate the scroll  
    scrollbar.scrollTo($('third_subhead'),true);  
    event.stop();  
});  
  
$('scroll_insert').observe('click',function(event){  
    $('scrollbar_content').insert('<p><b>Inserted: ' + $('repeat').innerHTML + '</b></p>');  
    //you only need to call this if ajax or dom operations modify the layout  
    //this is automatically called when the window resizes  
    scrollbar.recalculateLayout();  
    event.stop();  
});  