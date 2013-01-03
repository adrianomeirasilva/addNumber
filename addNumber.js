$(function(){
	$('.addNumber').each(function(i){
		var name = $(this).attr('name');
		var novoHTML = '<div class="addNumber">'+
					   '<input type="text" name="'+name+' " value="0" class="input'+i+'" />'+
					   '<a class="add" onclick="addNumber(\'add\',$(\'.input'+i+'\'))">+</a>'+
					   '<a class="remove" onclick="addNumber(\'remove\',$(\'.input'+i+'\'))">-</a>'+
					   '</div>';
		$(this).parent().append(novoHTML);
		$(this).remove();	
	});
});

function addNumber(tipo, classe){
	var valorAtual = Number(classe.val());
	if(valorAtual<0){
		classe.val('0');
		return false;
	}
	if(tipo=='add'){
		var correcao = valorAtual+1;
		classe.val(correcao);
	}else if(tipo=='remove'){
		var correcao = valorAtual-1;
		
		if(correcao<0){
			classe.val('0');
			return false;
		}else {
			classe.val(correcao);
		}
	}
}