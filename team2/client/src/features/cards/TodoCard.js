import React from 'react';
import axios from 'axios';

class TodoCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      host: "",
      url: "",
    };
  }


  // state = { users: [] }

  componentDidMount() {
    axios.get('/users')
      .then(function (response) {
        // handle success
        console.log(response.data);
        // this.setState((response) => {
        //   return {id: response.data.id}
        // })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

  render() {
      return (
        <div className="card">

          <ul>
            <li>タイトル: テスト1</li>
              <li>開始時間: { this.state.id }</li>
          </ul>
        </div>
      )
    }
}

export default TodoCard;