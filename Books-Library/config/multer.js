const multer = require('multer');
const uuid = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, callback) => {
        callback(null, uuid.v4() + path.extname(file.originalname));
    }
});

module.exports = multer({
    storage
});