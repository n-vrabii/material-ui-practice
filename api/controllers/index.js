const fs = require('fs');

exports.index = function (req, res, next) {
  res.render('index', { title: 'Express' });
}

exports.getAllCars = function (req, res, next) {
  try {
    const data = fs.readFileSync('public/data/cars.json');
    res.end(data);
  } catch (e) {
    res.json({ message: "Couldn't find the file" });
  }
}

