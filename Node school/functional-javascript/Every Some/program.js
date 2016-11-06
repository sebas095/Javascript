const checkUserValid = goodUsers => submittedUsers => {
  return submittedUsers.every(submittedUser => goodUsers.some(goodUser => {
    return goodUser.id === submittedUser.id;
  }));
};
module.exports = checkUserValid;
