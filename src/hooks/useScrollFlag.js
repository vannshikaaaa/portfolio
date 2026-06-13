import { useEffect, useState } from 'react';

const useScrollFlag = (threshold) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const handleScroll = () => setFlag(window.scrollY > threshold);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return flag;
};

export default useScrollFlag;
