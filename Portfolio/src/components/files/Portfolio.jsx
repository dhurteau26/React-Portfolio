
import '../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <div className='portO'>
            <h1>Portfolio</h1>
            <ul>
                <li className='card'>
                    <a href="https://kenkuffler.github.io/ShopSpot/"><img src='./src/assets/shopspot.png' width="450px" height="350px"></img> </a>
                    
                </li>
                <li className='card'>
                    <a href="https://github.com/dhurteau26/Typescript-vehicles.git"><img src="./src/assets/giphyV.gif" width="450px" height="250px"></img></a>
                </li>
                <li className='card'>
                    <a href="https://github.com/dhurteau26/README-Generator.git"><img src="./src/assets/giphy.gif" width="450px"></img></a>
                </li>
                <li className='card'>
                    <a href="https://dhurteau26.github.io/CSS-Cheatsheet/"><img src="./src/assets/CSSstuff.png" width="450px"></img></a>
                </li>
            
            </ul>
            
        </div>


    );
}