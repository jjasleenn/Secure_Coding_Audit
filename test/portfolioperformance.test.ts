import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";
describe("Portfolio Performance", () => {
  it("should calculate profit correctly", () => {
    const result = calculatePortfolioPerformance(10000, 12000);
    expect(result.profitOrLoss).toBe(2000);
    expect(result.performanceSummary).toBe("Gained moderately");
  });

  it("should calculate loss correctly", () => {
    const result = calculatePortfolioPerformance(10000, 8000);
    expect(result.profitOrLoss).toBe(-2000);
    expect(result.performanceSummary).toBe("Lost moderately");
  });

  it("should handle no change", () => {
    const result = calculatePortfolioPerformance(10000, 10000);
    expect(result.profitOrLoss).toBe(0);
    expect(result.performanceSummary).toBe("No change");
  });

  it("should handle significant gain", () => {
    const result = calculatePortfolioPerformance(10000, 13000);
    expect(result.performanceSummary).toBe("Gained significantly");
  });
});

