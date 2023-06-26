import React from "react";
import Image_Back from "../image/Bricolage.jpg";

const Text = () => {
    return (
    <div className="zone-text-contact" id="float">
        <img className="Image_Back" src={Image_Back} alt="Logo" />
        <div className="zone-form">
            <form>
                <div className="rowe">
                    <div className="left" id="float">
                        <label className="label">Name</label>
                        <br/>
                        <input
                            type="text"
                            placeholder="Your Name Here"
                            className="input-control"
                        />
                    </div>
                    <div className="right" id="float">
                        <label className="label">Email or Phone</label>
                        <br/>
                        <input
                            type="text"
                            placeholder="Your Email or Phone Here"
                            className="input-control"
                        />
                    </div>
                </div>
                    <div class="rowa">
                        <label className="label">Message</label>
                        <textarea
                            className="input-control"
                            placeholder="Your Message Here"
                            id="textarea"
                        >
                        </textarea>
                    </div>
                <div className="form-btn">
                    <button type="submit" class="bt">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
};
export default Text;
