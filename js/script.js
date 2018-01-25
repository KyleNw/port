// switching between pages and the light box are here //

  $('document').ready(function(){
      $('.scrollspy').scrollSpy();
      $('.button-collapse').sideNav();
      


// show and hide pages
       $('#page2').hide();
       $('#page3').hide();
       $('#study').hide();
       $('#skillz').hide();
       $('#workHistory').hide();
       $('#educationPage').hide();
       $('#bioPage').hide();
       

       $('.home').click(function(){
            
            $('#page1').fadeIn(1000);
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
       });
       
       $('.goSkillz').click(function(){
            $('#skillz').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#workHistory').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
            getGraph();
       });
       
       $('.goHistory').click(function(){
            $('#workHistory').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
       });

       $('.goEdo').click(function(){
            $('#educationPage').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#bioPage').hide();
            
       });

       $('.goBio').click(function(){
            $('#bioPage').fadeIn(1000);
            $('#page1').hide();
            $('#page2').hide();
            $('#page3').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#educationPage').hide();
            
            
       });

        $('.page2Btn').click(function(){
            $('#workHistory').hide();
            $('#page2').fadeIn(1000);
            $('#page3').hide();
            $('#page1').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
           
       });

        $('.page3Btn').click(function(){
            $('#workHistory').hide();
            $('#page2').hide();
            $('#page3').fadeIn(1000);
            $('#page1').hide();
            $('#study').hide()
            $('#skillz').hide();
            $('#educationPage').hide();
           $('#bioPage').hide();
       });
       $('#goStudy').click(function(){
            $('#study').fadeIn(1000);
            $('#page2').hide();
            $('#page3').hide();
            $('#page1').hide();
            $('#skillz').hide();
            $('#workHistory').hide();
            $('#educationPage').hide();
            $('#bioPage').hide();
       })
      

  });