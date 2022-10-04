//Je crée une variable selectionnant toute les classes panel
const panels = document.querySelectorAll('.panel');
//Je crée une boucle pour chaque classe panel j'ajoute un EventListener
panels.forEach((panel) => {
    panel.addEventListener('click' , () => {
        //Au clique sur l'élément contenant la classe panel seras alors ajouter/enlever une classe 'active'
        removeActiveClasses();
        panel.classList.add('active');
    });
});

//Fonction permettant d'enlever la classe 'active'
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}