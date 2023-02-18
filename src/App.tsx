
import { useSelector } from 'react-redux';
import Board from './Board/Board';
import { RootState } from './store/store';

import { useState } from 'react';
import './App.css';
import speed from './assets/speed.jpg';
import Modal from './Modal/Modal';
import ProgressBar from './ProgressBar/ProgressBar';
import { BoardStatus } from './store/boardSlice';
import Timer from './Timer/Timer';
function App() {
  const size = useSelector((state: RootState) => state.board.size);
  const status = useSelector((state: RootState) => state.board.status);
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex justify-center mt-5">
      <div className="dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5  h-96 w-96 grid justify-items-center">
        <img src={speed} alt="speed" className="w-80 h-40 rounded-md shadow-xl mb-2
        inline-block animate-border  from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r
         outline-none " />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <ProgressBar />
        <Board />
        <Timer start={!showModal && status !== BoardStatus.finished} />
      </div>

    </div>
  )
}

export default App
