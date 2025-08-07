import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-primary flex items-center justify-center">
        <span className="text-primary font-bold text-lg lg:text-xl miniver-regular">C</span>
      </div>
      <span className="ml-3 text-foreground font-semibold text-lg lg:text-xl tracking-wider">
        CARDAMOM
      </span>
    </Link>
  );
};

export default Logo;
