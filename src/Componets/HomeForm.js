import React from "react";

function HomeForm() {
  return (
    <>
      <div className="newssettler-box">
        <div className="news py-5">
          <div className="newssettler-content container  text-white">
            <h3 className="text-center">NEWSLETTER SIGN UP</h3>
            <p className="text-center">
              Enjoy 15% off* your first order when you sign up to our newsletter
            </p>
            <div class="input-group">
              <input
                type="text"
                class="form-control position-relative input rounded-pill ps-4 bg-transparent"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn bg-dark text-white fw-bold px-4 position-absolute btn-input rounded-pill text-uppercase"
                type="button"
                id="button-addon2"
              >
                SubScribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeForm;
