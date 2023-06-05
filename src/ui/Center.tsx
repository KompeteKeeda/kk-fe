import React from "react";

const Center = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="flex w-full items-center justify-center"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Center;