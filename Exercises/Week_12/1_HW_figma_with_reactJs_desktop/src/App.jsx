import Footer from "./components/footer/footer";
import Caring from "./components/section2/Caring";
import Customer from "./components/section2/Customer";
import Info from "./components/section2/Information";
import Learn from "./components/section2/Learn";
import Header from "./components/Header";
import Main from "./components/section1/Main";
import Clients from "./components/section1/Clients";
import Community from "./components/section1/Community";
function App() {
  return (
    <div className=" grid gap-y-7 font-Inter">
      {/* // header */}
      <Header/>
      {/* // section 1 */}
      <div className=" max-w-[1400px] mx-auto pt-14">
        {/* top */}
        <Main/>
        {/* center */}
       <Clients/>
        {/* bottom */}
        <Community/>
      </div>
      {/* section 2 */}
      <div className="grid gap-y-8 max-w-[1400px] mx-auto">
        {/* component one */}
        <Learn obj={"learn"} />
        {/* component two */}
        <Info />
        {/* component three */}
        <Learn obj={"design"} />
        {/* component four */}
        <Customer />
        {/* component five */}
        <Caring />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
