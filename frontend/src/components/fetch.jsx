import { useEffect, useState } from "react";

export default function Users() {

   // useEffect(() => {
        //     fetch(`https://dummyjson.com/carts`)
        //         .then(response => {
        //             if (response.ok) {
        //                 console.log(response.status);
        //                 return response.json();
        //             }
        //         })    
        //         .then(data => console.log(data))
            
        // }, []);


        async function foo() {
            let res = await fetch(`https://dummyjson.com/carts`);
            if (res.ok) {
                console.log(res.status);
                let data = await res.json();
            }
            
        }
    
    
        useEffect(() => {
            foo();
        }, []);

};