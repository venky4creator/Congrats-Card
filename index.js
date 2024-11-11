const element = (
  <div className='congrats-card-bg-container'>
    <div>
      <h1 className='heading'>Congratulations</h1>
    </div>
    <div className='card-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
      <h1 className='heading'>Kiran V</h1>
      <p className='heading'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
