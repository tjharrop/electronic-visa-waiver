// document.getElementById("PlaceOfIssue").value;

// showing
// document.getElementById('element').style.display = '';

// hiding
// document.getElementById('element').style.display = 'none';

function toggle(obj) {


	if ( document.getElementById("PlaceOfIssue").value == "Kuwait" ) {

		document.getElementById("KuwaitName").style.display = '';
		document.getElementById("QatarName").style.display = 'none';
		document.getElementById("UAEName").style.display = 'none';
		document.getElementById("OmanName").style.display = 'none';

	}

	if ( document.getElementById("PlaceOfIssue").value == "Oman" ) {

		document.getElementById("KuwaitName").style.display = 'none';
		document.getElementById("QatarName").style.display = 'none';
		document.getElementById("UAEName").style.display = 'none';
		document.getElementById("OmanName").style.display = '';

	}

	if ( document.getElementById("PlaceOfIssue").value == "Qatar" ) {

		document.getElementById("KuwaitName").style.display = 'none';
		document.getElementById("OmanName").style.display = 'none';
		document.getElementById("UAEName").style.display = 'none';
		document.getElementById("QatarName").style.display = '';

	}


	if ( document.getElementById("PlaceOfIssue").value == "United Arab Emirates" ) {

		// el.style.display = '';
		document.getElementById("KuwaitName").style.display = 'none';
		document.getElementById("OmanName").style.display = 'none';
		document.getElementById("QatarName").style.display = 'none';
		document.getElementById("UAEName").style.display = '';

	}

	else {

	}

}

function toggleOtherNationalities(){
	if ( document.getElementById("OtherNationalities").value == "Yes" ) {

		document.getElementById("conditionalOtherNationalities").className = document.getElementById("conditionalOtherNationalities").className.replace( /(?:^|\s)js-hidden(?!\S)/g , '' );

	}

	else {
		// document.getElementById("conditionalOtherNationalities").className += " js-hidden";
		
	}


}

function togglePrevNationalities(){
	if ( document.getElementById("PreviousNationalities").value == "Yes" ) {

		document.getElementById("conditionalPreviousNationalities").className = document.getElementById("conditionalPreviousNationalities").className.replace( /(?:^|\s)js-hidden(?!\S)/g , '' );

	}

	else {
		document.getElementById("conditionalOtherNationalities").className += " js-hidden";
	}
}
