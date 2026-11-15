
function CaseStudies() {
    return (
        <section className="case-section" id="projects">

            <div className="case-heading">
                <span>FIELD IMPLEMENTATION</span>
                <h2>Audited Logistics Case Studies</h2>
                <p>
                    Real-world freight projects showing how smart logistics
                    technology improves transportation performance.
                </p>
            </div>

            <div className="case-list">

                {/* First Case Study */}
                <div className="case-card">

                    <div className="case-image">
                        <img src="/images/image 1.png" alt="Port and shipping containers" />
                    </div>

                    <div className="case-content">
                        <span className="case-tag">MARITIME OPERATIONS</span>

                        <h3>Pacific Semiconductors Rail Corridor</h3>

                        <p>
                            Improved cargo movement between port terminals
                            and railway networks through real-time shipment
                            monitoring and smart route planning.
                        </p>

                        <div className="case-results">
                            <div>
                                <small>Port Transit Reduction</small>
                                <strong>62% Dwell Time</strong>
                            </div>

                            <div>
                                <small>Shipment Visibility</small>
                                <strong>99.8% SLA Retention</strong>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Second Case Study */}
                <div className="case-card">

                    <div className="case-image">
                        <img src="/images/image 2.png" alt="Modern logistics warehouse" />
                    </div>

                    <div className="case-content">
                        <span className="case-tag">EUROPEAN LOGISTICS</span>

                        <h3>European Perishables Cold Hub</h3>

                        <p>
                            Advanced cargo tracking and temperature monitoring
                            helped improve the delivery of sensitive goods
                            across international transportation routes.
                        </p>

                        <div className="case-results">
                            <div>
                                <small>Product Loss Reduction</small>
                                <strong>0.00% Zero Loss</strong>
                            </div>

                            <div>
                                <small>Border Release Time</small>
                                <strong>Less Than 35 Min</strong>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default CaseStudies;
