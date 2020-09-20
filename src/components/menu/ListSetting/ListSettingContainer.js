import React from "react";
import share from './../file/share.svg'
import shape from './../file/shape.svg'

let ListSetting=(props)=>{

    return(
        <div className={'menu_list_settings_container'}>

           <div className="menu_list_settings_panel_1">
               <div>Nomad List</div>
               <div><img src={share} alt="Share"/></div>
           </div>

            <div className="menu_list_settings_panel_2">
                <img src={shape} alt=""/>
                <div>All treads</div>
            </div>
        </div>

    )
}
export default ListSetting