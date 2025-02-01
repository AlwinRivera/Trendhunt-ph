// Sample data: array of trending items
const trendingItems = [
  { title: 'Product 1', description: 'Awesome product number one.' },
  { title: 'Product 2', description: 'Amazing features with product two.' },
  { title: 'Cool Gadget', description: 'Latest gadget in the market.' },
  { title: 'Tech Trend', description: 'Newest trend in technology.' }
];

// Function to display items in the trending container
function displayItems(items) {
  const container = document.getElementById('trendingContainer');
  container.innerHTML = ''; // Clear previous items

  if (items.length === 0) {
    container.innerHTML = '<p>No matching items found.</p>';
    return;
  }

  items.forEach(item => {
    try {
      // Ensure affiliateLink exists
      if (!item.affiliateLink) {
        throw new Error(`Affiliate link missing for item: ${item.title}`);
      }

      const itemDiv = document.createElement('div');
      itemDiv.style.border = '1px solid #ddd';
      itemDiv.style.padding = '10px';
      itemDiv.style.marginTop = '10px';
      itemDiv.style.borderRadius = '5px';

      const title = document.createElement('h3');
      title.textContent = item.title;
      title.style.margin = '0 0 5px 0';

      const description = document.createElement('p');
      description.textContent = item.description;
      description.style.margin = '0';

      // Create "Buy Now" button linking to the affiliate URL
      const link = document.createElement('a');
      link.href = item.affiliateLink;
      link.target = '_blank'; // Opens the link in a new tab
      link.textContent = 'Buy Now';
      link.style.display = 'inline-block';
      link.style.marginTop = '8px';
      link.style.padding = '8px 16px';
      link.style.backgroundColor = '#28a745';
      link.style.color = '#fff';
      link.style.borderRadius = '4px';
      link.style.textDecoration = 'none';

      // Append elements
      itemDiv.appendChild(title);
      itemDiv.appendChild(description);
      itemDiv.appendChild(link);
      container.appendChild(itemDiv);
    } catch (error) {
      logError(error);
    }
  });
}


// Attach event listener to the search button
document.getElementById('searchBtn').addEventListener('click', handleSearch);

// Optional: trigger search on pressing Enter in the search input
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

// Display all items on initial page load
window.addEventListener('load', () => {
  displayItems(trendingItems);
});

function logError(error) {
  console.error(error); // This logs the error to the browser console

  // Find or create an error container in the DOM
  let errorContainer = document.getElementById('errorLog');
  if (!errorContainer) {
    errorContainer = document.createElement('div');
    errorContainer.id = 'errorLog';
    errorContainer.style.backgroundColor = '#fee';
    errorContainer.style.color = '#900';
    errorContainer.style.padding = '10px';
    errorContainer.style.margin = '10px';
    errorContainer.style.border = '1px solid #900';
    document.body.insertBefore(errorContainer, document.body.firstChild);
  }

  // Display the error message
  errorContainer.innerHTML = `<strong>Error:</strong> ${error.message}`;
}

