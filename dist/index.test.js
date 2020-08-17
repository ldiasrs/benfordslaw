"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test('test the distribution of 1,2,3,4,5,6,7,8,9', () => {
    var _a;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const benfords = new index_1.BenfordsLaw(numbers);
    const chiSquared = benfords.getChiSquared();
    const probability = (_a = benfords.getProbability()) === null || _a === void 0 ? void 0 : _a.toFixed(5);
    expect(chiSquared).toBe(0.40105320411553363);
    expect(probability).toBe("0.99994");
});
test('test the distribution of a bigger array', () => {
    const numbers = [1, 1, 1, 1, 1, 1, 1, 1,
        2, 2, 2, 2,
        3, 3, 3,
        4, 4,
        5, 5,
        6, 6,
        7, 7,
        8,
        9];
    const benfords = new index_1.BenfordsLaw(numbers);
    const chiSquared = benfords.getChiSquared();
    expect(chiSquared).toBe(0.019868294035033682);
});
