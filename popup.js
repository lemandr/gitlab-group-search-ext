function runSearch() {
	//window.alert("runSearch");
	try {
		console.log("runSearch:", this);
		chrome.tabs.query({active : true }, searchInTab);
	
	} catch (error) {
		console.error(error);		
	}
}

function searchInTab(tabs) {
	console.log(tabs[0].url);
	//alert(tab);
}

function setListeners() {
	try {
		document.getElementById("searchText").addEventListener("change", runSearch);
		//alert("ok");
			
	} catch (err) {
		alert(err);
	}
}
//console.log("extension");
//window.alert("popup");
//document.getElementById("searchText").addEventListener("change", runSearch);
//alert(document);
document.addEventListener('DOMContentLoaded', setListeners);