import { useEffect, useState } from 'react';
import useStore from '../../../../store';
import axios from '../../../../libs/axios';
import DataTableComponent from './components/DataTableComponent';


const Footers = () => {
    const store = useStore();
    const url = process.env.REACT_APP_API_URL + '/admin/footers'; // API server

    // preset
    useEffect(() => {
        // Code to run when the component is loaded (similar to window.onload)
        console.log("Page has loaded!");

        // Zustand presets
        store.emptyData() // clear all previous data
        store.setValue('refresh', false ) // refresh set to false
        store.setValue('footers', {}) // initiate as object

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    }, []); // Empty dependency array means this runs only once, when the component loads


    // to get items data ( footers )
    useEffect( () => 
        {
            // modified axios to prepend Bearer Token on header
            axios( 
                {
                    method: 'get', // method is GET
                    url: store.getValue('url') ? store.getValue('url') : url
                } 
            )
            .then( response => { // response block
                console.log(response)
                store.setValue('footers', response.data.footers ?  response.data.footers : null) // to be used in DataTableComponent
                store.setValue('refresh', false ) // reset the refresh state to false
            })
            .catch( error => { // error block
                console.warn(error) // output to console
            })
        },
        [
            store.getValue('url'), // listener when url changed by pagination click
            store.getValue('refresh') // listener when create / update / delete / search performed
        ] 

    ) // useEffect()

    return (
        <div>
            <DataTableComponent />
        </div>
    );
};

export default Footers;