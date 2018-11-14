import React from "react";
const styles = {
  image: {
    width: "210px",
    height: "210px",
    margin:"14px",
    padding:"10px"
  }
}

const ImageCard = props => (
  <div className="card" value={props.id} onClick={()=>props.handleClick(props.id)}>
    <div className="img-container ">
      <img className= "rounded" alt={props.name} src={props.image} style={styles.image} />
    </div>  
   
  </div>
);

export default ImageCard;
