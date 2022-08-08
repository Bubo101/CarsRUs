function ManuList(props) {

    return (
        <> 
        <div className="shadow p-4 mt-4">
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Manufacturers</th>
        </tr>
        </thead>
        <tbody>
        {props.manufacturers ? props.manufacturers.map(manu => {
            return (
            <tr key={manu.id}>
                <td>{ manu.name }</td>
            </tr>
            );
        }):null}
        </tbody>
    </table>
    </div>
        </> 
    );
};

export default ManuList;
//ternary needed to get rid of undefined error due to delay loading props