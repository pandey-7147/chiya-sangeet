// Placeholder for switching between viewer and admin mode
// In real implementation, use authentication and JS to toggle admin controls
let isAdmin = false;

// Collapsible menu logic
window.addEventListener('DOMContentLoaded', function() {
    // Header animation
    const header = document.querySelector('header');
    setTimeout(() => {
        header.classList.add('animate-in');
    }, 100);

    // Collapsible animation
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.classList.contains('active')) {
                // Closing
                content.style.maxHeight = content.scrollHeight + 'px'; // set to current height
                setTimeout(() => {
                    content.style.maxHeight = '0px';
                    content.style.opacity = '0';
                }, 10);
                // Remove .active after transition
                content.addEventListener('transitionend', function handler(e) {
                    if (e.propertyName === 'max-height') {
                        content.classList.remove('active');
                        content.removeEventListener('transitionend', handler);
                    }
                });
            } else {
                // Opening
                content.classList.add('active');
                content.style.maxHeight = '0px'; // reset to 0 first
                content.style.opacity = '1';
                setTimeout(() => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }, 10);
                // Remove maxHeight after transition for flexibility
                content.addEventListener('transitionend', function handler(e) {
                    if (e.propertyName === 'max-height') {
                        content.style.maxHeight = null;
                        content.removeEventListener('transitionend', handler);
                    }
                });
            }
        });
    });

    // Expand the first section by default with animation
    if (collapsibles.length > 0) {
        setTimeout(() => {
            collapsibles[0].click();
        }, 500); // after header animation
    }

    // Admin controls logic
    function updateAdminMode() {
        document.querySelectorAll('.admin-controls').forEach(ctrl => {
            ctrl.style.display = isAdmin ? 'block' : 'none';
        });
        document.getElementById('admin-banner').style.display = isAdmin ? 'block' : 'none';
        document.getElementById('admin-toggle').textContent = isAdmin ? 'Exit Admin Mode' : 'Admin Mode';
    }
    updateAdminMode();

    document.getElementById('admin-toggle').addEventListener('click', function() {
        isAdmin = !isAdmin;
        updateAdminMode();
    });
}); 