import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CellState {
  id: string;
  handle: string;
  backgroundImg: string;
  show: boolean;
  matchFound: boolean;
}

export enum BoardStatus {
  started = 'started',
  finished = 'finished',
}

export interface BoardState {
  status: BoardStatus; // started , finished
  size: number;
  cells: Array<CellState>;
  numberOrTries: number;
  timeToComplete: number;
}

const shuffle = (array: CellState[]) => array.sort(() => 0.5 - Math.random());

function generateDefaultCells(size: number): Array<CellState> {
  let handleIndex = 0;
  const result = Array.from(Array(size * size).keys()).map((i) => {
    handleIndex = i % 2 === 0 ? handleIndex + 1 : handleIndex;
    return {
      id: i.toString(),
      handle: handleIndex.toString(),
      backgroundImg: '../assets/defaultcard.png',
      show: false,
      matchFound: false,
    } as CellState;
  });

  return shuffle(result);
}

const initialState: BoardState = {
  status: BoardStatus.started,
  size: 4,
  cells: generateDefaultCells(4),
  numberOrTries: 0,
  timeToComplete: 0,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {
    addTry: (state, action: PayloadAction<number>) => {
      state.numberOrTries += action.payload;
    },
    setTimeToComplete: (state, action: PayloadAction<number>) => {
      state.timeToComplete = action.payload;
    },
    setStatus: (state, action: PayloadAction<BoardStatus>) => {
      state.status = action.payload;
    },
    setCell: (state, action: PayloadAction<CellState>) => {
      state.cells = [
        ...state.cells.map((x) => {
          if (x.id === action.payload.id) return action.payload;
          return x;
        }),
      ];
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addTry, setTimeToComplete, setStatus, setCell, reset } =
  boardSlice.actions;
export const boardReducer = boardSlice.reducer;
