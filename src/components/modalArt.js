
import React from 'react';


class ArtModal extends React.Component {

 closeModal = () => {
  this.props.closeModal()

 }
  render() {

    return (
      <div>
        <div  className="modalImg">
                 <span className="closeIMG" onClick={this.closeModal}>&times;</span>
                 <img className="modal-content-img" alt="Andrew Art Work" src={this.props.src} />
           
             </div>
      
      </div>
    );
  }
}

export default ArtModal;