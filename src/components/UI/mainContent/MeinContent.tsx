import style from './meinContent.module.scss'
import AppRouts from '../../../routs/AppRouts';
import PanelNavigation from '../panelNavigation/PanelNavigation';
import FilmsPoster from '../filmsPoster/FilmsPoster';
import App from '../../../App';

function MeinContent() {
    return ( <section className={style['main-content']}>
  
   <PanelNavigation/>
  <FilmsPoster/>
   
    </section> );
}

export default MeinContent;