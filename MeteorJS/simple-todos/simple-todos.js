Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function() {
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      }
      else
        return Tasks.find({}, {sort: {createdAt: -1}});
    },

    hideCompleted: function() {
      return Session.get("hideCompleted");
    },

    incompletedCount: function() {
      return Tasks.find({checked: {$ne: true}}).count();
    }
  });

  Template.body.events({
    "submit .new-task": function(ev) {
      ev.preventDefault();

      // Get value from element
      var text = ev.target.text.value;

      // Insert a task into the Collection
      Tasks.insert({
        text: text,
        createdAt: new Date(),            // current time
        owner: Meteor.userId(),           // _id if logged in user
        username: Meteor.user().username  // username of logged in user
      });

      // Clear form
      ev.target.text.value = "";
    },

    "click .toggle-checked": function() {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: !this.checked}
      });
    },

    "click .delete": function() {
      Tasks.remove(this._id);
    },

    "change .hide-completed input": function(ev) {
      Session.set("hideCompleted", ev.target.checked);
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
