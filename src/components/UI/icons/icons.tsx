import React from "react";

import { IconType } from 'react-icons';
import PropTypes from "prop-types";
interface IIcon{
    icon:IconType
}

let colorIcon = '#a8a8a8'

const IconItem:React.FC<IIcon> = ({icon:FaSun})=>{
    return <FaSun fill={'#a8a8a8'} size={14}/>;
}
IconItem.propTypes={
    icon: PropTypes.func.isRequired
}
export default IconItem;