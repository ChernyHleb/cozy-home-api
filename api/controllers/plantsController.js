const db = require('../models');

const Plant = db.plants;

const addPlant = async (req, res) => {
    let info = {
        id: req.body.id,
        plant_name: req.body.plant_name,
        product_type: req.body.product_type,
        plant_type: req.body.plant_type,
        price: req.body.price,
        image: req.body.image,
        manufacturer_country: req.body.manufacturer_country
    };

    const plant = await Plant.create(info);
    res.status(200).send(plant);
}