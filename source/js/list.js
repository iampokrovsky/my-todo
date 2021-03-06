;
(function () {
  var currentDate = document.querySelector('.header__current-date');


  var setDefaultDate = function () {
    var date = time.getStringDate(new Date());
    currentDate.value = date;
  }

  var resetDefaultDate = function () {
    currentDate.value = null;
  }


  var getTimeRange = {
    min: function (dateObj) {
      dateObj.setHours(0, 0, 0);
      return dateObj;
    },
    max: function (dateObj) {
      dateObj.setHours(23, 59, 59);
      return dateObj;
    },
  }


  var ListSettings = function (dateObj) {
    this.calendarId = 'primary';
    this.timeMin = getTimeRange.min(dateObj).toISOString();
    this.timeMax = getTimeRange.max(dateObj).toISOString();
    this.singleEvents = true;
    this.orderBy = 'startTime';
  }


  var listEvents = function (dateObj) {
    gapi.client.calendar.events.list(new ListSettings(dateObj))
      .then(function (response) {
        var events = response.result.items;
        items.clear();
        storage.clear('fontFamily');
        if (events.length > 0) {
          items.render(events);
        } else {
          notice.show('События не найдены');
        }
      });
  }


  var onListDateChange = function () {
    var date = new Date(this.value);
    listEvents(date);
  }


  currentDate.addEventListener('change', onListDateChange);


  window.list = {
    setDefaultDate: setDefaultDate,
    resetDefaultDate: resetDefaultDate,
    update: listEvents,
  }

})();
