const {Router} = require('express');

const multer  = require('multer')

const router = Router();

function filename (request, file, callback) {
    callback(null, file.originalname);
}

const storage = multer.diskStorage({   
    'destination':  'api/uploads/',
    'filename': filename   
 });

const fileFilter = (req, file, callback) => {}
 if(file.mimetype !== 'image/png') 
 {
    req.fileValidationError ='Wrong file type'
    callback(null,false, new Error('Wrong file type'));
 }
 else(callback(null, true));

const upload = multer({
    fileFilter: fileFilter,
    storage: storage
})    









//call the post() method of our router object. Let's pass the route '/upload' as its first argument. The second argument should be a call to the upload object's method single(), passing in the string 'photo'. The third argument is an anonymous function that takes request and response as parameters. Inside the function body, check if the request object has a fileValidationError property. If it does return a call to response.status(), passing in 400 as the lone argument. Chain a call to json(), passing in an object literal with a key of error and a value of request.fileValidationError. If there is no fileValidationError on request, let's return a call to response.status(), passing in 201. Let's chain a call to json(), passing in an object literal with a key of success and the boolean value true.
router.post('/upload', upload.single('photo'), (req, res) => {
    if(req.fileValidationError) {
        res.status(400).json({error: req.fileValidationError})
    } else {
        res.status(201).json({success: true})
    }
})

module.exports = router;