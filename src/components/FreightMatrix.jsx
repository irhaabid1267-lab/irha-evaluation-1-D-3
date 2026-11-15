
function FreightMatrix() {
    const routes = [
        {
            id: 1,
            route: "Shanghai Port → Long Beach",
            location: "Pacific Ocean · Trans-Pacific",
            mode: "Ocean Freight",
            transit: "18 Days, 6 Hours",
            capacity: "24,000 TEU / wk",
            status: "Customs Direct"
        },
        {
            id: 2,
            route: "Rotterdam Gateway → Singapore",
            location: "Europe · Asia Trade Route",
            mode: "Ocean Freight",
            transit: "21 Days, 12 Hours",
            capacity: "19,500 TEU / wk",
            status: "Clearance Verified"
        },
        {
            id: 3,
            route: "Busan New Port → Hamburg Harbor",
            location: "Asia · Europe Express",
            mode: "Rail Freight",
            transit: "16 Days, 8 Hours",
            capacity: "18,200 TEU / wk",
            status: "Express Direct"
        },
        {
            id: 4,
            route: "Jebel Ali → Antwerp Gateway",
            location: "Middle East · Europe",
            mode: "Ocean Freight",
            transit: "14 Days, 2 Hours",
            capacity: "10,000 TEU / wk",
            status: "Clearance Verified"
        }
    ];

    return (
        <section className="matrix-section" id="matrix">

            <div className="matrix-heading">
                <span>GLOBAL LOGISTICS NETWORK</span>
                <h2>Port Transit & Freight Matrix</h2>
                <p>
                    Track international freight routes, transportation
                    schedules and port capacity information.
                </p>
            </div>

            <div className="matrix-table-wrapper">
                <table className="matrix-table">

                    <thead>
                        <tr>
                            <th>Origin & Destination</th>
                            <th>Transport Mode</th>
                            <th>Transit SLA</th>
                            <th>TEU Capacity</th>
                            <th>Port Clearance Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {routes.map((item) => (
                            <tr key={item.id}>

                                <td>
                                    <strong>{item.route}</strong>
                                    <small>{item.location}</small>
                                </td>

                                <td>{item.mode}</td>

                                <td>{item.transit}</td>

                                <td>{item.capacity}</td>

                                <td>
                                    <span className="status-badge">
                                        {item.status}
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </section>
    );
}

export default FreightMatrix;
