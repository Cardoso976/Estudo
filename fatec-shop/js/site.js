
$("#logar").click(function(){	
	$("#login").fadeToggle("fast");		
});

$("#registro").click(function(){	
	$("#registrar").show();		
});

$("#confimar-login").click(function(){

	var senha = $("#psw").val();
	var usuario = $("#usrname").val();

	bootbox.alert("Olá " + usuario);
	$("#login").modal('toggle');	
});
(function(){
	$("#cart").click(function() {
		$(".shopping-cart").fadeToggle( "fast");
	});	
})();