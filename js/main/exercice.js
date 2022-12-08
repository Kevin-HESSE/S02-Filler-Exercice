//! ----------------------------------------------------
//! Déclaration des classes ignorés cela pour l'instant
//! ----------------------------------------------------

class Exercice {
    constructor (id, title, name, link,description, advice) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.link = link;
        this.description = description;
        this.advice = advice;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getName() {
        return this.name;
    }

    getLink() {
        return this.link;
    }

    getDescription() {
        return this.description;
    }

    getAdvice() {
        return this.advice;
    }

}

//! ------------------------------------
//! Automatisation des pages
//! ------------------------------------

/* Création des objets exercices */
const listExercice = [
    new Exercice(
        1, 
        'exercice 1',
        'La phrase la plus longue',
        'exo1',
        'Dans cette exercice, vous allez devoir calculer le nombre de lettre dans une phrase. Bien sur, vous devrez prendre en compte les phrases soumises au formulaires. La phrase et le résultat doivent apparaitre dans l\'encart prévu à cette effet. Les principes d\'algo, de nouvelles notions, la manipulation de DOM et la récupération des données de formulaire sont aux programmes. ', 
        [
            `<span>Pour commencer, essayer avec une phrase simple comme: <code>Je suis à la fois tout et rien</code> . Tentez de déterminer sa longueur en comptant le nombre de lettre.</span>`,
            `Ensuite, trouver une fonction pour retirer les espaces présents. Plusieurs solutions sont possibles. Documentez-vous bien.`,
            `Une fois l'algo établi, récupérer les données du formulaire. Attention au comportement par défaut, et n'oubliez pas de vider le formulaire`,
            `Votre programme fonctionne ? Super, fini de jouer, faut ranger sa chambre ! Mettez en place un objet qui s'occupera de tout et qui sera dans un fichier à part. N\'oubliez pas les liaisons entre fichiers.`
        ]),
    new Exercice(
        2,
        'exercice 2',
        'Calcul des moyennes',
        'exo2',
        `Un enseignant voudrait calculer les moyennes des deux étudiants et connaitre celui qui à la meilleure note. Il veut tout ça au propre. Il faut afficher les noms, les notes ainsi que le meilleur dans le html`,
        [
            `Créer dans un premier temps, deux élèves qui seront considérés comme des objets dans notre script. Ils auront chacun deux propriétés`,
            `On calcule leur moyenne qu'on stockera dans leurs objets respectifs. Pour rappel la moyenne est égal à la somme des notes divisé par le nombre de note`,
            `Ensuite on fait la différence des moyennes et on affiche celui qui est meilleur que l'autre dans la page HTML. Pour vous aider à afficher les élèves, servez vous de la fonction mis à disposition`,
            `En dernier, on range nos belles fonctions dans un nouvel objet.`
        ]),
    new Exercice(
        3,
        'exercice 3',
        'Menu burger',
        'exo3',
        `L'objectif est simple. Je clique sur le menu burger et mon menu s'ouvre. Je clique à nouveau, il se referme. Cette notion est souvent pratiquée lors des design responsives.`,
        [
            `Je ne sais pas qui a fait ces styles css, mais c'est un beau chantier. Analysez le et regarder quel élément doivent être pris en compte. En théorie, vous n'avez pas besoin d'y toucher. Faites des essais à l'aide du dev tools`,
            `Attention, le burger est dans une balise 'a'. Il fait simplement ce qu'on lui dit de faire par défaut.`,
            `Les classes, c'est stylé et ca s'entend super bien avec le javascript. On en ajoute. On en enlève. Et même les deux grâce à un interrupteur.`,
            `Ca fonctionne ? Génial, reste plus qu'à ranger si ce n'est pas fait.`,
        ]
    ),
    new Exercice(
        4,
        'exercice 4',
        `Défilement d'images`,
        'exo4',
        `Ici, vous allez devoir gérer un défilement d'images. L'utilisateur doit pouvoir passer d'une image à une autre à l'aide des curseurs. Pas besoin d'effet de transitions.`,
        [
            `Dans un premier temps, repérer les éléments nécessaires.`,
            `Ensuite, pourquoi ne pas s'intéresser à défiler vers la droite? C'est le plus simple, on avance de pas en pas`,
            `Attention, prenez en compte le cycle des images. Eventuellement s'il y a un compteur, le remettre à zéro`,
            `Enfin le slide vers la gauche, c'est presque la même chose que d'aller de l'avant mais... à reculons ! `,
        ]
    )
]

const exercice = {
    mainMenu : document.querySelector('#mainMenu'),
    actualPage : document.baseURI.match(/(exo[0-9]?)/g),

    init : function () {
        for (let index = 0; index < listExercice.length; index++) {
            if (exercice.actualPage === null) {
                page.index(listExercice[index]);
            } else {
                page.exercicePage(listExercice[index], exercice.actualPage);
            } 
        }
    },
}