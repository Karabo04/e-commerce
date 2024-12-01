import React from 'react';
import '../sd.css';
function ProgressIndicator({ currentStep }) {
const steps = ['Cart', 'Shipping', 'Payment', 'Review'];
return (
    <div className="progress-indicator">
    <ul>
        {steps.map((step, index) => (
        <li key={index} className={index === currentStep ? 'active' : ''}>{step}</li>
        ))}
    </ul>
    </div>
);
}

export default ProgressIndicator;
