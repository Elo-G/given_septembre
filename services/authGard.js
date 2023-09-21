//authGard des utilisateurs:
const utilisateurModel = require ("../models/utilisateurModel.js");

const authGard = async (req, res, next) => {
    let utilisateur = await utilisateurModel.findById(req.session.utilisateurId)
    if (utilisateur) {
        next()
    }else{
        res.redirect('/userLogin')
    }
}

module.exports = authGard