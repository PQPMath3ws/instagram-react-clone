import { AddCircleOutline, HeartOutline, Home, PersonOutline, SearchOutline } from 'react-ionicons';

import "../assets/css/mobile_footer.css";

const MobileFooter = () => (
    <div id="fundo-mobile">
        <Home cssClasses="ion-icon" color="#262626"></Home>
        <SearchOutline cssClasses="ion-icon" color="#262626"></SearchOutline>
        <AddCircleOutline cssClasses="ion-icon" color="#262626"></AddCircleOutline>
        <HeartOutline cssClasses="ion-icon" color="#262626"></HeartOutline>
        <PersonOutline cssClasses="ion-icon" color="#262626"></PersonOutline>
    </div>
);

export default MobileFooter;