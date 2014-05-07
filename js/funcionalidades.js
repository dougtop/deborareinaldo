$(document).ready(function()
	{
		$(".capa-album1").click(function() {
			$(".capa-album2, .capa-album3").removeClass("capa-selecionada");
			$(this).addClass("capa-selecionada");
			$(".album2, .album3").fadeOut().css("display" , "none");
			$('.album1').fadeIn().css("display" , "block");
		});
		$(".capa-album2").click(function() {
			$(".capa-album1, .capa-album3").removeClass("capa-selecionada");
			$(this).addClass("capa-selecionada");
			$(".album1, .album3").fadeOut().css("display" , "none");
			$('.album2').fadeIn().css("display" , "block");
		});
		$(".capa-album3").click(function() {
			$(".capa-album1, .capa-album2").removeClass("capa-selecionada");
			$(this).addClass("capa-selecionada");
			$(".album1, .album2").fadeOut().css("display" , "none");
			$('.album3').fadeIn().css("display" , "block");
		});

		$(".btn-dica1").click(function() {
			$(".box-dica1, .box-dica2, .box-dica3").fadeOut().css("display" , "none");
			$(".artigo1").fadeIn().css("display" , "block");
		});
		$(".btn-dica2").click(function() {
			$(".box-dica1, .box-dica2, .box-dica3").fadeOut().css("display" , "none");
			$(".artigo2").fadeIn().css("display" , "block");
		});
		$(".btn-dica3").click(function() {
			$(".box-dica1, .box-dica2, .box-dica3").fadeOut().css("display" , "none");
			$(".artigo3").fadeIn().css("display" , "block");
		});
		$(".btn-voltar, .fechar-artigo").click(function() {
			$(".artigo1, .artigo2, .artigo3").fadeOut().css("display" , "none");
			$(".box-dica1, .box-dica2, .box-dica3").fadeIn().css("display" , "block");
		});
		
	});
