const Customer = require('../entity/customer');

const tempDb = {}; // TODO: replace this into DB to save user states after app restart

const getCustomer = ({ chatId, firstName, lastName }) => {
  const customer = tempDb[chatId];
  if (!customer) {
    tempDb[chatId] = new Customer({ firstName, lastName });
    return tempDb[chatId];
  }
  return customer;
};

module.exports = getCustomer;
