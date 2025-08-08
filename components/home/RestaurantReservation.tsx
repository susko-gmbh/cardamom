import React from 'react';

const RestaurantReservation: React.FC = () => {
  return (
    <section className="min-h-96 relative flex items-center justify-center">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/home/ourRange.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Header Text */}
        <div className="mb-12">
          <p className="text-white/80 text-lg font-light italic mb-4">Reservierung</p>
          <h1 className="text-white text-5xl md:text-6xl font-light leading-tight">
            Sie wollen einen Tisch
            <br />
            reservieren?
          </h1>
        </div>

        {/* Location Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group  relative overflow-hidden px-8 py-4 bg-white hover:bg-primary text-black font-medium text-lg transition-all duration-300 backdrop-blur-sm border border-primary/50 flex items-center justify-center gap-2">
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
              Hohe Bleichen
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
            <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          </button>

          <button className="group relative overflow-hidden px-8 py-4 bg-transparent hover:bg-white/10 text-foreground font-medium text-lg transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2">
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
              Cardamom Westfield
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-px bg-foreground h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
            <div className="bg-foreground h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantReservation;
