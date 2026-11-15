
function Hero() {
    return (
        <section className="hero" id="overview">

            <div className="hero-left">

                <span className="hero-tag">
                    INTERMODAL LOGISTICS V8.4 // 5-HOUR EXAM
                </span>

                <h1>
                    Next-Gen Intermodal
                    <span> Freight & Port Telemetry</span>
                </h1>

                <p>
                    Deterministic maritime routing, zero-dwell container yard
                    scheduling, and automated intermodal transmission protocols
                    engineered for high-throughput global supply corridors.
                </p>

                <div className="hero-buttons">
                    <button>Calculate Freight Rate ▣</button>
                    <button>Track Shipment ⌕</button>
                </div>

                <div className="hero-stats">

                    <div>
                        <small>VOLUME INDEXED</small>
                        <h3>4.2M+ TEU</h3>
                        <p>Active in-transit cargo</p>
                    </div>

                    <div>
                        <small>DOCK PERFORMANCE</small>
                        <h3>&lt;14m Dwell</h3>
                        <p>Automated crane handoff</p>
                    </div>

                    <div>
                        <small>ROUTE MESH</small>
                        <h3>142 Corridors</h3>
                        <p>Direct ocean/rail sync</p>
                    </div>

                </div>
            </div>

            <div className="calculator">

                <h3>▣ Quick Rate Calculator</h3>
                <small>Calculate indicative spot freight tariff.</small>

                <label>Origin Port / Terminal</label>
                <input type="text" placeholder="e.g. Shanghai Port (CNSHA)" />

                <label>Destination Port / Hub</label>
                <input type="text" placeholder="e.g. Long Beach Gateway (USLGB)" />

                <label>Container Equipment Spec</label>
                <select>
                    <option>40ft High Cube ISO (76.2 CBM)</option>
                    <option>20ft Standard Container</option>
                    <option>40ft Standard Container</option>
                </select>

                <div className="estimate">
                    Est. Base Spot: <strong>$2,840.00 / TEU</strong>
                </div>

                <button className="rate-btn">
                    Get Instant Rate →
                </button>

            </div>

        </section>
    );
}

export default Hero;
