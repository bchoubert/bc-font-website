import React, { FC, ReactElement, memo } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './../Footer/Footer';

const Layout = (): ReactElement => (
  <>
    <Outlet />
    <Footer />
  </>
);

export default memo(Layout);