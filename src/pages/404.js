import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return;
};

export default NotFoundPage;
