import { describe, it, expect } from "vitest";
import { getSquareFromCoordinates } from "./board";

describe('Board utils', () => {
  describe('getSquareFromCoordinates', () => {
    it('Should return a1 if coordinates are [0, 7]', () => {
      const square = getSquareFromCoordinates({column: 0, row: 7});
      expect(square).toBe('a1')
    })
    it('Should return a8 if coordinates are [0, 0]', () => {
      const square = getSquareFromCoordinates({column: 0, row: 0});
      expect(square).toBe('a8')
    })
    it('Should return h8 if coordinates are [7, 0]', () => {
      const square = getSquareFromCoordinates({column: 7, row: 0});
      expect(square).toBe('h8')
    })
    it('Should return h1 if coordinates are [7, 7]', () => {
      const square = getSquareFromCoordinates({column: 7, row: 7});
      expect(square).toBe('h1')
    })
  })
});