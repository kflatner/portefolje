const express = require('express');
const cvRoutes = require('./routes/cvRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cvRoutes);
app.use(portfolioRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
