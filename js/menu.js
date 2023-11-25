function bill(){
	let total=0,gst,discount,final;
	let sum=document.getElementsByClassName('check');
	for (var i = 0; i < sum.length; i++) {
	 	if (sum[i].checked == true)
	 	{
	 		val=sum[i].value;
	 		total += parseInt(val);
	 	}
	}
	document.getElementById('price').innerText=total;

	gst=total*0.18;
	document.getElementById('gst').innerText=Math.ceil(gst);

	before_disc_total=parseInt(gst)+parseInt(total);
	document.getElementById('before_disc').innerText=before_disc_total;	

	let disc=document.getElementById('dis').value;
	discount=(before_disc_total*disc)/100;
	document.getElementById('discount_value').innerText=discount;
	final=before_disc_total-discount;
	document.getElementById('final').innerText=Math.ceil(final);
}
