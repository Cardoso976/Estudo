$("#logar").click(function(){	
	$("#login").modal('toggle(slow/400/fast)');		
});

$("#registro").click(function(){	
	$("#registrar").modal('toggle(slow/400/fast)');		
});

$("#confimar-login").click(function(){
	
	var senha = $("#psw").val();
	var usuario = $("#usrname").val();

	bootbox.alert("Olá "+usuario);
	$("#login").modal('toggle');	
});

(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();