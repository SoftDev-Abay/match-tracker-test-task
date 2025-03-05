import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import { FC, ReactNode } from "react";
import { useLoadingContext } from "@/app/context/LoadingContext";
const HomeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadingContext();
  return (
    <>
      {isLoading && <LoadingSpinner />}

      <div className="">{children}</div>
    </>
  );
};

export default HomeWrapper;
