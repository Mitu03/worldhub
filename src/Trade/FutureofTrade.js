import Trade from "./Image/Trade.avif";
function FutureofTrade() {
  return (
    <div class="Trade--future">
      <h1 className="Trade--future-heading">Future of Global Trade</h1>
      <div className="Trade--future-1">
        <div className="Trade-1">
          <p>
            The future of global trade will be driven by technological
            advancements and a focus on sustainability. Digital trade,
            blockchain technology, and green initiatives will redefine how
            businesses operate globally.
          </p>
          <p>
            E-commerce is already transforming global markets, with cross-border
            online sales becoming increasingly common. Blockchain technology
            offers transparency in supply chains, reducing fraud and enhancing
            efficiency.
          </p>
          <ul className="Trade--future-1-ul">
            <li>
              <strong>Digital Trade Growth:</strong> Increased online
              cross-border sales and digital services.
            </li>
            <li>
              <strong>Blockchain in Trade:</strong> Enhances transparency,
              reduces fraud, and improves supply chain efficiency.
            </li>
            <li>
              <strong>Sustainability Focus:</strong> Green trade policies and
              carbon-neutral goals will shape future agreements.
            </li>
          </ul>
        </div>

        <div class="Trade--future-2">
          <img src={Trade} alt="Trade" height={250} width={250} />
        </div>
      </div>
    </div>
  );
}

export default FutureofTrade;
