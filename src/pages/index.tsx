import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/action-board",
      permanent: false,
    },
  };
};

export default function HomeRedirect() {
  return null;
}
