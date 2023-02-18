
import { useSelector } from 'react-redux';
import Board from './Board/Board';
import { RootState } from './store/store';

import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import speed from './assets/speed.jpg';
import Digit from './Digit/Digit';
import Modal from './Modal/Modal';
import ProgressBar from './ProgressBar/ProgressBar';
import { BoardStatus } from './store/boardSlice';
import Timer from './Timer/Timer';
function App() {
  const size = useSelector((state: RootState) => state.board.size);
  const numberOfTries = useSelector((state: RootState) => state.board.numberOrTries);
  const status = useSelector((state: RootState) => state.board.status);
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex justify-center mt-5">
      <div className="dark:bg-neutral-900 rounded-lg ring-1 ring-slate-900/5  h-96 w-96 grid justify-items-center">
        <img src={logo} alt="speed" className="w-40 h-30 rounded-md shadow-xl mb-2
        inline-block animate-border  from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r
         outline-none " />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <ProgressBar />
        <Board />
        <div className='flex w-full items-center justify-between bg-'>

          <Timer start={!showModal && status !== BoardStatus.finished} />
          <div className='w-9 h-10'>
            <Digit digit={numberOfTries} extraStyle={'bg-yellow-600'} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
