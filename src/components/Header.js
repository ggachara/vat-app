const Header = ({ onBtn, showAdd }) => {
    return (
        <header className="header">
            <h1>Progress Tracker</h1>
            <button className="btn" onClick={onBtn} > {showAdd ? 'Close' : 'Add'}</button> 
        </header>
    )
}

export default Header
