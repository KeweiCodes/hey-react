import MemberActions from '../actions/MemberActions';
import MemberStore from '../stores/MemberStore';
import React from 'react/addons';
import constants from "CONSTANTS"

class MemberList extends React.Component{
  constructor() {
    super();
    this.state = MemberStore.getState();
    this.newMemberName = "";
  }

  componentDidMount() {
    MemberStore.listen(this.onChange.bind(this));
    MemberActions.addMember(constants.STATIC_STRING);
  }

  addMember() {
    MemberActions.addMember(this.state.newMemberName);
    this.setState({ newMemberName: '' });
  }

  onChange(state) {
    this.setState(state);
  }

  handleChange(e){
    this.setState({
      newMemberName: e.target.value
    });
  }

  render() {
    return (
      <main>
        <h3>List of things</h3>
        <ul>
          {this.state.members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
        <input onChange={this.handleChange.bind(this)} value={this.state.newMemberName} ref="nameInput" />
        <button onClick={this.addMember.bind(this)} ref="submit">Add Member</button>
      </main>
    );
  }
};

module.exports = MemberList;
