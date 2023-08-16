import React, { useState } from 'react'
import style from './sideBarContainer.module.scss'
import roundStatus from '../assets/admin_meds.svg'

import {ReactComponent as DottedLine} from '../assets/Vector 267.svg'
import dashboard from '../assets/dashboard.svg'
import quiz from '../assets/quiz.svg'
import note from '../assets/note_alt.svg'

const SideBarContainer = () => {
    const dashboardMenuTitles = ['Dashboard', 'Assessment', 'My Library']
    const [selectedTabs, setSelectedTabs] = useState(
        dashboardMenuTitles.map((title) => title === 'Assessment')
    );

    const handleTabSelect = (index:number) => {
        const newSelectedTabs = selectedTabs.map((selected, i) =>
            i === index ? true : false
        );
        setSelectedTabs(newSelectedTabs);
    };

  return (
    <div className={style['main-container']}>
        <div className={style['upper-section']}>
           {dashboardMenuTitles.map((item,i)=>{
            return(
                <DashboradBoxes 
                    key={i} 
                    title ={item} 
                    isSelected={selectedTabs[i]}
                    onSelect={() => handleTabSelect(i)}/>
                 )
            })}
            <div className={style['dotted-line']}><DottedLine/></div>
            <div className={style['admin']}>Admin</div>
            <div style={{paddingTop:'34px'}}>
            <DashboradBoxes title = {'Round Status'}  />
            </div>
          
        </div>
    </div>
  )
}

const DashboradBoxes = ({title, isSelected,  onSelect  }:{title:string, isSelected?:boolean,  onSelect?:any}) => {
    return (
        <div className={style['box-wrapper']}>
            <div className={isSelected ? style['square'] : style['no-square']} onClick={ onSelect}>
            {title!=='Round Status' &&  <div className={style['icon']}><img src={title === 'Dashboard' ? dashboard : title === 'My Library' ? quiz : note} alt=''/></div>}
            {title==='Round Status' &&  <div className={style['icon']}><img src={roundStatus} alt=''/></div>}
            <div className={style['title']}>{title}</div>
            </div>
          
        </div>
    )
}

export default SideBarContainer