# Comparative Study of Backend Architectures

This document compares three architectures based on performance metrics from a load test. The three architectures evaluated are:

1. **Architecture 1: Monolithic**
2. **Architecture 2: Monolithic with Segregated Databases**
3. **Architecture 3: Microservices with API Gateway**

## Overview

Each architecture underwent the same load test with Virtual Users (VUs), and the performance was measured based on various factors such as response time, error rates, HTTP request success rates, and session length.

## Key Metrics Analyzed

- **Errors**: Connection refused (`ECONNREFUSED`), Timeout errors (`ETIMEDOUT`).
- **HTTP Response Codes**: Success (`200`), Creation success (`201`).
- **Request Rate**: The number of requests made per second.
- **Response Time**: Minimum, Maximum, Mean, Median, P95, P99.
- **User Sessions**: Completed sessions, session length.

## Tabular Summary

| **Metric**                            | **Architecture 1: Monolithic**   | **Architecture 2: Monolithic with Segregated DB** | **Architecture 3: Microservices with API Gateway** |
|---------------------------------------|----------------------------------|--------------------------------------------------|----------------------------------------------------|
| **Total Time**                        | 2 minutes, 10 seconds           | 2 minutes, 6 seconds                            | 2 minutes, 9 seconds                              |
| **Errors**                            |                                  |                                                  |                                                    |
| - ECONNREFUSED                        | 1391                             | 1096                                             | N/A                                                |
| - ETIMEDOUT                           | 658                              | N/A                                              | 12                                                 |
| **HTTP Requests (Total)**             | 6300                             | 6300                                             | 6300                                               |
| **Request Rate (req/sec)**            | 54/sec                           | 55/sec                                           | 55/sec                                             |
| **Successful HTTP Responses**         |                                  |                                                  |                                                    |
| - HTTP 200                            | 1783                             | 2553                                             | 3122                                               |
| - HTTP 201                            | 2468                             | 2651                                             | 3166                                               |
| **Response Time (ms)**                |                                  |                                                  |                                                    |
| - Mean                                 | 1550.3                           | 1581.1                                           | 1106.8                                             |
| - Max                                  | 9998                              | 9711                                             | 10003                                              |
| - P95                                  | 8692.8                           | 6187.2                                           | 6312.2                                             |
| - P99                                  | 9607.1                           | 7260.8                                           | 8692.8                                             |
| **User Sessions**                     |                                  |                                                  |                                                    |
| - Completed                           | 4251                             | 5204                                             | 6288                                               |
| - Failed                              | 2049                             | 1096                                             | 12                                                 |
| **Session Length (ms)**               |                                  |                                                  |                                                    |
| - Mean                                 | 1554.5                           | 1585.1                                           | 1111.5                                             |
| - Max                                  | 10002.8                          | 9716.1                                           | 10009.7                                            |
| **Success Rate**                      | 67.5%                            | 82.7%                                            | 99.8%                                              |

## Concluding Statement

- **Architecture 1 (Monolithic)** shows the highest error rates, especially with `ECONNREFUSED` (1391) and a relatively high number of failed user sessions (2049). However, it maintains a reasonable request rate of 54 requests per second with a mean response time of 1550.3 ms.

- **Architecture 2 (Monolithic with Segregated Databases)** reduces the number of `ECONNREFUSED` errors (1096) and improves the number of successful HTTP requests, but the mean response time is slightly higher at 1581.1 ms. The failure rate is also lower than in Architecture 1.

- **Architecture 3 (Microservices with API Gateway)** performs the best overall, with minimal timeout errors (12) and the lowest failure rate (12). It also achieves the fastest mean response time (1106.8 ms), although the response times at higher percentiles (P95 and P99) are slightly higher compared to the monolithic architectures.

In conclusion, **Architecture 3 (Microservices with API Gateway)** stands out as the most efficient architecture in terms of response time, error handling, and user session success. It strikes the best balance between performance and scalability, making it a better choice for high-demand systems. However, the choice of architecture should depend on the specific needs and complexity of the application, as well as the trade-offs related to implementation and maintenance.