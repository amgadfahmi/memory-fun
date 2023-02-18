import { useDispatch, useSelector } from 'react-redux';
import defaultCard from "../assets/defaultcard.png";
import Cell from "../Cell/Cell";
import type { CellState } from '../store/boardSlice';
import { RootState } from '../store/store';

interface Props {
    size: number;
}

function Board() {
    const cells = useSelector((state: RootState) => state.board.cells);
    const size = useSelector((state: RootState) => state.board.size);


    const gridCols = () => `grid-cols-${size} w-full h-full grid gap-1 `

    return (
        <div className={gridCols()}>
            {cells?.map((cell: CellState, index) => {
                return <Cell key={index} cell={cell} />

            })}

        </div>

    )
}

export default Board