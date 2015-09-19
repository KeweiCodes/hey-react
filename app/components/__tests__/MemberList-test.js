import $ from "jquery";

describe('MemberList', () => {
  var MemberList;
  var MemberActions;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    MemberList = require('../MemberList.jsx');
    MemberActions = require('../../actions/MemberActions');
  });

  it('can add a new member', () => {
    var vDom = TestUtils.renderIntoDocument(<MemberList />);
    var input = React.findDOMNode(vDom.refs.nameInput);
    var submit = React.findDOMNode(vDom.refs.submit);

    var realDom = React.findDOMNode(vDom);
    var title = $("h3", realDom)[0];
    expect(title.textContent).toBe('List of things');

    TestUtils.Simulate.change(input, { target: { value: 'baz' } });
    TestUtils.Simulate.click(submit);

    var li = $("li", realDom)[1];
    expect(li.textContent).toBe('baz');
  });
});
