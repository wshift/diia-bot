const getCustomer = require('./customer');
const runScene = require('./scene');
const processMessageByType = require('./processMessageByType');

const services = {
  getCustomer,
  runScene,
  processMessageByType,
};

module.exports = services;
