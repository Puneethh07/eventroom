document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const roomTable = document.getElementById('roomTable');
    const tableRows = roomTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    // Search functionality
    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        for (let i = 0; i < tableRows.length; i++) {
            const rowData = tableRows[i].textContent.toLowerCase();
            if (rowData.includes(searchTerm)) {
                tableRows[i].style.display = '';
            } else {
                tableRows[i].style.display = 'none';
            }
        }
    });
    
    // Add hover effects with accent colors
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(13, 71, 161, 0.1)'; // Light dark blue background
            this.style.cursor = 'pointer';
        });
        
        tableRows[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
        
        // Add click effect
        tableRows[i].addEventListener('click', function() {
            // Flash orange background
            this.style.backgroundColor = 'rgba(255, 87, 34, 0.2)';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 300);
        });
    }
});
