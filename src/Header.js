import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <>
        <div className="header">
            
            <IconButton>
            <PersonIcon fontsize="large" className="header_icon"/>
            </IconButton>
            <img className="header_logo" src="data:image/jpeg;base64,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"></img>
            
            <IconButton>
            <ForumIcon fontsize="large" className="header_icon"/>
            </IconButton>
          
        </div>
        <div>
            <h3 style={{textAlign:"center"}}>swipe right your favorite</h3>
            <h3 style={{textAlign:"center"}}>swipe left what you dislike </h3>
        </div>
        </>
    )
}

export default Header
