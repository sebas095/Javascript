const loadUsers = (userIds, load, done) => {
  let users = new Array(userIds.length);
  let idx = 0;
  userIds.forEach((id, index) => {
    load(id, user => {
      users[index] = user;
      if (++idx === userIds.length) return done(users);
    });
  });
};

module.exports = loadUsers;
