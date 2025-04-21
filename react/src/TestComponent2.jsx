const TestComponent2 = (props) => {
  if (!props.loggedIn) {
    return <h1>Please log in!</h1>
  }

  return <div>Hello {props.name}</div>
}

export default TestComponent2;