import {BsLinkedin, BsGithub} from "react-icons/bs"

export const SocialMedia = () => {
  return (
    <div className="app__social">
    <a href="https://www.linkedin.com/in/luis-colina-466152155/" target="_blank" rel="noreferrer">
        <div>
            <BsLinkedin/>
        </div>
    </a>
    <a href="https://github.com/Silkiercomet" target="_blank" rel="noreferrer">
        <div>
            <BsGithub/>
        </div>
    </a>
    </div>
  )
}
