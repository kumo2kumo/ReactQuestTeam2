import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber:'',
      meetingId: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      inputNumber: e.target.value
    });
  }

  handleSubmit(){
    let newNumber = this.state.inputNumber;
    this.setState({
      inputNumber:"",
      meetingId: newNumber,
    });

  }

  render() {
    return (
      <div>
        <div>
            <input
              type="text"
              value={this.state.inputNumber}
              onChange={this.handleChange}
            />
            <button
              onClick={ this.handleSubmit }
            >
              追加
            </button>
        </div>
        <p> MeetingId: {this.state.meetingId} </p>
      </div>
    );
  }
}

export default Form;