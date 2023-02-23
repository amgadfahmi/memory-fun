import { useSelector } from 'react-redux';
import useSound from 'use-sound';
import sweep from '../assets/sounds/click.wav';
import complete from '../assets/sounds/complete.wav';
import fail from '../assets/sounds/fail.wav';
import success from '../assets/sounds/success.wav';

import Cell from "../Cell/Cell";
import type { CellState } from '../store/boardSlice';
import { RootState } from '../store/store';


function Board() {
    const cells = useSelector((state: RootState) => state.board.cells);
    const size = useSelector((state: RootState) => state.board.size);
    const [playSweep] = useSound(sweep);
    const [playFail] = useSound(fail);
    const [playSuccess] = useSound(success);
    const [playComplete] = useSound(complete);


    const gridCols = () => `grid-cols-${size} w-full h-full grid gap-1 `

    return (
        <div className={gridCols()}>
            {cells?.map((cell: CellState, index) => {
                return <Cell key={index} cell={cell} playSweep={playSweep} playComplete={playComplete} playSuccess={playSuccess} playFail={playFail} />

            })}

        </div>

    )
}

export default Board