const Header = ({ onBtn, showAdd,title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <button className="btn" onClick={onBtn} > {showAdd ? 'Close' : 'Add'}</button> 
        </header>
    )
}

export default Header
