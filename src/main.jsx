import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Feed from './components/Feed.jsx';
import VideoDetail from './components/VideoDetail.jsx';
import ChannelDetail from './components/ChannelDetail.jsx';
import SearchFeed from './components/SearchFeed.jsx';


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
        path: '/serch/:searchTerm',
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
