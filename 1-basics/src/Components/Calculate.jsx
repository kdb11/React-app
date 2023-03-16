export function Calculate() {
    
    function AddNumbers() {
        let x = document.getElementById("x").value;
        let y = document.getElementById("y").value;
/*         let calc = document.getElementById("calc"); */
        let z = JSON.parse(x) + JSON.parse(y);

        let result = document.getElementById("result");
        result.innerHTML = z;
    }
    
    return <div>
        <form>
        <p>Add two numbers</p>
        <input id="x" type="number"/>
        <p>+</p>
        <input id="y" type="number"/>
        <br />
        <button type="button" onClick={AddNumbers}>=</button>
        <p id="result"></p>
        </form>
    </div>
}