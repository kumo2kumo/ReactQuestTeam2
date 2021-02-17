import ScheduledList from './features/cards/ScheduledList';
import CompletedList from './features/cards/CompletedList';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid container justify="space-around">
        <ScheduledList />
        <CompletedList />
      </Grid>
    </div>
  );
}

export default App;
