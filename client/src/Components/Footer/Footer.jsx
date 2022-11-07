import linkedInLogo from "../../images/LinkedIn-logo.png";
import gitHubLogo from "../../images/Github-logo.png";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.container}>
      <div>
        <p>
          &copy; 2022, This web application was made by Efrain Chacon for the
          Henry bootcamp individual project
        </p>
      </div>
      <div className={s.socialContainer}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/efra%C3%ADn-chac%C3%B3n-521485234/"
        >
          <img src={linkedInLogo} alt="LinkedIn logo" />
        </a>
        <a target="_blank" href="https://github.com/ChaconEfrain">
          <img src={gitHubLogo} alt="Github logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
