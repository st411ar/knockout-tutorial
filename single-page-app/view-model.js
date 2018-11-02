function WebmailViewModel() {
  var self = this;

  self.webApiUrl = 'http://learn.knockoutjs.com/mail';

  self.folders = [
    "Inbox",
    "Archive",
    "Sent",
    "Spam"
  ];

  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();
  self.chosenMailData = ko.observable();


  self.requestWebApi = function(data, callback) {
    $.get(self.webApiUrl, data, callback);
  }

  self.goToFolder = function(folder) {
    location.hash = folder;
  }

  self.goToMail = function(mail) {
    location.hash = mail.folder + '/' + mail.id;
  }

  Sammy(function() {
    this.get('#:folder', function() {
      var folder = this.params.folder;

      self.chosenFolderId(folder);
      self.chosenMailData(null);

      var data = { folder: folder };
      var callback = self.chosenFolderData;
      self.requestWebApi(data, callback);
    });

    this.get('#:folder/:mailId', function() {
      var folder = this.params.folder;
      var mailId = this.params.mailId;

      self.chosenFolderId(folder);
      self.chosenFolderData(null);

      var data = { mailId: mailId };
      var callback = self.chosenMailData;
      self.requestWebApi(data, callback);
    });

    this.get('', function() {
      this.app.runRoute('get', '#Inbox');
    });
  }).run();
}