const {Router} = require('express')
const { route } = require('..')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.listarTodosNiveis)


module.exports = router
