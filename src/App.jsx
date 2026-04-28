// BrowserRouter enables routing
// Routes acts as route container
// Route defines path-component mapping
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import {Toaster} from "@/components/ui/toaster";

function App() {
  return (
    <>
    <Toaster/>
    {/* Wrap the whole app to enable SPA routing */}
      <BrowserRouter>
        <Routes>
          {/* Default landing page */}
          <Route index element={<Home />} />
          
          {/* Fallback route for invalid URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
