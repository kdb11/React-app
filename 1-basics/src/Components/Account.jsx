import { useEffect, useState } from "react";
import Web3 from "web3";
import { PERSONS_LIST_ADRESS, PERSON_LIST_ABI } from "../config";

export function Account() {
    const [account, SetAccount] = useState();
    const [indexes, SetIndexes] = useState([]);
    
    useEffect(() => {
        const getAccounts = async () => {
            const web3 = new Web3(Web3.givenProvide || "http://localhost:7545");
            const accounts = await web3.eth.getAccounts();

            console.log(accounts);
            SetAccount(accounts[0]);

            const personContract = new web3.eth.Contract(PERSON_LIST_ABI, PERSONS_LIST_ADRESS);
            
            let indexes = await personContract.methods.getIndexList().call();
            
            console.log(indexes);

            const html = indexes.map((index, i) => {
                return <li key={i}>{index}</li>;
            });
            SetIndexes(html)
        };


        if(account) return;
        getAccounts();
    });


    return <div>
        <p>Account: {account}</p>
        <ul>
           {indexes} 
        </ul>
    </div>
}