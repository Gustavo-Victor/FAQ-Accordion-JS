/*pegar todos os faqs*/ 
const faqs = window.document.querySelectorAll('.faq');

/*quando clicar em cada um dos faqs daí ele coloca ou tira a classe active de cada faq*/
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});