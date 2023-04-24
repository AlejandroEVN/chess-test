import { getSquareFromCoordinates } from '@/utils/board'
import { reactive } from 'vue'

export type Coordinates = {
  column: number
  row: number
}

type Store = {
  highlightedSquares: Map<string, Coordinates>
  highlightedOrder: string[]
  addHighlightedSquare: (square: string, coordinates: Coordinates) => void
  removeHighligthedSquare: (square: string) => void
}

const store = reactive<Store>({
  highlightedSquares: new Map(),
  highlightedOrder: [],
  addHighlightedSquare(square, coordinates) {
    this.highlightedSquares.set(square, coordinates)
    this.highlightedOrder.push(getSquareFromCoordinates(coordinates))
  },
  removeHighligthedSquare(square) {
    this.highlightedSquares.delete(square)
  }
})

export default store;