    import React from 'react'
    import "./HeaderStyle.css"
  import FlashCards from './FlashCards';
    class Header extends React.Component {
        constructor() {
          super();
          this.state = {
            isShow: false
          }
          this.createText = this.createText.bind(this);
        }
      
      
        createText() {
          this.setState({ isShow: true }) 
          
        }
        render() {
          return (
            <div className="Header">
              <button onClick={this.createText}>Click</button>
              {this.state.isShow && <FlashCards/>}
            </div>
          );
        }
      }
    export default Header;
