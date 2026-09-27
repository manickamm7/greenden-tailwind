// Select the side navigation and buttons
var sidenav = document.getElementById("sidenav")
var menuToggle = document.getElementById("menu-toggle")
var closeNav = document.getElementById("close-nav")

menuToggle.addEventListener("click", function () {
	sidenav.style.right = "0"
})

closeNav.addEventListener("click", function () {
	sidenav.style.right = "-50%"
})

var searchInput = document.getElementById("search-input")
var productList = document.getElementById("product-list")
var noResults = document.getElementById("no-results")

function searchProducts() {
	var searchText = searchInput.value.toLowerCase()
	var products = productList.getElementsByTagName("div")
	var foundProducts = 0

	for (var i = 0; i < products.length; i++) {
		var productName = products[i].getElementsByTagName("h1")[0].innerText.toLowerCase()

		if (productName.indexOf(searchText) !== -1) {
			products[i].style.display = ""
			foundProducts = foundProducts + 1
		} else {
			products[i].style.display = "none"
		}
	}

	if (foundProducts === 0) {
		noResults.style.display = "block"
	} else {
		noResults.style.display = "none"
	}
}

searchInput.addEventListener("input", searchProducts)
