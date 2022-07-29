//-----------------------------------
//Projet 1 - Générateur de citations
//-----------------------------------

//Ce projet nécessite des connaissances sur: 
//querySelector()
//addEventListener
//l'objet Math
//innerText - textContent

//------------------------------------
//###################################
//------------------------------------

const btn = document.querySelector("#new-citation");//# pour un id
console.log(btn);
const citation = document.querySelector(".citation");//.pour une class
const auteur = document.querySelector(".auteur");


const citations =[//ceci est un tableau, on sépare avec des virgules
    {
        citation: `"Dans une certaine mesure, si vous avez vu un bidonville, vous les avez tous vus."`,
        auteur: `Spiro Theodore Agnew`,
            img: "https://images.pexels.com/photos/7657346/pexels-photo-7657346.jpeg?auto=compress"

    },  {//ici, on rentre un nouvel objet
        citation: `"L'expérience qui rend le plus heureux est celle qui a rendu le plus de gens heureux."`,
        auteur:  `Karl Marx`,
        img: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress"
    
    
    },  {
        citation: `"Les dîners de famille sont le plus souvent une épreuve d'indigestion nerveuse, précédée d'un ressentiment et d'un ennui cachés et accompagnée de tremblements psychosomatiques."`,
        auteur:  `M. F. K. Fisher`,
        img: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress"
    
    
    },  {
        citation: `"Nous voterions tous pour le meilleur homme, mais il n'est jamais candidat."`,
        auteur:  `Will Rogers`,
        img: "https://images.pexels.com/photos/922100/pexels-photo-922100.png?auto=compress"
    
    
    },  {
        citation: `"La seule chose qui cloche avec l'immortalité, c'est qu'elle a tendance à s'éterniser."`,
        auteur:  `Herb Caen`,
        img: "https://images.pexels.com/photos/4346281/pexels-photo-4346281.jpeg?auto=compress"
    
    
    },  {
        citation: `"Tout le monde ne fait pas confiance aux peintures, mais les gens croient aux photographies."`,
        auteur:  `Ansel Adams`,
        img: "https://images.pexels.com/photos/4757966/pexels-photo-4757966.jpeg?auto=compress"
    
    
    },  {
        citation: `"Apprendre, c'est découvrir ce que vous savez déjà. Faire, c'est démontrer que vous le savez. Enseigner, c'est rappeler aux autres qu'ils le savent tout aussi bien que vous. Vous êtes tous des apprenants, des exécutants et des enseignants."`,
        auteur:  `Richard David Bach`,
        img: "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress"
    
    
    },  {
        citation: `"J'aime mieux être exposé aux inconvénients d'une trop grande liberté qu'à ceux d'un trop petit degré de liberté."`,
        auteur:  `Thomas Jefferson`,
        img: "https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress"
    
    
    },  {
        citation: `"Une hirondelle ne fait pas un été, mais un écheveau d'oies, fendant le brouillard du dégel de mars, c'est le printemps."`,
        auteur:  `Aldo Leopold`,
        img: "https://images.pexels.com/photos/7177008/pexels-photo-7177008.jpeg?auto=compress"
    
    
    },  {
        citation: `"Lorsque je vais dans mon jardin avec une bêche et que je creuse un lit, je ressens une telle exaltation et une telle santé que je découvre que je me suis trompé pendant tout ce temps en laissant les autres faire pour moi ce que j'aurais dû faire de mes propres mains."`,
        auteur:  `Ralph Waldo Emerson`,
        img: "https://images.pexels.com/photos/4894617/pexels-photo-4894617.jpeg?auto=compress"
    
    
    }//ici, plus besoin de virgule, car il n'y a plus d'objet
    ];

    btn.addEventListener("click",() =>{
        //let random = Math.random() *10//magic number=mauvaise pratique
        let random = Math.floor(Math.random() * citations.length);
        citation.innerText = citations[random].citation;
        auteur.innerText = citations[random].auteur;
        document.body.style.background = `url(${citations[random].img}) no-repeat center /cover`;        

    })



