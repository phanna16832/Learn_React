import { useState } from "react";

const Cal = () => {
  const [rate, setRate] = useState(6);
  const [rmbPrice, setRmbPrice] = useState("");
  const [price, setPrice] = useState("");
  const [reCheckPrice , setRecheckPrice] = useState("");

  const CalculateHandle = () => {
    if (rmbPrice) {
      setPrice((parseFloat(rmbPrice) / rate).toFixed(2));
      setRecheckPrice((parseFloat(rmbPrice) / rate).toFixed(3));
    }
  };

  return (
    <div>
        <label htmlFor="price" className=" text-primary fw-bold ">Enter rmb Price: </label>
      <input
        type="number"
        value={rmbPrice}
        onChange={(e) => setRmbPrice(e.target.value)}
        placeholder="Enter RMB price"
        className="border border-primary  text-primary text-center me-5"
      />

      <select
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
      >
        <option value="6.0">6.0</option>
        <option value="6.1">6.1</option>
        <option value="6.2">6.2</option>
        <option value="6.3">6.3</option>
        <option value="6.4">6.4</option>
        <option value="6.45">6.45</option>
        <option value="6.5">6.5</option>
      </select><br/><br/>

      <button className="btn btn-success" onClick={CalculateHandle}>
        Calculate
      </button><br/><br/>

      <p className="text-danger fw-bold">{price && `Converted Price: ${reCheckPrice}`}</p>
      <pre className="text-warning">
        {`
        សួស្តីបង សរុបហាងទំនិញទាំងអស់ $ ${price}

📌 ចំពោះការទិញទំនិញក្នុងហាងតែមួយ បើហាងបំបែកជាច្រើនកញ្ចប់ នឹងគិតថ្លៃដឹកតាមចំនួនកញ្ចប់។ កញ្ចប់ក្រោម 1 គីឡូ គិតជា1គីឡូ។ លើស 1 គីឡូ នឹងយកទំហំនិងទំងន់ប្រៀបធៀបគ្នា ដើម្បីគិតថ្លៃដឹក។


📌ចំពោះការបញ្ជាទិញនៅក្នុងតេលេក្រាមឆាត ហ្វេសបុកឆាតគឺំពុំមានការបង្រួមកញ្ចប់ទំនិញចូលគ្នាទេ


📌 ខាងប្អូនធានាតែចំពោះការបាត់បង់ឥវ៉ាន់ ប៉ុន្តែមិនអាចធានាលើទំនិញបែកបាក់ គុណភាព ឬទំនិញដែលខាងហាងដាក់ខុសពីការបញ្ជាទិញទេ។ ទោះជាយ៉ាងណា ខាងប្អូននឹងព្យាយាមទាក់ទងទាមទារដំណោះស្រាយពីហាងជំនួសឱ្យបង ប៉ុន្តែដំណោះស្រាយគឺអាស្រ័យលើគោលការណ៍របស់ខាងហាងបានផ្តល់ជូន។

សូមអរគុណសម្រាប់ការយល់ព្រម និងការគាំទ្ររបស់បង! 🙏
      `}
      </pre>
    </div>
  );
};

export default Cal;
