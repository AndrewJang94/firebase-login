import {ButtonBase} from "./styles"


function Button ({children, bgcolor,color, ...props}){
 

   return (
   <ButtonBase bgcolor={bgcolor} color={color}>
       {children}
   </ButtonBase>
   )
}

export default Button