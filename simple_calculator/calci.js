function calci(sf) {
	var getData = document.getElementById('result');
	console.log(getData.value);
	switch(sf) {
		case '=':
		    if (getData.value !=''){
		    	var ammu = eval(getData.value);
		    	getData.value = ammu;
		    }

	    break;
		case 'C':
			getData.value = '';
		break;
		default:
			getData.value += sf;
	}
}
