function paginar(pageId) {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        item.classList.remove('active');
    });

    const page = document.getElementById(pageId);
    page.classList.add('active');
}
