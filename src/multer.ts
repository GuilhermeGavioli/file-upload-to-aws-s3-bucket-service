import path from 'path'
import multer from 'multer'

export const upload = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, 'file_system'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    }),
    limits: {
        // fileSize: 1024 * 230
    },
    fileFilter: (req, file, cb) => {
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);
        if(extensaoImg) return cb(null, true);
        return cb(null, false);
    }
}));