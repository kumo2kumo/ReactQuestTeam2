import React from 'react';
import axios from 'axios'
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: '',
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

  handleSubmit () {
    
    let newNumber = this.state.inputNumber;
    this.setState({
      inputNumber: "",
      meetingId: newNumber,
    });

    console.log(this.state.meetingId)
    // ? meetingIdに値が入るタイミングが不明
    axios.get('/getMeeting?id=' + this.state.inputNumber)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
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