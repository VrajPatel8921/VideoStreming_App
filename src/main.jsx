import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/video/:id',
        element: <VideoDetail />,
      },
      {
        path: '/channel/:id',
        element: <ChannelDetail />,
      },
      {
        path: '/search/:searchTerm',
        element: <SearchFeed />,
      },
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
