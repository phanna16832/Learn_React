import { useState } from "react";

const SysCal = () => {
  const rate = 6.1;
  const [rmbPrice, setRmbPrice] = useState("");
  const [sysPrice, setSysPrice] = useState("");
  const [converted, setConverted] = useState("0.00");
  const [correctedPrice, setCorrectedPrice] = useState("0.00");
  const [priceClass, setPriceClass] = useState("text-success"); // default color

  const convertPrice = () => {
    const convertPriceResult = (rmbPrice / rate).toFixed(2);
    setConverted(convertPriceResult);

    const correctPriceResult = (parseFloat(convertPriceResult) - parseFloat(sysPrice || 0)).toFixed(2);
    setCorrectedPrice(correctPriceResult);

    // Set class based on positive/negative
    if (parseFloat(correctPriceResult) >= 0) {
      setPriceClass("text-success");
    } else {
      setPriceClass("text-danger");
    }
  };

  return (
    <table className="table table-bordered">
      <thead className="text-primary">
        <tr>
          <th>Price in RMB</th>
          <th>System Price</th>
          <th>Default Rate</th>
          <th>Convert Price</th>
          <th>Correct Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="number"
              value={rmbPrice}
              onChange={(e) => setRmbPrice(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={sysPrice}
              onChange={(e) => setSysPrice(e.target.value)}
            />
          </td>
          <td>{rate}</td>
          <td>{converted}</td>
          <td className={priceClass}>{correctedPrice}</td>
        </tr>
        <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>
            <button onClick={convertPrice} className="btn btn-primary">Convert</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SysCal;
