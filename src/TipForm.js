import React, { useState } from 'react'
import './TipForm.css'

function TipForm(props) {
  const [subtotal, setSubtotal] = useState('');
  const [tip, setTip] = useState(0);
  const [tax, setTax] = useState(0);
  const [split, setSplit] = useState(1);
  let taxAmount = parseFloat(subtotal) * parseFloat(tax)/100;
  let tipAmount = parseFloat(subtotal) * parseFloat(tip)/100;
  let billTotal = parseFloat(subtotal) + taxAmount + tipAmount;
  let perPerson = (billTotal/parseFloat(split));
  return (
    <div className="wrapper">
      <form className="inputs">
      <h2>Bill Subtotal:</h2>
        <input 
          type="text"
          value={subtotal}
          onChange={(e) => setSubtotal(e.target.value)}
        />
          <h2>Tax %:</h2>
        <div className="Counter">
          <button 
            onClick={() => { 
              if ((tax - 1) > 0) {
                setTax(tax - 1)
              } else {
                setTax(0)
              }
            }}
          >-</button>
          <h2>{tax}%</h2>
          <button 
            onClick={() => {
              setTax(tax + 1)
            }}
          >+</button>
        </div>
        <h2>Tip %:</h2>
        <div className="Counter">
        <button 
          onClick={() => { 
            if ((tip - 1) > 0) {
              setTip(tip - 1)
            } else {
              setTip(0)
            }
          }}
        >-</button>
        <h2>{tip}%</h2>
        <button 
            onClick={() => {
              setTip(tip + 1)
            }}
        >+</button>
        </div>
        <h2>Split between # of people:</h2>
        <div className="Counter">
        <button 
          onClick={() => { 
            if ((split - 1) > 1) {
              setSplit(split - 1)
            } else {
              setSplit(1)
            }
          }}
        >-</button>
        <h2>{split}</h2>
        <button 
            onClick={() => {
              setSplit(split + 1)
            }}
        >+</button>
        </div>
      </form>
      <div className="outputs">
        <ul>
          <li>Tax amount: ${taxAmount ? taxAmount.toFixed(2) : '0.00'}</li>
          <li>Tip amount: ${tipAmount ? tipAmount.toFixed(2) : '0.00'}</li>
        </ul>
        <h1>Bill total: ${billTotal ? billTotal.toFixed(2) : '0.00'}</h1>
        <h1>Each Person Owes: ${perPerson ? perPerson.toFixed(2) : '0.00'}</h1>
      </div>
    </div>
  );
}

export default TipForm;