
import React from "react";

const services = [
    {
        code: "MOD-01 // OCEAN",
        title: "Intermodal Ocean Freight",
        description:
            "Full Container Load (FCL) and Less than Container Load (LCL) consolidation matrices. Integrates real-time demurrage mitigation algorithms and automated marine terminal customs clearance.",
        metric: "Throughput SLA: 99.4% Berth Sync",
        color: "purple"
    },
    {
        code: "MOD-02 // AIRWAYS",
        title: "Automated Air Cargo Charters",
        description:
            "Critical-path aeronaval dispatch for ultra-high-velocity freight. Features nose-load widebody charter integration, priority tarmac escort, and frictionless bonded warehouse ramp handoffs.",
        metric: "Velocity Metric: <28h Transcontinental",
        color: "purple"
    },
    {
        code: "MOD-03 // COLD CHAIN",
        title: "Cold-Chain Pharma Corridors",
        description:
            "GDP-compliant specialized refrigerated containers (Reefers) equipped with redundant cryogenic compressor units and continuous cryptographic temperature/humidity telemetry loggers.",
        metric: "Tolerance Band: ±0.2°C Cryo Stability",
        color: "cyan"
    },
    {
        code: "MOD-04 // DRAYAGE",
        title: "Inland Rail & Drayage Sync",
        description:
            "Direct port-to-rail intermodal transfers without off-dock warehousing dwell. Automated RFID gate passes and chassis positioning ensure uninterrupted final-mile freight dispatch.",
        metric: "Yard Dwell Efficiency: -74% Delay SLA",
        color: "purple"
    }
];

function FreightSystems() {
    return (
        <section className="freight-section">

            {/* SECTION HEADING */}
            <div className="freight-heading">

                <span className="section-tag">
                    INTERMODAL TOPOLOGIES // CORE ENGINES
                </span>

                <h2>Modular Freight Systems</h2>

                <p>
                    Multi-tiered intermodal dispatch architecture synchronizing
                    deep-water vessels, air transit corridors, cold-chain cargo
                    vaults, and inland freight rail networks.
                </p>

            </div>

            {/* SERVICE CARDS */}
            <div className="freight-grid">

                {services.map((service, index) => (

                    <div className="freight-card" key={index}>

                        <div className="card-top">

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <span className={`service-code ${service.color}`}>
                                {service.code}
                            </span>

                        </div>

                        <h3>{service.title}</h3>

                        <p className="service-description">
                            {service.description}
                        </p>

                        <div className="service-metric">

                            <span>{service.metric}</span>

                            <span className="metric-arrow">→</span>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default FreightSystems;
