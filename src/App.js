import { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Stopwatch, Button } from './components';

import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (watchOn) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);
  console.log(time);

  const handleStart = () => {
    setWatchOn((prevState) => !prevState);
    setTime(0);
  };

  return (
    <div className="App center">
      <div className="container">
        <Stopwatch time={time} />
        <div className="buttons">
          <Button text={'Start/Stop'} action={handleStart} />
          <Button text={'Wait'} />
          <Button text={'Reset'} />
        </div>
      </div>
    </div>
  );
}

export default App;
