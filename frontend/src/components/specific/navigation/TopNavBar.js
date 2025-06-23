import './TopNavBar.css';

const TopNavBar = ({ onBackToLogin }) => {
    return (
        <div className='TopNavBar'>
            <p className='headings'>RR Company Logo</p>
            <p className='element'>Home</p>
            <p className='headings'>About Us</p>
            <p className='headings'>Contact Us</p>
            <p className='headings login-button' onClick={onBackToLogin}>Login</p>
        </div>
    )
}

export default TopNavBar;