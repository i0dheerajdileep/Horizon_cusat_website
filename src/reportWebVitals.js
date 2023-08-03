import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function onPerfEntry(metric) {
  console.log(metric);
  // You can send the metrics to a third-party analytics service here.
}

export default function reportWebVitals() {
  getCLS(onPerfEntry);
  getFID(onPerfEntry);
  getFCP(onPerfEntry);
  getLCP(onPerfEntry);
  getTTFB(onPerfEntry);
}
