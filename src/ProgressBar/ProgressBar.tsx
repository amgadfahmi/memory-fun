import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function ProgressBar() {
    // const [status, setStatus] = useState('');
    const cells = useSelector((state: RootState) => state.board.cells);

    const successCount = cells.filter((cell) => cell.matchFound).length;
    const barColor = () => {
        let degree = successCount;
        let intense = 400;
        let color = 'yellow';
        switch (true) {
            case degree > 13:
                color = 'red';
                intense = 600;
                break;
            case degree > 11:
                color = 'orange';
                intense = 600;
                break;
            case degree > 9:
                color = 'orange';
                break;
            case degree > 7:
                intense = 800;
                break;
            case degree > 5:
                intense = 600;
                break;
        }
        return `bg-${color}-${intense}`;
    }
    const successPercentage = successCount / cells.length * 100
    const status = () => {
        let value = Math.floor(successPercentage)
        switch (true) {
            case value >= 99:
                return 'Beast ! 💃';
            case value >= 75:
                return 'Awesome ! 💓';
            case value >= 50:
                return 'Yup ! 🚩';
            case value >= 25:
                return 'Cool ! 🌻';
            case value >= 12:
                return 'Nice ! 😉';
            case value === 0:
                return 'Lets go! 🙏';
            default:
                return 'Common! 🚀';
        }
    }


    return (
        <div className="w-full px-4 mb-4 grid grid-cols-1 ">
            <span className="font-extrabold text-white text-center pb-5">{status()}</span>

            <div className="bg-slate-400 relative h-4 w-full rounded-2xl">
                <div
                    className={`${barColor()} transition absolute top-0 left-0 flex h-full items-center justify-center rounded-2xl text-xs font-bold text-black`}
                    style={{ width: `${successPercentage}%`, transition: 'width 2s' }}

                >
                    <span className='pl-9'>{`${Math.floor(successPercentage)}%`}</span>
                </div>
            </div>

        </div>

    )
}

export default ProgressBar