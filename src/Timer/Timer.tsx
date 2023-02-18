import { useEffect, useState } from "react";

interface Props {
    digit: number;
    className?: string;
}

function Digit({ digit, className }: Props) {


    return (
        <div className={`w-full h-full flex flex-col p-2 bg-neutral rounded-2xl 
        text-neutral-content bg-slate-400 font-bold`}>
            <div className={`${className}`}>
                {digit.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                })}
            </div>

        </div>
    )
}

interface TimerProps {
    start: boolean;

}
function Timer({ start = false }: TimerProps) {
    const [time, setTime] = useState(0)
    // const [millisconds, setMilliseconds] = useState(0)
    // const [seconds, setSeconds] = useState(0)
    // const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        const dt = new Date();
        let interval: string | number | NodeJS.Timeout | undefined;
        if (start) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 1000);
        } else if (!start) {
            clearInterval(interval);
            // setTime(0);
        }

        return () => clearInterval(interval);
    }, [start]);

    const seconds = Math.floor((time / 10) % 60)
    const minutes = Math.floor(time / (10 * 60))
    const hours = Math.floor(time / (10 * 60 * 60))


    return (
        <div className="grid grid-flow-col gap-2 text-center auto-cols-max py-4">
            <Digit digit={seconds} className={seconds > 0 ? `animate-down` : ''} />
            <span className="text-white text-lg">:</span>
            <Digit digit={minutes} className={seconds === 0 && minutes > 0 ? `animate-down` : ''} />
            <span className="text-white text-lg">:</span>
            <Digit digit={hours} />

        </div>
    )
}

export default Timer