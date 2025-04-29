import React, { useEffect } from "react";
import "./App.css";
import MainLayout from "./components/layouts/main/MainLayout";

const App: React.FC = () => {
  return (
    <>
      <MainLayout>
        <div>Video Content</div>
      </MainLayout>
    </>
  );
};

export default App;
