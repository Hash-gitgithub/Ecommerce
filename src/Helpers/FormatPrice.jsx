import React from 'react'

function FormatPrice({ price }) {
     // Convert the price from paise to rupees and round down to the nearest integer
  const rupees = Math.ceil(price);

  // Return the rupees as a string
  return `${rupees}`;
}

export default FormatPrice;
