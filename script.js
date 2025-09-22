document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const roomTable = document.getElementById('roomTable');
    const tableRows = roomTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
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
    
    // Add alternating row colors for better readability
    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 === 1) {
            tableRows[i].style.backgroundColor = '#161b22';
        }
    }
});