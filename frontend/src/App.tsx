// import { BrowserRouter } from "react-router-dom";
// import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
// import AppRoutes from "./pages/AppRoutes";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <main>
//           <AppRoutes />
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages/AppRoutes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

