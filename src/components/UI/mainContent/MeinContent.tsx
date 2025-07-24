import style from './meinContent.module.scss'

import PanelNavigation from '../panelNavigation/PanelNavigation';
import FilmsPoster from '../filmsPoster/FilmsPoster';


function MeinContent() {
    return ( <section className={style['main-content']}>
  
   <PanelNavigation/>
  <FilmsPoster/>
   
    </section> );
}

export default MeinContent;