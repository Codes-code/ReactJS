import React from 'react'; 

function Header(props) {
//lock and lock open
    return (
        <div>
            <div style={{marginTop: '20px', marginLeft: '28px'}}>
                <h3 className="ui icon header">
                <i className={`circular ${props.lockprop} icon`}></i>
                FireAuth
                </h3>
            </div>

            
        </div>
    );
}

export default Header;      