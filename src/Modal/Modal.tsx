import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/boardSlice';
import { RootState } from "../store/store";


interface Props {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    showResult?: boolean;
}


function Modal({ showModal = false, setShowModal, showResult = false }: Props) {
    const numberOfTries = useSelector((state: RootState) => state.board.numberOrTries);
    const timeToComplete = useSelector((state: RootState) => state.board.timeToComplete);
    const dispatch = useDispatch();

    const seconds = Math.floor((timeToComplete / 10) % 60)
    const minutes = Math.floor(timeToComplete / (10 * 60))

    function share() {

    }
    function newGame() {
        dispatch(reset());
        setShowModal(false)
    }

    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-96 h-52 my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-slate-800  outline-none focus:outline-none">

                                <div className="flex items-start justify-center  p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h4 className="text-3xl font-semibold text-white ">
                                        {showResult ? 'Good Job!' : 'Ready !'}
                                    </h4>
                                </div>
                                {showResult &&
                                    <div className="relative px-8 pb-5 flex-auto">
                                        <p className="my-4 text-slate-500 text-xl leading-relaxed">
                                            Here is your result.
                                        </p>
                                        <ul className="list-disc pl-5">
                                            <li>{`You took ${numberOfTries} tries to complete it`}</li>
                                            <li>{`All this was achieved in  ${seconds} seconds ${minutes > 0 && ' and ' + minutes + ' minutes'}`}</li>
                                        </ul>
                                    </div>
                                }
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    <div className="w-full flex justify-center gap-2">
                                        <a href="#"
                                            className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
                                            onClick={() => showResult ? share() : setShowModal(false)}
                                        >
                                            <span className="font-bold">
                                                {showResult ? 'Share' : "Let's Goo!"}</span>
                                        </a>
                                        {showResult && <a href="#"
                                            className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
                                            onClick={() => newGame()}
                                        >
                                            <span className="font-bold">Again!</span>
                                        </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Modal;
