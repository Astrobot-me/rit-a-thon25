import { useState, useEffect } from "react";

export const CountdownTimer : React.FC = () => {
  const eventDate = new Date("March 27, 2025 09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-12 bg-peek/85 backdrop-blur-md p-6 rounded-xl text-white text-center shadow-lg">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-Krona">Countdown to RIT-A-THON</h3>
      <div className="flex justify-center sm:gap-4 gap-1 text-3xl sm:text-5xl font-bold text-white">
        <div className="p-2 rounded-lg font-inter">
          <span className="">{timeLeft.days}</span>
          <p className="text-sm sm:text-lg">Days</p>
        </div>
        <div className="p-2 rounded-lg">
          <span>{timeLeft.hours}</span>
          <p className="text-sm sm:text-lg">Hours</p>
        </div>
        <div className="p-2 rounded-lg">
          <span>{timeLeft.minutes}</span>
          <p className="text-sm sm:text-lg">Minutes</p>
        </div>
        <div className="p-2 rounded-lg">
          <span>{timeLeft.seconds}</span>
          <p className="text-sm sm:text-lg">Seconds</p>
        </div>
      </div>
    </div>
  );
};
