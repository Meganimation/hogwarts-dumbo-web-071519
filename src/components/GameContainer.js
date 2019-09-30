import React, { Component } from 'react'
import Game from './Game'



class GameContainer extends Component {

    
    constructor(props) {
        super(props)

        this.state = {

            name: [],
            location: '',
            currency: [],
            game: []

        }}


        componentDidMount() {
            fetch('http://localhost:3000/games/')
            .then(res => res.json())
            .then(gamesearchResults => {
              this.setState({ 
                game: gamesearchResults })
                 console.log(this.state.game)
            })
            }


render(){
  const gameItems = this.state.game.map( (game, index) => <Game key={index} game={game} />)


    // const gamesearchResults = this.props.gamesearchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)



  return (
 <div>
           <h2>This is the container</h2>
        <div >
                <div>    <div>
          {gameItems} 
        </div>
        )
      )
    }  
</div>
</div>
</div>
    )
}
}

export default GameContainer





