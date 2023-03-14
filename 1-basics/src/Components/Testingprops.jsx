export function Testingprops(props) {

 /*    const PropsTest = (props) => {
        return (
            <>
            <p>{props.M.titel}</p>
            <p>{props.M.year}</p>
            </>
        )
    }; */

    return <div>
        <p>{props.M.titel} - {props.M.year}</p>
    </div>
}