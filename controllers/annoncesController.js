const annoncesModel = require('../models/annoncesModel');




exports.deleteAnnonces = async(req)=>{
    await annoncesModel.deleteOne({ _id: req.params.id })
    //await annoncesModel.updateOne({ _id: req.session.companyId }, { $pull: { employees: req.params.id } })
}
