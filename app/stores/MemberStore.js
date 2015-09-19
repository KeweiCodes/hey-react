import alt from '../alt';
import MemberActions from "../actions/MemberActions";

class MemberStore {
  constructor() { 
    this.members = [];
    this.bindListeners({
      handleAddMember: MemberActions.ADD_MEMBER
    });
  }

  handleAddMember(name){
    this.members.push(name);
  }
}

module.exports = alt.createStore(MemberStore, 'MemberStore');
