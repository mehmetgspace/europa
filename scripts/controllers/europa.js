const Europa = function() {
  this.form = null;
  this.formItems = [];
}

/**
 * @define init
 * @description default actions
 */
Europa.prototype.init = function() {
  const self = this;

  // get form items
  self.getFormItems();

  // default event listeners
  self.eventListeners();
}

/**
 * @define eventListeners
 * @define default event listeners
 */
Europa.prototype.eventListeners = function() {
  const self = this;

  // submit form event
  self.submitForm();
}

/**
 * @define getFormItems
 * @description get all form items if match with data attr
 */
Europa.prototype.getFormItems = function () {
  const self = this;

  // get form element
  self.form = document.querySelector('form');

  // get every form elements
  self.formItems = document.querySelectorAll('[data-europa]');
}

/**
 * @define submitForm
 * @description submit form actions
 */
Europa.prototype.submitForm = function() {
  const self = this;

  if (self.form !== null) {
    self.form.addEventListener('submit', function (e) {
      e.preventDefault();

      // get each form elements
      self.formItems.forEach(function (formItem) {
        // check empty
        if (formItem.value === '') {
          // show error message if value is empty
          self.showMessage('error', formItem, 'Required');
        } else {
          self.showMessage('success', formItem, '');
        }
      });
    })
  }
}

/**
 * @define showMessage
 * @description show message for each item status
 * @param type
 * @param formItem
 * @param message
 */
Europa.prototype.showMessage = function(type, formItem, message) {
  // get parent element
  const parent = formItem.parentElement;

  // get validation element
  const messageEl = parent.querySelector('.europa-group__message');

  // change validation message
  messageEl.innerText = message;

  if (type === 'error') {
    // add error class to parent
    parent.classList.add('europa-group--error');
  }

  if (type === 'success') {
    // remove error class from parent
    parent.classList.remove('europa-group--error');
  }
};