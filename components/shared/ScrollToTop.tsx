'use client';
const ScrollToTop = () => {
  return (
    <div>
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('Scroll to top clicked');
          }}
          className="bg-primary cursor-pointer hover:bg-amber-700 text-white p-3 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
