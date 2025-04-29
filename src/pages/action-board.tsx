"use client";

import dynamic from "next/dynamic";
import MainLayout from "../components/layouts/main/MainLayout"; // Importing the MainLayout component
import type { ReactElement } from "react";
import CustomLoader from "../components/common/CustomLoader";
import { useEffect, useState } from "react";

// Dynamically import the AIChat container, ensuring it only renders on the client-side
const ActionBoard = dynamic(() => import("../containers/ActionBoard"), {
  loading: () => <CustomLoader />, // Shows loading component during the dynamic import
  ssr: false, // Ensure it doesn't render server-side
});

const AIChatPage = () => {
  // State to track whether the component is mounted on the client-side
  const [isClient, setIsClient] = useState(false);

  // On mount (client-side), update the state to render the component
  useEffect(() => {
    setIsClient(true); // This will allow rendering only on the client-side
  }, []);

  // If not yet mounted on the client, return nothing or a loading state
  if (!isClient) {
    return null; // Or you can return a loading spinner here if needed
  }

  return <ActionBoard />;
};

// Wrapping the page in a MainLayout using the getLayout function
AIChatPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default AIChatPage;
