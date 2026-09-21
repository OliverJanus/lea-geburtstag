import { useState } from "react";

function usePasswordVerification(password: string): [boolean, (inputPassword: string) => boolean] {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  function verifyPassword(inputPassword: string): boolean {
    if (inputPassword.toLowerCase() === password.toLowerCase()) {
      setIsPasswordCorrect(true);
      return true;
    }
    return false;
  }

  return [isPasswordCorrect, verifyPassword];
}

export default usePasswordVerification;
