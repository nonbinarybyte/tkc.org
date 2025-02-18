function search() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase(); // Get search term and convert to lowercase

  // Define your search terms and corresponding pages
  const searchTerms = {
    "mlp": "mlp.html",
    "mlp crochet shrug": "mlp.html",
    "mlp shrug": "mlp.html",
    "Miss.Mushy": "miss-mushy.html",
    "Miss Mushy": "miss-mushy.html",
    "Cat Hat": "cat-hat.html",
    "Striped Cat Hat": "cat-hat.html",
    "FAQ": "faq.html",
    "f.a.q": "faq.html",
    // Add more search terms and pages as needed
  };

  // Check if the search term exists in the searchTerms object
  if (searchTerms.hasOwnProperty(searchTerm)) {
    window.location.href = searchTerms[searchTerm]; // Redirect to the corresponding page
  } else {
    // Handle cases where the search term is not found.  Several options:
      // 1. Alert the user:
      alert("Sorry, we don't have anything for " + searchTerm + " right now.");

      // 2. Redirect to a default search page:
      window.location.href = "index.html?q=" + searchTerm; // Pass search term as query parameter

      // 3. Do nothing (stay on the current page):
      //  (No code needed here)

      // 4. Clear the search input:
      // document.getElementById("searchInput").value = "";
  }
}

// Allow pressing Enter to search
document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    search();
  }
});