
import '../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <div className='portO'>
            <h1>Portfolio</h1>
            <ul className='card-container'>
                <li className='card1'>
                    <h4>Shop Spot project<a href='https://github.com/KenKuffler/ShopSpot.git'><img src="./dist/assets/assets1/github.png" width="35px"></img></a></h4>
                    
                    <a href="https://kenkuffler.github.io/ShopSpot/"><img src='./dist/assets/assets1/shopspot.png' width="450px" height="350px"></img> </a>
                    
                </li>
                <li className='card2'>
                    <h4>Typescript Vehcile Builder<a href="https://github.com/dhurteau26/Typescript-vehicles.git"><img src="./dist/assets/assets1/github.png" width="35px"></img> </a></h4>
                    <a href="https://github.com/dhurteau26/Typescript-vehicles.git"><img src="./dist/assets/assets1/giphyV.gif" width="450px" height="350px"></img></a>
                </li>
                <li className='card'>
                    <h4>README Generator<a href="git@github.com:dhurteau26/README-Generator.git"><img src="./dist/assets/assets1/github.png" width="35px"></img></a></h4>
                    <a href="https://github.com/dhurteau26/README-Generator.git"><img src="./dist/assets/assets1/giphy.gif" width="450px" height="350px"></img></a>
                </li>
                <li className='card'>
                    <h4>CSS CheatSheet<a href='https://github.com/dhurteau26/CSS-Snippet-Cheatsheet.git'><img src="./dist/assets/assets1/github.png" width="35px"></img></a> </h4>
                    <a href="https://dhurteau26.github.io/CSS-Cheatsheet/"><img src="./dist/assets/assets1/CSSstuff.png" width="450px" height="350px"></img></a>
                </li>
            
            </ul>
            
        </div>


    );
}