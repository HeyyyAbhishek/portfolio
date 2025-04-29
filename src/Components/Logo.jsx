import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ className = "" }) {
  return (
    <Link to="/" className={`font-bold text-xl sm:text-2xl ${className}`}>
      <span className="text-accent">{"<"}</span>
      HEK
      <span className="text-accent">{"/>"}</span>
    </Link>
  );
}

export default Logo;
