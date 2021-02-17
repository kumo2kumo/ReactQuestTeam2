
import ScheduledList from './features/cards/ScheduledList';
import CompletedList from './features/cards/CompletedList';
import Grid from '@material-ui/core/Grid';
import { TestForm } from './features/cards/@@testForm';


function App() {
  return (
    <div className="App">
      <Grid container justify="space-around">
        <ScheduledList />
        <CompletedList />
      </Grid>
      <TestForm />
    </div>
  );
}

export default App;
