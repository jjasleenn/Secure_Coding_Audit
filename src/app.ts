import express, { Request, Response } from "express";

import { calculatePortfolioPerformance,findLargestHolding, Asset,calculateAssetAllocation } from "./portfolio/portfolioPerformance";

const app = express();

// API version
const API_VERSION = "1.0.0";

// Health check endpoint
app.get("/api/v1/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    uptime: process.uptime(), // in seconds
    timestamp: new Date().toISOString(),
    version: API_VERSION,
  });
});

// Portfolio Performance endpoint
app.get("/api/v1/portfolio/performance", (req: Request, res: Response) => {
  const initialInvestment = Number(req.query.initialInvestment) || 10000;
  const currentValue = Number(req.query.currentValue) || 12000;

  const result = calculatePortfolioPerformance(initialInvestment, currentValue);
  res.json(result);
});

//  Largest Holding endpoint
app.get("/api/v1/portfolio/largest-holding", (req: Request, res: Response) => {
  const assets: Asset[] = [{ name: "Stocks", value: 5000 },{ name: "Bonds", value: 3000 }];
  const largest = findLargestHolding(assets);
  res.json(largest);
});

//  Asset Allocation endpoint
app.get("/api/v1/portfolio/allocation", (req: Request, res: Response) => {
  const assets: Asset[] = [{ name: "Stocks", value: 5000 },{ name: "Bonds", value: 3000 },{ name: "Real Estate", value: 2000 }];

  const allocation = calculateAssetAllocation(assets);
  res.json(allocation);
});
export default app;


 