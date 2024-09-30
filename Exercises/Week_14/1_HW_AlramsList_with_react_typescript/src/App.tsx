import AlarmsList from "./components/AlarmsList";
import Form from "./components/Form";

function App() {
  return (
    <div className=" grid gap-y-8 max-w-[800px] mx-auto pt-10">
      <Form />
      
      <AlarmsList/>
    </div>
  )
    
}

export default App
