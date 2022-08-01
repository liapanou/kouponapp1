export function Modal() {
  return (
<<<<<<< HEAD
    <div className="ml-auto z-50">
      <>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn modal-button btn-sm z-50">
          Rate us
=======
    <div>
      <>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn modal-button">
          open modal
>>>>>>> 870c15a (store page)
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
<<<<<<< HEAD
              You have been selected for a chance to get one year of
              subscription to use Wikipedia for free!
=======
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
>>>>>>> 870c15a (store page)
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
