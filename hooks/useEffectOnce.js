import { useEffect, useRef } from 'react';

const useEffectOnce = (effect) => {
  const effectFn = useRef(effect);
  const destroyFn = useRef();
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const renderAfterCalled = useRef(false);

  if (effectCalled.current) {
    rendered.current = true;
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    return () => {
      if (renderAfterCalled.current === rendered.current) {
        destroyFn.current && destroyFn.current();
      }
    };
  }, []);
};

export default useEffectOnce;
