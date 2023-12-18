//pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Films from "./pages/films/Films";
import NotFound from "./pages/404/NotFound";
import Byid from "./pages/byid/Byid";
//navbar
import Navbar from "./navbar/Navbar";
//router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="films" element={<Films />} />
      <Route path="films/:id" element={<Byid />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
