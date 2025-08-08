import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Cardamom Restaurant Logo"
        className="h-12 w-auto"
        width={100}
        height={100}
      />
      {/* <span className="ml-3 text-foreground font-semibold text-lg lg:text-xl tracking-wider">
        CARDAMOM
      </span> */}
    </Link>
  );
};

export default Logo;
