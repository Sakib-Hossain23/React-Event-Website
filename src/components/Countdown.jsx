import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2026-01-01T00:00:00'); // Set your event date here
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeDifference = eventDate - now;

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
    <br />
    <div className="event-countdown text-center mb-3">
      <h4 className="countdown-intro mb-2">Event Starts In:</h4>
      <div id="countdown-box" className="countdown-box">
        <div>
          <span className="countdown-item">
            <strong>{timeLeft.days}</strong> Days
          </span>
          <span className="countdown-item">
            <strong>{timeLeft.hours}</strong> Hrs
          </span>
          <span className="countdown-item">
            <strong>{timeLeft.minutes}</strong> Mins
          </span>
          <span className="countdown-item">
            <strong>{timeLeft.seconds}</strong> Secs
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Countdown;
