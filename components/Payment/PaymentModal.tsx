"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";

const UPI_ID = "q14352180@ybl";
const MERCHANT_NAME = "Sparsh Physiotherapy";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PaymentModal({ open, onOpenChange }: PaymentModalProps) {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [upiLink, setUpiLink] = useState("");
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  //     setIsMobile(mobile);
  //   };
  //   checkMobile();
  // }, []);

  useEffect(() => {
    if (!isProcessing) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isProcessing) {
        setIsProcessing(false);
        setShowConfirmation(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isProcessing]);

  const handlePayment = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount greater than 0");
      return;
    }

    const generatedUpiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR&tn=WebsitePayment`;
    setUpiLink(generatedUpiLink);

    // if (isMobile) {
    //   window.location.href = generatedUpiLink;
    //   setIsProcessing(true);
    // } else {
      setShowQRCode(true);
      setIsProcessing(true);
    // }
  };

  const handlePaymentSuccess = () => {
    setShowConfirmation(false);
    setShowQRCode(false);
    setShowSuccess(true);

    setTimeout(() => {
      resetPayment();
      onOpenChange(false);
    }, 3000);
  };

  const handleRetryPayment = () => {
    setShowConfirmation(false);
    setShowQRCode(false);
    setIsProcessing(false);
    handlePayment();
  };

  const resetPayment = () => {
    setAmount("");
    setIsProcessing(false);
    setShowConfirmation(false);
    setShowSuccess(false);
    setShowQRCode(false);
    setUpiLink("");
  };

  const closeModal = () => {
    resetPayment();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-['Playfair_Display']">Pay with UPI</DialogTitle>
          <DialogDescription>
            Make secure payments using any UPI app
          </DialogDescription>
        </DialogHeader>

        {showSuccess ? (
          <div className="py-12 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-300">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Payment Successful</h3>
            <p className="text-muted-foreground text-lg">Thank you for your payment</p>
          </div>
        ) : isProcessing && showQRCode ? (
          <div className="py-8">
            <div className="bg-white p-6 rounded-lg border-2 border-primary/20 mb-6">
              <QRCodeSVG
                value={upiLink}
                size={256}
                level="H"
                className="mx-auto"
              />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Scan QR Code</h3>
              <p className="text-muted-foreground">Scan this QR code using any UPI app on your phone</p>
            </div>
            <div className="mt-6 text-center">
              <Button
                onClick={() => {
                  setShowQRCode(false);
                  setIsProcessing(false);
                  setShowConfirmation(true);
                }}
                className="w-full"
              >
                I've Completed Payment
              </Button>
            </div>
          </div>
        ) : isProcessing ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold mb-3">Processing Payment</h3>
            <p className="text-muted-foreground">Please complete the payment in your UPI app</p>
          </div>
        ) : showConfirmation ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Payment Status</h3>
              <p className="text-muted-foreground">Please confirm your payment status</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={handlePaymentSuccess}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Payment Successful
              </Button>
              <Button
                onClick={handleRetryPayment}
                variant="outline"
                className="w-full py-6 text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Retry Payment
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-sm font-medium mb-1 text-muted-foreground">UPI ID</p>
              <p className="text-lg font-semibold text-primary font-mono">{UPI_ID}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-base">Payment Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-semibold text-muted-foreground">₹</span>
                <Input
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  type="number"
                  min="1"
                  step="1"
                  className="pl-10 text-2xl font-semibold h-16"
                />
              </div>
              <p className="text-sm text-muted-foreground">Enter amount in INR</p>
            </div>

            <Button
              onClick={handlePayment}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Pay via UPI
            </Button>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-muted-foreground">
                  {/* {isMobile ? (
                    <p>You will be redirected to your UPI app to complete the payment</p>
                  ) : (
                    <p>A QR code will be displayed for you to scan using your mobile UPI app</p>
                  )} */}
                  <p>A QR code will be displayed for you to scan using your mobile UPI app</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
