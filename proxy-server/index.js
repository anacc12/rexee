const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests with /api to your HTTP backend
app.use('/api/v1/prod', createProxyMiddleware({
  target: 'http://93.63.175.216:8000', // Your HTTP API server
  changeOrigin: true,
}));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
