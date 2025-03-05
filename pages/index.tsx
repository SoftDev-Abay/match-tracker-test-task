import { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { fetchMatches } from "@/app/services/MatchesService";

import MatchList from "@/app/pages/Home/MatchList";
import { useMatches } from "@/app/hooks/useMatches";
import AlertTriangleIcon from "@/app/icons/AlertTriangleIcon";
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import RefreshIcon from "@/app/icons/RefreshIcon";
import HomeWrapper from "@/app/pages/Wrappers/Home/HomeWrapper";

import { useLoadingContext } from "@/app/context/LoadingContext";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  const { data, isError, isLoading: queryLoading, refetch } = useMatches();
  const { setIsLoading } = useLoadingContext();

  setIsLoading(queryLoading && !data);

  const handleRefresh = () => {
    refetch();
  };

  if (isError) return <div>Ошибка: не удалось загрузить информацию</div>;

  return (
    <HomeWrapper>
      <div className="pt-[52px] pb-[42px] px-[42px]">
        <div className="flex justify-between items-center mb-5 flex-wrap">
          <h1 className="text-heading1-bold mb-5 text-white font-tactic-sans italic">
            Match Tracker
          </h1>
          <div className="flex gap-3 flex-wrap">
            {isError && (
              <Card
                padding="padding-small"
                className="flex gap-2.5 items-center"
              >
                <AlertTriangleIcon width={28} height={28} />
                <p className="text-white text-body-medium">
                  Ошибка: не удалось загрузить информацию
                </p>
              </Card>
            )}
            <Button
              className="flex gap-3 items-center"
              onClick={handleRefresh}
              disabled={queryLoading}
            >
              <span className="text-white text-body-semibold">Обновить</span>
              <RefreshIcon isLoading={queryLoading} />
            </Button>
          </div>
        </div>
        <MatchList matches={data?.data.matches ?? []} />
      </div>
    </HomeWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
