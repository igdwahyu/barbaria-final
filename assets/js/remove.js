document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-item');
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            
            removeFromCart(productId);
        });
    });

    function removeFromCart(productId) {
        
        alert('Item ini telah dihapus');

        const row = document.querySelector(`[data-product-id="${productId}"]`).closest('tr');
        row.parentNode.removeChild(row);
    }
});