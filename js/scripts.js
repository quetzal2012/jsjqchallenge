$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
  debugger;

    var rubyRails = "Ruby on Rails";
    var css = "CSS";
    var cSharp = "C Sharp";


    var tracker = 0;
    var middle = 0;

    var businessType = $("input:radio[name=businessType]:checked").val();
    var codingType = $("input:radio[name=codingType]:checked").val();
    var endType = $("input:radio[name=endType]:checked").val();
    var webType = $("input:radio[name=webType]:checked").val();
    var interType = $("input:radio[name=interType]:checked").val();



// question 1

    if (businessType === "agree") {
      tracker++;
    }
    else {
      tracker--;
    }
// question 2
    if (codingType === "agree") {
      tracker++;
    }
    else {
      tracker--;
    }
// question 3
    if (endType === "agree") {
      tracker++;
    }
    else {
      tracker--;
    }
// question 4
    if (webType === "agree") {
      tracker++;
    }
    else {
      tracker--;
    }
//question 5
    if (interType === "agree") {
      tracker ++;
    }
    else {
      tracker --;
    }

// end of business logic



  if (tracker === middle) {
    $("#result").show().text("You should take any track");
  }
  else if (tracker < -1) {
    $("#result").show().text("You should take " + rubyRails + ".");
  }
  else if (tracker > 1) {
    $("#result").show().text("You should take " + css + ".");
  }
  else {
    $("#result").show().text("You should take " + cSharp + ".");
  }

});

});

