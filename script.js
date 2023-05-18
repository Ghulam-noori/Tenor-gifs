const imageContainer = $('#main-container')
const searchInput = $('#item-name')

function createRequest(url) {
	imageContainer.empty();
	let http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.onreadystatechange = function () {
		if (http.readyState == 4 && http.status == 200) {
			let response_objects = JSON.parse(http.responseText);
			let gifs = response_objects["results"];
			gifs.map((gif) => {
				imageContainer.append(`
				<img id="gif-image"  src="${gif["media_formats"]["gif"]["url"]}"/>`);
			});
		}
	};
	http.send(null);
	return;
}

// function to get the data.
function get_data() {
	// Apikey and limit
	let apikey = "AIzaSyBrFXDKOmKL1mch_AndCus8s1Mk_z8ow-w";
	let clientkey = "my_test_app";
	let lmt =100;
	// test search term
	let search = searchInput.val();

	// using default locale of en_US
	let search_url ="https://tenor.googleapis.com/v2/search?q=" + search + "&key=" + apikey + "&client_key=" +	clientkey +	"&limit=" +	lmt;

	createRequest(search_url);

	// data will be loaded by each call's callback
	return;
}
	let url = $("#search-btn").click(function () {
	imageContainer.empty();
	get_data();
	searchInput.val("");
});