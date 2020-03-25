

//FIND MEAL

$("#find").on("click", function () {
	var ingredients = [];
	$(".input").each(function () {
		ingredients.push($(this).val());
	});

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=5&ingredients=" + ingredients.join(","),
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
			"x-rapidapi-key": "5055de4237mshb8184148441534fp1f5c84jsnf1aa75b94cd0"
		},

	}
	$.ajax(settings).then(function (response) {
		console.log(response);
		response.forEach(response => {
			var recipeDiv = $("<div>")
			recipeDiv.text(response.title)
			$("#recipes").append(recipeDiv)
			recipeDiv.hover(function (event) {
				$("#recipe-image").attr("src", response.image)
			})
		});
	});

});

//RECIPES//

// Here we grab the text from the input box
