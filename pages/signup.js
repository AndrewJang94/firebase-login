import firebase from'./../firebase'

import Brand from '../components/branding'
import NavBar from '../components/navbar'
export default function Home() {
   console.log(firebase)
  return (
     <div>
       <NavBar/>
       <Brand title="Sign Up Page" tagline="sign up for the app"/>

     </div>
     
       
    
  )
}
