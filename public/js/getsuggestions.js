// api url
const api_url =
	"http://localhost:8080/api/suggestions";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Office</th>
        <th>Title</th>
        <th>Suggestion Body</th>
		</tr>`;
	// Loop to access all rows
	for (let guest of data) {
		tab += `<tr>
	<td>${guest.Name} </td>
    <td>${guest.Title} </td>
    <td>${guest.SuggestionBody} </td>	
	
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("suggestions").innerHTML = tab;
}