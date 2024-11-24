import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import HeaderLogo from "../../assets/images/header-logo.svg"

const Header = ()=>{
    return(
        <div class="header">
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={HeaderLogo} alt="logo"/></a>
                    </li>
                    <li><a href="#">Collection</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Donate</a></li>
                </ul>
            </nav>
        </header>
    </div>
    )
}

export default Header