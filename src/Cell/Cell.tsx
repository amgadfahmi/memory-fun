
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayFunction } from 'use-sound/dist/types';
import defaultcard from "../assets/defaultcard.png";

import Modal from '../Modal/Modal';
import { addTry, BoardStatus, CellState, setCell, setStatus } from '../store/boardSlice';
import { RootState } from '../store/store';

interface Props {
    cell: CellState;
    playSweep: PlayFunction,
    playFail: PlayFunction,
    playSuccess: PlayFunction,
    playComplete: PlayFunction,
}

function Cell({ cell, playSweep, playFail, playSuccess, playComplete }: Props) {
    const [animate, setAnimate] = useState('');
    const cells = useSelector((state: RootState) => state.board.cells);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


    function getImgUrl(path: string) {
        return new URL(path, import.meta.url).toString()
    }



    function gameOver() {
        playComplete();
        dispatch(setStatus(BoardStatus.finished));
        setShowModal(true);
    }

    const onCellClick = (cellData: CellState) => {
        if (cellData.show) return;
        if (cellData.matchFound) return;
        playSweep()
        dispatch(addTry(1));
        cellData.show ? setAnimate('') : setAnimate('animate-jello');

        dispatch(setCell({
            ...cellData,
            backgroundImg: `../assets/${cellData.handle}.png`,
            show: true,
        }));

        setTimeout(() => {
            const matchFound = cells.filter(x => x.id !== cellData.id && x.show && x.handle === cellData.handle);
            const openButNoMatch = cells.filter(x => x.id !== cellData.id && x.show && !x.matchFound);
            if (matchFound.length > 0) {
                playSuccess();
                const isGameOver = cells.filter(x => x.matchFound).length + 2 === cells.length;

                dispatch(setCell({
                    ...matchFound[0],
                    show: true,
                    matchFound: true
                }));
                dispatch(setCell({
                    ...cellData,
                    backgroundImg: `../assets/${cellData.handle}.png`,
                    show: true,
                    matchFound: true,
                }));
                return isGameOver && gameOver();
            }
            else if (openButNoMatch.length > 0) {
                playFail();
                setAnimate('animate-shake');
                dispatch(setCell({
                    ...openButNoMatch[0]
                    , matchFound: false
                    , show: false
                }));
                return dispatch(setCell({
                    ...cellData,
                    show: false,
                }));
            }
        }, 800);

    }

    return (
        <div key={cell.id}
            className={`w-full h-full relative px-0 border-solid border-2 rounded-2xl text-white
                       bg-zinc-700 border-yellow-600 
                        flex justify-center items-center cursor-pointer bg-cover`} >
            <Modal showModal={showModal} setShowModal={setShowModal} showResult={true} />

            <img src={cell.show ? getImgUrl(cell.backgroundImg) : defaultcard}
                className={`w-full h-full object-cover rounded-2xl ${animate}`} onClick={e => onCellClick(cell)} />
            {import.meta.env.DEV && <div className='absolute left-1/2'>{cell.handle}</div>}
        </div >
    )
}

export default Cell