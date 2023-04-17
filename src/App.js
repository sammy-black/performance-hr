import CallToActions from "./components/CallToActions/CallToActions";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Layout from "./containers/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Layout>
         <Hero />
         <Services />
         <CallToActions />
      </Layout>
    </div>
  );
}

export default App;
