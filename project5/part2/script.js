const portfolioUrl = "https://www.randyconnolly.com/funwebdev/3rd/api/stocks/sample-portfolio.json";
const fallbackPortfolioUrl = "http://www.randyconnolly.com/funwebdev/3rd/api/stocks/sample-portfolio.json";

async function fetchSamplePortfolio() {
  const urls = [portfolioUrl, fallbackPortfolioUrl];
  let lastError = null;

  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Unable to load portfolio data.");
}

function extractSymbolsAndOwnedForYear(portfolioData, year) {
  const yearRecord = portfolioData.find((item) => item.year === year);
  if (!yearRecord || !Array.isArray(yearRecord.portfolio)) {
    throw new Error(`No portfolio data found for ${year}.`);
  }

  return {
    symbols: yearRecord.portfolio.map((stock) => stock.symbol),
    owned: yearRecord.portfolio.map((stock) => stock.owned),
  };
}

function renderBarChart(symbols, owned, year) {
  const data = [
    {
      x: symbols,
      y: owned,
      type: "bar",
      marker: {
        color: "#3467eb",
      },
    },
  ];

  const layout = {
    title: `Stock Amount Owned (${year})`,
    xaxis: {
      title: "Stock Symbol",
    },
    yaxis: {
      title: "Amount Owned",
    },
    margin: {
      t: 60,
      r: 20,
      b: 60,
      l: 60,
    },
  };

  Plotly.newPlot("chartDiv", data, layout, { responsive: true });
}

async function createStockMarketVisualizer() {
  const statusMessage = document.getElementById("statusMessage");

  try {
    const portfolioData = await fetchSamplePortfolio();
    const targetYear = 2017;
    const { symbols, owned } = extractSymbolsAndOwnedForYear(portfolioData, targetYear);

    renderBarChart(symbols, owned, targetYear);
    statusMessage.textContent = `Loaded ${symbols.length} stocks for ${targetYear}.`;
  } catch (error) {
    statusMessage.textContent = `Error loading chart: ${error.message}`;
    console.error(error);
  }
}

createStockMarketVisualizer();
