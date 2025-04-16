const areaModel = require("../models/AreaModel");

const addArea = async (req, res) => {
  try {
    const savedArea = await areaModel.create(req.body);
    res.status(201).json({
      message: "Area added successfully",
      data: savedArea,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const getAreas = async (req, res) => {
  try {
    const areas = await areaModel.find().populate("cityId").populate("stateId");
    res.status(200).json({
      message: "All Areas",
      data: areas,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get areas by city
const getAreaByCityId = async (req, res) => {
  try {
    const { cityId } = req.params;
    const areas = await areaModel.find({ cityId: cityId });
    res.status(200).json({
      message: "Areas by city",
      data: areas,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addArea, getAreas, getAreaByCityId };
