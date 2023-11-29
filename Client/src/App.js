import "./App.css";
import Sidebar from "./Components/Features/Sidebar/Index";
import Navbar from "./Components/Features/Navbar/navbar";
import Footer from "./Components/Features/Footer/Index";
import ContactUs from "./Components/Features/ContactUs/Index";
import CustomerReview from "./Components/Features/CustomerReview/Index";
import Choose from "./Components/Features/Choose";
import Services from "./Components/Features/Services/Index";
import AutoService from "./Components/Features/Autoservice/Index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <AutoService />
      <Services />
      <Choose />
      <CustomerReview />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
