import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
