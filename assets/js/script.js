// var food="pepper"
var searchButton = document.getElementById("search-button")
var searchInput = document.getElementById("search-field")

function getFoodCategory(food) {


    // var url = "https://api.edamam.com/api/food-database/v2/parser?app_id=01cb254c&app_key=3504b2acb8cf9b39db955fdae522225f&ingr=" + ingredient + "&nutrition-type=cooking"
    var url = "https://api.edamam.com/api/food-database/v2/parser?app_id=01cb254c&app_key=3504b2acb8cf9b39db955fdae522225f&ingr= " + food + "nutrition-type=cooking"

    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data)
        console.log(data.hints[1].food.brand)
    })
}

searchButton.addEventListener("click", function () {
    getFoodCategory(searchInput.value)
})



