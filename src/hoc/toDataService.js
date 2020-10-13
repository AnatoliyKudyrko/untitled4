import React from "react";
import {DatastoreServiceConsumer} from '../components/dataService-context';


const withDatastoreService=()=>(Wrapped)=>{
    return (props)=>{
        return (
        <DatastoreServiceConsumer>
            {
                (dataService)=>{
                    return (
                        <Wrapped dataService={dataService} {...props} />
                    )
                }
            }
        </DatastoreServiceConsumer>
        )

    }
}

export {withDatastoreService};