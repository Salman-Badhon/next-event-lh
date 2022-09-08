const TicketForm = () => {
  return (
    <>
      <div>
        <h1 className="text-lh-blue font-bold text-lg">
          Please Fill up This Form
        </h1>
        <p className="text-lh-black font-medium text-base">
          Fields with * sign are required to buy a ticket
        </p>
      </div>
      <div>
        <label className="text-lh-black font-base text-base">Your Name *</label>
        <input
          placeholder="Full Name"
          name="customerName"
          className="w-full text-lh-black text-base"
        />
      </div>
    </>
  );
};

export default TicketForm;
