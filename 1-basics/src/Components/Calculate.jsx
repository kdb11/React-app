export function Calculate() {
    
    function AddNumbers() {
        let x = document.getElementById("x").value;
        let y = document.getElementById("y").value;
/*         let calc = document.getElementById("calc"); */
        let z = document.getElementById("result");
        z.innerHTML = JSON.parse(x) + JSON.parse(y);  
    }
    
    return <div>
        <form>
        <p>Add two numbers</p>
        <input id="x" type="number"/>
        <p>+</p>
        <input id="y" type="number"/>
        <br />
        <button id="calc" onClick={AddNumbers}>=</button>
        <p id="result"></p>
        </form>
    </div>
}