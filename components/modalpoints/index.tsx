export function ModalPoints() {
  return (
    <div>
      <>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn modal-button">
          Add Points
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Put the points!</h3>
            <br />
            <br />
            <select className="select w-full ">
              <option disabled selected>
                Add points
              </option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>

            <br />
            <br />
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn w-full">
                Ok
              </label>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
