import React, { useEffect } from 'react';
import { HowToBuy } from './HowToBuy';

export const HowToBuyContent: React.FC = () => {
  // Temporarily disabled Coinremitter widget due to CSP restrictions
  // useEffect(() => {
  //   // Dynamic script injection for Coinremitter widget
  //   const crPresaleWidget = document.createElement("script");
  //   crPresaleWidget.src = "https://cdn.coinremitter.com/widget/presale/MFN5nM0p09/checkout.js";
  //   crPresaleWidget.charset = "UTF-8";
  //   crPresaleWidget.crossOrigin = "*";
  //   crPresaleWidget.setAttribute("target", "cr-widget");
  //   document.body.appendChild(crPresaleWidget);

  //   crPresaleWidget.onload = () => {
  //     if (window.widget) {
  //       const widgetEvent = window.widget;
  //       widgetEvent.on("widgetInit", (data) => console.log("Widget Initialized", data));
  //       widgetEvent.on("orderCreate", (data) => console.log("Order Created", data));
  //       widgetEvent.on("transactionConfirm", (data) => console.log("Transaction Confirmed", data));
  //       widgetEvent.on("orderPaid", (data) => console.log("Order Paid", data));
  //       widgetEvent.on("transactionReceive", (data) => console.log("Transaction Received", data));
  //       widgetEvent.on("widgetInitError", (data) => console.log("Widget Init Error", data));
  //       widgetEvent.on("orderCreateError", (data) => console.log("Order Create Error", data));
  //     }
  //   };

  //   // Cleanup function to remove the script when component unmounts
  //   return () => {
  //     if (crPresaleWidget && crPresaleWidget.parentNode) {
  //       crPresaleWidget.parentNode.removeChild(crPresaleWidget);
  //     }
  //   };
  // }, []);

  return (
    <div className="space-y-8">
      {/* Widget Container */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto">
          <div 
            id="cr-widget"
            className="w-full min-h-[400px] bg-white/10 backdrop-blur-sm rounded-2xl border border-playmatez-gold flex items-center justify-center shadow-lg"
          >
            {/* Coinremitter widget will render here */}
          </div>
        </div>
      </section>

      {/* How to Buy Steps */}
      <HowToBuy />

      {/* Alternative Purchase Note */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold/50">
        <div className="text-center">
          <h4 className="text-lg font-bold text-playmatez-gold mb-3">Alternative Purchase Method</h4>
          <p className="text-playmatez-white/80 leading-relaxed">
            Alternatively, you can create an account to purchase tokens directly from your dashboard once the platform launches. 
            This option will be available for users who prefer to manage their investments through our integrated platform interface.
          </p>
        </div>
      </div>
    </div>
  );
};