import { Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Colors from '@/pages/Colors';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Playground from '@/pages/Playground';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* core pages */}
        <Route index element={<Home />} />

        {/* testing pages */}
        <Route path="playground" element={<Playground />} />
        <Route path="colors" element={<Colors />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
