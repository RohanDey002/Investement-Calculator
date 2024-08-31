import logo from '../assets/investment.png';

export default function Header() {
    return(
    <header id='header'>
        <img src={logo} alt="Logo" />
        <h1>Investment-calculator</h1>
    </header>
    )
}