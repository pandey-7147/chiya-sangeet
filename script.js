// Placeholder for switching between viewer and admin mode
// In real implementation, use authentication and JS to toggle admin controls
const isAdmin = false; // Change to true to simulate admin mode

// Collapsible menu logic
window.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName('collapsible');
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                content.classList.add('active');
            }
        });
    }

    // Admin controls logic
    document.querySelectorAll('.admin-controls').forEach(ctrl => {
        ctrl.style.display = isAdmin ? 'block' : 'none';
    });
}); 