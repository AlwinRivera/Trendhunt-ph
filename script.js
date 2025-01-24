
document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    const trends = {
        'gadgets': 'Smartwatches, Wireless Earbuds, Bluetooth Speakers',
        'fashion': 'Oversized Tees, Crocs, Tote Bags',
        'home': 'Air Fryers, Smart Bulbs, Minimalist Decor'
    };
    document.getElementById('trending').innerHTML = trends[query.toLowerCase()] || "No trends found.";
});

