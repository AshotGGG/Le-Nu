// Function to open a specific tab
function openTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => {
        tab.classList.remove("active");
    });

    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => {
        button.classList.remove("active");
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");

    // Activate the clicked tab button
    const clickedButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    clickedButton.classList.add("active");
}

// Open the first tab by default
openTab("tab1");


// Function to handle scroll events
function handleScroll() {
    const stickyDiv = document.querySelector('.book');
    const stickyDivOffset = stickyDiv.offsetTop;

    // Check if the scroll position is greater than the offset of the sticky div
    if (window.scrollY > stickyDivOffset) {
        stickyDiv.classList.add('sticky');
    } else {
        stickyDiv.classList.remove('sticky');
    }
}

// Add scroll event listener to handle scrolling
window.addEventListener('scroll', handleScroll);
