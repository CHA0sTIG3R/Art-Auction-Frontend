import React from 'react'
import {Route, Routes} from "react-router-dom"
import LandingPage from './LandingPage'
import ArtistsPage from './ArtistsPage'
import LogInPage from './LogInPage'
import SignUpPage from './SignUpPage'
import ListArtworkPage from './ListArtworkPage'
import ArtworksPage from './ArtworksPage'

function Pages(props) {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="artworks/:item" element={<ArtistsPage/>}/>
            <Route path="login" element={<LogInPage handleLogin={props.handleLogin}/>}/>
            <Route path="signup" element={<SignUpPage/>}/>
            <Route path="list-artwork" element={<ListArtworkPage/>}/>
            <Route path="artworks" element={<ArtworksPage/>}/>
        </Routes>
    </div>
  )
}

export default Pages