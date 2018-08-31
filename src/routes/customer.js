const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id_est', customerController.edit);
router.post('/update/:id_est', customerController.update);
router.get('/delete/:id_est', customerController.delete);
router.get('/buscar/:query', customerController.buscar);

module.exports = router;

