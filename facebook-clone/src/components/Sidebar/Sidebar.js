import React from 'react';
import './Sidebar.css';
import Row from './Row/Row';
import { useStateValue } from '../../store/StateProvider';

// icons
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <Row title={user.displayName} src={user.photoURL} />
      <Row title="COVID-19 Information Center" Icon={LocalHospitalIcon} />
      <Row title="Pages" Icon={EmojiFlagsIcon} />
      <Row title="Friends" Icon={PeopleIcon} />
      <Row title="Messenger" Icon={ChatIcon} />
      <Row title="Marketplace" Icon={StorefrontIcon} />
      <Row title="Videos" Icon={VideoLibraryIcon} />
      <Row title="See More" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
