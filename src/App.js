import { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Stopwatch, Button } from './components';

import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [waitClick, setWaitClick] = useState(false);

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
    if (waitClick) {
      setWatchOn((prevState) => !prevState);
      setWaitClick(false);
    } else {
      setWatchOn((prevState) => !prevState);
      setTime(0);
    }
  };

  const handleWait = (e) => {
    let timer;
    const showMessage = (count) => {
      if (count >= 2) {
        setWatchOn(false);
        setWaitClick(true);
      }
    };
    clearTimeout(timer);
    timer = setTimeout(showMessage, 300, e.detail);
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <div className="App center">
      <div className="container">
        <Stopwatch time={time} />
        <div className="buttons">
          <Button text={'Start/Stop'} action={handleStart} />
          <Button text={'Wait'} action={handleWait} />
          <Button text={'Reset'} action={handleReset} />
        </div>
      </div>
    </div>
  );
}

export default App;
