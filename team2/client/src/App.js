
import ScheduledList from './features/cards/ScheduledList';
import CompletedList from './features/cards/CompletedList';
import TodoCard from './features/cards/TodoCard';
import Form from './features/cards/components/Form';

import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <div>
        <Form />
      </div>
      <Grid container justify="space-around">
        <ScheduledList />
        <CompletedList />
        <TodoCard />
      </Grid>
    </div>
  );
}

export default App;
