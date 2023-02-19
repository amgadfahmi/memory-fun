import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Digit from '../Digit/Digit';
import { BoardStatus, setTimeToComplete } from '../store/boardSlice';
import { RootState } from '../store/store';

interface TimerProps {
    start: boolean;

}
function Timer({ start = false }: TimerProps) {
    const [time, setTime] = useState(0);
    const dispatch = useDispatch();
    const board = useSelector((state: RootState) => state.board);

    function createLeaderBoardRecord() {
        const ENDPOINT_URL = import.meta.env.VITE_ENDPOINT_URL;
        axios.post(`${ENDPOINT_URL}leaderboard/create`, {
            steps: board.numberOrTries, timeToComplete: seconds
        }).catch(e => {
            console.log(e);
        })
    }

    useEffect(() => {
        const dt = new Date();
        let interval: string | number | NodeJS.Timeout | undefined;
        if (start) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 1000);
        } else if (!start) {
            clearInterval(interval);
            dispatch(setTimeToComplete(time));
            if (board.status === BoardStatus.finished) {
                createLeaderBoardRecord();
            }
            setTime(0);
        }

        return () => clearInterval(interval);
    }, [start]);

    const seconds = Math.floor((time / 10) % 60)
    const minutes = Math.floor(time / (10 * 60))
    const hours = Math.floor(time / (10 * 60 * 60))


    return (
        <div className="grid grid-flow-col gap-2 text-center auto-cols-max py-4">
            <Digit digit={seconds} extraStyle='bg-zinc-400' className={seconds > 0 ? `animate-down` : ''} />
            <span className="text-white text-lg">:</span>
            <Digit digit={minutes} extraStyle='bg-zinc-400' className={seconds === 0 && minutes > 0 ? `animate-down` : ''} />
            <span className="text-white text-lg">:</span>
            <Digit digit={hours} extraStyle='bg-zinc-400' />

        </div>
    )
}

export default Timer