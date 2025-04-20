/* Main JavaScript for Computer Networks Educational Portal */

document.addEventListener('DOMContentLoaded', function() {
    // Module Navigation
    const moduleCards = document.querySelectorAll('.module-card');
    const moduleContent = document.getElementById('module-content');
    const moduleTemplates = document.getElementById('module-templates');
    
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    let darkMode = true; // Default is dark mode
    
    // Initialize active module
    let activeModule = null;
    
    // Module cards are now direct links to their respective pages
    // No need for click event handlers as they use standard HTML navigation
    
    // Load Module Content Function
    function loadModuleContent(moduleId) {
        // Save current active module
        activeModule = moduleId;
        
        // Get content template
        const templateContent = document.getElementById(`${moduleId}-content`);
        
        if (templateContent) {
            // Clear current content with fade out effect
            moduleContent.classList.add('fade-out');
            
            setTimeout(() => {
                // Update content
                moduleContent.innerHTML = templateContent.innerHTML;
                
                // Initialize accordions in the new content
                initAccordions();
                
                // Fade in new content
                moduleContent.classList.remove('fade-out');
                moduleContent.classList.add('fade-in');
                
                setTimeout(() => {
                    moduleContent.classList.remove('fade-in');
                }, 500);
            }, 300);
        }
    }
    
    // Initialize Accordions
    function initAccordions() {
        const accordions = document.querySelectorAll('.topic-accordion');
        
        accordions.forEach(accordion => {
            const header = accordion.querySelector('.topic-header');
            const content = accordion.querySelector('.topic-content');
            const toggleIcon = accordion.querySelector('.toggle-icon');
            
            // Initially collapse all accordions
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            content.style.padding = '0px';
            
            header.addEventListener('click', function() {
                // Toggle active class
                accordion.classList.toggle('active');
                
                // Toggle content visibility
                if (accordion.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.opacity = '1';
                    content.style.padding = 'var(--spacing-lg)';
                    toggleIcon.textContent = '-';
                } else {
                    content.style.maxHeight = '0px';
                    content.style.opacity = '0';
                    content.style.padding = '0px';
                    toggleIcon.textContent = '+';
                }
            });
        });
    }
    
    // Theme Toggle Function
    themeToggle.addEventListener('click', function() {
        const root = document.documentElement;
        
        if (darkMode) {
            // Switch to light mode
            root.style.setProperty('--background-color', '#f8fafc');
            root.style.setProperty('--surface-color', '#e2e8f0');
            root.style.setProperty('--text-color', '#1e293b');
            root.style.setProperty('--text-secondary', '#475569');
            themeToggle.classList.add('light-mode');
        } else {
            // Switch to dark mode
            root.style.setProperty('--background-color', '#0f172a');
            root.style.setProperty('--surface-color', '#1e293b');
            root.style.setProperty('--text-color', '#e2e8f0');
            root.style.setProperty('--text-secondary', '#94a3b8');
            themeToggle.classList.remove('light-mode');
        }
        
        // Toggle mode
        darkMode = !darkMode;
    });
    
    // Initialize accordions on page load
    initAccordions();
});