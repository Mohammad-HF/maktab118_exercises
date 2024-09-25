import { useState } from "react";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Offices from "./components/Offices";

function App() {
  const [hideContent , setHideContent] = useState<boolean>(false);
  return (
    <div className="">
      {/* Header */}
      <Header content={(tf)=>setHideContent(tf)}/>
      {/* main section */}
      <div className={`px-28 max-md:px-10 pt-20 flex gap-28 justify-center items-center max-md:flex-col ${hideContent ? "hidden" : ""}`}>
        {/* left */}
        <ContactUs/>
        {/* right */}
        <Offices />
      </div>
    </div>
  );
}

export default App;
