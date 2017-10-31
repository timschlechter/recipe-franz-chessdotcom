'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const userNavElement = document.querySelector(".user-nav");
    const notificationElements = Array.prototype.slice.call(userNavElement.querySelectorAll("[data-notifications]"));

    const count = notificationElements
                    .map(elt => parseInt(elt.getAttribute('data-notifications')))
                    .reduce((result, count) => result + count)

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};