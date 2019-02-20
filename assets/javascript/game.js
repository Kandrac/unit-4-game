$(document).ready(function(){
    var Random=Math.floor(Math.random()*120+19)
    $('#magicNumber').text(Random);
    
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    var totalNumber= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        $('#magicNumber').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        totalNumber= 0;
        $('#currentTotal').text(totalNumber);
        } 

  function victory(){
  alert("Congratulations on your Victory!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  function loser(){
  alert ("You Have Failed!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
    $('.red').on ('click', function(){
      totalNumber = totalNumber + num1;
      $('#currentTotal').text(totalNumber); 
        
          if (totalNumber == Random){
            victory();
          }
          else if ( totalNumber > Random){
            loser();
          }   
    })  
    $('.blue').on ('click', function(){
      totalNumber = totalNumber + num2;
      $('#currentTotal').text(totalNumber); 
          if (totalNumber == Random){
            victory();
          }
          else if ( totalNumber > Random){
            loser();
          } 
    })  
    $('.purple').on ('click', function(){
      totalNumber = totalNumber + num3;
      $('#currentTotal').text(totalNumber);
  
            if (totalNumber == Random){
            victory();
          }
          else if ( totalNumber > Random){
            loser();
          } 
    })  
    $('.green').on ('click', function(){
      totalNumber = totalNumber + num4;
      $('#currentTotal').text(totalNumber); 
        
            if (totalNumber == Random){
            victory();
          }
          else if ( totalNumber > Random){
            loser();
          }
    });   
  }); 