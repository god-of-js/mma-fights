import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`)
  },
})
const multerInstance = multer({
  storage,
})

export default multerInstance
