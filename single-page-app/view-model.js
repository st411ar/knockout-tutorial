function WebmailViewModel() {
  var self = this;

  self.folders = [
    "Inbox",
    "Archive",
    "Sent",
    "Spam"
  ];

  self.chosenFolderId = ko.observable();

  self.goToFolder = function(folder) {
    self.chosenFolderId(folder);
  }
}