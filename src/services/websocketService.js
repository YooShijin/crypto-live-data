export function connectWebSocket() {
  const ws = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");
  return ws;
}
