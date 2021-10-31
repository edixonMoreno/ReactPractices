class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I Do?</button>
      </div>
    );
  }
}

// Options -> Options Component here
// AddOption -> AddOption component here

class Options extends React.Component {
render() {
  return (
    <div>
    <ui>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
    </ui>
    <Option />
    </div>
  );
}

}

class Option extends React.Component {
  render() {
    return (
      <div>
      Option Component Here
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add Option</button>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));