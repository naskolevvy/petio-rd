"use client"

export function Logo() {
  return (
    <svg width="100" height="70" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 15 C115 15, 130 22, 130 35 C130 42, 123 45, 118 45 L82 45 C77 45, 70 42, 70 35 C70 22, 85 15, 100 15 Z" fill="black" fillOpacity="0.5"/>
  
  <line x1="88" y1="45" x2="92" y2="60" stroke="black" strokeWidth="0.8" strokeOpacity="0.5"/>
  <line x1="100" y1="45" x2="100" y2="60" stroke="black" strokeWidth="0.8" strokeOpacity="0.5"/>
  <line x1="112" y1="45" x2="108" y2="60" stroke="black" strokeWidth="0.8" strokeOpacity="0.5"/>
  
  <rect x="97" y="70" width="6" height="5" fill="black" fillOpacity="0.5" rx="1"/>
  
  <text x="100" y="69" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle" fill="black">TandemJump</text>
</svg>
  )
} 