import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      Modal: {
        show: false,
        content: null,
      },
      textBoxVal: "",
    };
  }
  
  changeTextBoxValHandler  (evt){
    console.log(evt)
    console.log(evt.target)
    console.log(evt.target.value)
    let textBoxVal = evt.target.value;
    this.setState({...this.state, textBoxVal : textBoxVal})
}

  showModal(evt) {
    let requiredStateModal = true
    let content = (
<div className="modal-window">
            <div className="modal-header" style={{padding:"0 20px"}}>
                <h2>Add New Board</h2>
                <span className="close-button">&times;</span>
            </div>
            <div className="modal-content">
            <div style={{alignSelf:"center"}}>
        <input type="text" className="textbox" value={this.state.textBoxVal} onChange={this.changeTextBoxValHandler.bind(this)} />
        <button styleName="add-new-board" style={{ margin: "0 20px"}}> Add </button>
    </div>
            </div>
        </div>);
    this.setState({...this.state, Modal : {show : requiredStateModal, content : content}});
  }

  render() {
    let Modal = this.state.Modal
    return (
      <div className="App">
        <header className="App-header">
        <button styleName="add-new-board" onClick={this.showModal.bind(this)}>
          Add New Board
        </button>
        {Modal.show && Modal.content}
          Hi How r yu
        </header>
      </div>
    );
  }
}

export default App;
