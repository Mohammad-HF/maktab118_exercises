import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Offices from "./components/Offices";

function App() {
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* main section */}
      <div className=" px-28 max-md:px-10 pt-14 flex gap-28 justify-center items-center max-md:flex-col">
        {/* left */}
        <ContactUs/>
        {/* right */}
        <Offices />
      </div>
    </div>
  );
}

export default App;
