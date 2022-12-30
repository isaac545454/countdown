import { useState } from "react";

interface Res {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const useCounte = (data: string) => {
  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  const countDate = (data: string) => {
    const countDate: number = new Date(data).getTime();
    const now: number = new Date().getTime();
    const interval: number = Number(countDate) - Number(now);

    const second: number = 1000;
    const minute: number = second * 60;
    const hour: number = minute * 60;
    const day: number = hour * 24;
    const dayNumber: number = Math.floor(interval / day);
    const hourNumber: number = Math.floor((interval % day) / hour);
    const minuteNumber: number = Math.floor((interval % hour) / minute);
    const secondNumber: number = Math.floor((interval % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  };

  setInterval(() => countDate(data), 1000);

  console.log(day, hour, minute, second);
  return [day, hour, minute, second];
};

export default useCounte;
