function getInputValue(){
	// Selecting the input element and get its value 
	var channelID = document.getElementById("myInput").value;
	var PREFIX1 = "https://www.youtube.com/channel/UC";
	var PREFIX2 = "https://www.youtube.com/c/UC";
	if (channelID.startsWith(PREFIX1)) {
		// PREFIX1 is exactly at the beginning
		channelID = channelID.slice(PREFIX1.length);
		document.getElementById("myURL").href = "https://playlist.tools/UU" + channelID;
		document.getElementById("myURL").innerHTML = "https://playlist.tools/UU" + channelID;
	} else if (channelID.startsWith(PREFIX2)) {
		// PREFIX2 is exactly at the beginning
		channelID = channelID.slice(PREFIX1.length);
		document.getElementById("myURL").href = "https://playlist.tools/UU" + channelID;
		document.getElementById("myURL").innerHTML = "https://playlist.tools/UU" + channelID;
	} else {
		
	}
}