const Promise = require('bluebird');
const AppDAO = require('../../db');
const beitragModel = require('../models/beitragModel');

const db = new AppDAO(
  `${__dirname}/../dev-data/test.sqlite3`
);
let Beitrag = new beitragModel(db);
Beitrag.createTable();

exports.getAllBeitraege = async (req, res) => {
  try {
    const beitraege = await Beitrag.getAll();
    res.status(200).json({
      status: 'success',
      result: beitraege.length,
      beitraege,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createBeitraege = async (req, res) => {
  try {
    const newBeitrag = await Beitrag.createPost(req.body);
    console.log(req.body);
    res.status(201).json({
      status: 'success',
      newBeitrag,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getBeitrag = async (req, res) => {
  try {
    const id = req.params.id * 1;
    const beitrag = await Beitrag.findById(id);

    res.status(200).json({
      status: 'success',
      beitrag,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteBeitrag = async (req, res) => {
  try {
    const id = req.params.id * 1;
    await Beitrag.delete(id);

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateBeitrag = async (req, res) => {
  try {
    const id = req.params.id * 1;
    const inhalt = req.body.text;
    const updatedBeitrag = await Beitrag.update({
      id,
      inhalt,
    });

    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};
