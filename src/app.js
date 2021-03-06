
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
      return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I Do?</button>
      </div>
    );
  }
}

// Options -> Options Component here
// AddOption -> AddOption component here

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll() {
    console.log(this.props.options);
    
    //alert("Se removienon todas la opciones");
  }
  render() {
  return (
    <div>
    <button onClick={this.handleRemoveAll}>Remove All</button>
     {
     this.props.options.map((option) => <Option key={option} optionText={option} />) 
     }
     
        </div>
  );
}

}

class Option extends React.Component {
  render() {
    return (
      <div>
     Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handlleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
  
    if (option) {
      alert("some value in");
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handlleAddOption}>
        <input type="text" name="option" />
        <button >Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));