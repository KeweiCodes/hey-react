var alt = require('../alt');

class MemberActions {
  addMember(name){
    this.dispatch(name);
  }
}

module.exports = alt.createActions(MemberActions);
