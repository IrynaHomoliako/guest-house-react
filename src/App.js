import React from "react";
import { BookNow, ComeTogether, Escape, Footer, Header, GuestHouse, Reviews, SleepingArrangements } from "./components";

function App() {
  return (
    <>
    <Header />
    <GuestHouse/>
    <SleepingArrangements />
    <Escape />
    <Reviews />
    <ComeTogether />
    <BookNow />
    <Footer />
    </>
  );
}

export default App;
