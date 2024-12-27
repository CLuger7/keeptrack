import React from "react";
import SoundCard from "../SoundCard/SoundCard";

interface CardListProps {
    
}
 
interface CardListState {
    
}
 
class CardList extends React.Component<CardListProps, CardListState> {
    // state = { :  }
    render() { 
        return ( 
            <div>
                {/* <Card dlcPictureFileName="CK3_Northern_Lords_Keyart.jpg" dlcName="Northern Lords" dlcPrice={12.99} dlcDescription="Ferocious raiders from a frigid north or a complex society filled with intrepid explorers, traders, and poets? Discover the true richness of the Norse world with Crusader Kings III: Northern Lords, the first in-depth flavor pack for the critically acclaimed Crusader Kings III." />
                <Card dlcPictureFileName="CK3_RoyalCourt_Keyart.jpg" dlcName="Royal Court" dlcPrice={29.99} dlcDescription="There is but one true center for power and prestige: a ruler's court. Step into your own fully immersive throne room with Crusader Kings: Royal Court, and get ready to impress vassals and courtiers with your splendor and treasure on display." />
                <Card dlcPictureFileName="CK3_FateOfIberia_Keyart.jpg" dlcName="Fate of Iberia" dlcPrice={12.99} dlcDescription="The sun-kissed lands of Iberia await your glorious rule with Crusader Kings III: Fate of Iberia flavor pack. Deeply rich in history, culture and people, the peninsula's medieval destiny is ready to be shaped by your majestic hand, be it clad in conciliatory velvet or as an iron fist." />
                <Card dlcPictureFileName="CK3_ToursAndTournaments_Keyart.jpg" dlcName="Tours & Tournaments" dlcPrice={29.99} dlcDescription="Life is a journey of chivalric adventure, so why don’t you embrace yours, ruler? Create your very own epic story with the major expansion, Crusader Kings III: Tours & Tournaments. Be awed by the sights and events that await you, from bold, mock combat in the jousting area to adventuring perilous wilds with your royal entourage." /> */}
                <SoundCard pictureFileName="blackTexture.jpg" name="Bsuffn Wiaad Sauu" soundFileName="BsuffnWiaadSauu" />
                <SoundCard pictureFileName="blackTexture.jpg" name="Do Hat Anner Hergspeit" soundFileName="DoHatAnnerHergspeit" />
                <SoundCard pictureFileName="blackTexture.jpg" name="Unser Zug fährt in 5 Minuten" soundFileName="ZugFährtIn5Min" />
                <SoundCard pictureFileName="blackTexture.jpg" name="Da Vorne Rechts!" soundFileName="DaVorneRechts" />
            </div> 
        );
    }
}
 
export default CardList;