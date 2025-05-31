
import { useEffect, useState } from 'react';

const LoadingBar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return <div className="loading-bar" />;
};

export default LoadingBar;
