import { register, collectDefaultMetrics, Counter } from "prom-client";

collectDefaultMetrics();

const httpRequestCount = new Counter({
    name: 'http_request_count',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'status_code'],
});

export async function GET(req, res) {
    console.log(req.statusCode)
    httpRequestCount.inc({
        method: req.method,
        status_code: res.statusCode,
    });

    const metricsResponse = new Response(await register.metrics(), {
        headers: { "Content-Type": "text/plain" },
    });

    return metricsResponse;
}
