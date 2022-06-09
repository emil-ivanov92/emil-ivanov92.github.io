/*
var password;

var pass1="cool";

password=prompt('Please enter your password to view this page!',' ');

if (password==pass1)
  alert('Password Correct! Click OK to enter!');
else
   {
    window.location="http://www.google.bg";
    }
    */

$(document).ready(function(){
    $("#toggle").click(function(){
        $("#proba").toggle();
        $("#proba2").hide();
        $("#proba3").hide();
        $("#proba4").hide();
    });
});

$(document).ready(function(){
    $("#toggle2").click(function(){
        $("#proba2").toggle();
        $("#proba").hide();
        $("#proba3").hide();
        $("#proba4").hide();
    });
});

$(document).ready(function(){
    $("#toggle3").click(function(){
        $("#proba3").toggle();
        $("#proba2").hide();
        $("#proba").hide();
        $("#proba4").hide();
    });
});

$(document).ready(function(){
    $("#toggle4").click(function(){
        $("#proba4").toggle();
        $("#proba3").hide();
        $("#proba2").hide();
        $("#proba").hide();
    });
});


jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

function myFunction() {
 //   var x = document.getElementById("myText").value;


var comment = document.getElementById("myText").value;

if (comment == null || comment == "") {
        alert("Please enter a comment!");
        return false;
    }
    
var comment2 ='"';
var comment3 = comment2.concat(comment, '"');

var ime = document.getElementById("myText2").value;
if (ime == null || ime == "") {
        alert("Please enter a nickname!");
        return false;
    }
var data = new Date().toLocaleString();

var result = comment3.concat(' published by "', ime, '"', ' on "', data,'"');
    var newParagraph = document.createElement('p');
    newParagraph.textContent = result;

    document.getElementById("demo").appendChild(newParagraph);
    document.getElementById("myText").focus();
    document.getElementById("myText").value="";
}
