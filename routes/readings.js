let express = require('express'),
    router = express.Router({ mergeParams: true }),
    subscriptions = require('../controllers/subscriptions'),
    readings = require('../controllers/readings');

router.get('', readings.findAllReadings);
router.get('/:id', readings.findUserReadings);
router.get('/:id/subscriptions', subscriptions.findSubscriptionReadings);
router.get('/:id/summary', readings.summarizeReading);
router.post('/:id/favorite/:user_id', readings.markFavorite);
router.delete('/:id/favorite/:user_id', readings.deleteFavorite);


module.exports = router;