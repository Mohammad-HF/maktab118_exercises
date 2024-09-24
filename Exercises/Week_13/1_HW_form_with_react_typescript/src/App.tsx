import ContactUs from "./components/ContactUs";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* main section */}
      <div className=" px-28 pt-14 ">
        {/* left */}
        <ContactUs/>
      </div>
    </div>
  );
}

export default App;
