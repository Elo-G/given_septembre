//j'importe mongoose pr communiquer avec ma bdd Mongodb
const mongoose = require("mongoose");
//commentaire commit
const utilisateurSchema = new mongoose.Schema({
    img: {
        type: String,
    },

    statuts: {
        type: Number,
        default: 0,
    },

    nom: {
        type: String,
        require: [true, "nom requis"],
        validate: {
            //validator  méthode pour utiliser des regexs afin de sécuriser un password ou de paramétrer la chaîne de caractère saisie par l'utilisateur
            validator: function (valeur) {
                return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(valeur);
            },
            message: "Entrez un nom valide" // la méthode renvoie ce message si le nom ne respecte pas la regex
        },
    },

    prenom: {
        type: String,
        require: [true, "prénom requis"],
        validate: {
            validator: function (valeur) {
                return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(valeur);
            },
            message: "Entrer un prénom valide"
        },
    },

    mail: {
        type: String,
        require: [true, "email requis"],
        validate: {
            validator: function (valeur) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(valeur);
            },
            message: "entrez un email valide"
        },
    },

    password: {
        type: String,
        require: [true, "mot de passe requis"],
    }
})


//je créé la "structure "(le type de données que je veux stoquer dans ma collection) de ma collection  "utilisateurs" grâce à la méthode mongoose.model()
const utilisateurModel = mongoose.model("utilisateurs", utilisateurSchema);
//j'exporte mon "utilisateurModel" pour pouvoir l'utiliser en l'important sur les fichiers où j'en aurais besoin
module.exports = utilisateurModel;




