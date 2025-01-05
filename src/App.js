import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
