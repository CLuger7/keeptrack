import React from "react"
import "./Card.css"
// import ck3Image from "./CK3_FateOfIberia_mena_garden_new.jpg"

// type Props = {}

// const Card = (props: Props) => {
//     return (
//         <div className="card">
//             <img 
//                 src={ck3Image}
//                 alt=""
//             />
//             <div className="details">
//                 <h2>
//                     Fate of Iberia
//                 </h2>
//                 <p>
//                     €30
//                 </p>
//             </div>
//             <p className="info">
//                 Added the Iberian-Struggle to play out the war between christians and arabians in modern day spain and portugal
//             </p>
//         </div>
//     )
// }

// export default Card

interface CardProps {
    dlcPictureFileName: string;
    dlcName: string;
    dlcPrice: number;
    dlcDescription: string;

}
 
interface CardState {
    
}
 
class Card extends React.Component<CardProps, CardState> {
    // state = { :  }
    render() { 
        return ( 
        <div className="card">
            <img 
                src={require("E:/c2lug/source/repos/00_Schulungen/keeptrack/src/images/"+this.props.dlcPictureFileName)}
                alt=""
            />
            <div className="details">
                <h2>
                    {this.props.dlcName}
                </h2>
                <p>
                    €{this.props.dlcPrice}
                </p>
            </div>
            <p className="info">
                {this.props.dlcDescription}
            </p>
        </div> );
    }
}
 
export default Card;