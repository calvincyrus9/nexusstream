"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

// Loading UI while search params resolve, etc.
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full p-8 bg-slate-800/50 rounded-2xl">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
    <p className="ml-4 text-lg">Loading your plan details...</p>
  </div>
);

const RenewalForm = () => {
  const searchParams = useSearchParams();

  const [duration, setDuration] = useState("1 Month");
  const [devices, setDevices] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const durationFromUrl = searchParams.get("duration");
    const devicesFromUrl = searchParams.get("devices");

    if (durationFromUrl) setDuration(durationFromUrl);

    if (devicesFromUrl) {
      const parsed = parseInt(devicesFromUrl, 10);
      setDevices(Number.isNaN(parsed) ? 1 : parsed);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = {
      formType: "Renewal Request",
      website: "NX",
      email: e.target.email.value,
      username: e.target.username.value,
      duration: e.target.duration.value,
      devices: e.target.devices.value,
      paymentMethod: e.target.payment.value,
      country: e.target.country.value,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server error");

      setSubmitStatus({
        success: true,
        message:
          "Thank you for submitting your renewal request. It has been received and is being processed. We will contact you soon with the next steps.",
      });

      e.target.reset();
      // Reset to URL defaults again
      setDuration(searchParams.get("duration") || "1 Month");
      const resetDevices = parseInt(searchParams.get("devices"), 10);
      setDevices(Number.isNaN(resetDevices) ? 1 : resetDevices || 1);
    } catch (err) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Renewal Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact + Username */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your account email"
              className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Your Xtream Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="e.g., user123"
              className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>

        {/* Plan controls */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Duration
            </label>
            <select
              id="duration"
              name="duration"
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>1 Year</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="devices"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              How many devices?
            </label>
            <input
              type="number"
              id="devices"
              name="devices"
              required
              min="1"
              value={devices}
              onChange={(e) =>
                setDevices(
                  Number.isNaN(parseInt(e.target.value, 10))
                    ? 1
                    : parseInt(e.target.value, 10)
                )
              }
              className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>

        {/* Payment */}
        <div>
          <label
            htmlFor="payment"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Payment Method
          </label>
          <select
            id="payment"
            name="payment"
            required
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option>PayPal</option>
            <option>Credit / Debit Card</option>
            <option>Crypto (-10% Discount)</option>
          </select>
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            placeholder="Your billing country"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Confirm */}
        <div className="pt-4">
          <label className="flex items-center text-slate-300">
            <input
              type="checkbox"
              required
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-3"
            />
            I confirm that my account is set up and working. I want to renew.
          </label>
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Renewal"}
          </button>
        </div>
      </form>

      {/* Status */}
      {submitStatus && (
        <div
          className={`mt-4 text-center p-3 rounded-md ${
            submitStatus.success
              ? "bg-green-500/20 text-green-300"
              : "bg-red-500/20 text-red-300"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Security note */}
      <div className="mt-8 flex items-center justify-center text-slate-400">
        <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-500" />
        <span>All transactions are secure and encrypted.</span>
      </div>
    </motion.div>
  );
};

export default function RenewalClient() {
  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Renew Your Access
        </h1>
        <p className="text-xl text-slate-300">
          Continue your journey through a universe of entertainment.
        </p>
      </motion.div>

      <Suspense fallback={<LoadingSpinner />}>
        <RenewalForm />
      </Suspense>
    </div>
  );
}
