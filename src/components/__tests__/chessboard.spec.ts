import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ChessboardVue from '../Chessboard.vue'
import store from '../../store/store'

vi.mock('../../store/store')

describe('Chessboard component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Should mount', () => {
    const Chessboard = mount(ChessboardVue)
    expect(Chessboard.isVisible()).toBe(true)
  })

  describe('Highlighted square is in coordinates [0,0]', () => {
    beforeEach(() => {
      store.highlightedSquares = new Map([['s-00', { column: 0, row: 0 }]])
    })

    it('Should render the square', () => {
      const Chessboard = mount(ChessboardVue)
      expect(Chessboard.findAll('div.highlighted').length).toBe(1)
    })

    it('Square should have attributes', () => {
      const Chessboard = mount(ChessboardVue)
      const highlightedSquare = Chessboard.findAll('div.highlighted')[0]
      expect(highlightedSquare.attributes().style).toBe('--col: 0; --row: 0;')
    })
  })

  describe('There are more than one highlighted squares', () => {
    beforeEach(() => {
      store.highlightedSquares = new Map([
        ['s-00', { column: 0, row: 0 }],
        ['s-01', { column: 0, row: 1 }]
      ])
    })

    it('Should render the squares', () => {
      const Chessboard = mount(ChessboardVue)
      expect(Chessboard.findAll('div.highlighted').length).toBe(2)
    })

    it('Each square should have its own distinct --col and --row values', () => {
      const Chessboard = mount(ChessboardVue)
      const firstHighlightedSquare = Chessboard.findAll('div.highlighted')[0]
      const secondHighlightedSquare = Chessboard.findAll('div.highlighted')[1]
      expect(firstHighlightedSquare.attributes().style).not.toBe(
        secondHighlightedSquare.attributes().style
      )
    })
  })
})
