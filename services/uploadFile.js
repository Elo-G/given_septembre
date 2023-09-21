//affichier dans lequel je vais utiliser multer pour uploader des fichiers (ici mes images)

//j'importe multer
const multer = require ('multer');
// je déclare une constante contenant tous les formats de fichiers que je souhaite uploader
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png' : 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => { //fonction definissant la destination du fichier que le client nous a envoyé (uploadé)
      callback(null, './assets/images/uploads/');
    },
    filename: (req, file, callback) => {  //fonction qui defini le nom que prendra le fichier uploadé par le client
      const name = file.originalname.split(' ').join('_'); //on remplace les espace par des "_" dans le nom du fichier original
      const extension = MIME_TYPES[file.mimetype];// on recupere l'extension du fichier
      callback(null, name + Date.now() + '.' + extension); 
    }
  });

  const upload = multer({  //middleware qui permet d'uploadé des fichier
    storage: storage, 
    limits:{
      fieldSize:1024*1024*3
    }
  })
  
  module.exports = upload