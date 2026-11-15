
function BookingForm() {
    return (
        <section className="booking-section" id="contact">

            <div className="booking-card">

                <div className="booking-heading">
                    <span>◈ FREIGHT AUTOMATION REQUEST</span>
                    <h2>Freight Quote & Booking Dispatch</h2>
                    <p>
                        Submit your shipment details to receive a customized
                        freight quotation and logistics support.
                    </p>
                </div>

                <form className="booking-form">

                    <div className="booking-grid">

                        <div className="booking-left">

                            <div className="booking-field">
                                <label>Logistics Manager Name</label>
                                <input type="text" placeholder="Enter your full name" />
                            </div>

                            <div className="booking-field">
                                <label>Corporate Email Address</label>
                                <input type="email" placeholder="name@company.com" />
                            </div>

                            <div className="booking-field">
                                <label>Freight Cargo Classification</label>
                                <select>
                                    <option>Select Freight Type</option>
                                    <option>General Cargo</option>
                                    <option>Container Cargo</option>
                                    <option>Perishable Goods</option>
                                    <option>Heavy Equipment</option>
                                </select>
                            </div>

                            <div className="booking-field">
                                <label>Delivery Priority</label>

                                <div className="booking-options">
                                    <label><input type="radio" name="priority" /> Standard</label>
                                    <label><input type="radio" name="priority" /> Express</label>
                                    <label><input type="radio" name="priority" /> Critical</label>
                                </div>
                            </div>

                        </div>

                        <div className="booking-right">

                            <div className="booking-field">
                                <label>Customs & Transportation Services</label>

                                <div className="booking-checks">
                                    <label><input type="checkbox" /> Digital Cargo Tracking</label>
                                    <label><input type="checkbox" /> Port Clearance</label>
                                    <label><input type="checkbox" /> Freight Insurance</label>
                                    <label><input type="checkbox" /> Customs Assistance</label>
                                </div>
                            </div>

                            <div className="booking-field">
                                <label>Cargo Origin & International Route</label>
                                <input type="text" placeholder="Enter origin location" />
                            </div>

                            <div className="booking-field">
                                <label>Destination / Delivery Address</label>
                                <input type="text" placeholder="Enter destination location" />
                            </div>

                            <div className="booking-field">
                                <label>Additional Requirements</label>
                                <textarea placeholder="Write your shipment details..."></textarea>
                            </div>

                        </div>

                    </div>

                    <div className="booking-actions">
                        <button type="reset" className="reset-btn">
                            Reset Form
                        </button>

                        <button type="button" className="booking-submit">
                            Request Freight Quote →
                        </button>
                    </div>

                </form>

            </div>

        </section>
    );
}

export default BookingForm;
