import { StyledFooter, IconList,IconLink } from "./footer.styled"
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'; 


export const Footer =()=>{
        return(
            <StyledFooter>
                <IconList>
        <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </IconLink>
        <IconLink href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </IconLink>
        <IconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconLink>
        <IconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
      </IconList>
            </StyledFooter>
        )

}