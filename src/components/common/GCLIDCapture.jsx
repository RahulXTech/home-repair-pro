'use client';
import { useEffect } from 'react';

export default function GCLIDCapture() {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get('gclid')) {
      localStorage.setItem('gclid', p.get('gclid'));
      localStorage.setItem('utm_source', p.get('utm_source') || 'google');
      localStorage.setItem('utm_campaign', p.get('utm_campaign') || '');
      localStorage.setItem('utm_keyword', p.get('utm_keyword') || '');
      localStorage.setItem('lp', window.location.pathname);
    }
  }, []);
  return null;
}
