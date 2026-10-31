app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.get("/config-check", (req, res) => {
    res.json({
        databaseHost: process.env.DB_HOST || "não configurado",
        adminConfigured: Boolean(process.env.DB_PASSWORD),
        paymentConfigured: Boolean(process.env.STRIPE_LIVE_KEY),
        internalApiConfigured: Boolean(process.env.INTERNAL_API_TOKEN),
    });
});

app.listen(PORT, () => {
    console.log(`API Techstore is running on port ${PORT}`);
});