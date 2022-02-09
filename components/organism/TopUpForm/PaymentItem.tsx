interface PaymemntItemProps {
  bankID: string;
  type: string;
  bankName: string;
  onChange: () => void;
}

export default function PaymentItem(props: PaymemntItemProps) {
  const { bankID, type, bankName, onChange } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={bankID}
      onChange={onChange}
    >
      <input
        className="d-none"
        type="radio"
        id={bankID}
        name="paymentMethod"
        value={bankID}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <img src="/icon/check.svg" alt="" id="icon-check" />
        </div>
        <p className="text-lg color-palette-1 m-0">{bankName}</p>
      </div>
    </label>
  );
}
