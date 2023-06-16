import { useState } from 'react';

export const useInputHook = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  return {
    isFocused,
    handleFocus,
    handleBlur,
  }
}
