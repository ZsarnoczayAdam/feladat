const TestComponent1 = (props) => (
  <div>Hello {props.loggedIn ? "bejelentkezett személy" : "idegen"}</div>
);

export default TestComponent1;