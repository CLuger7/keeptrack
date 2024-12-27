import "./SoundCard.css"

interface SoundCardProps {
    pictureFileName: string,
    name: string,
    soundFileName: string
}
 
const SoundCard: React.FC<SoundCardProps> = ({pictureFileName, name, soundFileName}: SoundCardProps): JSX.Element => {

    const start = () => {
        let audio = new Audio(require(`./${soundFileName}.mp3`))
        audio.play()
    }
    
    return ( 
    <div className="soundCard">
        <img 
            src={require(`./${pictureFileName}`)}
            alt=""
            onClick={start}
        />
        <div className="details">
            <h2>
                {name}
            </h2>
            {/* <p>
                €120
            </p> */}
        </div>
        {/* <p className="info">
            Hallo Welt
        </p> */}
    </div> );
}   
 
export default SoundCard;