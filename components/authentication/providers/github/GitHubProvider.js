import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "libs/firebase";
import { useAuth } from "libs/hooks/useAuth";
import { ProviderButton } from "ui/buttons";

import github from "./github.png";

function GitHubProvider({ children, data, ...props }) {

  const[isValidUser, setIsValidUser] = useState(null)
  const user = useAuth();
  const router =useRouter();
  const provider = new GithubAuthProvider();

  async function signIn(){

    setIsValidUser( await signInWithPopup(auth, provider))
  }

  function handleClick(){
      signIn()
  }

  if(isValidUser){
    router.push('/todo')
  }

  return (
    <ProviderButton onClick={handleClick} {...props}>
      <div>
        <Image
          src={github}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default GitHubProvider;
