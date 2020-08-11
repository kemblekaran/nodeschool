function getShortMessages(messages) {
    return messages.filter(messageObject=> messageObject.message.length < 50)
    .map(messageObject=> messageObject.message);
  }

  module.exports = getShortMessages