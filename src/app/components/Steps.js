import { ShieldCheckIcon, DevicePhoneMobileIcon, PlayIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

// A single step in the timeline.
// It includes the icon, the connecting lines, and the text content.
const Step = ({ icon, title, description, isLast }) => {
  return (
    <div className="relative">
      {/* The timeline and icon container */}
      <div className="relative flex items-center justify-center">
        {/* Horizontal Line (for desktop) */}
        {!isLast && (
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 w-full h-0.5 bg-slate-700" />
        )}
        {/* Vertical Line (for mobile) */}
        {!isLast && (
          <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700" />
        )}

        {/* The Icon */}
        <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-all duration-300">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-blue-900/50 transition-all duration-300">
            {icon}
          </div>
        </div>
      </div>
      
      {/* The card content */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

// The main section component.
const Steps = () => {
  // We define the steps data here to keep the JSX clean.
  const stepsData = [
    {
      icon: <PlayIcon className="w-8 h-8 text-blue-400" />,
      title: "Request Free Trial",
      description: "Sign up for our risk-free trial to test our service."
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-blue-400" />,
      title: "Choose Device/App",
      description: "Select your preferred streaming device or application."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-blue-400" />,
      title: "Activate & Watch",
      description: "Follow simple setup instructions and start streaming."
    },
    {
      icon: <ArrowPathIcon className="w-8 h-8 text-blue-400" />,
      title: "Renew Anytime",
      description: "Continue your subscription with flexible renewal options."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience premium streaming in minutes, not hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 space-y-20 md:space-y-0">
          {stepsData.map((step, index) => (
            // The 'group' class allows us to style the icon when hovering the parent div.
            <div key={index} className="group">
              <Step
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === stepsData.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
