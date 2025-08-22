"use client";

import Link from "next/link";

const PricingCard = ({ duration, price, popular, devices, features }) => {
  const renewalUrl = `/renew?duration=${encodeURIComponent(duration)}&devices=${devices}`;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm ${
        popular ? "border-2 border-blue-500" : "border border-slate-700"
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-2 text-sm font-bold tracking-wider">
          MOST POPULAR
        </div>
      )}

      <div className={`p-8 ${popular ? "pt-16" : ""}`}>
        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-white">{duration}</h3>

        {/* Price */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">
            ${price.toFixed(2)}
          </span>
          <span className="text-slate-400">
            {devices > 1
              ? ` total for ${devices} devices`
              : ` / ${duration} `}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 text-slate-300">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-3 flex-shrink-0 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-bold text-white">
              {devices} Connected Device{devices > 1 ? "s" : ""}
            </span>
          </li>

          {features.map((item, index) => (
            <li key={item} className="flex items-center">
              {item.includes("Premium IPTV Player") ? (
                <>
                  {/* Star Icon for Premium */}
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  <span className="font-bold text-yellow-300">
                    {item}
                  </span>
                </>
              ) : (
                <>
                  {/* Normal Check Icon */}
                  <svg
                    className="w-5 h-5 mr-3 flex-shrink-0 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={renewalUrl}
          className={`block text-center w-full py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
            popular
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
              : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
