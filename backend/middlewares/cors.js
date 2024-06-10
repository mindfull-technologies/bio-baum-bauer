import dotenv from "dotenv";
const allowCors = (app) => {
    dotenv.config();
    const frontendUrl = process.env.FRONTEND_URL || 'https://bio-baum-bauer.onrender.com/';
    const adminPanelUrl = process.env.ADMIN_PANEL_URL || 'http://localhost:3001';

    app.use((req, res, next) => {
        const allowedOrigins = [frontendUrl, adminPanelUrl];
        const origin = req.headers.origin;
        console.log('Origin:', origin)
        if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
        }

        next();
    });
};

export default allowCors;