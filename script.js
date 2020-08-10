function check_srss()
{
}

function lookup()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{
	    if (this.readyState == 4 && this.status == 200) 
			{
	       // Typical action to be performed when the document is ready:
				let a = (xhttp.responseText).replace("(","").replace(")","").split(',')

				document.querySelector("#iata").value = a[0].slice(1,-1);
				document.querySelector("#icao").value = a[1].trim().slice(1,-1);
				document.querySelector("#name").value = a[2].trim().slice(1,-1);
				document.querySelector("#city").value = a[3].trim().slice(1,-1);
				document.querySelector("#country").value = a[4].trim().slice(1,-1);
				document.querySelector("#lat").value = a[5].trim();
				document.querySelector("#long").value = a[6].trim();
//				if (a[5] > 0) {
//					document.querySelector("#lat").value = "N" + a[5].trim(); }
//				else {document.querySelector("#lat").value = "S" + a[5].trim().slice(1,);}
//				if (a[6] > 0) {
//					document.querySelector("#long").value = "E" + a[6].trim(); }
//				else {document.querySelector("#long").value = "W" + a[6].trim().slice(1,);}		

//				check_srss()

			}
	};	
	xhttp.open("POST", "/", true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send("todo=info&iata=" + document.querySelector("#req_iata").value);	
}
