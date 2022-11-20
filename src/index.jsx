import React from "react";
import ReactDOM  from "react-dom/client";
import ErrorPage from "./error-page";
import './index.css';
import Root, { loader as rootLoader,action as rootAction, action } from "./routes/root.jsx";
import EditContact, {action as editAction} from "./routes/edit";
import Contact,{loader as contactLoader} from "./routes/contact";
import { createBrowserRouter,RouterProvider,Route } from "react-router-dom";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Root />,
        errorElement:<ErrorPage />,
        loader:rootLoader,
        action:rootAction,
        children:[
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader:contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action:editAction,
            },
        ]
    
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

