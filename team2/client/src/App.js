
import ScheduledList from './features/cards/ScheduledList';
import CompletedList from './features/cards/CompletedList';
import { TestForm } from './features/cards/components/@testForm';

import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <div>
        <TestForm />
      </div>
      <Grid container justify="space-around">
        <ScheduledList />
        <CompletedList />
      </Grid>
    </div>
  );
}

export default App;
