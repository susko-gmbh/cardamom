const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="text-primary">
      {/* <Navbar /> */}

      {children}
    </div>
  );
};

export default layout;
