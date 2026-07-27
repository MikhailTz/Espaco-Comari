// Menu Mobile Responsivo
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Envio do formulário direto para o WhatsApp do Espaço Comari
const formOrcamento = document.getElementById('formOrcamento');

formOrcamento.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const tipoEvento = document.getElementById('tipoEvento').value;
    const mensagem = document.getElementById('mensagem').value;

    const numeroWhatsApp = "5521999923713"; 

    const textoFormatado = `Olá! Meu nome é *${nome}*.\n` +
                           `Gostaria de solicitar um orçamento para o *Espaço Comari*.\n\n` +
                           `*Tipo de Evento:* ${tipoEvento}\n` +
                           `*Telefone de Contato:* ${telefone}\n` +
                           `*Detalhes:* ${mensagem}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoFormatado)}`;

    window.open(url, '_blank');
});
