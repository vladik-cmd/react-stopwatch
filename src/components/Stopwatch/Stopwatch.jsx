import './style.css';

export const Stopwatch = ({ time }) => {
  const h = Math.floor((time / (1000 * 60 * 60)) % 24);
  const m = Math.floor(time / 6000);
  const s = Math.floor((time / 100) % 60);
  return (
    <div className="watch">
      <h2>
        {h >= 10 ? h : `0${h}:`}
        {m >= 10 ? m : `0${m}:`}
        {s >= 10 ? s : `0${s}`}
      </h2>
    </div>
  );
};
