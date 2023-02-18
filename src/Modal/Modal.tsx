import React from "react";

interface Props {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}


function Modal({ showModal = false, setShowModal }: Props) {
    // const [showModal, setShowModal] = React.useState(false);
    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-96 h-52 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-slate-800  outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-center  p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h4 className="text-3xl font-semibold text-white ">
                                        Ready !
                                    </h4>
                                    {/* <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button> */}
                                </div>
                                {/*body*/}
                                {/* <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        content
                                    </p>
                                </div> */}
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    {/* <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Let's Go!
                                    </button> */}
                                    <div className="w-full flex justify-center">
                                        <a href="#"
                                            className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="font-bold">
                                                Let's Gooo</span>
                                        </a>
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
