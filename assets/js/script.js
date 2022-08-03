$.noConflict();
jQuery(document).ready(function(){

  jQuery('#menu').click(function(){
    jQuery(this).toggleClass('fa-times');
    jQuery('header').toggleClass('active');
  });

  jQuery(window).on('scroll load',function(){

    jQuery('#menu').removeClass('fa-times');
    jQuery('header').removeClass('active');

  });

  jQuery('a[href*="#"]').on('click',function(e){
  
    e.preventDefault();
  
    jQuery('html, body').animate({
  
      scrollTop : jQuery(jQuery(this).attr('href')).offset().top,
  
    },
      500, 'linear');
  
  });

  const boxContainer = jQuery('.box-container');
  const projects = boxContainer.children();

  let projectId = projects.length-1;
  console.log(projectId);
  
  // jQuery('.btn-prev').hide();

  jQuery('.btn-prev').on('click',()=>{
    if(projectId>=projects.length-1) {
      jQuery('.btn-prev').attr('disabled', 'disabled');
      projectId=projects.length-1;
    }
    jQuery(projects[projectId]).show();
    projectId++;
    jQuery('.btn-next').removeAttr('disabled', 'disabled');
    console.log(projectId);

  });
  
  jQuery('.btn-next').on('click',()=>{
    if (projectId<=1) {
      jQuery('.btn-next').attr('disabled', 'disabled');
    }
    jQuery(projects[projectId]).hide();
    projectId--;

    jQuery('.btn-prev').removeAttr('disabled', 'disabled');
    console.log(projectId);
  });
    
});


