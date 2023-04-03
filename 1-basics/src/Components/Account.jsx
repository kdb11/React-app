import { useEffect, useState } from "react";
import Web3 from "web3";

export function Account() {
    const [account, SetAccount] = useState();
    
    useEffect(() => {
        const getAccounts = async () => {
            const web3 = new Web3(Web3.givenProvide || "http://localhost:7545");
            const accounts = await web3.eth.getAccounts();

            console.log(accounts);
            SetAccount(accounts[0]);
        }


        if(account) return;
        getAccounts();
    });


    return <div>
        <p>Account: {account}</p>
    </div>
}