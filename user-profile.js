(function(dkwa){
  function dkwb(){
    var e=dkwa("#pass1").val(),d=dkwa("#user_login").val(),c=dkwa("#pass2").val(),f;
    dkwa("#dkw-pass-strength-result").removeClass("short bad good strong");
    if(!e){dkwa("#dkw-pass-strength-result").html("Strength indicator");return}
    f=passwordStrength(e,d,c);
    switch(f){
      case 2:dkwa("#dkw-pass-strength-result").addClass("bad").html("Weak");
      break;
      case 3:dkwa("#dkw-pass-strength-result").addClass("good").html("Medium");
      break;
      case 4:dkwa("#dkw-pass-strength-result").addClass("strong").html("Strong");
      break;
      case 5:dkwa("#dkw-pass-strength-result").addClass("short").html("Mismatch");
      break;
      default:dkwa("#dkw-pass-strength-result").addClass("short").html("Very weak")
    }
  }
  dkwa(document).ready(function(){
    dkwa("#pass1").val("").keyup(dkwb);
    dkwa("#pass2").val("").keyup(dkwb);
  })
})(jQuery);
