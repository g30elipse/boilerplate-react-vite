import React, { useContext } from 'react'
import { app } from '../../core/app';
import {withViewModel} from '../../core/hoc'
import { delay, localStore, LocalStoreKey } from '../../core/utils';
import HomeViewModel, { HomeContext } from './HomeViewModel'

const Home: React.FC = () => {
    const { text } = useContext(HomeContext);
   
    const handleClick = async () => {
        app.showLoader();
        await delay(2000);
        app.hideLoader();
        app.showToast('Success! 👍', 'success');
    }

    console.log("rendering Home");
    return (
        <div className='container'>
            <div className='block'>Home {text}</div>
            <button className='button is-primary is-light' onClick={handleClick}>do something</button>
        </div>
    )
}

export default withViewModel(Home, new HomeViewModel());