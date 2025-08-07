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
          <button className="px-8 py-4 bg-white hover:bg-amber-600 text-black font-medium text-lg transition-all duration-300 backdrop-blur-sm border border-amber-500/50">
            Hohe Bleichen ——
          </button>

          <button className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium text-lg transition-all duration-300 backdrop-blur-sm border border-white/30">
            Cardamom Westfield ——
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantReservation;
