function toggleCountry() {

	if ( document.getElementById("country-1").checked ) {

		document.getElementById("QatarName").className = document.getElementById("QatarName").className.replace( /(?:^|\s)js-hidden(?!\S)/g , '' );
		document.getElementById("KuwaitName").className += " js-hidden";
		document.getElementById("OmanName").className += " js-hidden";
		document.getElementById("UAEName").className += " js-hidden";

	}

	if ( document.getElementById("country-2").checked ) {

		document.getElementById("KuwaitName").className = document.getElementById("KuwaitName").className.replace( /(?:^|\s)js-hidden(?!\S)/g , '' );
		document.getElementById("QatarName").className += " js-hidden";
		document.getElementById("OmanName").className += " js-hidden";
		document.getElementById("UAEName").className += " js-hidden";


	}

	if ( document.getElementById("country-3").checked ) {

		document.getElementById("OmanName").className = document.getElementById("OmanName").className.replace( /(?:^|\s)js-hidden(?!\S)/g , '' );
		document.getElementById("KuwaitName").className += " js-hidden";
		document.getElementById("QatarName").className += " js-hidden";
		document.getElementById("UAEName").className += " js-hidden";


	}

	if ( document.getElementById("country-4").checked ) {

		document.getElementById("UAEName").className = document.getElementById("UAEName").className.replace( /(?:^|\s)js-hidden(?!\S)/g , '' );
		document.getElementById("KuwaitName").className += " js-hidden";
		document.getElementById("OmanName").className += " js-hidden";
		document.getElementById("QatarName").className += " js-hidden";


	}

}

function toggleOtherNationalities(){

	if ( document.getElementById("OtherNationalities-1").checked ) {

		document.getElementById("conditionalOtherNationalities").className = document.getElementById("conditionalOtherNationalities").className.replace( /(?:^|\s)js-hidden(?!\S)/g , '' );

	}



	if ( document.getElementById("OtherNationalities-2").checked ) {

		document.getElementById("conditionalOtherNationalities").className += " js-hidden";

	}


}
