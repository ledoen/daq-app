const { generateTemperature } = require('../src/temperature');

describe('generateTemperature', () => {
    test('should generate a number between 20 and 30', () => {
        const temperature = generateTemperature();
        expect(temperature).toBeGreaterThanOrEqual(20);
        expect(temperature).toBeLessThanOrEqual(30);
    });
});