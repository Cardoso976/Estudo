$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
	$.get("http://localhost:3000/frases", trocaFraseAleatoria)
	.fail(function(){
		setTimeout(function(){
			$("#erro").show();
		}, 2000);
	});	
}

function trocaFraseAleatoria (data){
	var frase = $(".frase");
	var numAleatorio = Math.floor(Math.random() * data.length);	
	frase.text(data[numAleatorio].texto);			

	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numAleatorio].tempo);
}