const router = require('express').Router()
const rows = require('../dataset.js')
const validRatityList = require("../utils/validRatityList")


//END POINTS
router.get('/listado-rarity', (req, res) => {

    try {
        const listRarity = rows.filter(row => {
            return validRatityList.includes(row.rarity);
        }).slice(0, 100);

        return res.status(200).json(listRarity);

    } catch (e) {
        return res.status(500).json({ "message": "Error: " + e });
    }

});

router.get('/listado-card-set', (req, res) => {

    try {
        const cardSetObject = {};
        rows.forEach(row => {
            cardSetObject.hasOwnProperty(row.cardSet) ? cardSetObject[row.cardSet]++ : cardSetObject[row.cardSet] = 1;
        });

        return res.status(200).json(cardSetObject);

    } catch (e) {
        return res.status(500).json({ "message": "Error: " + e });
    }
});

module.exports = router