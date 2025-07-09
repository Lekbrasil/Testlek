// Espera o conteúdo da página carregar para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA O MENU MOBILE ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNavLinks = document.getElementById('main-nav-links');

    // Adiciona um "ouvinte de evento" de clique no botão do menu
    mobileMenuToggle.addEventListener('click', () => {
        // Adiciona/remove a classe 'active' para mostrar/esconder o menu
        mainNavLinks.classList.toggle('active');
        // Adiciona/remove a classe 'active' para animar o botão (hambúrguer para X)
        mobileMenuToggle.classList.toggle('active');
    });

    // --- LÓGICA PARA O EFEITO DE SCROLL NO CABEÇALHO ---
    const header = document.querySelector('.axtron-header');

    // Adiciona um "ouvinte de evento" de rolagem na página
    window.addEventListener('scroll', () => {
        // Se a rolagem vertical for maior que 50 pixels...
        if (window.scrollY > 50) {
            // Adiciona a classe 'scrolled' para aplicar o efeito glassmorphism
            header.classList.add('scrolled');
        } else {
            // Remove a classe se estiver no topo
            header.classList.remove('scrolled');
        }
    });

});
