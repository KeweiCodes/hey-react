describe('MemberStore', () => {
  var MemberActions;
  var MemberStore;

  beforeEach(() => {
    MemberActions = require('../../actions/MemberActions');
    MemberStore = require('../MemberStore');

    MemberActions.addMember('foo');
    jasmine.clock().tick();
  });

  it('can add a member', () => {
    var members = MemberStore.getState().members;
    expect(members[0]).toEqual( 'foo' );
  });
});
