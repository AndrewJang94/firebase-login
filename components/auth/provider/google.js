import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import google from './../../../public/google.png'

 

function GoogleProvider ({children, ...props}){
    // auth with Google
     return(
         <ProviderButton>
          <Image 
          src={google} 
          alt="google logo"
          layout="fixed"
          width={20}
          height={20}
          />
           {children}
             </ProviderButton>
     )
}

export default GoogleProvider