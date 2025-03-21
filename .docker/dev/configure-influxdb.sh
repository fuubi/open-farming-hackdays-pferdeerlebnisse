#!/bin/bash

# Wait for InfluxDB to be ready
until curl -s -o /dev/null http://localhost:8086/health; do
  echo "Waiting for InfluxDB to be ready..."
  sleep 2
done

# Set initial InfluxDB settings
curl -s -X POST -H "Content-Type: application/json" -d '{
  "username": "dev",
  "password": "12345678",
  "org": "dev-org",
  "bucket": "bucket1",
  "token": "devToken"
}' http://localhost:8086/api/v2/setup

