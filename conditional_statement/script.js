function timing(){
	var a = document.getElementById('time').value;
	console.log(a);
	if (a>=6 && a<=11) {
		var msg='Good Morning';
	}
	else if (a>=12 && a<=16) {
		var msg='Good Afternoon';
	}
	else if (a>=17 && a<=19) {
		var msg='Good Evening';
	}
	else if (a>=20 && a<=22) {
		var msg='Good Night';
	}	
	else{
		var msg='Enter valid time';
	}
	switch(a){
		case '8':
		msg = msg+"It's time 8'o'clock. Go and have your breakfast";
		alert(msg);
		break;
		case '13':
		msg = msg+"It's time 1'o'clock. Go and have your lunch";
		alert(msg);
		break;
		case '21':
		msg = msg+"It's time 8'o'clock. Go and have your dinner";
		alert(msg);
		break;
		default:
		alert(msg);
	}
}